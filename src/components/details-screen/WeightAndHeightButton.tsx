import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import constants from '../../constants/Constants';

interface WeightAndHeightButtonProps {
  characteristic?: string;
  label?: number;
  customStyle?: any;
}

const WeightAndHeightButton = (props: WeightAndHeightButtonProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.characteristicsText}>{props.characteristic}</Text>
      <Text style={styles.labelText}>{props.label}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: 60,
    backgroundColor: constants.colors.darkGray,
    borderRadius: 8,
    bottom: 10,
  },
  labelText: {
    color: constants.colors.lightGray,
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    marginTop: 3,
  },
  characteristicsText: {
    color: 'white',
  },
});
export default WeightAndHeightButton;
