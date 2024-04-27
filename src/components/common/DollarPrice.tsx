import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import constants from '../../constants/Constants';

interface DescriptionProps {
  price?: string;
}

const DollarPrice = (props: DescriptionProps) => {
  return (
    <View style={styles.priceContainer}>
      <Text style={styles.dollarSign}>$</Text>
      <Text style={styles.price}>{props.price}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dollarSign: {
    color: constants.colors.lightPeach,
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 7,
  },
  price: {
    color: constants.colors.white,
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 1,
    maxWidth: 60,
    marginLeft: 5,
  },
});
export default DollarPrice;
