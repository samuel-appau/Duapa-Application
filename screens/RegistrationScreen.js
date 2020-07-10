import React,{useState} from 'react'
import {Text,View,StyleSheet,ActivityIndicator,TextInput,Button,Switch,TouchableOpacity,Alert,Image}  from 'react-native'
import {firebase} from '../firebase1'
import {Ionicons,FontAwesome,AntDesign,Entypo,EvilIcons} from '@expo/vector-icons'


const handleRegistration=(email,password,{navigation},setLoading,phone)=>{
    
          let dataToSubmit={};
          for(let key in email){
            dataToSubmit[key]=email[key]
        }
    
        for(let key in password){
            dataToSubmit[key]=password[key]
        }
        setLoading(true)
         firebase.auth() 
                 .createUserWithEmailAndPassword(
                             dataToSubmit.email,
                             dataToSubmit.password
                                    ).then(()=>{
                                     
                                        navigation.navigate('login')
                                    }).catch(error=>{
                                        setLoading(false)
                                           Alert.alert(error.message)
                                    })
                                }
                             

export default  function RegisterScreen({navigation}){

    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [Loading,setLoading]=useState(false)
    const [confirmPassword,setConfirmPassword]=useState('')
    

    return(
        <View style={{flex:1}}>
             <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:62}}>
        <TouchableOpacity style={{marginTop:15}} onPress={()=>navigation.navigate('Main')}>
        <AntDesign name="left" color="white" size={28}  />
        </TouchableOpacity> 
             <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:90,marginTop:17.5,marginBottom:5}}>Register</Text>

        </View>
            <View>
            <Image  source={require('../assets/images/logo.jpg')} style={{height:230,width:'100%',marginTop:-15}}/>
            </View>
            <View>
                <View style={{flexDirection:'row',marginTop:33}}>
                <View style={{backgroundColor:'green',height:40,width:70}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold'}}>Full Name</Text>
                   </View>
            <TextInput 
               placeholder='Enter your name'
               value={name}
               onChangeText={name=>setName({name})}
               style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607'}}
               />
               </View>


               
               <View style={{flexDirection:'row',marginTop:20}}>
                <View style={{backgroundColor:'green',height:40,width:70}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold',marginLeft:8}}>Phone</Text>
                   </View>
            <TextInput 
               placeholder='Enter your phone'
               value={phone}
               onChangeText={phone=>setPhone({phone})}
               style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607'}}
               />
               </View>
        
             
               <View style={{flexDirection:'row',marginTop:20}} >
               <View style={{backgroundColor:'green',height:40,width:70}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold',marginLeft:8}}>Email</Text>
                   </View>
        
               <TextInput 
               placeholder="Enter your email"
               value={email}
               onChangeText={email=>setEmail({email})}
               style={{backgroundColor:'white',height:40,width:"80%",marginBottom:-60,borderRadius:2,borderColor:'#12e607'}}
               />
               </View>

             <View style={{flexDirection:'row',marginTop:20}}>
             <View style={{backgroundColor:'green',height:40,width:70}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold'}}>Password</Text>
                   </View>
        
               
               <TextInput 
               placeholder="Enter your Password"
               value={password}
               secureTextEntry={true}
               onChangeText={password=>setPassword({password})}
               style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607'}}
               />
               </View>
               <View style={{flexDirection:'row',marginTop:20}}>
               <View style={{backgroundColor:'green',height:40,width:70}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold'}}>Password</Text>
                   </View>
               <TextInput 
               placeholder="Confirm Password"
               secureTextEntry={true}
               value={confirmPassword}
               onChangeText={confirmPassword=>setConfirmPassword({confirmPassword})}
               style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607'}}
               />
               </View>

               <View style={{backgroundColor:'green',marginTop:20,height:45,width:"98%",marginLeft:4}}>
               <Button title="Register" color='white'   style={{width:'98%'}} onPress={()=>handleRegistration(email,password,{navigation},setLoading,phone)}/>
               {/* color='white'  */}
                </View>

                   
               {Loading &&
                <View style={ {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 320,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
                    
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
               }
            
            </View>


        </View>


    )

    // const styles=StyleSheet.create({
    //     activity: {
    //         position: 'absolute',
    //         left: 0,
    //         right: 0,
    //         top: 210,
    //         bottom: 0,
    //         alignItems: 'center',
    //         justifyContent: 'center'
    //     },
    // })
}