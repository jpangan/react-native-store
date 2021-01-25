import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../constants/theme';

import ContentLoader, { Rect } from 'react-content-loader/native';
import HorizontalRule from '../HorizontalRule';

const Skeleton = props => (
	<ContentLoader
		speed={0.5}
		width={320}
		height={92}
		viewBox="0 0 300 92"
		backgroundColor={Colors.DirtyWhite}
		foregroundColor={Colors.Cloud}
		{...props}
		style={styles.skeleton}
	>
		<Rect x="8" y="0" rx="4" ry="4" width="92" height="92" />
		<Rect x="114" y="3" rx="0" ry="0" width="288" height="14" />
		<Rect x="114" y="25" rx="0" ry="0" width="288" height="14" />
		<Rect x="114" y="50" rx="0" ry="0" width="154" height="10" />
		<Rect x="114" y="69" rx="0" ry="0" width="154" height="14" />
	</ContentLoader>
);

const ListingLoader = ({ length = 3, lang = 'en', style = {} }) => {
	return (
		<View style={style}>
			<HorizontalRule/>
			{Array.from({ length: length }).map((item, index) => (
				<View key={index} style={styles.listingItem}>
					<Skeleton rtl={lang === 'ar'} />
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	skeleton: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	listingItem: {
		flex: 1,
		paddingVertical: 10,
		borderBottomWidth: 8,
		borderColor: Colors.DirtyWhite,
	},
});

export default ListingLoader;
