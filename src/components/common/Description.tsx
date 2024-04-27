import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import constants from '../../constants/Constants';

interface DescriptionProps {
  descriptionText?: string;
}

const Description = (props: DescriptionProps) => {
  return (
    <View>
      <Text style={styles.descriptionHeading}>Description</Text>
      <Text style={styles.descriptionText}>{props.descriptionText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  descriptionHeading: {
    color: constants.colors.lightGray,
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
  },
  descriptionText: {
    color: constants.colors.white,
    fontSize: 12,
    marginTop: '2%',
    fontFamily: 'Poppins-Regular',
    lineHeight: 20,
  },
});
export default Description;
