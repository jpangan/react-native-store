import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Profile from '../components/Profile';

const ProfileScreen = () => {
  return (
    <View style={styles.root}>
      <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ProfileScreen;
