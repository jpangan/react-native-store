import React, { ComponentProps } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors, Font} from '../../constants/theme';
import AddToCartButton from '../AddToCartButton';


class Listing extends React.PureComponent {
	render() {
		return (
			<View style={styles.root}>
				<View style={styles.imageWrapper}>
					<TouchableOpacity onPress={this.props.onViewFn}>
						{this.props.image ? <Image source={{ uri: this.props.image }} style={styles.image} /> : null}
					</TouchableOpacity>
				</View>
				<View style={styles.infoWrapper}>
					<TouchableOpacity onPress={this.props.onViewFn}>
						<Text ellipsizeMode="tail" style={styles.title} numberOfLines={2} >{this.props.title}</Text>
					</TouchableOpacity>
					<View style={styles.addToCartWrapper}>
						<View>
							<Text ellipsizeMode="tail" style={styles.category} numberOfLines={1}>{this.props.category}</Text>
							<Text ellipsizeMode="tail" style={styles.price}><Text style={styles.currency}>AED</Text> {this.props.price}</Text>
						</View>
						<AddToCartButton onPress={this.props.addToCartFn}/>
					</View>
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
		justifyContent:'flex-start',
		textAlign:'left',
		fontFamily: Font.MavenProNormal,
		fontSize: 15,
		lineHeight: 18,
		color: Colors.Grease,
		marginBottom: 6,
		minHeight: 36,
	},
	category: {
		justifyContent: 'flex-start',
		textAlign: 'left',
		fontFamily: Font.MavenProNormal,
		fontSize: 12,
		color: Colors.Charcoal,
		marginBottom: 6,
	},
	price: {
		justifyContent: 'flex-start',
		textAlign: 'left',
		fontFamily: Font.MavenProBold,
		fontSize: 17,
		color: Colors.Charcoal,
	},
	currency: {
		fontSize: 12,
		paddingEnd: 8,
	},
	addToCartWrapper: {
		width: '100%',
		flexDirection:'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	}
});

export default Listing;