import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,Keyboard,TouchableOpacity,TouchableWithoutFeedback,KeyboardAvoidingView,ScrollView} from 'react-native'
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'
import {Ionicons,FontAwesome,AntDesign,Entypo,EvilIcons,Feather} from '@expo/vector-icons'

export default function DifferentAmountScreen({navigation}){
    const [loan,setLoan]=useState(0)
    const [duration,setDuration]=useState(0)
 
const formatNum = (num) => {
    
      let num_parts = num.toString().split('.');
    
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
      return num_parts.join('.');
    
    };


    return(
      <KeyboardAvoidingView style={{flex:1,backgroundColor:'#f2f2f2'}} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex:1,backgroundColor:'#f2f2f2'}}>
          <ScrollView>
            <Feather  name='arrow-left' style={{marginTop:40,marginLeft:5}} size={29} onPress={()=>navigation.navigate('borrow')}/>
            <Text style={{fontWeight:'bold',fontSize:19,marginTop:14,marginLeft:15}}>Request a specific amount</Text>

            <Text style={{marginTop:10,marginLeft:15,fontSize:17}}>
               How much do you want to borrow and for how long ?
                
            </Text>
            
            

            
            <View style={{height:160,width:'90%',marginLeft:17,marginTop:40,borderRadius:1,backgroundColor:'white',borderWidth:1,borderColor:'white'}}>
                 
                 <View style={{marginTop:20}}>
                <View style={{flexDirection:'row'}}>
                 <TextInput placeholder="Enter specific amount" value={loan} autoFocus  keyboardType="phone-pad"  onChangeText={(loan)=>setLoan(loan)} style={{borderWidth:1,marginLeft:12,marginTop:22,backgroundColor:'white', height:40, fontSize: 14,borderRadius: 5,borderWidth: 1, borderColor: '#eaeaea',backgroundColor: '#fafafa',width:200}}/>
                 <Text style={{fontWeight:'bold',marginTop:31,fontSize:17,marginLeft:5}}>GH₵ </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                 <TextInput placeholder="Enter Duration"  autoFocus  keyboardType="phone-pad" value={duration}  
                   
                   onChangeText={(duration)=>setDuration(duration)} 
                   style={{borderWidth:1,marginLeft:12,marginTop:22,backgroundColor:'white', height: 40, fontSize: 14,borderRadius: 5,borderWidth: 1, borderColor: '#eaeaea',backgroundColor: '#fafafa',width:140}}/>
                 <Text style={{fontWeight:'bold',marginTop:31,fontSize:17,marginLeft:5}}>MONTH(S)</Text>
                </View>
            </View>

              <View style={{height:100,width:'90%',marginLeft:17,backgroundColor:'white',marginTop:60,borderRadius:1,borderWidth:1,borderColor:'white'}}>
                <View style={{flexDirection:'row',marginTop:10}}>
                <View style={{borderRightWidth:1,borderRightColor:'#f2f2f2',height:99,width:"50%"}}>
                 <Text style={{marginTop:8,color:'green',fontWeight:'bold',fontSize:18,marginLeft:6}}>INTEREST</Text>
                 <Text style={{marginTop:8,fontSize:18,marginLeft:12,fontWeight:'bold'}}>GH₵ {formatNum(0.05*Number(loan))} (5%)</Text>
                 </View>

                 <View>
                 <View>
                 <Text style={{marginTop:8,color:'green',fontWeight:'bold',fontSize:17,marginLeft:9}}>TOTAL AMOUNT</Text>
                 <Text style={{marginTop:8,fontSize:18,marginLeft:12,fontWeight:'bold'}}>GH₵ {formatNum(Number(loan)+(0.05*Number(loan)))}</Text>
                 </View>

                </View>

                </View>

             </View>
                 

              </View>

                <View style={{marginTop:160}}>
              <TouchableOpacity style={{marginTop:10}} onPress={()=>alert("Loan request has been sent")} >
                        <View style={{ padding: 10,backgroundColor:'green',marginLeft:35,marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,borderWidth:1,borderColor:'white',width:130,marginBottom:6}}>
                             <Text style={{color:"white",fontWeight:'bold',marginLeft:4}}>Request Loan</Text>
                        </View>
             </TouchableOpacity>
             </View>

         </ScrollView>
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
            
    )





}




