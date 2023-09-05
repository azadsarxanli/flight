import React from 'react';
// import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/app/Navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
