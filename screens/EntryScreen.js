import React from 'react'
import {View,Text,StyleSheet,ActivityIndicator,Button,ImageBackground} from 'react-native'


export default function EntryScreen({navigation}){

    return(
        <View style={{flex:1,marginTop:-100}}>
             <ImageBackground source={require('../assets/images/logo.jpg')} style={{height:'100%',width:'100%',marginTop:40}}/>
             <View style={{marginTop:-150}} >
             <View>
             {/* <Text style={{}}>Beit Farms</Text> */}
             </View>
              
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:38}}>
             <View style={{backgroundColor:"white",borderColor:"#12e607",marginLeft:20,width:110,borderWidth:2}}>
             <Button  title="LOGIN" color='#12e607'  onPress={()=>navigation.navigate('login')}/>
             </View>

             <View style={{backgroundColor:"#12e607",marginRight:29,width:110,borderColor:'white',borderWidth:2}}>
                 <Button color="white" title="REGISTER" onPress={()=>navigation.navigate('register')}/>
        
             </View>
             </View>
          
             </View>
             </View>

    )

}