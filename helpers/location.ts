import * as Location from 'expo-location';
import { GOOGLE_GEOCODE_API_KEY, GOOGLE_GEOCODE_API_URL } from '../constants';

export const requestLocationPermissionsAsync = async () => {
  return await Location.requestPermissionsAsync();
};

type LatLng = {
  latitude: number;
  longitude: number;
};

export const getReverseGeoCode = async ({ latitude, longitude }: LatLng) => {
  const url = `${GOOGLE_GEOCODE_API_URL}?latlng=${latitude},${longitude}&key=${GOOGLE_GEOCODE_API_KEY}`;
  return await fetch(url)
    .then((resp) => resp.json())
    .then((resp) => resp);
};

export const getCurrentPositionAsync = async () => {
  return await Location.getCurrentPositionAsync({
    accuracy: Location.LocationAccuracy.Balanced
  });
};

export const hasServiceEnabledAsync = async() => {
  return await Location.getPermissionsAsync();
}
