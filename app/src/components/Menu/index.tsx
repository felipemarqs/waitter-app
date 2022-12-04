import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { products } from "../../mocks/products";
import { Product } from "../../types/Product";
import { Text } from "../Text";
import { ProductContainer, ProductImage, ProductDetails, Separator, AddToChartButton } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";

export function Menu() {

	const [isModalVisible , setIsModalVisible] = useState(false)
	const [ selectedProduct, SetSelectedProduct] = useState<null | Product>(null);

	function handleOpenModal(product: Product) {
		setIsModalVisible(true);
		SetSelectedProduct(product)
		
	}

	return (
		<>
		<ProductModal 
		visible={isModalVisible}
		onClose={() => setIsModalVisible(false)}
		product = { selectedProduct }
		/>


		<FlatList
			data={products}
			style={{ marginTop: 32 }}
			contentContainerStyle={{ paddingHorizontal: 24 }}
			keyExtractor={(product) => product._id}
			ItemSeparatorComponent={Separator}
			renderItem={({ item: product }) => (
				<ProductContainer onPress={() => handleOpenModal(product)}>
					<ProductImage
						source={{
							uri: `http://192.168.1.150:3001/uploads/${product.imagePath}`,
						}}
					/>

					<ProductDetails>
						<Text weight="600">{product.name}</Text>
						<Text size={14} color="#666" style={{ marginVertical: 8 }}>
							{product.description}
						</Text>
						<Text size={14} weight="600">
							{formatCurrency(product.price)}
						</Text>
					</ProductDetails>

					<AddToChartButton>
						<PlusCircle />
					</AddToChartButton>
				</ProductContainer>
			)}
		/>
		</>
	);
}
