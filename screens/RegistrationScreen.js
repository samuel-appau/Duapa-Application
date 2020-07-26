import React,{useState,useContext} from 'react'
import {Text,View,StyleSheet,ActivityIndicator,TextInput,Button,Switch,TouchableOpacity,ScrollView,Alert,Image}  from 'react-native'
import {Ionicons,FontAwesome,AntDesign,Entypo,EvilIcons} from '@expo/vector-icons'
import {UserContext} from '../context/UserContext'




                                
const handleRegistration=(firstName,lastName,email,password,{navigation},setLoading,phone,confirmPassword)=>{
    
      
        let dataToSubmit={};
        for(let key in email){
          dataToSubmit[key]=email[key]
      }
    
      for(let key in password){
          dataToSubmit[key]=password[key]
      }
    
    for(let key in phone){
              dataToSubmit[key]=phone[key]
          }
          for(let key in firstName){
            dataToSubmit[key]=firstName[key]
        }
        for(let key in lastName){
            dataToSubmit[key]=lastName[key]
        }
        for(let key in confirmPassword){
            dataToSubmit[key]=confirmPassword[key]
        }
        
    
            setLoading(true)
    
        fetch("http://abyvoting.tk/register",{
            method:"POST",
            headers:{
               'Accept':'application/json',
               'Content-type':'application/json'
            },
            body:JSON.stringify({
                first_name:dataToSubmit.firstName,
                last_name:dataToSubmit.lastName,
                email:dataToSubmit.email,
                contact:dataToSubmit.phone,
                password:dataToSubmit.password,
                password_confirmation:dataToSubmit.confirmPassword
                
            })
        })
        .then((response)=>response.json())
           .then((responseJSON)=>{
            
            
            
        if(responseJSON.message==="Registered Successful"){
            navigation.navigate('login')
       }
       else
         {
          setLoading(false)
        Alert.alert(responseJSON.message)
         navigation.navigate('register')
   }
         
           })
           .catch((error)=>{
               Alert.alert(error)
           })
    }
            


export default  function RegisterScreen({navigation}){
    
  
    const  [password,setPassword]=useState('')
    const  [firstName,setfirstName]=useState('')
    const  [lastName,setlastName]=useState('')
     const [phone,setPhone]=useState('')
     const [email,setEmail]=useState('')
    const  [Loading,setLoading]=useState(false)
    const  [confirmPassword,setConfirmPassword]=useState('')
    

    return(
        <View style={{flex:1}}>
             <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:7,height:68}}>
        <TouchableOpacity style={{marginTop:25}} onPress={()=>navigation.navigate('login')}>
        <AntDesign name="left" color="white" size={28}  />
        </TouchableOpacity> 
             <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:120,marginTop:27,marginBottom:5}}>Register</Text>

        </View>
        <ScrollView>
            <View>
            <Image  source={require('../assets/images/logo.jpg')} style={{height:230,width:'100%',marginTop:-16}}/>
            </View>
            <View>
                <View style={{flexDirection:'row',marginTop:33,marginLeft:5}}>
                <View style={{backgroundColor:'green',height:40,width:80}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold',fontSize:14}}>First Name</Text>
                   </View>
            <TextInput 
               placeholder='Enter your first name'
               value={firstName}
               onChangeText={firstName=>setfirstName({firstName})}
               style={{backgroundColor:'white',height:40,width:"75%",borderRadius:2,borderColor:'green',borderWidth:1}}
               />
               </View>


             <View style={{flexDirection:'row',marginTop:23,marginLeft:5}}>
                <View style={{backgroundColor:'green',height:40,width:80}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold'}}>Last Name</Text>
                   </View>
            <TextInput 
               placeholder='Enter your last name'
               value={lastName}
               onChangeText={lastName=>setlastName({lastName})}
               style={{backgroundColor:'white',height:40,width:"75%",borderRadius:2,borderColor:'green',borderWidth:1}}
               />
               </View>


               
               <View style={{flexDirection:'row',marginTop:20,marginLeft:5}}>
                <View style={{backgroundColor:'green',height:40,width:80}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold',marginLeft:8}}>Phone</Text>
                   </View>
            <TextInput 
               placeholder='Enter your phone'
               value={phone}
               onChangeText={phone=>setPhone({phone})}
               style={{backgroundColor:'white',height:40,width:"75%",borderRadius:2,borderColor:'green',borderWidth:1}}
               />
               </View>
        
             
               <View style={{flexDirection:'row',marginTop:20,marginLeft:5}} >
               <View style={{backgroundColor:'green',height:40,width:80}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold',marginLeft:8}}>Email</Text>
                   </View>
        
               <TextInput 
               placeholder="Enter your email"
               value={email}
               onChangeText={email=>setEmail({email})}
               style={{backgroundColor:'white',height:40,width:"75%",marginBottom:-60,borderRadius:2,borderColor:'green',borderWidth:1}}
               />
               </View>

             <View style={{flexDirection:'row',marginTop:20,marginLeft:5}}>
             <View style={{backgroundColor:'green',height:40,width:80}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold',marginLeft:3}}>Password</Text>
                   </View>
        
               
               <TextInput 
               placeholder="Enter your Password"
               value={password}
               secureTextEntry={true}
               onChangeText={password=>setPassword({password})}
               style={{backgroundColor:'white',height:40,width:"75%",borderRadius:2,borderColor:'green',borderWidth:1}}
               />
               </View>
               <View style={{flexDirection:'row',marginTop:20,marginLeft:5}}>
               <View style={{backgroundColor:'green',height:40,width:80}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold',marginLeft:3}}>Password</Text>
                   </View>
               <TextInput 
               placeholder="Confirm Password"
               secureTextEntry={true}
               value={confirmPassword}
               onChangeText={confirmPassword=>setConfirmPassword({confirmPassword})}
               style={{backgroundColor:'white',height:40,width:"75%",borderRadius:2,borderColor:'green',borderWidth:1}}
               />
               </View>



               <TouchableOpacity onPress={()=>handleRegistration(firstName,lastName,email,password,{navigation},setLoading,phone,confirmPassword)} style={{marginTop:20,}}>
                        <View style={{ padding: 13,backgroundColor:'green',marginHorizontal:5,width:'96%',height:45,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold',fontSize:19,marginLeft:124,marginTop:-4}}>Register</Text>
                        </View>
             </TouchableOpacity>

               

                   
               {Loading &&
                <View style={ {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 406,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
                    
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
               }
            
            </View>
            </ScrollView>


        </View>


    )

 
}