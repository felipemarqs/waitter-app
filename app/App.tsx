import { useFonts} from 'expo-font'
import { StatusBar } from "expo-status-bar";
import React from 'react';
import { StyleSheet,  View} from "react-native";
import { Text } from './src/components/Text';

export default function App() {

	const [isFontLoaded] = useFonts({
		'General-Sans400':  require('./src/assets/fonts/GeneralSans-Regular.otf'),
		'General-Sans600':  require('./src/assets/fonts/GeneralSans-Semibold.otf'),
		'General-Sans700':  require('./src/assets/fonts/GeneralSans-Bold.otf'),
	})

	if (!isFontLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<Text>Open up App.tsx to start working on your app!</Text>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "red",
		alignItems: "center",
		justifyContent: "center",
	},
});
