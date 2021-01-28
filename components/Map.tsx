import React, {useState, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome, Entypo  } from '@expo/vector-icons';
import {Colors, Font} from '../constants/theme';
import { getReverseGeoCode, getCurrentPositionAsync } from '../helpers';

const LAT_DELTA = 0.007489843867194423;
const LNG_DELTA = 0.011348920290146225

type Region = {
	longitude: number,
	latitude: number,
	longitudeDelta: number,
	latitudeDelta: number,
}

const Map = ({
	latitude = null,
	longitude = null,
	currentAddress = null,
	onSaveAddressFn = null
}) => {
	const mapRef = useRef();
	const [isLocating, setIsLocating] = useState(false);
	const [formattedAddress, setFormattedAddress] = useState(currentAddress);
	const [region, setRegion] = useState({
		longitude,
		latitude,
		latitudeDelta: LAT_DELTA,
		longitudeDelta: LNG_DELTA,
	});

	const locateUser = async () => {
		setIsLocating(true);
		const {coords} = await getCurrentPositionAsync();
		if(coords) {
			const zoomedRegion:Region = {
				latitude: coords.latitude,
				longitude: coords.longitude,
				latitudeDelta: LAT_DELTA,
				longitudeDelta: LNG_DELTA
			}

			mapRef.current.animateToRegion(zoomedRegion, 100)
			setRegion(zoomedRegion);
		}
		setIsLocating(false);
	}

	const saveAddress = () => {
		console.log("saved address");

		if(typeof onSaveAddressFn === 'function') {
			onSaveAddressFn({
				latitude: region.latitude,
				longitude: region.longitude,
				formattedAddress: formattedAddress
			})
		}
	}

	const onRegionChangeComplete = async (region: Region) => {
		const geoCode = await getReverseGeoCode(region);
		setFormattedAddress(geoCode.results[0].formatted_address);
	}

	if (!latitude && !longitude) {
		return null;
	}

	return(
		<View style={styles.root}>
			<View style={styles.headerWrapper}>
				<Text style={styles.header}>Select Address</Text>
				<Text style={styles.subHeader}>The pinned location will serve as your current location</Text>
			</View>
			<View style={styles.mapWrapper}>
				<MapView
					showsMyLocationButton={false}
					minZoomLevel={3}
					style={styles.map}
					onRegionChange={ region => setRegion(region) }
					onRegionChangeComplete={onRegionChangeComplete}
					initialRegion={{...region}}
					ref={mapRef}
				>
					<Marker coordinate={region} />
				</MapView>
				<TouchableOpacity onPress={locateUser} style={styles.locateControl}>
					<FontAwesome name="location-arrow" size={20} color={Colors.Ink} />
				</TouchableOpacity>
			</View>

			<View style={styles.addressWrapper}>
				<Text style={styles.address}>{isLocating ? "currently locating..." : formattedAddress}</Text>
			</View>
			<View style={styles.mapControlWrapper}>
				<TouchableOpacity onPress={saveAddress}>
					<View style={styles.mapControl}>
						<Entypo name="location" size={20} color={Colors.Grease} />
						<Text style={styles.mapControlText}>Save</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		height: 500,
	},
	headerWrapper: {
		paddingVertical:16,
	},
	header: {
		textAlign: 'center',
		color: Colors.Grease,
		fontFamily: Font.MavenProMedium,
		fontSize: 18,
	},
	subHeader: {
		textAlign: 'center',
		color: Colors.Clay,
		fontFamily: Font.MavenProNormal,
		fontSize: 12,
	},
	mapWrapper: {
		height: 250,
	},
	map: {
		height: '100%',
		width: '100%',
		borderRadius:6,
		borderWidth:1,
		borderColor: Colors.Cloud,
	},
	locateIcon: {
		alignSelf:'center',
	},
	locateControl: {
		width:30,
		height:30,
		borderRadius: 18,
		padding:4,
		borderWidth: 1,
		borderColor: Colors.Charcoal,
		backgroundColor: Colors.Cloud,
		position: 'absolute',
		top: 8,
		left:8,
	},
	mapControlWrapper: {
		position:'absolute',
		bottom:0,
		width:'100%',
	},
	addressWrapper: {
		paddingVertical: 16,
		marginBottom:60
	},
	address: {
		color: Colors.Grease,
		fontFamily: Font.MavenProNormal,
		fontSize: 16,
	},
	mapControl: {
		flex: 1,
		minHeight: 42,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 8,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: Colors.Grease,
		backgroundColor: Colors.Cloud,
		flexDirection: 'row',
		padding: 8
	},
	mapControlText: {
		color: Colors.Grease,
		fontFamily: Font.MavenProMedium,
		fontSize: 18,
		marginHorizontal: 8,
	}
})

export default Map;