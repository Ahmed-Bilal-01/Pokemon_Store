import React, {useEffect, useRef} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store, persistor} from './src/redux/store';
import RootStack from './src/routes/RootStack';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {createNavigationContainerRef} from '@react-navigation/native';
import {changeSelectedScreen} from './src/redux/actions';
import {AxiosInterceptor} from './src/api_calls/axios-instance';

const App = () => {
  const navigationRef = createNavigationContainerRef();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
  const onStateChange = async () => {
    const currentRouteName = navigationRef?.current?.getCurrentRoute()?.name;
    console.log('screen', currentRouteName);
    store.dispatch(changeSelectedScreen(currentRouteName));
  };

  return (
    <SafeAreaProvider style={{backgroundColor: 'black'}}>
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer
              ref={navigationRef}
              theme={DarkTheme}
              onStateChange={onStateChange}>
              <AxiosInterceptor>
                <RootStack />
              </AxiosInterceptor>
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
