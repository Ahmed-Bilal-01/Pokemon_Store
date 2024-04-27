import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import constants from '../../constants/Constants';

const QualityButton = (label: string) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 38,
    width: 115,
    backgroundColor: constants.colors.darkGray,
    borderRadius: 8,
  },
  labelText: {
    color: constants.colors.lightGray,
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
  },
});
export default QualityButton;
