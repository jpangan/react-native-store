import React, {useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native'
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import {View as ThemedView} from '../components/Themed';

export default function ProfileScreen() {
	const route = useRoute()
  return (
    <ThemedView style={styles.container}>
			<Text>{route.params}</Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
