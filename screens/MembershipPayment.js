import React, { useState, useContext, useEffect } from 'react';
import { Rave } from 'rave-reactnative-wrapper';
import shortid from 'shortid';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
  CheckBox,
  Alert
} from 'react-native';
import { Linking } from 'expo';
// import { Formik } from 'formik';
import { AntDesign,Ionicons } from '@expo/vector-icons';

export default function Membership({navigation}){

const [fee,setFee] = useState(100);
const [firstName,setfirstName]=useState('')
const [lastName,setlastName]=useState('')
const [email,setEmail]=useState('')
const [phone,setPhone]=useState('')




useEffect(()=>{
  async function fetchData(){

  const response=fetch('http://abyvoting.tk/profile',{
  method:"GET",

  })
.then((response)=>response.json())
   .then((responseJSON)=>{
  //  Alert.alert(responseJSON)
      setfirstName(responseJSON.first_name)
      setlastName(responseJSON.last_name)
      setEmail(responseJSON.email)
      setPhone(responseJSON.mobile)
   })
   .catch((error)=>{
     Alert.alert(error.message)
   })

  }
   fetchData()


})


const onSuccess=(data)=> {
  // PLEASE CALL THE FLUTTERWAVE VERIFY ENDPOINT TO CONFIRM TRANSACTION STATUS

   console.log("success", data);

   if(data!="undefined"){
   fetch('http://abyvoting.tk/register-member',{
    method:"GET",
    headers:{
       'Accept':'application/json',
       'Content-type':'application/json'
    },
      // body:JSON.stringify({
          
      //     email:this.state.email,
      //     password:this.state.password
      //  })
  })
  .then((response)=>response.json())
     .then((responseJSON)=>{
      //  Alert.alert(responseJSON)
      if(responseJSON.message==="registration successful"){
           Alert.alert('You are now a member of beit farms')
      }
      else
        {
          
     
        Alert.alert("Member registration not successful")

  }
  
     })
     .catch((error)=>{
        
         Alert.alert(error.message)
     })
    }

    else{
      Alert.alert('Try again')
    }

    }
   






   // You get the complete response returned that comes from Rave,


 

const onCancel=(data)=>{
 // PLEASE CALL THE FLUTTERWAVE VERIFY ENDPOINT TO CONFIRM TRANSACTION STAT
 Alert.alert(data)
}

const  onError=(data)=> {
   //an error occoured
// PLEASE CALL THE FLUTTERWAVE VERIFY ENDPOINT TO CONFIRM TRANSACTION STATUS

 }


  return (
    <View style={{flex:1,backgroundColor:'#f2f2f2'}}>
      
    <View style={{flexDirection:'row',borderColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:62}}>
       <TouchableOpacity style={{marginTop:25}} onPress={()=>navigation.navigate('Root')}>
        <AntDesign name="left" color="white" size={28}   />
        </TouchableOpacity>

             <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:60,marginTop:27,marginBottom:5}}>Membership Page</Text>
           

            <TouchableOpacity style={{marginLeft:90,marginTop:0}} >
             <View  style={{flex:2,}}>
             <AntDesign name="team"  size={29} color="white"  style={{marginTop:23,marginLeft:0}}  />

                
          </View>
          </TouchableOpacity>

        </View>
       <ScrollView>
        <View style={{marginTop:20,borderBottomWidth:1,borderColor:'white'}}>
        <Text style={{fontWeight:'500',fontSize:26,marginLeft:19}}>Register here!</Text>
        </View>


        <View style={{marginTop:29,backgroundColor:'white',width:'90%',marginLeft:20,height:'60%'}}>
          <View style={{borderBottomWidth:1,borderColor:'#d3d3d3',marginTop:10,}}>
          <Text style={{marginBottom:12,fontSize:22,fontWeight:'500',marginLeft:16}}>Become a registered member</Text>

          </View>
         

         <View style={{marginTop:19}}>
         <Text style={{fontSize:15,fontWeight:'500',marginLeft:10}}>
             Payment of GH₵ 100 is needed for you to become
             a registered member of Beit farms.
             You get to enjoy the following privileges:
              </Text>
             <Text style={{marginTop:10,fontSize:15,fontWeight:'500',marginLeft:10}}>-Loan application</Text>
             <Text style={{marginTop:5,fontSize:15,fontWeight:'500',marginLeft:10}}>-Post and sell farm produce</Text>

            
             

        
        <View style={{marginTop:20,alignSelf:'center',backgroundColor:'green',padding:11}}>

       <TouchableOpacity>
        <Rave
                buttonText="Proceed to make payment"
                raveKey="FLWPUBK_TEST-92aea70bab0011147feb15beacb12e32-X"
                amount={fee}
                currency={'GHS'}
                country={'GH'}
                customerEmail={email}
                customerPhone={phone}
                customer_firstname={firstName}
                customer_lastname={lastName}
                ActivityIndicatorColor="green"
                payment_options="mobilemoneyghana"
                onCancel={()=>onCancel()}
                onSuccess={()=>onSuccess()}
                onError={()=>onError()}
                txref={shortid()}
                
                />
                </TouchableOpacity>

                </View>

          </View>

          
        </View>



        <View style={{marginTop:39,marginBottom:20,backgroundColor:'white',width:'90%',marginLeft:20,height:'25%'}}>
          <View style={{borderBottomWidth:2,borderColor:'#d3d3d3',marginTop:20,}}>
          <Text style={{marginBottom:36,fontSize:16,fontWeight:'bold',marginBottom:10,marginLeft:13}}>Agree to the membership agreement</Text>


          </View>

          <Text style={{fontSize:15,fontWeight:'500',marginLeft:13,marginTop:12}}>
            As a member of beit farms you must pay 
            a monthly dues of GH₵ 20
            </Text>

            {/* <CheckBox
            name="Agree to the Terms and Agreement"
            style={{}}
            /> */}

          </View>
         


  </ScrollView>
        </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: (3 * Dimensions.get('screen').height) / 4,
    padding: 10,
    flex: 11,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
