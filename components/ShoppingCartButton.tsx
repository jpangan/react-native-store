import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ShoppingCartButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ShoppingCartScreen')}>
      <View style={styles.root}>
        <Ionicons name="cart-outline" size={32} color={Colors.Grease} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16
  }
});

export default ShoppingCartButton;
