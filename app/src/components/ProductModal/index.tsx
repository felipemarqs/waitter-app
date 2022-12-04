import React from "react";
import { FlatList, Modal } from "react-native";
import { Product } from "../../types/Product";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import {
	Image,
	CloseButton,
	Header,
	ModalBody,
	IngredientsContainer,
	Ingredient,
} from "./styles";

interface ProductModalProps {
	visible: boolean;
	onClose: () => void;
	product: null | Product;
}

export function ProductModal({ visible, onClose, product }: ProductModalProps) {
	if (!product) {
		return null;
	}

	return (
		<Modal
			visible={visible}
			animationType="slide"
			presentationStyle="pageSheet"
			onRequestClose={onClose}
		>
			<Image
				source={{
					uri: `http://192.168.1.150:3001/uploads/${product.imagePath}`,
				}}
			>
				<CloseButton onPress={onClose}>
					<Close />
				</CloseButton>
			</Image>

			<ModalBody>
				<Header>
					<Text size={24} weight="600">
						{product.name}
					</Text>
					<Text color="#666" style={{ marginTop: 8 }}>
						{product.description}
					</Text>
				</Header>

				<IngredientsContainer>
					<Text weight="600" color="#666">
						Ingredients
					</Text>

					<FlatList
						data={product.ingredients}
						keyExtractor={ingredient => ingredient._id}
						showsVerticalScrollIndicator={false}
						style={{ marginTop:16}}
						renderItem={({ item : ingredient}) => (
							<Ingredient>
								<Text>{ingredient.icon}</Text>
								<Text size={14} color="#666" style={{marginLeft: 20}}>{ingredient.name}</Text>
							</Ingredient>
						)}
					/>
				</IngredientsContainer>
			</ModalBody>
		</Modal>
	);
}
