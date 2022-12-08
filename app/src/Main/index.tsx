//Importação do React
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

import axios from "axios";
import { api } from "../utils/api";

//Importação do componente de texto
import { Text } from "../components/Text";

//Importação dos estilos
import {
	Container,
	CategoriesContainer,
	MenuContainer,
	Footer,
	FooterContainer,
	CenteredContainer,
} from "./styles";

//Importação dos componentes
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Categories } from "../components/Categories";
import { Button } from "../components/Button";
import { TableModal } from "../components/TableModal";
import { Cart } from "../components/Cart";
import { Empty } from "../components/Icons/Empty";

//Importação dos tipos
import { Category } from "../types/Category";
import { CartItem } from "../types/CartItem";
import { Product } from "../types/Product";

export function Main() {
	//Declaração dos Estados

	//Estado de Loading
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadingProducts, setIsLoadingProducts] = useState(false);

	//Estado de visibilidade do Modal
	const [isTableModalVisible, setIsTableModalVisible] = useState(false);

	//Estado da mesa selecionada
	const [selectedTable, setSelectedTable] = useState("");

	//Estado dos mocks
	const [categories, setCategories] = useState<Category[]>([]);
	const [products, setProducts] = useState<Product[]>([]);

	//Estado do carrinho
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	useEffect(() => {
		Promise.all([api.get("/categories"), api.get("/products")]).then(
			([categoriesResponse, productsResponse]) => {
				setCategories(categoriesResponse.data);
				setProducts(productsResponse.data);
				setIsLoading(false);
			}
		);
	}, []);

	async function handleSelectCategory(categoryId: String) {
		const route = !categoryId ? '/products' : `/categories/${categoryId}/products`

		setIsLoadingProducts(true)

		const { data } = await api.get(route);

		setProducts(data);
		setIsLoadingProducts(false)
	}

	function handleSaveTable(table: string) {
		setSelectedTable(table);
	}

	function handleResetOrder() {
		setSelectedTable("");
		setCartItems([]);
	}

	function handleAddToCart(product: Product) {
		if (!selectedTable) {
			setIsTableModalVisible(true);
		}

		setCartItems((prevState) => {
			const itemIndex = prevState.findIndex(
				(cartItem) => cartItem.product._id === product._id
			);

			if (itemIndex < 0) {
				return prevState.concat({
					quantity: 1,
					product,
				});
			}

			const newCartItems = [...prevState];

			newCartItems[itemIndex] = {
				...newCartItems[itemIndex],
				quantity: newCartItems[itemIndex].quantity + 1,
			};

			return newCartItems;
		});
	}

	function handleDecrementCartItem(product: Product) {
		setCartItems((prevState) => {
			const itemIndex = prevState.findIndex(
				(cartItem) => cartItem.product._id === product._id
			);

			const item = prevState[itemIndex];
			const newCartItems = [...prevState];

			if (item.quantity === 1) {
				newCartItems.splice(itemIndex, 1);

				return newCartItems;
			}

			newCartItems[itemIndex] = {
				...newCartItems[itemIndex],
				quantity: newCartItems[itemIndex].quantity - 1,
			};

			return newCartItems;
		});
	}

	return (
		<>
			<Container>
				<Header
					selectedTable={selectedTable}
					onCancelOrder={handleResetOrder}
				/>

				{isLoading ? (
					<CenteredContainer>
						<ActivityIndicator color="#d73035" size="large" />
					</CenteredContainer>
				) : (
					<>
						<CategoriesContainer>
							<Categories
								categories={categories}
								onSelectCategory={handleSelectCategory}
							/>
						</CategoriesContainer>

						{ isLoadingProducts ? (

					<CenteredContainer>
						<ActivityIndicator color="#d73035" size="large" />
					</CenteredContainer>

						) : (
							<>
							{products.length > 0 ? (
							<MenuContainer>
								<Menu onAddToCart={handleAddToCart} products={products} />
							</MenuContainer>
						) : (
							<CenteredContainer>
								<Empty/>

								<Text color="#666" style={{ marginTop: 24 }}>
									Nenhum produto foi encontrado.
								</Text>
							</CenteredContainer>
						)}
						</>
						)}
	
						
					</>
				)}
			</Container>

			<Footer>
				<FooterContainer>
					{!selectedTable && (
						<Button
							onPress={() => setIsTableModalVisible(true)}
							disabled={isLoading}
						>
							Novo Pedido
						</Button>
					)}

					{selectedTable && (
						<Cart
							cartItems={cartItems}
							onAdd={handleAddToCart}
							onDecrement={handleDecrementCartItem}
							onConfirmOrder={handleResetOrder}
							selectedTable={selectedTable}
						/>
					)}
				</FooterContainer>
			</Footer>

			<TableModal
				visible={isTableModalVisible}
				onClose={() => setIsTableModalVisible(false)}
				onSave={handleSaveTable}
			/>
		</>
	);
}
