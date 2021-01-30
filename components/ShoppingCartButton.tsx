import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Font } from '../constants/theme';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
const ShoppingCartButton = () => {
  const navigation = useNavigation();
  const { count } = useSelector((state: RootState) => state.cart);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ShoppingCartScreen')}>
      <View style={styles.root}>
        <Ionicons name="cart-outline" size={32} color={Colors.Grease} />
        {count > 0 ? (
          <View style={styles.countWrapper}>
            <Text style={styles.count}>{count}</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16
  },
  countWrapper: {
    backgroundColor: Colors.Grease,
    flex: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    height: 20,
    minWidth: 20,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4
  },
  count: {
    color: Colors.White,
    fontSize: 8,
    fontFamily: Font.MavenProMedium
  }
});

export default ShoppingCartButton;
