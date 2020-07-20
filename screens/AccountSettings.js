import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Picker,Image,Button} from 'react-native'
import {Ionicons,AntDesign,Feather,FontAwesome} from '@expo/vector-icons'
import MenuButton from '../components/Menu'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';





const pickImage = async (setImage,setMode) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
  
    console.log(result);
  
    if (!result.cancelled) {
        setMode(true)
      setImage(result.uri );
    }
  };



export default function AccountScreen({navigation}){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [location,setLocation]=useState('')
    const [phone,setPhone]=useState('')
    const [image,setImage]=useState(null)
    const [mode,setMode]=useState(false)

    return(
        <View style={{flex:1}}>
             <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:62}}>
       <TouchableOpacity style={{marginTop:25}}>
        <MenuButton navigation={navigation}  />
        </TouchableOpacity>
             <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:78,marginTop:27,marginBottom:5}}>ACCOUNT SETTINGS SCREEN</Text>
           
           <Ionicons name="ios-settings" size={25} color="white"  style={{marginTop:23,marginLeft:25}}/>
        </View>


       <Text style={{fontSize:20,fontWeight:'bold',marginLeft:14}}>Personal details</Text>
       <Text  style={{fontSize:15,marginLeft:14}}>This section includes a profile of the user</Text>

        <View style={{height:140,width:'92.5%',marginLeft:14,marginTop:40,borderRadius:1,borderWidth:1,borderColor:'#c0c0c0'}}>
             <View style={{flexDirection:'row'}}>
            <View style={{height:137,borderRightWidth:1,borderColor:'#c0c0c0'}}>
            
            { mode===true? (
                <View>
                    {
                image &&
                <Image source={{ uri: image }} style={{ width: 100, height: 100,marginLeft:12,marginTop:28,marginRight:10,borderRadius:50}} />}
                </View>
                    
            ):
             (
                 <View>
                 <FontAwesome  name="user-circle"  size={90} style={{marginLeft:12,marginTop:29,marginRight:28}}/> 
                 </View>
             )
            }
             </View>
             <View style={{marginLeft:12,marginTop:10}}>
             <TouchableOpacity   style={{marginTop:29,marginLeft:-5,borderRadius:4}} onPress={()=>pickImage(setImage,setMode)} >
             <View  style={{height:41,width:190,backgroundColor:"green",marginLeft:4,borderRadius:4}}>
                 <Text style={{color:"white",alignContent:'center',alignItems:"center",fontSize:17,fontWeight:"bold",marginLeft:27,marginTop:8}}>Upload new Photo</Text>
             </View>
            </TouchableOpacity>
            
            <Text style={{marginLeft:-5}}>You can upload jpg or png files</Text>
            <Text style={{marginLeft:-5}}>Max size of 2MB</Text>

          
          </View>

              </View>

        </View>



      <View>
      <View >
                 
                 <TextInput placeholder="Name"  value={name}  onChangeText={name=>setName({name})} 
                   style={{marginLeft:14,height:40,marginTop:22,backgroundColor:'white',width:350,borderColor:"#c0c0c0",borderWidth:1}}/>
     </View>

     <View style={{flexDirection:'row'}}>
                
                 <TextInput placeholder="Email"  value={email}  onChangeText={email=>setEmail({email})} 
                   style={{marginLeft:14,height:40,marginTop:22,backgroundColor:'white',width:350,borderColor:"#c0c0c0",borderWidth:1}}/>
     </View>



     <View style={{flexDirection:'row'}}>
         <View>
                
                 <TextInput placeholder="Location"  value={location}  onChangeText={location=>setLocation({location})} 
                   style={{marginLeft:14,height:40,marginTop:22,backgroundColor:'white',width:194,borderColor:"#c0c0c0",borderWidth:1}}/>
     </View>
     <View>
                
                 <TextInput placeholder="Change Password" autoCorrect={false}
               secureTextEntry={true} value={password}  onChangeText={password=>setPassword({password})} 
                   style={{marginLeft:10,height:40,marginTop:22,backgroundColor:'white',width:147,borderColor:"#c0c0c0",borderWidth:1}}/>
     </View>
     </View>

     <View >
         <TextInput placeholder="Contact Number"  value={phone}  onChangeText={phone=>setPhone({phone})} 
                   style={{marginLeft:14,height:40,marginTop:22,backgroundColor:'white',width:350,borderColor:"#c0c0c0",borderWidth:1}}/>
     </View>
     </View>
     
     <TouchableOpacity   style={{marginTop:29,marginLeft:11,borderRadius:4}} >
             <View  style={{height:45,width:"45%",backgroundColor:"green",marginLeft:4,borderRadius:4}}>
                 <Text style={{color:"white",alignContent:'center',alignItems:"center",fontSize:17,fontWeight:"bold",marginLeft:28,marginTop:10}}>Save Changes</Text>
             </View>
    </TouchableOpacity>
 

      



    

      <View style={{flexDirection:'row',marginBottom:5,marginTop:185,marginLeft:99}}>
         
         <TouchableOpacity>
         <Text>
             T&C & our Privacy Policy
         </Text>
         </TouchableOpacity>
  
        <Feather name='arrow-right'  size={16} style={{marginTop:4}}/>


      </View>
        </View>
       
       
    )
}