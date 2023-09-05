import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeNavParamList,
  HomeStackParamList,
  LibraryStackParamList,
  SearchStackParamList,
} from '../common/navigation';

import {ProfileScreen} from '../screens/ProfileScreen';
import {HomeScreen} from '../screens/HomeScreen';

// react native elements icons for home, library, search, profile
import {Icon} from '@rneui/themed';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const LibraryStack = createNativeStackNavigator<LibraryStackParamList>();
const SearchStack = createNativeStackNavigator<SearchStackParamList>();

const Tab = createBottomTabNavigator<HomeNavParamList>();

export const HomeNavigator: FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      {/* <HomeStack.Screen name="Product" component={ProductScreenContainer} /> */}
    </HomeStack.Navigator>
  );
};

export const LibraryNavigator: FC = () => {
  return (
    <LibraryStack.Navigator screenOptions={{headerShown: false}}>
      <LibraryStack.Screen name="Library" component={LibraryScreenContainer} />
      {/* <LibraryStack.Screen name="Product" component={ProductScreenContainer} /> */}
    </LibraryStack.Navigator>
  );
};

export const SearchNavigator: FC = () => {
  return (
    <SearchStack.Navigator screenOptions={{headerShown: false}}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      {/* <SearchStack.Screen name="Product" component={ProductScreenContainer} /> */}
    </SearchStack.Navigator>
  );
};

function getIcon(name: string, color: string, size: number) {
  return <Icon name={'rowing'} />;
}

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeNavigator}
        key="HomeStack"
        options={{
          tabBarIcon: ({color, size}) => getIcon('home', color, size),
        }}
      />
      <Tab.Screen
        name="LibraryStack"
        key="LibraryStack"
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({color, size}) => getIcon('book', color, size),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchNavigator}
        key="SearchStack"
        options={{
          tabBarIcon: ({color, size}) => getIcon('search', color, size),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        key="Profile"
        options={{
          tabBarIcon: ({color, size}) => getIcon('person', color, size),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
