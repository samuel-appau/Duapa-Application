import React, { useState, useContext, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
// import { Formik } from 'formik';
import { AntDesign,Ionicons } from '@expo/vector-icons';

export default function MembershipPaymentForm({navigation}){


const [fee,setFee] = useState(100);

  return (
    <View style={{flex:1}}>
    <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:62}}>
       <TouchableOpacity style={{marginTop:25}} onPress={()=>navigation.navigate('offTaker')}>
        <AntDesign name="left" color="white" size={28}   />
        </TouchableOpacity>
             <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:115,marginTop:27,marginBottom:5}}>Payment</Text>
           {/* <View style={{flexDirection:'row'}}>
           <Ionicons name="ios-notifications" size={25} color="white"  style={{marginTop:23,marginLeft:120}}/>
           <View  style={{borderRadius:40,width:17,height:17,backgroundColor:'red',alignItems:'center',justifyContent:'center',marginTop:-22.5,marginLeft:0}}>
                  <Text style={{color:"white",fontSize:10}}>0</Text>
                  </View>
            </View> */}

            <TouchableOpacity style={{marginLeft:110,marginTop:0}} >
             <View  style={{flex:2,}}>
             <Ionicons name="ios-notifications" size={29} color="white"  style={{marginTop:23,marginLeft:0}}/>
                <View  style={{borderRadius:40,width:17,height:17,backgroundColor:'red',alignItems:'center',justifyContent:'center',marginTop:-32,marginLeft:10.5}}>
                  <Text style={{color:"white",fontSize:10,marginTop:-1.5,marginLeft:-1.0}}>0</Text>
                  </View>
                
          </View>
          </TouchableOpacity>

        </View>
        <Text style={{marginLeft:17}}>To complete the membership form,you must pay an amount of GH₵100  to proceed </Text>
        <View style={{height:260,width:'90%',marginLeft:17,marginTop:20,borderRadius:1,borderStyle:'dashed',borderWidth:1,borderWidthColor:'#c0c0c0'}}>

        <TextInput placeholder="Enter Mobile Money number"  style={{borderColor:"#c0c0c0",borderWidth:1,marginLeft:12,height:35,marginTop:22,backgroundColor:'white',width:200}}/>

        <TextInput placeholder="Enter Mobile Money PIN"  style={{borderColor:"#c0c0c0",borderWidth:1,marginLeft:12,height:35,marginTop:22,backgroundColor:'white',width:200}}/>
        <View style={{flexDirection:'row'}}>
        <TextInput placeholder="100" value={fee} style={{borderColor:"#c0c0c0",borderWidth:1,marginLeft:12,height:35,marginTop:22,backgroundColor:'white',width:80}}/>
        <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,marginTop:25}}>GH₵</Text>
        </View>
        <TouchableOpacity style={{marginTop:30}}>
                        <View style={{ padding: 11,backgroundColor:'green',marginLeft:10, width:"40%",marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold',marginLeft:4,}}>Make-Payment</Text>
                        </View>
        </TouchableOpacity> 

        </View>


        <Text style={{marginLeft:17,marginTop:20}}>Also note that as a member of Beit farms ,you will be  required to pay monthly dues of GH₵ 10 to Beit farms </Text>
        <View style={{height:100,width:'90%',marginLeft:17,marginTop:20,borderRadius:1,borderStyle:'dashed',borderWidth:1,borderWidthColor:'#c0c0c0'}}>
        <Text style={{marginTop:5,fontWeight:'bold'}}>If you agree with the condition,Click the button below to finish the process</Text>
        <TouchableOpacity  style={{marginTop:6}}>
                        <View style={{ padding: 11,backgroundColor:'blue',marginLeft:196, width:"40%",marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold',marginLeft:40}}>I Accept</Text>
                        </View>
        </TouchableOpacity> 

        </View>

          <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                  marginTop:30,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate('offTaker')}
                  style={[styles.btn, { backgroundColor: '#ddd' }]}
                >
                  <AntDesign name="close" size={30} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity
                   onPress={()=>navigation.navigate('Root')} 
                  style={[
                    styles.btn,
                    { marginLeft: 10, backgroundColor: '#F9A91E' },
                  ]}
                >
                  <AntDesign name="check" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
       
     

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
