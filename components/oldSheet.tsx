import ActionSheet, { ActionSheetProps } from 'react-native-actions-sheet';
import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import CloseButtonIcon from './CloseButtonIcon';

// Intersection of types
type Props = ActionSheetProps & {
  handler: any;
  handlerProps?: any;
  component: any;
  componentProps?: any;
  swipeToClose?: boolean;
  onClose?: Function;
  params?: any;
  fullWidthMode?: boolean;
  fullWidthOnLandscape?: boolean;
  maxWidthOnLandScape?: string | number;
  defaultWidth?: string | number;
};

const MAX_WIDTH_ON_LANDSCAPE = 350;

const BottomSheet = ({
  handler: Handler,
  handlerProps,
  component: Component,
  componentProps,
  onClose = () => {},
  swipeToClose = true,
  fullWidthOnLandscape = true,
  maxWidthOnLandScape = MAX_WIDTH_ON_LANDSCAPE,
  defaultWidth = '100%',
  ...rest
}: Props) => {
  const actionSheetRef: any = useRef();
  const showBottomSheet = () => actionSheetRef.current?.setModalVisible(true);
  const [maxWidth, setMaxWidth] = useState(defaultWidth);
  const hideBottomSheet = () => {
    actionSheetRef.current?.setModalVisible(false);
    onClose();
  };

  return (
    <>
      <TouchableOpacity onPress={showBottomSheet}>
        <Handler {...handlerProps} />
      </TouchableOpacity>

      <ActionSheet
        containerStyle={{ maxWidth }}
        ref={actionSheetRef}
        defaultOverlayOpacity={0.7}
        bounceOnOpen={true}
        headerAlwaysVisible={true}
        gestureEnabled={swipeToClose}
        indicatorColor="#d3d3d3"
        CustomHeaderComponent={
          <CloseButtonIcon style={styles.closeIcon} onPress={hideBottomSheet} />
        }
        {...rest}
      >
        <View style={styles.container}>
          <Component {...componentProps} onClose={hideBottomSheet} />
        </View>
      </ActionSheet>
    </>
  );
};

export default BottomSheet;

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
