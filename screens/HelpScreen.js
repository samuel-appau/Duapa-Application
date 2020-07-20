import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Picker,Image,Button} from 'react-native'
import {Ionicons,AntDesign,Entypo,Feather} from '@expo/vector-icons'
import MenuButton from '../components/Menu'


export default function HelpScreen({navigation}){

    return(
        <View style={{flex:1}}>
             <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:62}}>
       <TouchableOpacity style={{marginTop:25}} >
        <MenuButton navigation={navigation}  />
        </TouchableOpacity>
             <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:115,marginTop:27,marginBottom:5}}>HELP SCREEN</Text>
             <Entypo name="help-with-circle" size={25} color="white"  style={{marginTop:23,marginLeft:120}}/>
           
        </View>


      <View>

      <Image  source={require('../assets/images/logo.jpg')}   style={{borderRadius:60,height:110,width:110,marginLeft:129,marginTop:34}}  />

      <Text style={{fontSize:20,fontWeight:'bold',marginTop:15,marginLeft:109}}>Need some help ?</Text>
      <Text style={{fontSize:17,marginLeft:89}}>Feel free to get intouch with us</Text>
      <View style={{marginTop:110,marginLeft:29}}>
      <TouchableOpacity >
                        <View style={{ padding: 11,width:'85%',backgroundColor:'green',borderColor:"white",borderWidth:2,marginLeft:16,marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold',marginLeft:79.6}}>CONTACT US</Text>
                        </View>
         </TouchableOpacity> 
         
         <TouchableOpacity style={{marginTop:20}} >
                        <View style={{ padding: 11,backgroundColor:'white',width:'85%',borderColor:"green",borderWidth:2,marginLeft:16, marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"green",fontWeight:'bold',marginLeft:46,}}>Frequently ask questions</Text>
                        </View>
         </TouchableOpacity> 

         </View>

         <View style={{flexDirection:'row',marginBottom:5,marginTop:135,marginLeft:99}}>
         
         <TouchableOpacity>
         <Text>
             T&C & our Privacy Policy
         </Text>
         </TouchableOpacity>
  
        <Feather name='arrow-right'  size={16} style={{marginTop:4}}/>


      </View>

      </View>
        </View>
    )
}