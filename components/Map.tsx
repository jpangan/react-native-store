import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import {Colors, Font} from '../constants/theme';

const ZOOM_FACTOR = 1;

export function getRegionForCoordinates(points) {
	// points should be an array of { latitude: X, longitude: Y }
	let minX, maxX, minY, maxY;

	// init first point
	((point) => {
		minX = point.latitude;
		maxX = point.latitude;
		minY = point.longitude;
		maxY = point.longitude;
	})(points[0]);

	// calculate rect
	points.map((point) => {
		minX = Math.min(minX, point.latitude);
		maxX = Math.max(maxX, point.latitude);
		minY = Math.min(minY, point.longitude);
		maxY = Math.max(maxY, point.longitude);
	});

	const midX = (minX + maxX) / 2;
	const midY = (minY + maxY) / 2;
	const deltaX = (maxX - minX);
	const deltaY = (maxY - minY);

	return {
		latitude: midX,
		longitude: midY,
		latitudeDelta: deltaX,
		longitudeDelta: deltaY
	};
}

const Map = ({
	latitude = null,
	longitude = null,
}) => {
	// const [coordinate, setCoordinates] = useState(getRegionForCoordinates([{ latitude, longitude }]));
	const [coordinate, setCoordinates] = useState({
		longitude,
		latitude,
		latitudeDelta: 3,
		longitudeDelta: 3,
	});
	const [wrapperDimensions, setWrapperDimensions] = useState({
		width: 0,
		height: 0,
	});
	const mapRef = useRef();

	if(!latitude && !longitude) {
		return null;
	}

	const zoomIn = () => {
		mapRef.current.animateToRegion({
			...coordinate,
			latitudeDelta: coordinate.latitudeDelta + ZOOM_FACTOR,
			longitudeDelta: coordinate.latitudeDelta + ZOOM_FACTOR,
		}, 300);
	}

	const zoomOut = () => {
		if((coordinate.latitudeDelta - ZOOM_FACTOR) < 0) {
			return;
		}
		mapRef.current.animateToRegion({
			...coordinate,
			latitudeDelta: coordinate.latitudeDelta - ZOOM_FACTOR,
			longitudeDelta: coordinate.latitudeDelta - ZOOM_FACTOR,
		}, 300);
	}

	return(
		<View style={styles.root}>
			<View style={styles.mapWrapper} onLayout={(event) => {
				const { width, height } = event.nativeEvent.layout;
				setWrapperDimensions({width, height});
			}}>
				<MapView
					ref={mapRef}
					style={styles.map}
					onRegionChange={ region => setCoordinates(region) }
					initialRegion={{
						...coordinate,
					}}
				>
					<Marker coordinate={coordinate} />
				</MapView>
			</View>
			<View style={styles.mapControls}>
				<TouchableOpacity onPress={zoomOut} disabled={coordinate.latitudeDelta <= 0}>
					<View style={styles.mapControl}>
						<MaterialIcons name="zoom-in" size={24} color={Colors.Grease} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={zoomIn}>
					<View style={styles.mapControl}>
						<MaterialIcons name="zoom-out" size={20} color={Colors.Grease} />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		height: 350,
	},
	mapWrapper: {
		height: 250,
	},
	map: {
		height: '100%',
		width: '100%',
	},
	mapControls: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingVertical: 8,
	},
	mapControl: {
		width: 32,
		height: 32,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 8,
		borderRadius: 6,
		borderWidth: 1,
		position: 'relative',
		borderColor: Colors.Charcoal,
		backgroundColor: Colors.Cloud
	},
})

export default Map;