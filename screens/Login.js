import React, { Component } from "react";

import {Keyboard, Text, View, TextInput,Switch,ActivityIndicator,Image,ImageBackground, TouchableWithoutFeedback,TouchableOpacity, Alert,StyleSheet,KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

const appId = "1047121222092614"

export default class Login extends Component {
  state={
     email:'',
     password:'',
     Loading:false,
     rememberMe:''
  }

  render() {
  
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<ImageBackground 
          style={{width:'100%',height:'100%'}}
          source={require('../assets/images/login.jpg')}
       >
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>DUAPA APP</Text>
          <Text style={{fontWeight:'720',fontSize:29,marginLeft:22,marginBottom:12}}>Login to Your Account</Text>
            <TextInput placeholder="E-Mail" onChangeText={(email)=>this.setState({email:email})} placeholderColor="#c4c3cb" style={styles.loginFormTextInput1} />
            <TextInput placeholder="Password"  onChangeText={(password)=>this.setState({password:password})} placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <View style={{marginTop:9,flexDirection:'row',marginLeft:12}}>

            <Switch 
              style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }] }} 
              value={this.state.rememberMe}
              
              
              /> 

             <Text style={{color:"black",fontWeight:"bold",fontSize:14,marginLeft:-2,marginTop:7}}>Remember Me</Text>
               <TouchableOpacity onPress={()=>this.props.navigation.navigate('forgot')}>
                <Text style={{color:'black',fontWeight:'bold',marginLeft:76,marginTop:7}}>Forgot password</Text>
                </TouchableOpacity>
            </View>

            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Login"
            />
                  
             {this.state.Loading &&
              <View style={{
               position: 'absolute',
               left: 0,
               right: 0,
               top: 206,
               bottom: 0,
               alignItems: 'center',
               justifyContent: 'center'
                 }}>
                    
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            }

           <View style={{flexDirection:'row',marginLeft:15}}>
            <TouchableOpacity  >
                <Text style={{textAlign:'center',height: 17, marginTop: 10,fontWeight:'300'}}>Dont have an account ?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('register')} >
                <Text style={{textAlign:'center',marginTop:10.5,fontWeight:'bold',marginLeft:6,}}>Register</Text>
            </TouchableOpacity>
            </View>
{/*                 
            <Button
              buttonStyle={styles.fbLoginButton}
             onPress={() => this.onFbLoginPress()}
              title="Login with Facebook"
              color="#3897f1"
            /> */}
          </View>

          <View>

          </View>

          <View style={{flexDirection:'row'}}>
          <Text style={{textAlign:'center',marginLeft:'24%'}}>SUPPORTED BY BEIT FARMS</Text>
          <Image  source={require('../assets/images/logo.jpg')}   style={{borderRadius:20,height:20,width:20,marginLeft:10}}  />
          </View>
        </View>
        
       </ImageBackground>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

         this.setState({Loading:true})
    
         fetch('http://abyvoting.tk/login',{
          method:"POST",
          headers:{
             'Accept':'application/json',
             'Content-type':'application/json'
          },
            body:JSON.stringify({
                
                email:this.state.email,
                password:this.state.password
             })
        })
        .then((response)=>response.json())
           .then((responseJSON)=>{
            if(responseJSON.message==="Login Successful"){
                 this.props.navigation.navigate('Root')
            }
            else
              {
                this.setState({Loading:false})
           
              Alert.alert(responseJSON.message)
             this.props.navigation.navigate('login')
        }
        
           })
           .catch((error)=>{
               this.setState({Loading:false})
               Alert.alert(error.message)
           })
    }
  
  

//   async onFbLoginPress() {
//     const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
//       permissions: ['public_profile', 'email'],
//     });
//     if (type === 'success') {
//       const response = await fetch(
//         `https://graph.facebook.com/me?access_token=${token}`);
//       Alert.alert(
//         'Logged in!',
//         `Hi ${(await response.json()).name}!`,
//       );
//     }
//   }
 }


const styles=StyleSheet.create({


    containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "800",
    
    marginTop: 30,
    marginBottom: 160,
    //120
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1
  },
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
    marginTop: 5,
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
    marginTop: -3,
    marginBottom: 9,
  
  },
  loginButton: {
    backgroundColor: 'green',
    borderRadius: 3,
    height: 45,
    marginTop: 17,
    width:'92%',
    marginLeft:'4%'
  },
  fbLoginButton: {
    
    color:'green'
  },
  
  

})