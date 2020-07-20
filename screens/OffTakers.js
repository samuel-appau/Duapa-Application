import React,{useState,useContext} from 'react'
import {Text,View,StyleSheet,ScrollView,TextInput,Button,Image,Modal,ActivityIndicator,TouchableOpacity,Picker,Alert} from 'react-native'
import {Feather,AntDesign,Ionicons} from '@expo/vector-icons'

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {firebase,firebaseDB} from '../firebase1'
import {UserContext} from '../context/UserContext'
 


const MGender=[
    'MALE',
    'FEMALE'
 ]




// getPermissionAsync = async () => {
//   if (Constants.platform.ios) {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//     if (status !== 'granted') {
//       alert('Sorry, we need camera roll permissions to make this work!');
//     }
//   }
// }

const pickImage = async (setImage) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
  });

  console.log(result);

  if (!result.cancelled) {
    setImage(result.uri );
  }
};


const handleSubmit=(setLoading,name,email,Location,phone,image,Address)=>{
  let dataToSubmit={
    name,
    email,
    Location,
    phone,
    image,
    Address


  }
 
  setLoading(true)
  firebaseDB.ref('RegistrationDetails').push(dataToSubmit)
  .then(()=>{
        Alert.alert("Registration successful")
        setLoading(false)
           
  })
  .catch(error=>{
    
    Alert.alert(error.message)

  })

}




export default function OffTaker({navigation}){
  const {name,setName,phone,setPhone,email,setEmail}=useContext(UserContext)
  const [image,setImage]=useState(null);
  const [Loading,setLoading]=useState(false)
  //  const [name,setName]=useState('')
    // const [email,setEmail]=useState('')
  const [Location,setLocation]=useState('')
//  const [phone,setPhone]=useState('')
  const [search,setsearch]=useState('')
  const [Address,setAddress]=useState('')

  
    return(
        <View style={{flex:1}}>
          
         <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:65}}>
         <TouchableOpacity style={{marginTop:24}} onPress={()=>navigation.navigate('Root')}>
         <AntDesign name="left" color="white" size={30}   />
           </TouchableOpacity>
             <Text style={{fontSize:17,color:'white',marginLeft:60,fontWeight:'bold',marginTop:31,marginBottom:5,}}>Membership Screen</Text>
             <View  style={{flex:2,marginLeft:100,marginTop:28}}>
            <AntDesign
                    name="team"
                    size={24}
                    color="white"
                    style={{marginBottom:-4}}
                />
                {/* <View  style={{borderRadius:40,width:17,height:17,backgroundColor:'red',alignItems:'center',justifyContent:'center',marginTop:-22.5,marginLeft:15}}>
                  <Text style={{color:"white",fontSize:10}}>{cart.length}</Text>
                  </View> */}
                
          </View>
      
        </View>

           <ScrollView>
            
            <View style={{marginLeft:12,borderRadius:10,marginTop:10}}>
            <Text style={{fontWeight:'bold',fontSize:17,marginLeft:60}}>Beit farms Membership Form</Text>
            <View style={{flexDirection:'row'}}>
                 <Text style={{marginTop:30,fontWeight:'bold',fontSize:15}}>Name</Text>
                 <TextInput placeholder="JohnDoe"  value={name}  onChangeText={name=>setName({name})} 
                   style={{marginLeft:54,height:40,marginTop:22,backgroundColor:'white',width:250,borderColor:"#c0c0c0",borderWidth:1}}/>
               </View>

               <View style={{flexDirection:'row'}}>
                 <Text style={{marginTop:30,fontWeight:'bold',fontSize:15}}>Email</Text>
                 <TextInput placeholder="example@gmail.com" value={email}  onChangeText={email=>setEmail({email})} style={{borderColor:"#c0c0c0",borderWidth:1,marginLeft:54,height:40,marginTop:22,backgroundColor:'white',width:250}}/>
               </View>

               <View style={{flexDirection:'row'}}>
                 <Text style={{marginTop:30,fontWeight:'bold',fontSize:15}}>Location</Text>
                 <TextInput placeholder="Taifa Burkina"  value={Location}  onChangeText={Location=>setLocation({Location})} style={{borderColor:"#c0c0c0",borderWidth:1,marginLeft:30,height:40,marginTop:22,backgroundColor:'white',width:250}}/>
               </View>

               <View style={{flexDirection:'row',marginTop:22}}>
                 <Text style={{marginTop:12,fontWeight:'bold',fontSize:15}}>Phone</Text>
                 <TextInput  placeholder="024657868" value={phone}  onChangeText={phone=>setPhone({phone})} style={{borderColor:"#c0c0c0",borderWidth:1,marginLeft:45,height:40,backgroundColor:'white',width: 250}} />
               </View>

               {/* <View style={{flexDirection:'row',marginTop:22}}>
                 <Text style={{marginTop:102,fontWeight:'bold',fontSize:15}}>Gender</Text>
                 <Combobox data={data} title='Select your Gender' styleItem={{marginTop:10,marginBottomWidth:1}} style={{marginLeft:43,height:40,backgroundColor:'white',width: 250,borderRadius:4}}/>
                </View> */}


                <View style={{margin: 10}}>

          <Picker

            style={{  borderWidth: 1,

    borderColor: '#fff',
    marginLeft:-6,
    borderRadius: 2,

    paddingHorizontal: 6,

    paddingVertical: 6,

    marginVertical: 6,

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

            <Picker.Item value="" label="Select your Gender" />

            {MGender.map((gender) => {

              return (

                <Picker.Item label={gender} value={gender} key={gender} />

              );

            })}

          </Picker>
          </View>

                <View style={{flexDirection:'row',marginTop:20}}>
                  <Text style={{marginTop:12,fontWeight:'bold',fontSize:15}}>Photo</Text>
                    <View style={{flexDirection:'column',marginLeft:60}}>
                    <Button  title="Choose Image" onPress={()=>pickImage(setImage)} style={{marginLeft:50,marginTop:-10}}/>
                    {image &&
                       <Image source={{ uri: image }} style={{ width: 100, height: 100,marginLeft:10,marginTop:-10}} />}
                    </View>

                </View>


                <View style={{flexDirection:'row',marginTop:10}}>
                <Text style={{marginTop:12,fontWeight:'bold',fontSize:15}}>Digital-Address</Text>
                <TextInput  placeholder="GS-0362-2477" value={Address}  onChangeText={Address=>setAddress({Address})} style={{marginLeft:20,height:40,backgroundColor:'white',width: 200,borderColor:"#c0c0c0",borderWidth:1}} />
                 

                </View>
               
                <View style={{flexDirection:'row',marginTop:20}}>
               <TouchableOpacity onPress={()=>navigation.navigate('memPay')} >
               {/* onPress={()=>handleSubmit(setLoading,name,email,Location,phone,image,Address)} */}
                        <View style={{ padding: 13,backgroundColor:"#00ccff",marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold'}}>Submit</Text>
                        </View>
                   </TouchableOpacity> 



                   <TouchableOpacity onPress={()=>navigation.navigate('offTaker')}>
                        <View style={{ padding: 13,backgroundColor:'red',marginLeft:25,marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold'}}>Cancel</Text>
                        </View>
                   </TouchableOpacity> 
               {/* <View style={{}}>
               <Button title='Submit' color='white' style={{width:150}}  />
               </View> */}
       
               {/* <View style={{marginLeft:80}}>
               <Button title='Cancel' color='white'style={{width:250}}   />
               </View> */}

  
               </View>

               {Loading &&
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
               }

               
           </View>
        </ScrollView>
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