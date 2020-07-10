import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {Platform,Dimensions} from 'react-native';
import TabNavigator from './MainTabNavigator';
import  {createDrawerNavigator} from 'react-navigation-drawer'
import MenuDrawer from '../components/MenuDrawer'
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'
import EntryScreen from '../screens/EntryScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import Login from '../screens/Login'
import CallScreen from '../screens/CallScreen'
import PaymentScreen from '../screens/PaymentScreen'
import AgroInput from '../screens/AgroInput'
import OffTaker from '../screens/OffTaker'
import MainTabNavigator from './MainTabNavigator';
const WIDTH=Dimensions.get('window').width;

const DrawerConfig={
  drawerWidth: WIDTH*0.80,
  contentComponent:({navigation})=>{
    return(<MenuDrawer navigation={navigation}/>)

  }
} 

const DrawerNavigator=createDrawerNavigator({
  
  Home:{ 
      screen:MainTabNavigator
  },
  Logout:{
    screen:EntryScreen
  }
  
    },
  
      DrawerConfig
  
  
  );
  


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main:EntryScreen,

    login:Login,
    Root:DrawerNavigator,
    register:RegistrationScreen,
    payment:PaymentScreen,
    agroInput:AgroInput,
    contact:CallScreen,
    offTaker:OffTaker
  })
);
