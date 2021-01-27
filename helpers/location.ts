import * as Location from "expo-location";

export const requestLocationPermissionsAsync = async () => {
	return await Location.requestPermissionsAsync();
}