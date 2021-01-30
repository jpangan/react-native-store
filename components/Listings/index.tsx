import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store';
import {useNavigation} from '@react-navigation/native';
import {
	TouchableOpacity,
	FlatList,
	StyleSheet,
} from 'react-native';
import {RequestStatus} from '../../types';
import Listing from './Listing';
import HorizontalRule from '../HorizontalRule';
import EmptyResult from './EmptyResult';
import Loader from './Loader';
import {
	resetPage,
	getProductsRequest, } from '../../store/listings';
import {addToCart} from '../../store/cart';
import { useSiteDirection } from '../AppDirectionProvider'

const Listings = () => {
	const {data, error, status } = useSelector((state:RootState) => state.listings);
	const navigation = useNavigation()
	const dispatch = useDispatch();
	const [refreshing, setRefreshing] = useState(false);
	const isLoadingRef = useRef(false);
	const { directionStyles } = useSiteDirection();

	const viewDetail = item => {
		navigation.navigate('ProductDetailScreen', item);
	}

	const renderItem = ({ item }: any) => (<Listing {...item}
		onViewFn={() => viewDetail(item)}
		addToCartFn={() => dispatch(addToCart(item))} key={item.key}
		/> )

	const handleRefresh = () => {
		setRefreshing(true);
		getInitialData()
}

	const handleLoadMore = () => {
		if (isLoadingRef.current) {
			return;
		}
		dispatch(getProductsRequest());
	}

	const getInitialData = () => {
		if (isLoadingRef.current) {
			return;
		}
		dispatch(resetPage());
		dispatch(getProductsRequest());
	}

	const showEmpty = !data.length && (status !== RequestStatus.init && status !== RequestStatus.pending);

	useEffect(() => {
		getInitialData();
	}, []);

	useEffect(() => {
		if(status !== RequestStatus.pending) {
			setRefreshing(false);
			isLoadingRef.current = false;
		} else {
			isLoadingRef.current = true;
		}
	}, [status]);

	return (<FlatList
		style={[
			listingStyles.container,
			{ direction: directionStyles.direction}
		]}
		removeClippedSubviews={false}
		keyExtractor={(item, index) => index.toString()}
		maxToRenderPerBatch={20}
		initialNumToRender={20}
		data={data}
		extraData={data}
		renderItem={renderItem}
		ListFooterComponent={status === RequestStatus.pending ? (<Loader length={20} />) : null}
		ItemSeparatorComponent={HorizontalRule}
		ListEmptyComponent={showEmpty ? (<EmptyResult/>) : null}
		refreshing={refreshing}
		onRefresh={handleRefresh}
		onEndReached={handleLoadMore}
	/>)
}

const listingStyles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
});

export default Listings;