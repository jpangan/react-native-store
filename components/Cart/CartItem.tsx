import React, { ComponentProps } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';
import { Colors, Font} from '../../constants/theme';
import Button from '../Button';
import { EvilIcons } from '@expo/vector-icons';


const CartItem = ({ product, rest }) => {
		return (
			<View style={styles.root}>
				<View style={styles.imageWrapper}>
					{product.image ? <Image source={{ uri: product.image }} style={styles.image} /> : null}
				</View>
				<View style={styles.infoWrapper}>
					<Text ellipsizeMode="tail" style={styles.title} numberOfLines={2} >{product.title}</Text>
					<View style={styles.addToCartWrapper}>
						<View>
							<Text ellipsizeMode="tail" style={styles.category} numberOfLines={1}>{product.category}</Text>
							<Text ellipsizeMode="tail" style={styles.price}><Text style={styles.currency}>AED</Text> {product.price}</Text>
						</View>
					</View>

					<View>
					<View>
					</View >

					<View style={styles.itemControlWrapper}>
						<View style={styles.itemControls}>
								<TouchableOpacity>
								<EvilIcons name="plus" size={24} colors={Colors.Grease} />
								</TouchableOpacity>
								<Text style={styles.quantity}>{product.quantity}</Text>
								<TouchableOpacity>
									<EvilIcons name="minus" size={24} colors={Colors.Grease} />
								</TouchableOpacity>
						</View>

						<Button title='Delete' />
					</View>
				</View>
				</View>


			</View>
		)
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: '#fff',
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
		marginBottom: 16,
	},
	itemControlWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%'
	},
	itemControls: {
		flexDirection: 'row',
		alignItems:'center',
	},
	btnText: {
		fontFamily: Font.MavenProNormal,
		fontSize: 12,
		color: Colors.White,
	},
	quantity: {
		fontFamily: Font.MavenProBold,
		fontSize: 16,
		color: Colors.Grease,
		minWidth: 30,
		textAlign:'center'
	}

});

export default CartItem;