import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,Alert,TextInput,TouchableOpacity,ActivityIndicator,Picker,Image,Button} from 'react-native'
import {Ionicons,AntDesign,Feather,FontAwesome} from '@expo/vector-icons'
import MenuButton from '../components/Menu'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';






const handleAccountChanges=(id,firstName,lastName,email,password,{navigation},website,setLoading,phone,image,location,loginwith,gender,userType,contact_email,
    instagram_url,facebook_id,facebookurl,created_at,updated_at,google_id,dribble_url,linkedin_url,twitterurl)=>{
    
      
    let dataToSubmit={};
    for(let key in email){
      dataToSubmit[key]=email[key]
  }
  
    for(let key in phone){
              dataToSubmit[key]=phone[key]
          }
          for(let key in firstName){
            dataToSubmit[key]=firstName[key]
        }
        for(let key in lastName){
            dataToSubmit[key]=lastName[key]
        }
       
        for(let key in location){
            dataToSubmit[key]=location[key]
        }
       
        
    
            setLoading(true)
    
        fetch("http://abyvoting.tk/edit-profile",{
            method:"POST",
            headers:{
               'Accept':'application/json',
               'Content-type':'application/json'
            },
            body:JSON.stringify({
                id:id,
                login_with:loginwith,
                userType:userType,
                first_name:dataToSubmit.firstName,
                last_name:dataToSubmit.lastName,
                email:dataToSubmit.email,
                gender:gender,
                image_icon:image,
                mobile:dataToSubmit.phone,
                contact_email:contact_email,
                website:website,
                address:dataToSubmit.location,
                facebook_url:facebookurl,
                twitter_url:twitterurl,
                linkedin_url:linkedin_url,
                dribbble_url:dribble_url,
                instagram_url:instagram_url,
                facebook_id:facebook_id,
                google_id:google_id,
                created_at:created_at,
                updated_at:updated_at,
                
                
                
               
                
               
                
                
                
            })
        })
        .then((response)=>response.text())
           .then((responseJSON)=>{
                //  Alert.alert(id)
              Alert.alert(responseJSON)
             Alert.alert("User details has been updated")
             setLoading(false)
            
           })
           .catch((error)=>{
               Alert.alert("Network error,Try again")
               Alert.alert(error.message)
           })
    }
            


const pickImage = async (setImage,setMode) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });


    if (!result.cancelled) {
        setMode(true)
      setImage(result.uri);
    }
  };



export default function AccountScreen({navigation}){
    const [Loading,setLoading]=useState(false)
    const [firstName,setfirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [location,setLocation]=useState('')
    
    const [id,setId]=useState('')
    const [userType,setUserType]=useState('')
    const [gender,setGender]=useState('')

    const [contact_email,setcontactEmail]=useState('')
    const [loginwith,setLoginWith]=useState('')
    const [website,setWebsite]=useState('')
    const [facebookurl,setfacebookUrl]=useState('')
    const [twitterurl,setTwitterUrl]=useState('')
    const [linkedin_url,setLinkedinUrl]=useState('')
    const [dribble_url,setdribbleUrl]=useState('')
    const [instagram_url,setinstagramUrl]=useState('')
    const [facebook_id,setfacebookId]=useState('')
    const [google_id,setGoogleId]=useState('')
    const [created_at,setcreatedAt]=useState('')
    const [updated_at,setUpdatedAt]=useState('')

    

    const [phone,setPhone]=useState('')
    const [image,setImage]=useState(null)
    const [mode,setMode]=useState(false)

    useEffect(()=>{
        async function fetchData(){
            const response=fetch('http://abyvoting.tk/profile',{
        method:"GET",
  
        })
      .then((response)=>response.json())
         .then((responseJSON)=>{
        //   Alert.alert(JSON.stringify(responseJSON.id))
        //    setfirstName(responseJSON.first_name)\
            // Alert.alert(responseJSON.usertype)
             setId(JSON.stringify(responseJSON.id))
        //    setPhone(responseJSON.mobile)
           setcontactEmail(responseJSON.contact_email)
        //    setlastName(responseJSON.last_name)
        //    setEmail(responseJSON.email)
        //    setPhone(responseJSON.mobile)
        //    location(responseJSON.address)
        //    setImage(responseJSON.image_icon)
           setcreatedAt(responseJSON.created_at)
           setUpdatedAt(responseJSON.updated_at)
        //    setLoginWith(responseJSON.login_with)
           setUserType(responseJSON.usertype)
        //    contact_email(responseJSON.contact_email)
        //    facebook_id(responseJSON.facebook_id)
        //    facebookurl(responseJSON.facebook_url)
        //    instagram_url(responseJSON.instagram_url)
          })
         .catch((error)=>{
           Alert.alert(error.message)
         })
      
      }
      fetchData()
    })

    return(
        <View style={{flex:1}}>
             <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:62}}>
       <TouchableOpacity style={{marginTop:25}}>
        <MenuButton navigation={navigation}  />
        </TouchableOpacity>
             <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:78,marginTop:27,marginBottom:5}}>ACCOUNT SETTINGS SCREEN</Text>
           
           <Ionicons name="ios-settings" size={25} color="white" onPress={()=>navigation.navigate('account')} style={{marginTop:23,marginLeft:25}}/>
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
      <View style={{flexDirection:'row'}}>
                 
      <TextInput placeholder="First Name"  value={firstName}  onChangeText={firstName=>setfirstName({firstName})} 
                   style={{marginLeft:14,height:40,marginTop:22,backgroundColor:'white',width:160,borderColor:"#c0c0c0",borderWidth:1}}/>

      <TextInput placeholder="Last Name"  value={lastName}  onChangeText={lastName=>setlastName({lastName})} 
        style={{marginLeft:14,height:40,marginTop:22,backgroundColor:'white',width:174,borderColor:"#c0c0c0",borderWidth:1}}/>
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
     
     <TouchableOpacity   style={{marginTop:29,marginLeft:11,borderRadius:4}} onPress={()=>handleAccountChanges(id,firstName,lastName,email,password,{navigation},website,setLoading,phone,image,location,loginwith,gender,userType,contact_email,
    instagram_url,facebook_id,facebookurl,created_at,updated_at,google_id,dribble_url,linkedin_url,twitterurl)}>
             <View  style={{height:45,width:"45%",backgroundColor:"green",marginLeft:4,borderRadius:4}}>
                 <Text style={{color:"white",alignContent:'center',alignItems:"center",fontSize:17,fontWeight:"bold",marginLeft:28,marginTop:10}}>Save Changes</Text>
             </View>
    </TouchableOpacity>
    {Loading &&
                <View style={{
        position: 'absolute',
        left: -163,
        right: 0,
        top: 550,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
                    
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            }
 

      



    

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