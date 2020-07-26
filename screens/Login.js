import React, { Component } from "react";

import {Keyboard, Text, View, TextInput,ActivityIndicator,Image, TouchableWithoutFeedback,TouchableOpacity, Alert,StyleSheet,KeyboardAvoidingView} from 'react-native';
 import { Button } from 'react-native-elements';

const appId = "1047121222092614"

export default class Login extends Component {
  state={
     email:'',
     password:'',
     Loading:false
  }

  render() {
  
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>DUAPA APP</Text>
            <TextInput placeholder="E-Mail" onChangeText={(email)=>this.setState({email:email})} placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password"  onChangeText={(password)=>this.setState({password:password})} placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
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
               top: 118,
               bottom: 0,
               alignItems: 'center',
               justifyContent: 'center'
                 }}>
                    
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            }


            <TouchableOpacity  >
                <Text style={{textAlign:'center',height: 17, marginTop: 10,color:'green'}}>No account yet ?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('register')} >
                <Text style={{textAlign:'center',marginTop:5,textDecorationLine: 'underline',color:'green'}}>Register now</Text>
            </TouchableOpacity>
{/*                 
            <Button
              buttonStyle={styles.fbLoginButton}
             onPress={() => this.onFbLoginPress()}
              title="Login with Facebook"
              color="#3897f1"
            /> */}
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={{textAlign:'center',marginLeft:'24%'}}>SUPPORTED BY BEIT FARMS</Text>
          <Image  source={require('../assets/images/logo.jpg')}   style={{borderRadius:20,height:20,width:20,marginLeft:10}}  />
          </View>
        </View>
        

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
  
  

  async onFbLoginPress() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }
}


const styles=StyleSheet.create({


    containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
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