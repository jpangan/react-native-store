import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {StyleSheet, SafeAreaView, View, ScrollView, Text, Image} from 'react-native'
import {Colors, Font} from '../constants/theme';
import {useRoute} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ProductDetailScreen = () => {
	//TODO: Make a way to fetch from API (Low Priority).
	const route = useRoute();
	console.log(route.params.image);
	return(
		<SafeAreaView style={styles.root}>
				<ScrollView>
					<View style={styles.imageWrapper}>
						{route.params.image ? <Image style={styles.image} source={{ uri: route.params.image }} />: null}
					</View>
				<View style={styles.detailsWrapper}>
					<Text style={styles.title}>{route.params.title}</Text>
					<Text style={styles.category}>in {route.params.category}</Text>
					<Text style={styles.price}><Text style={styles.currency}>AED</Text> {route.params.price}</Text>
					<Text style={styles.description}>{route.params.description}</Text>
				</View>
				</ScrollView>
				<View style={styles.ctaWrapper}>
					<TouchableOpacity style={styles.cta}>
					<MaterialCommunityIcons name="cart-plus" size={24} color={Colors.Grease} />
						<Text style={styles.ctaText}>Add to Cart</Text>
					</TouchableOpacity>
				</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "#fff"
	},
	imageWrapper: {
		width: '100%',
		height: 400,
		flex: 1,
		padding: 0,
	},
	image: {
		height: '100%',
		resizeMode: 'cover'
	},
	detailsWrapper: {
		padding: 16,
	},
	ctaWrapper:{
		padding: 8,
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	cta: {
		borderRadius: 6,
		backgroundColor: Colors.White,
		borderColor: Colors.Grease,
		paddingVertical: 16,
		borderWidth: 2,
		flexDirection: 'row',
		justifyContent:'center',
		alignItems:'center',
	},
	ctaText: {
		fontFamily: Font.MavenProMedium,
		textAlign:'center',
		fontSize: 20,
		color: Colors.Grease,
		marginHorizontal: 8,
	},
	title: {
		fontFamily: Font.MavenProMedium,
		fontSize:18,
		color: Colors.Grease,
		marginBottom: 12,
	},
	category: {
		fontFamily: Font.MavenProNormal,
		fontSize: 12,
		color: Colors.Clay,
		marginBottom: 12,
	},
	description: {
		fontFamily: Font.MavenProNormal,
		fontSize: 14,
		color: Colors.Grease,
		marginBottom: 100,
	},
	price:{
		fontFamily: Font.MavenProBold,
		fontSize: 18,
		color: Colors.Flame,
		marginBottom: 12,
	},
	currency: {
		fontFamily: Font.MavenProBold,
		fontSize: 12,
		color: Colors.Flame,
	},
});

export default ProductDetailScreen