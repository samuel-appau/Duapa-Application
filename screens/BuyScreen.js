import React,{useState,useContext}from 'react';
import { ScrollView, StyleSheet,View,Text,TouchableOpacity,TextInput,Button} from 'react-native';
import {CartContext} from '../context/CartContext';
import {Ionicons,FontAwesome,AntDesign,Entypo,EvilIcons,Feather} from '@expo/vector-icons'
export default function BuyScreen({navigation}){

    const [cart,updateCart]=useContext(CartContext);
    const [quantity,setQuantity]=useState("1")
    const [total,setTotal]=useState("0")
   
    const [Totquantity,setTotQuantity]=useState("5")


      function TotalPrice(){
        return (cart.reduce((prev,cartItem)=>{
              prev += cartItem.price;

              return  (prev)
         },0)
        
    )};
   
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:65}}>
            <TouchableOpacity style={{marginTop:24}} onPress={()=>navigation.navigate('cart')}>
               <AntDesign name="left" color="white" size={30}   />
            </TouchableOpacity >
              <Text style={{fontSize:17,color:'white',marginLeft:80,fontWeight:'bold',marginTop:31,marginBottom:5,}}>Purchase Screen</Text>
             <View  style={{flex:2,marginLeft:91,marginTop:28}}>
                 <Ionicons
                    name="ios-cart"
                    size={24}
                    color="white"
                    style={{marginBottom:-4}}
                  
                    />
                <View  style={{borderRadius:40,width:17,height:17,backgroundColor:'red',alignItems:'center',justifyContent:'center',marginTop:-22.5,marginLeft:15}}>
                  <Text style={{color:"white",fontSize:10}}>{cart.length}</Text>
                </View>
             </View>
          </View>

        <View>
        <ScrollView>
        {cart.map(
            cartItem=>{
                return(
           <View key={cartItem.id} style={{borderBottomWidth:1,borderBottomColor:'#c0c0c0',height:40}}>
               <View style={{flexDirection:'row'}}>
                   <View style={{flex:12,flexDirection:'row'}}>
                <Text style={{fontWeight:'bold',fontSize:20,marginTop:4}}>{cartItem.name}</Text>
                 <Text style={{color:"red",marginLeft:15}}> GH₵ {quantity * cartItem.price}</Text>
                
                </View>
                <View style={{marginLeft:15,flexDirection:'row',flex:3,marginTop:3}}>
                <Text style={{marginTop:4}} >Qty</Text>
                
                <TextInput value={quantity}   style={{borderColor:"#c0c0c0",borderWidth:1,marginLeft:5,height:30,backgroundColor:'white',width: 50}}/>
                {/* onChangeText={quantity=>setQuantity({quantity})} */}
                </View>

                </View>
                

                {/* <TouchableOpacity onPress={()=>handleDelete(cartItem.id)}>
                        <View style={{ padding: 13,backgroundColor:'red',marginLeft:25,marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold'}}>Delete</Text>
                        </View>
             </TouchableOpacity> */}

             </View>
                   
    
       
        )}

        )}
        <View style={{borderColor:'#c0c0c0',borderWidth:1,width:'96%',height:110,marginLeft:9,marginTop:50}}>
        <View style={{flexDirection:'row'}}>
            <View style={{borderColor:'#c0c0c0',borderRightWidth:1,width:'48%',height:52}}>
            <Text style={{fontWeight:'bold',fontSize:20,marginTop:7,marginLeft:10}}>SubTotal:</Text>
             </View>
            <View style={{borderColor:'#c0c0c0',borderBottomWidth:1,width:'52%',height:54}}>
            <Text style={{fontWeight:'bold',fontSize:20,marginTop:7,marginLeft:10}}>GH₵ {TotalPrice()}</Text>
            </View>
            </View>

            <View style={{flexDirection:'row'}}>
            <View style={{borderColor:'#c0c0c0',borderTopWidth:1,width:'48%',height:53}}>
            <Text style={{fontWeight:'bold',fontSize:20,marginTop:7,marginLeft:10}}>Total:</Text>
             </View>
            <View style={{borderColor:'#c0c0c0',borderLeftWidth:1,width:'50%',height:52}}>
            <Text style={{fontWeight:'bold',fontSize:20,marginTop:7,marginLeft:10}}>GH₵ {TotalPrice()}</Text>
            </View>
            </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('payment')} style={{marginTop:30}}>
                        <View style={{ padding: 13,backgroundColor:'green',marginLeft:10, width:"40%",marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold',marginLeft:10,}}>Make-Payment</Text>
                        </View>
        </TouchableOpacity> 
        </ScrollView>
        </View>
        </View>

        
    )

}


