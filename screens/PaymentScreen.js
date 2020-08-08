// import React,{useState} from 'react'
// import {View,Text,StyleSheet,TextInput,TouchableOpacity,Picker,Button} from 'react-native'
// import {Ionicons,AntDesign} from '@expo/vector-icons'



// export default function PaymentScreen({navigation}){
//     const [search,setsearch]=useState('')
//     const [name,setName]=useState('')
//     const [phone,setPhone]=useState('')
//     const [amount,setAmount]=useState('')

//     const providers=[
//       'MTN-MOMO',
//      'VODA-CASH',
//      'MicroCredits',
//       'Bank'
//    ]

//     return(
//         <View style={{flex:1}}>
//              <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:62}}>
//        <TouchableOpacity style={{marginTop:25}} onPress={()=>navigation.navigate('Root')}>
//         <AntDesign name="left" color="white" size={28}   />
//         </TouchableOpacity>
//              <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:115,marginTop:27,marginBottom:5}}>Payment</Text>
           
//              <Ionicons name="ios-notifications" size={25} color="white"  style={{marginTop:23,marginLeft:120}}/>
//         </View>
//             <View style={{flexDirection:'row',marginTop:20}}>
//                 <View style={{backgroundColor:'green',height:40,width:70}}>
//                 <Text style={{color:'white',marginTop:10,fontWeight:'bold'}}>Full Name</Text>
//                    </View>
//             <TextInput 
//                placeholder='Enter your name'
//                value={name}
//                onChangeText={name=>setName({name})}
//                style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607'}}
//                />
//                </View>
               

//                <View style={{flexDirection:'row',marginTop:20}}>
//                 <View style={{backgroundColor:'green',height:40,width:70}}>
//                 <Text style={{color:'white',marginTop:10,fontWeight:'bold',marginLeft:8}}>Phone</Text>
//                    </View>
//             <TextInput 
//                placeholder='Enter your phone'
//                value={phone}
//                onChangeText={phone=>setPhone({phone})}
//                style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607'}}
//                />
//                </View>

         

          

            


//                <View style={{margin: 10}}>

//           <Picker

//             style={{  borderWidth: 1,

//     borderColor: '#fff',

//     borderRadius: 2,

//     paddingHorizontal: 10,

//     paddingVertical: 5,

//     marginVertical: 10,

//     backgroundColor: '#eee',

//     fontSize: 16,

//     color: 'gray',

//     shadowColor: '#000',

//     shadowOffset: {

//       width: 0,

//       height: 2,

//     },}}

//             onValueChange={(itemValue, itemIndex) => {

//               setsearch(itemValue);

//             }}

//             selectedValue={search}

//           >

//             <Picker.Item value="" label="Select a Service Provider" />

//             {providers.map((provider) => {

//               return (

//                 <Picker.Item label={provider} value={provider} key={provider} />

//               );

//             })}

//           </Picker>
//           </View>
           
//           <View style={{flexDirection:'row',marginTop:20}}>
//                 <View style={{backgroundColor:'green',height:40,width:70}}>
//                 <Text style={{color:'white',marginTop:10,fontWeight:'bold',marginLeft:8}}>Amount</Text>
//                    </View>
//             <TextInput 
//                placeholder='Enter your Amount'
//                value={amount}
//                onChangeText={amount=>setAmount({amount})}
//                style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderColor:'#12e607',marginBottom:10}}
//                />
//                </View>

         

          

               
//                     <Button  title="Proceed" color="green" style={{width:'75%',marginTop:29}}/>

//         </View>
//     )
// }

 // import Rave from 'react-native-rave';
//import Rave from 'react-native-rave-webview';
import { Rave } from 'rave-reactnative-wrapper';
import shortid from 'shortid'
// import PaystackWebView from 'react-native-paystack-webview';
import React, {Component} from 'react';
import {View,Text,TouchableOpacity,TextInput,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,ScrollView} from 'react-native';
import {Ionicons,FontAwesome,AntDesign,Entypo,Feather,EvilIcons,} from '@expo/vector-icons'
export default class PaymentScreen extends Component {

  constructor(props) {
    super(props);

  }


  state={
    email:'',
    mobile:'',
    amount:0,
    firstName:'',
    lastName:''

  }

  onSuccess(data) {
    // PLEASE CALL THE FLUTTERWAVE VERIFY ENDPOINT TO CONFIRM TRANSACTION STATUS
 
     console.log("success", data);
     // You get the complete response returned that comes from Rave,
 
 
   }
 
