import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';

import RegistrationScreen from '../screens/RegistrationScreen'
import Login from '../screens/Login'
import CallScreen from '../screens/CallScreen'
import AgroInput from '../screens/AgroInput'
import ProfileScreen from '../screens/ProfileScreen'
import PaymentScreen from '../screens/PaymentScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      name= "ios-home"
      focused={focused}
      
    />
  ),
  tabBarOptions:{
    style:{backgroundColor:'green'}
}
 
};

HomeStack.path = '';

const ContactStack = createStackNavigator(
  {
    Links: CallScreen,
  },
  config
);

ContactStack.navigationOptions = {
  tabBarLabel: 'Contact',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name="md-book" focused={focused} />
  ),
  tabBarOptions:{
    style:{backgroundColor:'green'}
}
};

ContactStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Settings: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="md-menu" />
  ),
  tabBarOptions:{
    style:{backgroundColor:'green'}
}
};

ProfileStack.path = '';




const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ContactStack,
  ProfileStack,
  
});

tabNavigator.navigationOptions={
  tabBarOptions:{
    style:{backgroundColor:'green'}
}
}
tabNavigator.path = '';

export default tabNavigator;
