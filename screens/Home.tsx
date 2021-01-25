
import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { StyleSheet, View, ScrollView } from 'react-native';
import { getProductsRequest } from '../store/listings';
import Listings from '../components/Listings';

export default function Home() {
  return (<View style={styles.container}>
      <Listings/>
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  scrollView: {
    minHeight: '100%'
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
