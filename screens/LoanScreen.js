import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,ActivityIndicator} from 'react-native'
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'
import {Ionicons,FontAwesome,AntDesign,Entypo,EvilIcons} from '@expo/vector-icons'

export default function LoanScreen({navigation}){
const [Loading,setLoading]=useState(false)
const [name,setName]=useState('')
const [offer,setOffer]=useState('')
const [member,setMember]=useState('')
const [mode,setMode]=useState(false)

useEffect(()=>{
  async function fetchData(){

  const response=fetch('http://abyvoting.tk/profile',{
  method:"GET",

  })
.then((response)=>response.json())
   .then((responseJSON)=>{
  //  Alert.alert(responseJSON)
      setName(responseJSON.first_name)
      setMember(responseJSON.is_registered)

   })
   .catch((error)=>{
     Alert.alert(error.message)
   })

  }
   fetchData()
   setMode(true)


})

    return(
  

       <View style={{flex:1}}>

         
         {



           mode===false  ?(

           

           

            <View style={{
              flex:1,
              alignSelf:'center'

                 }}>
                    
                    <ActivityIndicator size="large" color="#0000ff" />
              

              </View>
         
           ):(
              member==='0'?
             (
              <View style={{flex:1}}>
            <FontAwesome  name="user-circle"  size={70} style={{marginTop:140,marginLeft:9}}/>
            <Text style={{marginTop:10,marginLeft:9,fontWeight:'bold',fontSize:18}}>Hi {name} !</Text>
            
            <Text style={{marginTop:10,marginLeft:9}}>Please you must register as a member of Beit farms 
                  to be able to apply for a loan
            </Text>

            <TouchableOpacity onPress={()=>navigation.navigate('member')} style={{marginTop:50}}>
                        <View style={{ padding: 13,backgroundColor:'green',marginLeft:10, width:"58%",marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold',marginLeft:10,}}>Register as a member</Text>
                        </View>
        </TouchableOpacity> 

        </View>

               ):(

                <View style={{flex:1}}>
            <FontAwesome  name="user-circle"  size={70} style={{marginTop:140,marginLeft:9}}/>
            <Text style={{marginTop:10,marginLeft:9,fontWeight:'bold',fontSize:18}}>Hi {name} !</Text>
            
            <Text style={{marginTop:10,marginLeft:9}}>You haven't made any loan request.
                  Need to borrow some money ?.
            </Text>

            <TouchableOpacity onPress={()=>navigation.navigate('borrow')} style={{marginTop:50}}>
                        <View style={{ padding: 13,backgroundColor:'green',marginLeft:10, width:"40%",marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold',marginLeft:10,}}>Borrow money</Text>
                        </View>
        </TouchableOpacity> 

        </View>
               )
               )

              

               }
          
        </View>
        
        
            
    )
    





}


const styles=StyleSheet.create({
  activity: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 410,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
  },
})

LoanScreen.navigationOptions =({navigation})=> ({
    title: 'Loan Screen',
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold',
      marginLeft:45
    },
    headerStyle:{
      backgroundColor:'green'
    },
    headerLeft:<MenuButton navigation={navigation} />,
    headerRight:<SearchButton/>
  });