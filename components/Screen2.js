import { useRef } from 'react';
import { Animated, Button, Image, StyleSheet, Text, View } from 'react-native';

function Screen2() {
	const fadeAnim = useRef(new Animated.Value(0)).current;

	const fly = () => {
		Animated.timing(fadeAnim, {
			toValue: 330,
			duration: 5000,
			useNativeDriver: false,
		}).start();
	};

	return (
		<View style={styles.container}>
			<Animated.View style={{ paddingLeft: fadeAnim }}>
				<Image source={require('../assets/airplane.png')} />
			</Animated.View>
			<View style={styles.buttonRow}>
				<Button title="Fly" onPress={fly}/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
	},
	buttonRow: {
		margin: 120,
		marginTop: 50,
	},
});

export default Screen2;
