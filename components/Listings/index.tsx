import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {
	TouchableOpacity,
	FlatList,
	StyleSheet,
} from 'react-native';
import Listing from './Listing';
import HorizontalRule from '../HorizontalRule';
import EmptyResult from '../EmptyResult';

const Listings = () => {
	const {data, error, status} = useSelector((state:RootState) => state.listings);
	const renderItem = ({ item }: any) => (<TouchableOpacity >
		<Listing {...item} />
	</TouchableOpacity>)

	return (<FlatList
		style={listingStyles.container}
		keyExtractor={item => item.id.toString()}
		maxToRenderPerBatch={20}
		initialNumToRender={20}
		removeClippedSubviews={true}
		data={data}
		extraData={data}
		renderItem={renderItem}
		ItemSeparatorComponent={HorizontalRule}
		ListEmptyComponent={EmptyResult}
	/>)
}

const listingStyles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
});

export default Listings;