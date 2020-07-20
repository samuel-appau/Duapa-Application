import React from 'react'
import {View,Text,StyleSheet,ActivityIndicator,Button,TouchableOpacity,ImageBackground} from 'react-native'


export default function EntryScreen({navigation}){

    return(
        <View style={{flex:1,marginTop:-100}}>
             <ImageBackground source={require('../assets/images/logo.jpg')} style={{height:'100%',width:'100%',marginTop:40}}/>
             <View style={{marginTop:-150}} >
             <View>
             {/* <Text style={{}}>Beit Farms</Text> */}
             </View>
              

             

               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:38}}>
               <TouchableOpacity onPress={()=>navigation.navigate('login')} >
                        <View style={{ padding: 11,backgroundColor:'#12e607',borderColor:"white",borderWidth:2,marginLeft:10, width:120,marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold',marginLeft:22}}>LOGIN</Text>
                        </View>
         </TouchableOpacity> 
         
         <TouchableOpacity onPress={()=>navigation.navigate('register')}>
                        <View style={{ padding: 11,backgroundColor:'white',borderColor:"#12e607",borderWidth:2,marginLeft:10, width:120,marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"#12e607",fontWeight:'bold',marginLeft:14,}}>REGISTER</Text>
                        </View>
         </TouchableOpacity> 
             {/* <View style={{backgroundColor:"white",borderColor:"#12e607",marginLeft:20,width:110,borderWidth:2}}>
             <Button  title="LOGIN" color='#12e607'  onPress={()=>navigation.navigate('login')}/>
             </View>

             <View style={{backgroundColor:"#12e607",marginRight:29,width:110,borderColor:'white',borderWidth:2}}>
                 <Button color="white" title="REGISTER" onPress={()=>navigation.navigate('register')}/>
        
             </View> */}
             </View>
          
             </View>
             </View>

    )

}