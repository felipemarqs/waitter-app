import { FlatList } from "react-native";

import React, { useState } from "react";
import { categories } from "../../mocks/categories";
import { Text } from "../Text";
import { Category, Icon } from "./styles";

export function Categories() {

	const [selectedCategory, setSelectedCategory] = useState('');

	function handleSelectCategory(categoryId: string) {
		setSelectedCategory(categoryId)

	}
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={categories}
			contentContainerStyle={{paddingRight:24}}
			keyExtractor={(category) => category._id}
			renderItem={({ item: category }) => (
				<Category onPress={() => handleSelectCategory(category._id)}>
					<Icon>
						<Text>{category.icon}</Text>
					</Icon>

					<Text size={14} weight="600">
						{category.name}
					</Text>
				</Category>
			)}
		/>
	);
}
