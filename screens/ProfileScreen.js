import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'

export default function ProfileScreen({navigation}){


    return(
        <View style={{flex:1}}>
        <Text style={{fontSize:18, textAlign: 'center',marginTop:10}}>
        Welcome to DuapaPayApp.DUAPA is an ICT farmer-led mobile platform 
        and technologies through extension services.This initiative aims at
        developing farm production content,conduct virtual training extension
        staff and establishing Call Centers in the districts.
        </Text>

        </View>
    )





}

ProfileScreen.navigationOptions =({navigation})=> ({
    title: 'Profile',
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold',
      marginLeft:45
    },
    headerStyle:{
      backgroundColor:'green'
    },
    headerLeft:<MenuButton navigation={navigation} />,
    headerRight:<SearchButton/>
  });