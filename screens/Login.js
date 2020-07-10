import React,{useState} from 'react'
import {Text,View,StyleSheet,ActivityIndicator,TextInput,Button,Switch,TouchableOpacity,Alert,Image}  from 'react-native'
 import {firebase,firebaseDB} from '../firebase1'



const handleLogin=(email,password,{navigation},setLoading)=>{
      let dataToSubmit={};
      for(let key in email){
        dataToSubmit[key]=email[key]
    }

    for(let key in password){
        dataToSubmit[key]=password[key]
    }
    setLoading(true)
     firebase.auth() 
             .signInWithEmailAndPassword(
                         dataToSubmit.email,
                         dataToSubmit.password
                                ).then(()=>{
                                 
                                    navigation.navigate('Root')
                                }).catch(error=>{
                                    setLoading(false)
                                       Alert.alert(error.message)
                                })
                        }

        const   toggleRememberMe = (value,email,password,setRememberMe,{navigation}) => {
                            setRememberMe(value) 
                              if (value === true) {

                                let dataToSubmit={};
                                for(let key in email){
                                  dataToSubmit[key]=email[key]
                              }
                          
                              for(let key in password){
                                  dataToSubmit[key]=password[key]
                              }
                            
                               firebase.auth() 
                                       .signInWithEmailAndPassword(
                                                   dataToSubmit.email,
                                                   dataToSubmit.password
                                                          ).then(()=>{
                                                              navigation.navigate('Root')
                                                          }).catch(error=>{
                                                                
                                                                 Alert.alert(error.message)
                                                          })
                                                  }
                            }
                         

export default function Login({route,navigation}){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phone,setPhone]=useState('')
    const [Loading,setLoading]=useState(false)
    const [rememberMe,setRememberMe]=useState('')
    const [userType,setUserType]=useState('')
    


    return(
        <View style={{flex:1,marginTop:-20,backgroundColor:'#12e607'}}>

            <View  style={{borderRadius:10,marginTop:100,width:"95%",marginLeft:8,height:"62%"}}>

                <View style={{marginTop:20}}>  
                <TextInput 
               placeholder="Enter your email"
               value={email}
               onChangeText={email=>setEmail({email})}
               
               
               style={{marginTop:10,marginBottom:20,backgroundColor:'white',height:50,width:"90%",marginBottom:-60,marginLeft:15,borderRadius:6}}
               />

               <TextInput
               autoCorrect={false}
               placeholder="Enter your Phone Number"
               value={phone}
               onChangeText={phone=>setPhone({phone})}
               style={{marginTop:120,backgroundColor:'white',height:50,marginBottom:-50,width:"90%",marginLeft:15,borderRadius:6}}
               />

               <TextInput
               autoCorrect={false}
               secureTextEntry={true}
               placeholder="Password"
               value={password}
               onChangeText={password=>setPassword({password})}
               style={{marginTop:110,backgroundColor:'white',height:50,marginBottom:-50,width:"90%",marginLeft:15,borderRadius:6}}
               />


               <View style={{flexDirection:'row',marginLeft:12,marginTop:75}}>
                 <Switch 
                 style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }] }} 
                 value={rememberMe}
                 onValueChange={(value) =>toggleRememberMe(value,email,password,setRememberMe,{navigation})} />
                <Text style={{color:"white",fontWeight:"bold",fontSize:14,marginTop:8,marginLeft:-7}}>Remember Me</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Forget')}>
                <Text style={{marginLeft:39,color:"white",fontWeight:"bold",fontSize:14,marginTop:8}}>Forgot Password ? </Text>
                </TouchableOpacity>
                </View>

               <View  style={{backgroundColor:"green",marginTop:29,height:45,width:"90%",marginLeft:15,borderRadius:7}}>
                   <Button  color="white"  title="Login"  onPress={()=>handleLogin(email,password,{navigation},setLoading)}/>
                
               </View>
                 
               {Loading &&
                <View style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 360,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
                    
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            }
                

               </View>

            </View>
            <Text style={{marginLeft:100,marginTop:80}}>Not registered with Beit?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('register')}>
                <Text style={{marginLeft:131,marginTop:8,textDecorationLine: 'underline',color:'red'}}>Register now</Text>
            </TouchableOpacity>
        </View>
    )
}



// const styles=StyleSheet.create({
//     activity: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 230,
//         bottom: 0,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
// })