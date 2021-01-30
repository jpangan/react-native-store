import React, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import Cart from '../components/Cart';

export default function ShoppingCart() {
  const route = useRoute();
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
