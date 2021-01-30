import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { useSiteDirection } from '../components/AppDirectionProvider';

interface BackIconButtonProps extends TouchableOpacityProps {
  iconProps?: Object;
  navigation?: object;
}

const BackIconButton = ({
  canGoBack,
  iconProps = {},
  ...rest
}: BackIconButtonProps) => {
  const { isRtl } = useSiteDirection();
  const navigation = useNavigation();

  if (!canGoBack) {
    return null;
  }

  const navBack = () => {
    if (canGoBack) {
      navigation.goBack();
    }
  };

  const iconName = isRtl
    ? 'arrow-forward-circle-outline'
    : 'arrow-back-circle-outline';
  return (
    <TouchableOpacity {...rest} onPress={navBack}>
      <Ionicons
        name={iconName}
        style={styles.root}
        size={32}
        color={Colors.Grease}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 16
  }
});

export default BackIconButton;
