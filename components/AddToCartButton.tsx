import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSiteDirection } from '../components/AppDirectionProvider';
import { Colors } from '../constants/theme';

interface BackIconButtonProps extends TouchableOpacityProps {}

const BackIconButton = (props: BackIconButtonProps) => {
  return (
    <TouchableOpacity {...props}>
      <MaterialIcons
        name="add-shopping-cart"
        style={styles.root}
        size={24}
        color={Colors.Grease}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 0
  }
});

export default BackIconButton;
