import { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';

function Screen5() {
	const Square3 = (props) => {
		const fadeAnim2 = useRef(new Animated.Value(0)).current;
		const gotoAnim = useRef(new Animated.Value(0)).current;

		useEffect(() => {
			Animated.sequence([
				Animated.timing(fadeAnim2, {
					toValue: 1,
					duration: 3000,
					useNativeDriver: false,
				}),
				Animated.timing(gotoAnim, {
					toValue: 250,
					duration: 3000,
					useNativeDriver: false,
				}),
			]).start();
		}, [fadeAnim2]);

		return (
			<Animated.View // Special animatable View
				style={{
					...props.style,
					marginLeft: gotoAnim,
					opacity: fadeAnim2, // Bind opacity to animated value
				}}
			>
				{props.children}
			</Animated.View>
		);
	};
	const Square2 = (props) => {
		const fadeAnim2 = useRef(new Animated.Value(0)).current;
		const gotoAnim = useRef(new Animated.Value(20)).current;

		useEffect(() => {
			Animated.sequence([
				Animated.timing(fadeAnim2, {
					toValue: 1,
					duration: 3000,
					useNativeDriver: false,
				}),
				Animated.timing(gotoAnim, {
					toValue: 150,
					duration: 3000,
					useNativeDriver: false,
				}),
			]).start();
		}, [fadeAnim2]);

		return (
			<Animated.View // Special animatable View
				style={{
					...props.style,
					marginBottom: gotoAnim,
					opacity: fadeAnim2, // Bind opacity to animated value
				}}
			>
				{props.children}
			</Animated.View>
		);
	};
	const Square1 = (props) => {
		const fadeAnim1 = useRef(new Animated.Value(0)).current;

		useEffect(() => {
			Animated.timing(fadeAnim1, {
				toValue: 145,
				duration: 3000,
				useNativeDriver: false,
			}).start();
		}, [fadeAnim1]);

		return (
			<Animated.View
				style={{
					...props.style,
					marginLeft: fadeAnim1,
				}}
			>
				{props.children}
			</Animated.View>
		);
	};

	return (
		<View style={styles.container}>
			<Square2>
				<Image style={{ alignSelf: 'center' }} source={require('../assets/square2.png')} />
			</Square2>
			<Square3>
				<Image style={{ alignSelf: 'center' }} source={require('../assets/square3.png')} />
			</Square3>
			<Square1>
				<Image style={{ justifyContent: 'center' }} source={require('../assets/square1.png')} />
			</Square1>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
	},
});

export default Screen5;
