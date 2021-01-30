import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import Listings from '../components/Listings';

import { RootState } from '../store';

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
