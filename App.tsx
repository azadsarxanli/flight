import React from 'react';
// import type {PropsWithChildren} from 'react';
import Navigator from './src/app/components/Navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationProvider} from './src/app/NavigationProvider';
import {ThemeProvider} from './src/app/ThemeProvider';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationProvider>
          <Navigator />
        </NavigationProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
