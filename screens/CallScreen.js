import React,{Component} from 'react';
import { Text, View, StyleSheet, Button,Platform,TouchableOpacity,Image} from 'react-native';
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
  
    Linking.openURL(phone);
  
  };

export default function CallScreen({navigation}){
    return (
      <View style={styles.container}>
          <Image  source={require('../assets/images/cover.jpg')} style={{height:'100%',width:'100%',marginTop:-28}}/>
          <Text style={{marginTop:-510,fontWeight:'bold'}}>Call/Chat with a customer service agent</Text>
            <View

            style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'row',marginTop:460}}>

            <TouchableOpacity

            onPress={()=>communicate('tel')}

              style={[styles.callMessageBtn, styles.call]}

            >

              <Feather name="phone-call" size={22} color="#FFF" />

              <Text style={styles.callMessageBtnText}>Call now</Text>

            </TouchableOpacity>

            <TouchableOpacity

            onPress={()=>communicate('sms')}

              style={[styles.callMessageBtn, styles.message]}

            >

              <AntDesign name="message1" size={22} color="#FFF" />

              <Text style={styles.callMessageBtnText}>Send SMS</Text>

            </TouchableOpacity>

          </View>

          

        </View>
    );
  }


  CallScreen.navigationOptions =({navigation})=> ({
    title: 'Contact',
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold',
      marginLeft:36
    },
    headerStyle:{
      backgroundColor:'green'
    },
    headerLeft:<MenuButton navigation={navigation} />,
    headerRight:<SearchButton/>
  });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  call: {
    
        backgroundColor: '#51AB5A',
    
      },
    
      message: {
    
        backgroundColor: '#4081F1',
    
      },
    
      callMessageBtn: {
    
        borderRadius: 5,
    
        flexDirection: 'row',
    
        padding: 10,
        
            marginHorizontal: 5,
        
            shadowColor: '#000',
        
            shadowOffset: {
        
              width: 0,
        
              height: 2,
        
            },
        
            shadowOpacity: 0.25,
        
            shadowRadius: 3.84,
        
        
        
            elevation: 5,
    
      },
    
      callMessageBtnText: {
    
        color: '#FFF',
    
        fontWeight: 'bold',
    
        marginLeft: 5,
    
      },
});