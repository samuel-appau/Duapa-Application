import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Feather,AntDesign,Ionicons} from '@expo/vector-icons'

import TabBarIcon from '../components/TabBarIcon';
import AntDesignIcon from '../components/AntDesignIcons'
import HomeScreen from '../screens/HomeScreen';
import FontAwesomeIcon from '../components/FontAwesomeIcon'
import RegistrationScreen from '../screens/RegistrationScreen'
import Login from '../screens/Login'
import CallScreen from '../screens/CallScreen'
import AgroInput from '../screens/AgroInput'
import LoanScreen from '../screens/LoanScreen'
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
    style:{backgroundColor:'green'},
  
    activeTintColor:'#172b6e'
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
    <AntDesignIcon name="customerservice" focused={focused} />
  ),
  tabBarOptions:{
    style:{backgroundColor:'green'},
    activeTintColor:'#172b6e'
}
};

ContactStack.path = '';

const LoanStack = createStackNavigator(
  {
    Settings: LoanScreen,
  },
  config
);

LoanStack.navigationOptions = {
  tabBarLabel: 'Loan',
  tabBarIcon: ({ focused }) => (
    <FontAwesomeIcon focused={focused} name="credit-card" />
  ),
  tabBarOptions:{
    style:{backgroundColor:'green'},
    activeTintColor:'#172b6e'

}
};

LoanStack.path = '';




const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ContactStack,
  LoanStack,
  
});

tabNavigator.navigationOptions={
  tabBarOptions:{
    style:{backgroundColor:'green'}
}
}
tabNavigator.path = '';

export default tabNavigator;
