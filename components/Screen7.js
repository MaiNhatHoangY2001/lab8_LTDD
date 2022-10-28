import { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';

function Screen7() {
	const LeftToRightView = (props) => {
		const left = useRef(new Animated.Value(0)).current;

		const spin1 = left.interpolate({
			inputRange: [-360, 360],
			outputRange: ['-360deg', '360deg'],
		});

		const bell = () => {
			Animated.sequence([
				Animated.timing(left, {
					toValue: -360,
					duration: 0,
					useNativeDriver: false,
					easing: Easing.linear,
				}),
				Animated.timing(left, {
					toValue: 360,
					duration: 3000,
					useNativeDriver: false,
					easing: Easing.linear,
				}),
			]).start(() => bell());
		};

		useEffect(() => {
			bell();
		}, [left]);

		return (
			<Animated.View
				style={{
					...props.style,
					transform: [{ rotate: spin1 }],
				}}
			>
				{props.children}
			</Animated.View>
		);
	};

	return (
		<View style={styles.container}>
			<LeftToRightView>
				<Image style={{ justifyContent: 'center', alignSelf: 'center' }} source={require('../assets/pentagram.png')} />
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

export default Screen7;
