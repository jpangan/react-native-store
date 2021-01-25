import React, { ComponentProps } from 'react';
import { Product } from '../../types';
import {
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native';
import { Colors, Font} from '../../constants/theme';

class Listing extends React.PureComponent {
	render() {
		return (
			<View style={styles.root}>
				<View style={styles.imageWrapper}>
					{this.props.image ? <Image source={{ uri: this.props.image }} style={styles.image} /> : null}
				</View>
				<View style={styles.infoWrapper}>
					<Text ellipsizeMode="tail" style={styles.title} numberOfLines={2} >{this.props.title}</Text>
					<Text ellipsizeMode="tail" style={styles.category} numberOfLines={1}>{this.props.category}</Text>
					<Text ellipsizeMode="tail" style={styles.price}><Text style={styles.currency}>AED</Text> {this.props.price}</Text>
				</View>
			</View>
		)
	}
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
		fontFamily: Font.MavenProNormal,
		fontSize: 15,
		lineHeight: 18,
		color: Colors.Grease,
		marginBottom: 6,
		minHeight: 36,
	},
	category: {
		fontFamily: Font.MavenProNormal,
		fontSize: 12,
		color: Colors.Charcoal,
		marginBottom: 6,
	},
	price: {
		fontFamily: Font.MavenProBold,
		fontSize: 17,
		color: Colors.Charcoal,
	},
	currency: {
		fontSize: 12,
		paddingEnd: 8,
	}
});

export default Listing;