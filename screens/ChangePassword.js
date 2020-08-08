import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Picker,Image,Button} from 'react-native'
import {Ionicons,AntDesign,Entypo,MaterialCommunityIcons} from '@expo/vector-icons'
import MenuButton from '../components/Menu'


export default function ChangePasswordScreen({navigation}){



    
    return(
        <View style={{flex:1,backgroundColor:'#f2f2f2'}}>
        <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:62}}>
  <TouchableOpacity style={{marginTop:25}} >
   <MenuButton navigation={navigation}  />
   </TouchableOpacity>
   <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:110,marginTop:27,marginBottom:5}}>CHANGE PASSWORD</Text>
   <MaterialCommunityIcons name='key-change' size={25} color="white" style={{marginTop:19,marginLeft:54}}/>
        
   </View>

   <View>

       
   <View style={{marginTop:50,backgroundColor:'white',width:'90%',marginLeft:20,height:'75%'}}>
     <View style={{borderBottomWidth:1,borderColor:'#d3d3d3',marginTop:20,height:'14%'}}>
     <Text style={{marginBottom:15,fontWeight:'500',marginLeft:16,marginTop:16,fontSize:22}}>Account Information</Text>

     </View>
    

    <View style={{marginTop:22}}>
    <View style={{flexDirection:'row'}}>
        <Text style={{marginBottom:2,fontSize:18,fontWeight:'500',marginLeft:18}}>Password</Text>
        <Text style={{color:'red',marginLeft:7}}>*</Text>
        </View>

    <TextInput placeholder="Password" onChangeText={(email)=>this.setState({email:email})} placeholderColor="#c4c3cb" style={styles.loginFormTextInput1} secureTextEntry={true}/>



    <View style={{flexDirection:'row',marginTop:14}}>
        <Text style={{marginBottom:2,fontSize:18,fontWeight:'500',marginLeft:18}}>Confirm Password</Text>
        <Text style={{color:'red',marginLeft:7}}>*</Text>
        </View>

       <TextInput placeholder="Confirm Password"  onChangeText={(password)=>this.setState({password:password})} placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>

      <TouchableOpacity style={{marginTop:30}}>
                   <View style={{ padding: 11,backgroundColor:'green',marginLeft:'18%', width:"64%",marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                        <Text style={{color:"white",fontWeight:'bold',alignSelf:'center',fontSize:16}}>Save Settings</Text>
                   </View>
   </TouchableOpacity>

     </View>

     
   </View>


   </View>

 




   </View>
)
}


const  styles=StyleSheet.create({
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 8,
        marginBottom: 5,
      
      },

      loginFormTextInput1: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop:18,
        marginBottom: 5,
      
      },
})