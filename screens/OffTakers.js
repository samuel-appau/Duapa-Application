import React,{useState} from 'react'
import {Text,View,StyleSheet,TextInput,Button,Image,ActivityIndicator,Picker,Alert} from 'react-native'
import {Feather} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {firebase,firebaseDB} from '../firebase1'




const MGender=[
    'MTN-MOMO',
   'VODA-CASH',
   'MicroCredits',
    'Bank'
 ]




getPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }
}

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


const handleSubmit=(setLoading,name,email,Location,Tel,image,Address)=>{
  let dataToSubmit={
    name,
    email,
    Location,
    Tel,
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




export default function OffTakers({navigation}){
  const [image,setImage]=useState(null);
  const [Loading,setLoading]=useState(false)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [Location,setLocation]=useState('')
  const [Tel,setTel]=useState('')
  const [search,setsearch]=useState('')
  const [Address,setAddress]=useState('')

  
    return(
        <View style={{flex:1}}>
         <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:65}}>
         <TouchableOpacity style={{marginTop:24}} onPress={()=>navigation.navigate('Root')}>
         <AntDesign name="left" color="white" size={30}   />
           </TouchableOpacity>
             <Text style={{fontSize:17,color:'white',marginLeft:60,fontWeight:'bold',marginTop:31,marginBottom:5,}}>OffTaker Screen</Text>
             <View  style={{flex:2,marginLeft:81,marginTop:28}}>
            <Ionicons
                    name="ios-person"
                    size={24}
                    color="white"
                    style={{marginRight:40,marginBottom:-4}}
                />
                {/* <View  style={{borderRadius:40,width:17,height:17,backgroundColor:'red',alignItems:'center',justifyContent:'center',marginTop:-22.5,marginLeft:15}}>
                  <Text style={{color:"white",fontSize:10}}>{cart.length}</Text>
                  </View> */}
                
          </View>
      
        </View>>

           <ScrollView>
            
            <View style={{height:500,width:350,marginLeft:12,borderRadius:10,marginTop:10}}>
            <Text style={{fontWeight:'bold',fontSize:17,marginLeft:60}}>Register As an OffTaker</Text>
            <View style={{flexDirection:'row'}}>
                 <Text style={{marginTop:30,fontWeight:'bold',fontSize:15}}>Name</Text>
                 <TextInput placeholder="JohnDoe"  value={name}  onChangeText={name=>setName({name})} 
                   style={{marginLeft:54,height:40,marginTop:22,backgroundColor:'white',width:250,borderColor:"black"}}/>
               </View>

               <View style={{flexDirection:'row'}}>
                 <Text style={{marginTop:30,fontWeight:'bold',fontSize:15}}>Email</Text>
                 <TextInput placeholder="example@gmail.com" value={email}  onChangeText={email=>setEmail({email})} style={{marginLeft:54,height:40,marginTop:22,backgroundColor:'white',width:250}}/>
               </View>

               <View style={{flexDirection:'row'}}>
                 <Text style={{marginTop:30,fontWeight:'bold',fontSize:15}}>Location</Text>
                 <TextInput placeholder="Taifa Burkina"  value={Location}  onChangeText={Location=>setLocation({Location})}style={{marginLeft:30,height:40,marginTop:22,backgroundColor:'white',width:250}}/>
               </View>

               <View style={{flexDirection:'row',marginTop:22}}>
                 <Text style={{marginTop:12,fontWeight:'bold',fontSize:15}}>Telephone</Text>
                 <TextInput  placeholder="024657868" value={Tel}  onChangeText={Tel=>setTel({Tel})} style={{marginLeft:20,height:40,backgroundColor:'white',width: 250}} />
               </View>

               {/* <View style={{flexDirection:'row',marginTop:22}}>
                 <Text style={{marginTop:12,fontWeight:'bold',fontSize:15}}>Gender</Text>
                 <Combobox data={data} title='Select your Gender' styleItem={{marginTop:10,marginBottomWidth:1}} style={{marginLeft:43,height:40,backgroundColor:'white',width: 250,borderRadius:4}}/>
                </View> */}


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
                <TextInput  placeholder="GS-0362-2477" value={Address}  onChangeText={Address=>setAddress({Address})} style={{marginLeft:20,height:40,backgroundColor:'white',width: 200}} />
                 

                </View>
               
               <View style={{flexDirection:'row',marginTop:10}}>
                   <TouchableOpacity>
                        <View>
                             <Text></Text>
                        </View>
                   </TouchableOpacity>
               <View style={{backgroundColor:"#00ccff"}}>
               <Button title='Submit' color='white' style={{width:150}}  onPress={()=>handleSubmit(setLoading,name,email,Location,Tel,image,Address)}/>
               </View>
       
               <View style={{backgroundColor:'red',marginLeft:80}}>
               <Button title='Cancel' color='white'style={{width:250}}  onPress={()=>navigation.navigate('offTaker')} />
               </View>

  
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