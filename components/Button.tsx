import React from 'react';
import { Colors, Font } from '../constants/theme';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  children?: any;
  title?: string;
  buttonStyle?: object;
}

const ShoppingCartButton = ({
  children,
  title,
  buttonStyle = {},
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity {...rest}>
      <View style={[styles.root, buttonStyle]}>
        {title ? <Text style={styles.text}>{title}</Text> : children}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    backgroundColor: Colors.White,
    borderRadius: 6,
    padding: 8,
    alignItems: 'center',
    borderWidth: 1
  },
  text: {
    fontFamily: Font.MavenProBold,
    fontSize: 12,
    color: Colors.Grease
  }
});

export default ShoppingCartButton;
