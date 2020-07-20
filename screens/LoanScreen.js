import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'
import {Ionicons,FontAwesome,AntDesign,Entypo,EvilIcons} from '@expo/vector-icons'

export default function LoanScreen({navigation}){
const [Loading,setLoading]=useState(false)
    return(
        <View style={{flex:1}}>
            <FontAwesome  name="user-circle"  size={70} style={{marginTop:140,marginLeft:9}}/>
            <Text style={{marginTop:10,marginLeft:9,fontWeight:'bold',fontSize:18}}>Hi Samuel !</Text>
            
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