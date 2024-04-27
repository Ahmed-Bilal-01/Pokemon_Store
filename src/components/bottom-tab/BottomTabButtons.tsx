import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {SvgProps} from 'react-native-svg';

interface BottomTabButtonsProps {
  activeIcon: any;
  inactiveIcon: any;
  screenName?: string;
  isPressed?: boolean;
  onPress?: (arg: any) => void;
}

const BottomTabButtons = (props: BottomTabButtonsProps) => {
  const ActiveIcon = props.activeIcon;
  const InActiveIcon = props.inactiveIcon;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props?.onPress?.(props.screenName)}>
      <View>
        {props.isPressed ? (
          <ActiveIcon height={35} width={35} />
        ) : (
          <InActiveIcon height={35} width={35} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomTabButtons;
