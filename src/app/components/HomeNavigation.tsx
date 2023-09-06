import React, {FC, useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeNavParamList, HomeStackParamList} from '../../common/navigation';
import {HomeScreen} from '../../screens/HomeScreen';
import {Icon} from '@rneui/themed';
import {BookFlightScreenContainer} from '../../screens/BookFlightScreenContainer';
import {FlightListScreenContainer} from '../../screens/FlightListScreenContainer';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const Tab = createBottomTabNavigator<HomeNavParamList>();

const getIcon = function (name: string, color: string, size: number) {
  return <Icon name={name} type="feather" color={color} size={size} />;
};

export const HomeNavigator: FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="BookFlights"
        component={BookFlightScreenContainer}
      />
      <HomeStack.Screen
        name="FlightListScreenContainer"
        component={FlightListScreenContainer}
        options={{
          presentation: 'modal',
        }}
      />
    </HomeStack.Navigator>
  );
};

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#123051',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeNavigator}
        key="HomeStack"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            getIcon(`${focused ? 'home' : 'home'}`, color, size),
        }}
      />
      <Tab.Screen
        name="LibraryStack"
        key="LibraryStack"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            getIcon(focused ? 'star' : 'star', color, size),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={BookFlightScreenContainer}
        key="SearchStack"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            getIcon(focused ? 'search' : 'search', color, size),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={BookFlightScreenContainer}
        key="Profile"
        options={{
          tabBarIcon: ({color, size, focused}) =>
            getIcon(focused ? 'user' : 'user', color, size),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
