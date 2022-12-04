import React from 'react';
import { useFonts} from 'expo-font'
import { Main } from './src/Main'
import {StatusBar } from 'expo-status-bar'
import { Text } from './src/components/Text';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR'


export default function App() {

	const [isFontLoaded] = useFonts({
		'GeneralSans-400':  require('./src/assets/fonts/GeneralSans-Regular.otf'),
		'GeneralSans-600':  require('./src/assets/fonts/GeneralSans-Semibold.otf'),
		'GeneralSans-700':  require('./src/assets/fonts/GeneralSans-Bold.otf'),
	})

	if (!isFontLoaded) {
		return null;
	}

	return (
		<>
		<StatusBar style='dark'/>
		<Main/>
		</>
	);
}
 