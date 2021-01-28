import React from 'react'
import {StyleSheet, View, Text} from 'react-native';
import {Carton} from '../Icons';
import {Font, Colors} from '../../constants/theme';

const EmptyResult = () => {
	return (<View style={styles.root}>
		<Carton style={styles.carton} height={98} width={98} />
		<Text style={styles.text}>Uh oh, No items found</Text>
	</View>)
}

const styles = StyleSheet.create({
	root:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height:'100%',
		marginTop:'60%'
	},
	carton: {
		marginBottom: 16,
	},
	text: {
		fontFamily: Font.MavenProBold,
		fontWeight:'400',
		fontSize: 16,
		color: Colors.Charcoal
	}
})

export default EmptyResult;