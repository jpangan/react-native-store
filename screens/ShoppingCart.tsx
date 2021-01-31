import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cart from '../components/Cart';

export default function ShoppingCart() {
  return (
    <View style={styles.container}>
      <Cart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
