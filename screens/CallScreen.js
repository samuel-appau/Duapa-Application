import React,{Component} from 'react';
import { Text, View, StyleSheet, Button,Platform,ScrollView,TouchableOpacity,Image} from 'react-native';
// import call from 'react-native-phone-call';
import {Ionicons,FontAwesome,AntDesign,Feather,Entypo,EvilIcons} from '@expo/vector-icons'
import { Linking } from 'expo';
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'

const communicate = (type) => {
  
    let phone = '';
  
    if (Platform.OS === 'ios' && type === 'tel') {
  
      phone = 'tel:${0302934450}';
  
    } else if (Platform.OS === 'ios' && type === 'sms') {
      
          phone = 'sms:${0302934450}';
      
        }
        else if (Platform.OS === 'android' && type === 'tel') {
          
              phone = 'tel:${0302934450}';
          
            }

            else if (Platform.OS === 'android' && type === 'sms') {
              
                  phone = 'sms:${0302934450}';
              
                }
  
    Linking.openURL(phone);
  
  };

export default function CallScreen({navigation}){
    return (
          <View style={{flex:1}}>


<ScrollView>
             
<View style={{flexDirection:'row',marginTop:40,justifyContent:'space-between'}}>
             <TouchableOpacity style={{marginLeft:24}}onPress={()=>communicate('tel')}>
           <View style={styles.container}>
           <View style={{borderRadius:40,height:80,width:80,borderColor:'#2543b0',backgroundColor:'#6bafe3',justifyContent:'center',alignItem:'center',borderWidth:2}}>
           <Feather name="phone-call" size={30} color='#2543b0' style={{marginLeft:21,marginTop:5}}/>
            </View>

          <Text style={{fontWeight: 'bold',fontSize:18,alignSelf:'center',marginTop:11}}>Call now</Text>

            </View>
            </TouchableOpacity>
           
               <TouchableOpacity style={{marginRight:20}} onPress={()=>communicate('sms')}>
                <View style={styles.container1}>
                <View style={{borderRadius:40,height:80,width:80,borderColor:'green',backgroundColor:'#66ff33',justifyContent:'center',alignItem:'center',borderWidth:2}}>
                <AntDesign name="message1" size={30} color="green" style={{marginLeft:23,marginTop:5}} />
                </View>
                  
                     <Text style={{fontWeight:'bold',fontSize:18,alignText :'center',marginTop:7,marginLeft:17}}>Send SMS</Text>
 
            </View>
            </TouchableOpacity>
            </View>



                 
           <View style={{flexDirection:'row',marginTop:50,justifyContent:'space-between'}}>
             <TouchableOpacity style={{marginLeft:24}} onPress={()=>Linking.openURL('http://gmail.com/')}>
           <View style={styles.container}>
           <View style={{borderRadius:40,height:80,width:80,borderColor:'#ffa033',backgroundColor:'#ffe7b0',justifyContent:'center',alignItem:'center',borderWidth:2}}>
           
           <Entypo name="mail" size={30} color="#ffa033"  style={{marginLeft:21,marginTop:5}}/>
            </View>

            <Text style={{fontWeight: 'bold',fontSize:17,alignSelf:'center',marginTop:11}}>Send</Text>
            <Text style={{fontWeight: 'bold',fontSize:17,alignSelf:'center',marginTop:1}}>Email</Text>

            </View>
            </TouchableOpacity>
           
               <TouchableOpacity style={{marginRight:47}} onPress={()=>navigation.navigate('Notification')}>
                <View style={styles.container2}>
                <View style={{borderRadius:40,height:80,width:80,borderColor:'#e01b84',backgroundColor:'#ffc4e4',justifyContent:'center',alignItem:'center',borderWidth:2}}>
                <Ionicons name="ios-notifications" size={33} color="#e01b84" style={{marginLeft:27,marginTop:5}} />
                </View>
                
                  
                     <Text style={{fontWeight:'bold',fontSize:18,alignSelf:'center',marginTop:16,}}>Alert</Text>
            </View>
            </TouchableOpacity>
            </View>
               
       
            </ScrollView>


          </View>

    
          

        
    );
  }


  CallScreen.navigationOptions =({navigation})=> ({
    title: 'Customer Service',
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold',
      marginLeft:16
    },
    headerStyle:{
      backgroundColor:'green'
    },
    headerLeft:<MenuButton navigation={navigation} />,
    headerRight:<SearchButton/>
  });


const styles = StyleSheet.create({
 
      container:{
        borderWidth:1,
        borderColor:'#c0c0c0',
        
        height:180,
        width:"100%",
        borderRadius:6, 
        marginVertical:10,
        shadowColor:'black',
        shadowOffset:{width:0 ,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation: 5,
        backgroundColor:'white',
        padding:25,
        borderRadius:6,   
    },

    container1:{
      borderWidth:1,
      height:180,
      width:"85%",
      borderColor:'#c0c0c0',
      borderRadius:10, 
      marginVertical:10,
      elevation: 5,
      shadowColor:'black',
      shadowOffset:{width:0 ,height:2},
      shadowRadius:6,
      shadowOpacity:0.26,
      backgroundColor:'white',
      padding:25,
      borderRadius:6,
  }
  ,
  container2:{
    borderWidth:1,
    height:180,
    width:"103%",
    borderColor:'#c0c0c0',
    borderRadius:10, 
    marginVertical:10,
    elevation: 5,
    shadowColor:'black',
    shadowOffset:{width:0 ,height:2},
    shadowRadius:6,
    shadowOpacity:0.26,
    backgroundColor:"white",
    padding:25,
    borderRadius:6,
    
   
    
    
}
});