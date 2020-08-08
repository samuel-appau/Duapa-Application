import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Onboarding from '../screens/Onboarding';
import RegisterScreen from '../screens/RegistrationScreen';
import Login from '../screens/Login'
import {Platform,Dimensions} from 'react-native';
import TabNavigator from './MainTabNavigator';
import  {createDrawerNavigator} from 'react-navigation-drawer'
import MenuDrawer from '../components/MenuDrawer'
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'
import EntryScreen from '../screens/EntryScreen'
import CallScreen from '../screens/CallScreen'
import PaymentScreen from '../screens/PaymentScreen'
import AgroInput from '../screens/AgroInput'
import OffTaker from '../screens/OffTakers'
import MainTabNavigator from './MainTabNavigator';
import CartScreen from '../screens/CartScreen'
import BuyScreen from '../screens/BuyScreen'
import Membership from '../screens/MembershipPayment'
import BorrowScreen from '../screens/borrow'
import DifferentAmountScreen from '../screens/DifferentAmount';
import SellProduce from '../screens/SellProduct'
import HelpScreen from '../screens/HelpScreen'
import AccountScreen from '../screens/AccountSettings'
import NotificationScreen from '../screens/NotificationScreen'
import ViewProduct from '../screens/ViewProduct'
import ChangePasswordScreen from '../screens/ChangePassword'
import Forgot from '../screens/ForgotPassword'

const WIDTH=Dimensions.get('window').width;

const DrawerConfig={
  drawerWidth: WIDTH*0.80,
  contentComponent:({navigation})=>{
    return(<MenuDrawer navigation={navigation}/>)

  }
} 



const DrawerNavigator=createDrawerNavigator({
  
  Dashboard:{ 
      screen:MainTabNavigator
  },
  Logout:{
    screen:Login
  },
  Member:{
    screen:Membership
  },
  Profile:{
    screen:AccountScreen
  },
  Notification:{
    screen:NotificationScreen
  },
  Change:{
    screen:ChangePasswordScreen
  }
  
  
    },
  
      DrawerConfig
  
  
  );
  

export default createAppContainer(
  createSwitchNavigator({
    //Onboarding
     Main:Onboarding,
     register:RegisterScreen,
     login:Login,
     Notification:NotificationScreen,
     Root:DrawerNavigator,
     payment:PaymentScreen,
     agroInput:AgroInput,
     contact:CallScreen,
     cart:CartScreen,
     buy:BuyScreen,
     member:Membership,
     borrow:BorrowScreen,
     different: DifferentAmountScreen,
     sell:SellProduce,
     account:AccountScreen,
     produce:ViewProduct,
     forgot:Forgot
  })
);

