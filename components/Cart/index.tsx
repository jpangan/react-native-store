import React,{useEffect} from 'react';
import {StyleSheet,
	SafeAreaView,
	Text,
	View,
	ScrollView,
	FlatList
} from 'react-native';

import {useSelector} from 'react-redux';
import { RootState } from '../../store';
import CartItem from './CartItem';
import HorizontalRule from '../HorizontalRule';


const Cart = () => {
	const { items, totalPrice, count } = useSelector((state:RootState) => state.cart);


	useEffect(()=>{

	},[]);

	const renderItem = ({item}) => {
		return (<CartItem product={item}/>)
	}

	return (
		<SafeAreaView style={styles.root}>
			<ScrollView stickyHeaderIndices={[0]}>
				<View>
					<Text>Subtotal for {count} items: AED {totalPrice}</Text>
				</View>
			</ScrollView>
			<FlatList
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
	}
})

export default Cart;