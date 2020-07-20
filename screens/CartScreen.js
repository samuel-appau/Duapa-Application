import React,{useState,useContext} from 'react'
import {View,StyleSheet,Button,Text,TouchableOpacity,ScrollView,Image} from 'react-native'
import {CartContext} from '../context/CartContext';
import {Feather,AntDesign,Ionicons} from '@expo/vector-icons'


export default function CartScreen({navigation}){

    const [cart,updateCart]=useContext(CartContext);

//  const deleteNote = (key) => {
//     setnotes((prev) => prev.filter((note) => note.key != key));
//   };

 
  
const handleDelete=(key)=>{
    updateCart((prev)=>prev.filter((cartItem)=> cartItem.id!=key))
  }

  
 return(
        <View style={{flex:1}}>
         <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:65}}>
            <TouchableOpacity style={{marginTop:24}} onPress={()=>navigation.navigate('agroInput')}>
               <AntDesign name="left" color="white" size={30}   />
            </TouchableOpacity>
              <Text style={{fontSize:17,color:'white',marginLeft:80,fontWeight:'bold',marginTop:31,marginBottom:5,}}>Cart Screen</Text>
             <View  style={{flex:2,marginLeft:91,marginTop:28}}>
                 <Ionicons
                    name="ios-cart"
                    size={24}
                    color="white"
                    style={{marginRight:40,marginBottom:-4}}
                    />
                <View  style={{borderRadius:40,width:17,height:17,backgroundColor:'red',alignItems:'center',justifyContent:'center',marginTop:-22.5,marginLeft:15}}>
                  <Text style={{color:"white",fontSize:10}}>{cart.length}</Text>
                </View>
             </View>
          </View>

          <ScrollView>
        {cart.map(
            cartItem=>{
                return(
           <View key={cartItem.id} style={styles.container}>
                {/* <Image source={require(cartItem.image)}   style={{height:120,width:"90%"}}/> */}
                {/* <Text>{cartItem.description}</Text> */}
                <Text style={{fontWeight:'bold',fontSize:20}}>{cartItem.name} </Text>
                <Text> GH₵ {cartItem.price} </Text>
                <View>

                <TouchableOpacity style={{marginTop:20}} onPress={()=>handleDelete(cartItem.id)}>
                        <View style={{ padding: 13,backgroundColor:'red',marginLeft:25,marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold'}}>Delete</Text>
                        </View>
             </TouchableOpacity>

             </View>
                   
         </View>
       
        )}

        )}

        <View>
        <TouchableOpacity onPress={()=>navigation.navigate('buy')}>
                        <View style={{ padding: 13,backgroundColor:'green',marginHorizontal:5,width:'98%',shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold',marginLeft:130}}>Buy now !!!</Text>
                        </View>
             </TouchableOpacity>
        </View>
        </ScrollView>


        </View>

    )
}

const styles=StyleSheet.create(
    {
        container:{
            height:220,
            width:"90%", 
            borderRadius:10,
            marginLeft:20, 
            marginVertical:10,
            alignItems:'center',
            justifyContent:'center',
            shadowColor:'black',
            shadowOffset:{width:0 ,height:2},
            shadowRadius:6,
            shadowOpacity:0.26,
            backgroundColor:'white',
            flexDirection:'column',
        }
    }
)