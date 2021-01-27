import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import {View as ThemedView} from '../components/Themed';
import Profile from '../components/Profile';

const ProfileScreen = () => {
  return (
    <ThemedView style={styles.root}>
      <Profile/>
    </ThemedView>
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
