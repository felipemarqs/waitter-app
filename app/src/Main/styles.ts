import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
	margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
	flex: 1;
	background: #fafafa;
`;

export const CategoriesContainer = styled.View`
	margin-top: 34px;
	height: 73px;
	
`;

export const MenuContainer = styled.View`
	
	flex: 1;
`;

export const Footer = styled.View`
	min-height: 110px;
	background: white;
	
`;

export const FooterContainer = styled.SafeAreaView`
	
`;
