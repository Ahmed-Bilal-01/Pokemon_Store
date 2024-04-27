import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import constants from '../../constants/Constants';
import WeightAndHeightButton from '../details-screen/WeightAndHeightButton';

interface TransparentViewProps {
  headingText?: string;
  height?: number;
  weight?: number;
}
const TransparentView = (props: TransparentViewProps) => {
  return (
    <View style={styles.transparentContainer}>
      <View style={styles.headingAndButtonsBox}>
        <View>
          <Text style={styles.headingText}>
            {props?.headingText?.toUpperCase()}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <WeightAndHeightButton
            label={props.height}
            characteristic={'Height'}
          />
          <WeightAndHeightButton
            label={props.weight}
            characteristic={'weight'}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  transparentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    height: 120,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',
    paddingTop: 15,
    justifyContent: 'center',
  },
  headingAndButtonsBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
  },
  headingText: {
    color: constants.colors.white,
    fontSize: 24,
    fontWeight: '700',
    width: 150,
    fontFamily: 'Poppins-Regular',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: 140,
    height: 50,
    justifyContent: 'space-between',
  },
});
export default TransparentView;
