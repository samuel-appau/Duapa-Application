import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';
import React from 'react';
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
import OffTaker from '../screens/OffTakers'
import MainTabNavigator from './MainTabNavigator';
import CartScreen from '../screens/CartScreen';
import BuyScreen from '../screens/BuyScreen';
import MembershipPaymentForm from '../screens/MembershipPayment'
import BorrowScreen from '../screens/borrow'
import DifferentAmountScreen from '../screens/DifferentAmount';
import SellProduce from '../screens/SellProduct'
import HelpScreen from '../screens/HelpScreen'
import AccountScreen from '../screens/AccountSettings'
import NotificationScreen from '../screens/NotificationScreen'

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
  },
  Help:{
    screen:HelpScreen
  },
  Account:{
    screen:AccountScreen 
  
    },
    Notification:{
      screen:NotificationScreen
    }
    
  },
      DrawerConfig
  
  
  );
  



const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main:DrawerNavigator,
  login:Login,
  // Root:MainTabNavigator,
  offTaker:OffTaker,
  register:RegistrationScreen,
  payment:PaymentScreen,
  agroInput:AgroInput,
  contact:CallScreen,
  cart:CartScreen,
  buy:BuyScreen,
  memPay:MembershipPaymentForm,
  borrow:BorrowScreen,
  different: DifferentAmountScreen,
  sell:SellProduce
});
switchNavigator.path = '';


export default createBrowserApp(switchNavigator, { history: 'hash' });