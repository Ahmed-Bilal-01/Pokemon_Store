import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import constants from '../../constants/Constants';

interface FooterProps {
  price?: string | number;
  buttonLabel?: string;
  showBar?: boolean;
  functionOnPress?: () => void;
}

const Footer = (props: FooterProps) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.priceAndButtonContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceHeading}>Price</Text>
          <View style={styles.dollarContainer}>
            <Text style={styles.dollarText}>$</Text>
            <Text style={styles.amountText}>{props.price}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={props.functionOnPress}>
          <Text style={styles.AddCartText}>{props.buttonLabel}</Text>
        </TouchableOpacity>
      </View>
      {props.showBar !== false && <View style={styles.bottomBar} />}
    </View>
  );
};
const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: constants.colors.background,
    width: '100%',
    paddingVertical: 6,
    paddingHorizontal: '5%',
  },
  priceAndButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
  },
  priceContainer: {
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dollarContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.colors.lightPeach,
    borderRadius: 17,
    width: 220,
  },
  AddCartText: {
    color: constants.colors.white,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  priceHeading: {
    color: constants.colors.lightGray,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  dollarText: {
    color: constants.colors.lightPeach,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
  },
  amountText: {
    color: constants.colors.white,
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 5,
    maxWidth: 50,
    fontFamily: 'Poppins-Regular',
  },
  bottomBar: {
    height: 4,
    width: 150,
    backgroundColor: constants.colors.white,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 8,
  },
});
export default Footer;
