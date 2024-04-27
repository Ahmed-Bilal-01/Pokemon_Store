import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import constants from '../../constants/Constants';

interface SizeButtonsProps {
  selected?: any;
  customStyle?: any;
  selectedButton?: any;
  pressedButton?: any;
  label?: string;
}

const SizeButtons = (props: SizeButtonsProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        ,
        props.customStyle,
        props.selected && styles.selectedButton,
      ]}
      onPress={props.pressedButton}>
      <Text
        style={[styles.labelText, props.selected && styles.selectedLabelText]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    height: 34,
    width: 100,
    backgroundColor: constants.colors.darkGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: constants.colors.lightPeach,
  },
  labelText: {
    color: constants.colors.lightGray,
    fontFamily: 'Poppins-Regular',
  },
  selectedLabelText: {
    color: constants.colors.lightPeach,
    fontFamily: 'Poppins-Regular',
  },
});
export default SizeButtons;
