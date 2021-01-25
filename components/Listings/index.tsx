import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store';
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

const Listings = () => {
	const {data, error, status, page} = useSelector((state:RootState) => state.listings);
	const dispatch = useDispatch();
	const [refreshing, setRefreshing] = useState(false);

	const renderItem = ({ item }: any) => (<TouchableOpacity key={item.key} >
		<Listing {...item} />
	</TouchableOpacity>)

	const handleRefresh = () => {
		setRefreshing(true);
		getInitialData()
}

	const handleLoadMore = () => {
		if(status === RequestStatus.pending) {
			return;
		}
		dispatch(getProductsRequest());
	}

	const getInitialData = () => {
		dispatch(resetPage());
		dispatch(getProductsRequest());
	}

	useEffect(() => {
		getInitialData();
	}, []);

	useEffect(() => {
		if(status !== RequestStatus.pending) {
			setRefreshing(false);
		}
	}, [status]);

	const showEmpty = !data.length && (status !== RequestStatus.init && status !== RequestStatus.pending);

	return (<FlatList
		style={listingStyles.container}
		keyExtractor={(item, index) => `${item.id}-${index}`}
		maxToRenderPerBatch={20}
		initialNumToRender={20}
		removeClippedSubviews={true}
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