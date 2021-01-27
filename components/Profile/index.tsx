import React,{useEffect, useState, useRef} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, RefreshControl, ScrollView, StyleSheet, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileRequest } from '../../store/user';
import {RootState} from '../../store';
import {RequestStatus} from '../../types';
import {Colors, Font} from '../../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomSheet from '../BottomSheet';
import Map from '../Map';

import {
	allowsNotificationsAsync,
	requestNotificationsPermissionsAsync,
	disableNotificationsAsync,
	requestLocationPermissionsAsync,
} from '../../helpers';

const Profile = () => {
	const dispatch = useDispatch();
	const { data, status } = useSelector((state: RootState) => state.user);
	const { name, username, address, email, phone } = data;
	const bottomSheetRef = useRef();
	const [refreshing, isRefreshing] = useState(false);
	const [alertsEnabled, setAlertsEnabled] = useState(false);
	const [locationsEnabled, setLocationsEnabled] = useState(false);

	useEffect(() => {
		dispatch(getProfileRequest());
		getNotificationSettings();
	}, []);

	useEffect(() => {
		if(status === RequestStatus.fulfilled) {
			isRefreshing(false);
		}
	}, [status]);


	const getNotificationSettings = async () => {
		const isEnabled = await allowsNotificationsAsync();
		console.log("Alerts are ", isEnabled);
		setAlertsEnabled(isEnabled);
	}

	const onRefresh = () => {
		isRefreshing(true);
		dispatch(getProfileRequest());
	}

	const toggleNotification = () => {
		// Notification request alert will only happen once.
		if(alertsEnabled) {
			disableNotificationsAsync()
		} else {
			requestNotificationsPermissionsAsync()
		}

		setAlertsEnabled(previousState => !previousState);
	}

	const addNewAddress = async() => {
		const {status} = await requestLocationPermissionsAsync();
		if(status === 'granted') {
			bottomSheetRef.current?.setModalVisible(true);
		} else {
			bottomSheetRef.current?.setModalVisible(false);
		}
	}

	return (
		<ScrollView
			style={styles.root}
		refreshControl={
			(<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />)
		}>
			<View style={styles.profileHeader}>
				<View style={styles.avatar}>
					<Text style={styles.avatarText}>{name?.firstname.charAt(0)}</Text>
				</View>
				<Text style={styles.fullName}>{name?.firstname} {name?.lastname}</Text>
				<Text style={styles.userName}>{username ? `@${username}`: null}</Text>
			</View>
			<Section>
					<Text style={styles.sectionName}>Email</Text>
					<Text style={styles.sectionValue}>{email}</Text>
			</Section>
			<Section>
				<Text style={styles.sectionName}>Phone Number</Text>
				<Text style={styles.sectionValue}>{phone}</Text>
			</Section>
			<Section>
				<Text style={styles.sectionName}>Notification</Text>
				<View style={styles.sectionValue}>
						<Switch
							trackColor={{ false: Colors.White, true: Colors.Flame }}
							ios_backgroundColor={Colors.White}
							onValueChange={toggleNotification}
							activeText={'On'}
							inActiveText={'Off'}
							value={alertsEnabled}
						/>
				</View>
			</Section>
			<Section>
				<Text style={styles.sectionName}>Address</Text>
				<View style={styles.sectionValue}>
					<TouchableOpacity onPress={addNewAddress}>
						<View style={styles.addAddressBtn}>
							<MaterialCommunityIcons name="map-plus" size={24} color={Colors.Denim} />
							<Text style={styles.addAddressLink}>Add new address</Text>
						</View>
					</TouchableOpacity>

					<BottomSheet bottomSheetRef={bottomSheetRef}>
						<View style={styles.mapBox}>
							{address.geolocation ? (<Map
								latitude={parseInt(address.geolocation.lat)}
								longitude={parseInt(address.geolocation.long)}
							/>): null}
						</View>
					</BottomSheet>

				</View>
			</Section>
			<Section>
				<Text style={styles.sectionName}>Notification</Text>
				<Text style={styles.sectionValue}>
					Alert is {alertsEnabled ? "enabled" : "disabled"}
				</Text>
			</Section>
			<Section>
				<Text style={styles.sectionName}>Location</Text>
				<Text style={styles.sectionValue}>
					Location is {locationsEnabled ? "enabled" : "disabled"}
				</Text>
			</Section>
		</ScrollView>
	)
}

const Section = ({ children, sectionStyle, ...rest }: any) => (<View {...rest} style={styles.section}>
		{children}
	</View>)

const styles = StyleSheet.create({
	root: {
		flex: 1,
		width: '100%',
	},
	profileHeader: {
		paddingVertical: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: Colors.DirtyWhite,
		borderBottomWidth: 1,
	},
	avatar: {
		width: 72,
		height: 72,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.Cloud,
		borderRadius: 36,
		marginBottom: 8
	},
	avatarText: {
		fontSize: 32,
		fontFamily: Font.MavenProBold,
		color: Colors.Orchid,
		textTransform: 'capitalize'
	},
	fullName: {
		fontSize: 24,
		fontFamily: Font.MavenProSemibold,
		color: Colors.Grease,
		justifyContent: 'center',
		alignItems: 'center',
		textTransform: 'capitalize'
	},
	userName: {
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 12,
		fontFamily: Font.MavenProMedium,
		color: Colors.Clay,
	},
	section: {
		borderColor: Colors.DirtyWhite,
		borderBottomWidth: 1,
		padding: 8,
		justifyContent:'space-between',
		alignItems:'center',
		flexDirection:'row',
		minHeight:60
	},
	sectionName: {
		fontSize: 16,
		fontFamily: Font.MavenProMedium,
		color: Colors.Grease,
		flex:1,
	},
	sectionValue: {
		flex: 1,
		fontSize: 16,
		fontFamily: Font.MavenProNormal,
		color: Colors.Grease,
	},
	addAddressBtn: {
		flexDirection:'row',
		alignItems: 'center',
		justifyContent:'flex-start',
	},
	addAddressLink: {
		color: Colors.Denim,
		fontSize: 16,
		fontFamily: Font.MavenProSemibold,
		marginStart: 4,
	},
	mapBox: {
		height: 400,
		padding: 16,
		paddingBottom: 32,
	},
});

export default Profile;