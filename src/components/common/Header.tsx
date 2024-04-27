import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import constants from '../../constants/Constants';

interface HeaderProps {
  label?: string;
}
const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <constants.svg.drawerIcon />
        </TouchableOpacity>
        {props.label && <Text style={styles.labelText}>{props.label}</Text>}
        <TouchableOpacity>
          <constants.svg.profileIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  labelText: {
    color: constants.colors.white,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
  },
});

export default Header;
