import { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';

function Screen4() {
	const FadeInView = (props) => {
		const fadeAnim = useRef(new Animated.Value(0)).current;

		useEffect(() => {
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: 3000,
				useNativeDriver: true,
			}).start();
		}, [fadeAnim]);

		return (
			<Animated.View // Special animatable View
				style={{
					...props.style,
					opacity: fadeAnim, // Bind opacity to animated value
				}}
			>
				{props.children}
			</Animated.View>
		);
	};
	const LeftToRightView = (props) => {
		const fadeAnim = useRef(new Animated.Value(0)).current;

		useEffect(() => {
			Animated.timing(fadeAnim, {
				toValue: 145,
				duration: 3000,
				useNativeDriver: false,
			}).start();
		}, [fadeAnim]);

		return (
			<Animated.View
				style={{
					...props.style,
					marginLeft: fadeAnim,
				}}
			>
				{props.children}
			</Animated.View>
		);
	};

	return (
		<View style={styles.container}>
			<FadeInView>
				<Image style={{ justifyContent: 'center', alignSelf: 'center' }} source={require('../assets/cat.jpg')} />
			</FadeInView>
			<LeftToRightView>
				<Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 30 }}>This is a Cat</Text>
			</LeftToRightView>
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

export default Screen4;
