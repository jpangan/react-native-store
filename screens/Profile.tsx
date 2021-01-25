import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import {View as ThemedView} from '../components/Themed';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
        <Text>Profile</Text>
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
