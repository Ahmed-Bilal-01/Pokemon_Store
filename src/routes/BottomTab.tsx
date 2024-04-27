import React from 'react';
import {View, StyleSheet} from 'react-native';
import constants from '../constants/Constants';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import BottomTabButtons from '../components/bottom-tab/BottomTabButtons';

const BottomTab = () => {
  const navigation = useNavigation<any>();
  const selectedScreen = useSelector((state: any) => state.tab.selectedScreen);

  const handlePress = (screenName: string) => {
    if (selectedScreen !== screenName) {
      navigation.navigate(screenName);
    }
  };
  return (
    <View
      style={
        selectedScreen === 'FavoriteScreen'
          ? [
              styles.mainContainer,
              {backgroundColor: 'rgba(255, 255, 255, 0.65)'},
            ]
          : styles.mainContainer
      }>
      <BottomTabButtons
        screenName={'HomeScreen'}
        activeIcon={constants.svg.activeHome}
        inactiveIcon={constants.svg.inactiveHome}
        onPress={handlePress}
        isPressed={selectedScreen === 'HomeScreen'}
      />
      <BottomTabButtons
        screenName={'CartScreen'}
        activeIcon={constants.svg.activeCart}
        inactiveIcon={constants.svg.inactiveCart}
        onPress={handlePress}
        isPressed={selectedScreen === 'CartScreen'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 90,
    backgroundColor: constants.colors.background,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '16%',
  },
});

export default BottomTab;
