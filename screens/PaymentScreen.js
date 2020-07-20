import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Picker,Button} from 'react-native'
import {Ionicons,AntDesign} from '@expo/vector-icons'



export default function PaymentScreen({navigation}){
    const [search,setsearch]=useState('')
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [amount,setAmount]=useState('')

    const providers=[
      'MTN-MOMO',
     'VODA-CASH',
     'MicroCredits',
      'Bank'
   ]

    return(
        <View style={{flex:1}}>
             <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:62}}>
       <TouchableOpacity style={{marginTop:25}} onPress={()=>navigation.navigate('Root')}>
        <AntDesign name="left" color="white" size={28}   />
        </TouchableOpacity>
             <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:115,marginTop:27,marginBottom:5}}>Payment</Text>
           
             <Ionicons name="ios-notifications" size={25} color="white"  style={{marginTop:23,marginLeft:120}}/>
        </View>
            <View style={{flexDirection:'row',marginTop:20}}>
                <View style={{backgroundColor:'green',height:40,width:70}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold'}}>Full Name</Text>
                   </View>
            <TextInput 
               placeholder='Enter your name'
               value={name}
               onChangeText={name=>setName({name})}
               style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607'}}
               />
               </View>
               

               <View style={{flexDirection:'row',marginTop:20}}>
                <View style={{backgroundColor:'green',height:40,width:70}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold',marginLeft:8}}>Phone</Text>
                   </View>
            <TextInput 
               placeholder='Enter your phone'
               value={phone}
               onChangeText={phone=>setPhone({phone})}
               style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607'}}
               />
               </View>

         

          

            


               <View style={{margin: 10}}>

          <Picker

            style={{  borderWidth: 1,

    borderColor: '#fff',

    borderRadius: 2,

    paddingHorizontal: 10,

    paddingVertical: 5,

    marginVertical: 10,

    backgroundColor: '#eee',

    fontSize: 16,

    color: 'gray',

    shadowColor: '#000',

    shadowOffset: {

      width: 0,

      height: 2,

    },}}

            onValueChange={(itemValue, itemIndex) => {

              setsearch(itemValue);

            }}

            selectedValue={search}

          >

            <Picker.Item value="" label="Select a Service Provider" />

            {providers.map((provider) => {

              return (

                <Picker.Item label={provider} value={provider} key={provider} />

              );

            })}

          </Picker>
          </View>
           
          <View style={{flexDirection:'row',marginTop:20}}>
                <View style={{backgroundColor:'green',height:40,width:70}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold',marginLeft:8}}>Amount</Text>
                   </View>
            <TextInput 
               placeholder='Enter your Amount'
               value={amount}
               onChangeText={amount=>setAmount({amount})}
               style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607',marginBottom:10}}
               />
               </View>

         

          

               
                    <Button  title="Proceed" color="green" style={{width:'75%',marginTop:29}}/>

        </View>
    )
}