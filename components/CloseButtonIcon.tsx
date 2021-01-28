import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

interface CloseButtonIconProps extends TouchableOpacityProps {
  iconProps?: Object;
}

const CloseButtonIcon = ({ iconProps = {}, ...rest }: CloseButtonIconProps) => (
  <TouchableOpacity {...rest}>
    <EvilIcons name="close" size={24} color="black" />
  </TouchableOpacity>
);

export default CloseButtonIcon;
