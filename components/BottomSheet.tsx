import React, { useRef, useState, createRef, useEffect } from 'react';
import ActionSheet, { ActionSheetProps } from 'react-native-actions-sheet';
import { View, StyleSheet, Text } from 'react-native';
import CloseButtonIcon from './CloseButtonIcon';

interface BottomSheetProps extends ActionSheetProps {
    bottomSheetRef: any;
    children?: any;
}
const BottomSheet = ({
    children,
    bottomSheetRef = useRef()
}: BottomSheetProps) => {
    const hideBottomSheet = () => {
        bottomSheetRef.current?.setModalVisible(false);
    };

    return (
        <View
            style={{
                justifyContent: 'center',
                flex: 1
            }}
        >
            <ActionSheet
                ref={bottomSheetRef}
                defaultOverlayOpacity={0.7}
                bounceOnOpen={true}
                headerAlwaysVisible={true}
                CustomHeaderComponent={
                    <CloseButtonIcon
                        style={styles.closeIcon}
                        onPress={hideBottomSheet}
                    />
                }
            >
                <View>{children}</View>
            </ActionSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    closeIcon: {
        alignSelf: 'flex-end',
        paddingHorizontal: 16,
        paddingTop: 16
    }
});

export default BottomSheet;
