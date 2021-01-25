import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../constants/theme';

const HorizontalRule = (props:React.FC<any>) => (<View style={styles.root} {...props}/>);

const styles = StyleSheet.create({
	root: {
		flex: 1,
		height: 8,
		backgroundColor: Colors.DirtyWhite,
		width: '100%'
	}
})

export default HorizontalRule;

