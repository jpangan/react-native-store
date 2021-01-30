import React from 'react'
import {StyleSheet, View, Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Button from '../Button';
import {Font, Colors} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';

const EmptyCart = () => {
	const navigation = useNavigation();

	return (<View style={styles.root}>
		<MaterialCommunityIcons name="cart-remove" size={128} color={Colors.Grease} style={styles.icon} />
		<Text style={styles.title}>Uh oh!</Text>
		<Text style={styles.subTitle}>There's nothing in your cart right now. Let's add some items</Text>
		<Button style={styles.button} title="Let's go shopping!" onPress={() => navigation.navigate('HomeScreen')}/>
	</View>)
}

const styles = StyleSheet.create({
	root:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height:'100%',
		backgroundColor: Colors.White,
	},
	icon: {
		marginBottom: 32,
	},
	title: {
		fontFamily: Font.MavenProBold,
		fontWeight: '400',
		fontSize: 20,
		color: Colors.Flame,
		marginBottom: 16,
	},
	subTitle: {
		fontFamily: Font.MavenProNormal,
		fontWeight:'400',
		fontSize: 16,
		color: Colors.Charcoal,
		width: 200,
		textAlign:'center',
		marginBottom: 16,
	},
	button: {

	}
})

export default EmptyCart;