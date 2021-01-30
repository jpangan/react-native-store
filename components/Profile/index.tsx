import React,{useEffect, useState, useRef} from 'react';
import { Text, View, RefreshControl, ScrollView, StyleSheet, I18nManager } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileRequest, updateAddress} from '../../store/user';
import { changeLang } from '../../store/environment';
import {RootState} from '../../store';
import {RequestStatus} from '../../types';
import {Colors, Font} from '../../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomSheet from '../BottomSheet';
import Map from '../Map';
import { useSiteDirection } from '../../components/AppDirectionProvider';

import {
	allowsNotificationsAsync,
	requestNotificationsPermissionsAsync,
	disableNotificationsAsync,
	requestLocationPermissionsAsync,
} from '../../helpers';

const Profile = () => {
	const { isRtl, directionStyles } = useSiteDirection();
	const dispatch = useDispatch();
	const { data, status } = useSelector((state: RootState) => state.user);
	const { lang } = useSelector((state:RootState) => state.environment);
	const { name, username, address, email, phone } = data;
	const bottomSheetRef = useRef();
	const [refreshing, isRefreshing] = useState(false);
	const [alertsEnabled, setAlertsEnabled] = useState(false);

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

	const setAddress = async() => {
		const {status} = await requestLocationPermissionsAsync();
		if(status === 'granted') {
			return bottomSheetRef.current?.setModalVisible(true);
		} else {
			return bottomSheetRef.current?.setModalVisible(false);
		}
	}

	const modifyAddress = async() => {
		bottomSheetRef.current?.setModalVisible(true);
	}

	const saveCompleteAddress = newAddress => {
		dispatch(updateAddress(newAddress));
		bottomSheetRef.current?.setModalVisible(false);
	}

	const changeDirection = async (language:string) => {
		await forceRtl(language === 'ar' ? true : false);
	}

	const changeLanguage = async() => {
		dispatch(changeLang(lang === 'ar' ? 'en': 'ar'));
	}

	return (
		<ScrollView
			style={[styles.root, {direction: directionStyles.direction}]}
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
				<Text style={styles.nameWrapper}>Email</Text>
				<View style={styles.valueWrapper}>
					<Text style={styles.value}>{email}</Text>
				</View>
			</Section>
			<Section>
				<Text style={styles.nameWrapper}>Phone Number</Text>
				<View style={styles.valueWrapper}>
					<Text style={styles.value}>{phone}</Text>
				</View>
			</Section>
			<Section>
				<Text style={styles.nameWrapper}>Notification</Text>
				<View style={styles.valueWrapper}>
					<Text style={styles.value}>{alertsEnabled ? 'Enabled' : 'Disabled'}</Text>
					<TouchableOpacity onPress={toggleNotification}>
						<Text style={styles.editLink}>Change</Text>
					</TouchableOpacity>

				</View>
			</Section>
			<Section>
				<Text style={styles.nameWrapper}>Address</Text>
				<View style={styles.valueWrapper}>
					<Text style={styles.value}>
						{address.completeAddress}
					</Text>

					{address.completeAddress ? (
						<TouchableOpacity onPress={modifyAddress}>
							<Text style={styles.editLink}>Change</Text>
						</TouchableOpacity>) : (<TouchableOpacity onPress={setAddress}>
								<Text style={styles.editLink}>Add</Text>
					</TouchableOpacity>)}
				</View>
			</Section>

			<Section>
				<Text style={styles.nameWrapper}>Language</Text>
				<View style={styles.valueWrapper}>
					<Text style={styles.value}>{lang === 'ar' ? 'Arabic': 'English'}</Text>
					<TouchableOpacity onPress={changeLanguage}>
						<Text style={styles.editLink}>Change</Text>
					</TouchableOpacity>
				</View>
			</Section>

		 	<BottomSheet bottomSheetRef={bottomSheetRef}>
				<View style={styles.mapBox}>
					{address.geolocation ? (<Map
						latitude={address.geolocation.lat}
						longitude={address.geolocation.long}
						currentAddress={address.completeAddress}
						onSaveAddressFn={saveCompleteAddress}
					/>) : null}
				</View>
			</BottomSheet>
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
		backgroundColor: Colors.White,
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
	nameWrapper: {
		paddingHorizontal: 8,
		fontSize: 16,
		fontFamily: Font.MavenProMedium,
		color: Colors.Grease,
		flex:0.6,
		justifyContent:'flex-start',
		textAlign:'left',
	},
	value: {
		flex: 1.4,
		fontSize: 16,
		fontFamily: Font.MavenProNormal,
		color: Colors.Grease,
		justifyContent: 'flex-start',
		textAlign: 'left',
	},
	valueWrapper: {
		paddingHorizontal: 8,
		flex: 1,
		justifyContent:'space-between',
		alignItems:'center',
		flexDirection:'row'
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
	editLink: {
		color: Colors.Denim,
		fontSize: 16,
		fontFamily: Font.MavenProSemibold,
	},
	mapBox: {
		height: 500,
		padding: 16,
		paddingBottom: 32,
	},
});

export default Profile;