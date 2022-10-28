import { useRef } from 'react';
import { Animated, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Screen3() {
	const fadeAnim = useRef(new Animated.Value(0)).current;

	const flyStart = () => {
		Animated.timing(fadeAnim, {
			toValue: 330,
			duration: 5000,
			useNativeDriver: false,
		}).start();
	};

	const flyStop = () => {
		Animated.timing(fadeAnim).stop();
	};

	const flyReset = () => {
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 0,
			useNativeDriver: false,
		}).start();
	};

	return (
		<View style={styles.container}>
			<Animated.View style={{ paddingLeft: fadeAnim }}>
				<Image source={require('../assets/airplane.png')} />
			</Animated.View>
			<View style={styles.buttonRow}>
				<TouchableOpacity style={[styles.screenButton, { backgroundColor: '#3B71CA' }]} onPress={flyStart}>
					<Text style={{ color: 'white', fontSize: 15 }}>Start</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.screenButton, { backgroundColor: '#DC4C64' }]} onPress={flyStop}>
					<Text style={{ color: 'white', fontSize: 15 }}>Stop</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.screenButton, { backgroundColor: '#54B4D3' }]} onPress={flyReset}>
					<Text style={{ color: 'white', fontSize: 15 }}>Reset</Text>
				</TouchableOpacity>
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
		marginTop: 50,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	screenButton: {
		alignItems: 'center',
		alignSelf: 'center',
		padding: 10,
		paddingHorizontal: 40,
		margin: 2,
	},
});

export default Screen3;
