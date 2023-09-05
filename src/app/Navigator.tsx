import React from 'react';
import HomeNavigation from './HomeNavigation';
import {LoginScreen} from '../screens/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../common/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

type AppStateType = 'authenticated' | 'unauthenticated';

const Navigator = () => {
  const appState: AppStateType = 'authenticated';
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {appState === 'authenticated' ? (
        <Stack.Group>
          <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Onboarding" component={LoginScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default Navigator;
