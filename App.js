import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import Screen5 from './components/Screen5';
import Screen6 from './components/Screen6';
import Screen7 from './components/Screen7';

export default function App() {
	const [screen, setScreen] = useState(0);

	const dataScreen = [
		{
			id: 0,
			screen: 'Screen1',
		},
		{
			id: 1,
			screen: 'Screen2',
		},
		{
			id: 2,
			screen: 'Screen3',
		},
		{
			id: 3,
			screen: 'Screen4',
		},
		{
			id: 4,
			screen: 'Screen5',
		},
		{
			id: 5,
			screen: 'Screen6',
		},
		{
			id: 6,
			screen: 'Screen7',
		},
	];

	const getScreen = () => {
		switch (screen) {
			case 0:
				return <Screen1 />;
			case 1:
				return <Screen2 />;
			case 2:
				return <Screen3 />;
			case 3:
				return <Screen4 />;
			case 4:
				return <Screen5 />;
			case 5:
				return <Screen6 />;
			case 6:
				return <Screen7 />;
			default:
				return <Screen1 />;
		}
	};

	return (
		<>
			{getScreen()}
			<View style={styles.viewButton}>
				{dataScreen.map((item, index) => {
					return (
						<TouchableOpacity key={index} style={styles.screenButton} onPress={() => setScreen(item.id)}>
							<Text style={{ color: 'white', fontSize: 15 }}>{item.screen}</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	screenButton: {
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: 'red',
		padding: 15,
		margin: 2,
	},
	viewButton: {
		position: 'absolute',
		bottom: 0,
		flexWrap: 'wrap',
		flexDirection: 'row',
		margin: 5,
		justifyContent: 'space-around',
	},
});