  onCancel(data) {
   // PLEASE CALL THE FLUTTERWAVE VERIFY ENDPOINT TO CONFIRM TRANSACTION STATUS
   console.log(data);
  }
 
   onError(data) {
     //an error occoured
 // PLEASE CALL THE FLUTTERWAVE VERIFY ENDPOINT TO CONFIRM TRANSACTION STATUS
 
   }


  // const PayNow = (props) => {
  //   return (
  //     <TouchableOpacity style={{}} onPress={props.onPress}>
  //       <View>
  //         <Image source={""} style={{}} />
  //       </View>
  //       <Text style={{}}>Pay Now</Text>
  //       <Entypo name="chevron-thin-right" color="#C7C7CC" size={18} />
  //     </TouchableOpacity>
  //   )
  // }


  componentDidMount(){
    return  fetch('http://abyvoting.tk/profile',{
        method:"GET",
  
        })
      .then((response)=>response.json())
         .then((responseJSON)=>{
        //  Alert.alert(responseJSON.image_icon)
          this.setState({
              email:responseJSON.email,
              mobile:responseJSON.mobile,
              firstName:responseJSON.first_name,
              lastName:responseJSON.last_name
          
          })
    
          
         })
         .catch((error)=>{
           Alert.alert(error)
         })
      
      }
 

  render() {
    return (
      <KeyboardAvoidingView style={{flex:1}} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1,backgroundColor:'#f2f2f2'}}>
         <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:62}}>
      <TouchableOpacity style={{marginTop:25}} onPress={()=>this.props.navigation.navigate('Root')}>
        <AntDesign name="left" color="white" size={28}   />
     </TouchableOpacity>
             <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:115,marginTop:27,marginBottom:5}}>Payment</Text>
           
             <Ionicons name="ios-notifications" size={25} color="white"  style={{marginTop:23,marginLeft:120}}/>
         </View>



  <ScrollView>

          <View  style={{marginTop:10,height:'90%',width:'100%',backgroundColor:'#fff'}}>
          <TextInput  
             placeholder="Customer First Name"   
             value={this.state.firstName}
             //onChangeText={(firstName)=>this.setState({firstName:firstName})}
             style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>



             <TextInput  
             placeholder="Customer Last Name"   
             
             value={this.state.lastName}
             style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>

             <TextInput  
             value={this.state.email}
             //onChangeText={(email)=>this.setState({email:email})}
             placeholder="Customer Email"   
             style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>
             <TextInput  
             placeholder="Description of Transaction" 
           
             onChangeText={(description)=>this.setState({description:description})}
             multiline={true}  
             style={{marginLeft:'5%',height:60,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>

             <TextInput  
             placeholder="Amount(GH₵)"  
             autoFocus  keyboardType="phone-pad"
             onChangeText={(amount)=>this.setState({amount:amount})}
             style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>
            </View> 





            <View style={{marginTop:40,alignSelf:'center',backgroundColor:'green',padding:11}}>

       <TouchableOpacity>
        <Rave
                buttonText="Pay with Flutterwave"
                raveKey="FLWPUBK_TEST-92aea70bab0011147feb15beacb12e32-X"
                amount={this.state.amount}
                currency={'GHS'}
                country={'GH'}
                customerEmail={this.state.email}
                customerPhone={this.state.mobile}
                customer_firstname={this.state.firstName}
                customer_lastname={this.state.lastName}
                ActivityIndicatorColor="green"
                payment_options="mobilemoneyghana"
                onCancel={this.onCancel}
                onSuccess={this.onSuccess}
                onError={this.onError}
                txref={shortid()}
                
                />

                </TouchableOpacity>

        {/* <Rave 
        amount="10" 
        country="GH" 
        currency="GHS" 
        paymentOption="mobilemoneygh"
        email="appausamuel90@gmail.com" 
        firstname="Samuel" 
        lastname="Appau" 
        publickey="FLWPUBK_TEST-92aea70bab0011147feb15beacb12e32-X" 
        encryptionkey="FLWSECK_TESTecbf340756b8"
        meta={[{ metaname: "color", metavalue: "red" }, { metaname: "storelocation", metavalue: "ikeja" }]}
        onSuccess={res => this.onSuccess(res)} 
        onFailure={e => this.onFailure(e)}
        onClose={e => this.onClose(e)}
        /> */}
	    </View>
      </ScrollView>
      </View>
      
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    );
  }

}
