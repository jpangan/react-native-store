import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Listings from '../components/Listings';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Listings />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff'
  },
  scrollView: {
    minHeight: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
