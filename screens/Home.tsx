
import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { StyleSheet } from 'react-native';
import { getProductsRequest } from '../store/listings';

import Listings from '../components/Listings';
import { Text, View } from '../components/Themed';

export default function Home() {
  return (
    <View style={styles.container}>
      <Listings/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'flex-start',
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
