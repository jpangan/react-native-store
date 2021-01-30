import React,{useEffect} from 'react';
import {StyleSheet,
	SafeAreaView,
	Text,
	View,
	FlatList
} from 'react-native';

import {useSelector} from 'react-redux';
import { RootState } from '../../store';
import CartItem from './CartItem';
import HorizontalRule from '../HorizontalRule';
import {Colors, Font} from '../../constants/theme';
import Button from '../Button';
import CartEmpty  from './Empty';

const Cart = () => {
	const { items, totalPrice, count } = useSelector((state:RootState) => state.cart);


	useEffect(()=>{

	},[]);

	if (!items.length) {
		return (<CartEmpty/>)
	}

	const renderItem = ({item}) => {
		return (<CartItem product={item}/>)
	}

	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.checkoutWrapper}>
				<View style={styles.breakdown}>
					<Text style={styles.itemCount}>Subtotal ({count} item{count > 1 ? 's' : ''})</Text>
					<Text style={styles.totalPrice}>AED {totalPrice.toLocaleString()}</Text>
				</View>
				<Button title='Proceed to checkout'/>
			</View>
			<FlatList
				style={styles.cartItems}
				removeClippedSubviews={false}
				keyExtractor={(item, index) => index.toString()}
				maxToRenderPerBatch={20}
				initialNumToRender={20}
				data={items}
				renderItem={renderItem}
				ItemSeparatorComponent={HorizontalRule}
			/>

		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	root: {
		width: '100%',
		backgroundColor: Colors.White,
		height:'100%',
	},
	cartItems: {
		marginBottom: 100,
	},
	checkoutWrapper: {
		position:'absolute',
		bottom:0,
		height: 100,
		borderTopWidth: 1,
		width:'100%',
		justifyContent:'center',
		alignItems:'center',
		backgroundColor: Colors.White,
		zIndex:5,
		borderTopColor: Colors.Cloud,
	},
	breakdown: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 8
	},
	itemCount: {
		fontFamily: Font.MavenProMedium,
		fontSize: 12,
		color: Colors.Charcoal,
	},
	totalPrice: {
		fontFamily: Font.MavenProSemibold,
		fontSize: 18,
		color: Colors.Flame
	}
})

export default Cart;