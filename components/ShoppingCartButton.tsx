import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Updates from 'expo-updates';
import { Colors } from '../constants/theme';
import { View, TouchableOpacity, StyleSheet, I18nManager } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { changeLang } from '../store/environment';
import { useDispatch, useSelector } from 'react-redux';

const ShoppingCartButton = () => {
  const { lang } = useSelector((state) => state.environment);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const flipScreen = async () => {
    dispatch(changeLang(lang === 'ar' ? 'en' : 'ar'));
  };

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
