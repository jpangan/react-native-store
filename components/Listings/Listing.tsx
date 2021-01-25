import React, { ComponentProps } from 'react';
import { Product } from '../../types';
import {
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native';
import {colors, font} from '../../constants/theme';

const Listing = (props: React.FC<Product>) => {
	const {
		category,
		description,
		id,
		image,
		price,
		title
	} = props;

	if(image){
		// Image.prefetch({ uri: image });
	}


	return (
		<View style={styles.root}>
			<View style={styles.imageWrapper}>
				{image ? <Image source={{ uri: image, cache:'force-cache' }} style={styles.image} /> : null}
			</View>
			<View style={styles.infoWrapper}>
				<Text ellipsizeMode="tail" style={styles.title} numberOfLines={2} >{title}</Text>
				<Text ellipsizeMode="tail" style={styles.category} numberOfLines={1}>{category}</Text>
				<Text ellipsizeMode="tail" style={styles.price}><Text style={styles.currency}>AED</Text> {price}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		display: 'flex',
		flexDirection: 'row',
		padding: 16,
	},
	imageWrapper: {
		flex: 1,
		width: 92,
		height: 92,
		maxWidth: 92,
		minWidth: 92,
		borderRadius: 4,
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
		marginEnd: 16,
	},
	image: {
		height: 92,
		width: 92,
		borderRadius: 4,
	},
	infoWrapper: {
		flex: 0,
		flexShrink: 1,
	},
	title: {
		fontFamily: font.MavenProNormal,
		fontSize: 15,
		lineHeight: 18,
		color: colors.Grease,
		marginBottom: 6,
		minHeight: 36,
	},
	category: {
		fontFamily: font.MavenProNormal,
		fontSize: 12,
		color: colors.Charcoal,
		marginBottom: 6,
	},
	price: {
		fontFamily: font.MavenProBold,
		fontSize: 17,
		color: colors.Charcoal,
	},
	currency: {
		fontSize: 12,
		paddingEnd: 8,
	}
});

export default Listing;