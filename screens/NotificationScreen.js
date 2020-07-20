import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Picker,Image,Button} from 'react-native'
import {Ionicons,AntDesign,Entypo} from '@expo/vector-icons'
import MenuButton from '../components/Menu'


export default function NotificationScreen({navigation}){

    return(
        <View style={{flex:1}}>
             <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:62}}>
       <TouchableOpacity style={{marginTop:25}} >
        <MenuButton navigation={navigation}  />
        </TouchableOpacity>
        <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:115,marginTop:27,marginBottom:5}}>NOTIFICATION</Text>
             <Ionicons name="ios-notifications" size={25} color="white"  style={{marginTop:19,marginLeft:116}}/>
            
        </View>

          
        <Ionicons name="ios-notifications" size={160} color="#c0c0c0" style={{marginTop:120,marginLeft:140}}/>
             <Text style={{marginTop:29,marginLeft:129,fontWeight:'bold',fontSize:20}}>Nothing here !!!</Text>
             <Text style={{marginTop:40,marginLeft:60}}>Tap the notification settings button below </Text>

             <Text style={{marginTop:4,marginLeft:120}}>and check again</Text>

        <TouchableOpacity style={{marginTop:30,marginLeft:19}} >
                        <View style={{ padding: 11,width:'85%',backgroundColor:'green',borderColor:"white",borderWidth:2,marginLeft:16,marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold',marginLeft:80}}>Notification Settings</Text>
                        </View>
         </TouchableOpacity> 


      <View>
     

     

      </View>
        </View>
    )
}