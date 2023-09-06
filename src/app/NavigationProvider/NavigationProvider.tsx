import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen';

type Props = PropsWithChildren<{
  _fallback?: JSX.Element;
}>;

export const NavigationProvider = ({children, _fallback}: Props) => {
  //   useEffect(() => {
  //     SplashScreen.hide();
  //   }, []);
  return <NavigationContainer>{children}</NavigationContainer>;
};
