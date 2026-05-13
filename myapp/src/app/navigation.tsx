import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import home from './home';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: home,
      options: {title: 'Welcome'},
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function NavigationComponent() {
  return <Navigation />;
}