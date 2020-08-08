import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,Alert,TextInput,Image,TouchableOpacity,ActivityIndicator,Picker,ScrollView,ImageBackground,Button} from 'react-native'
import {Ionicons,AntDesign,Feather,FontAwesome} from '@expo/vector-icons'
import MenuButton from '../components/Menu'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';






const handleAccountChanges=(id,firstName,lastName,email,password,{navigation},website,setLoading,phone,image,location,loginwith,gender,userType,contact_email,
    instagram_url,facebook_id,facebookurl,created_at,updated_at,google_id,member,dribble_url,linkedin_url,twitterurl)=>{
    
      
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
            // alert(image)
    
        fetch("http://abyvoting.tk/edit-profile",{
            method:"POST",
            headers:{
               'Accept':'application/json',
               'Content-type':'application/json'
               //multipart/form-data
            },
            body:JSON.stringify({
                id:id,
                login_with:loginwith,
                userType:userType,
                first_name:dataToSubmit.firstName,
                last_name:dataToSubmit.lastName,
                email:dataToSubmit.email,
                gender:gender,
                image_icon:JSON.stringify(image),
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
                is_registered: member,
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
    const [member,setMember]=useState('0')
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
        <View style={{flex:1,backgroundColor:'#f2f2f2'}}>

            
             <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:62}}>
       <TouchableOpacity style={{marginTop:25}}>
        <MenuButton navigation={navigation}  />
        </TouchableOpacity>
             <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:96,marginTop:27,marginBottom:5}}>EDIT PROFILE SCREEN</Text>
           
           <Ionicons name="ios-settings" size={25} color="white" onPress={()=>navigation.navigate('account')} style={{marginTop:23,marginLeft:66}}/>
        </View>

    <ScrollView>
       <View  style={{width:'92%',marginLeft:14,backgroundColor:'white',}}>
      <ImageBackground    source={require('../assets/images/DuapaLogo.jpg')} style={{height:100,width:'95%',marginLeft:12}}>
       </ImageBackground>
       </View>

       

        <View style={{height:200,width:'92%',marginLeft:14,backgroundColor:'white',marginTop:7,borderRadius:1,borderWidth:1,borderColor:'#c0c0c0'}}>
        <View style={{borderBottomWidth:3,borderColor:'#f2f2f2'}}>  
       <Text style={{fontSize:20,fontWeight:'500',marginLeft:5,marginTop:8}}>Personal details</Text>
       <Text  style={{fontSize:15,marginLeft:5,fontWeight:'400'}}>This section includes a profile of the user</Text>
       </View>
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
             <View  style={{height:41,width:190,borderWidth: 1,borderColor: 'green', backgroundColor: 'white',marginLeft:4,borderRadius:4}}>
                 <Text style={{color:"green",alignContent:'center',alignItems:"center",fontSize:17,fontWeight:"bold",marginLeft:27,marginTop:8}}>Upload Photo</Text>
             </View>
            </TouchableOpacity>
            
            <Text style={{marginLeft:-1}}>You can upload jpg </Text>
            <Text style={{marginLeft:-1}}>or png files</Text>
            <Text style={{marginLeft:-1}}>Max size of 2MB</Text>

          
          </View>

              </View>

        </View>



      {/* <View>
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
    instagram_url,facebook_id,facebookurl,created_at,updated_at,google_id,member,dribble_url,linkedin_url,twitterurl)}>
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
 

      
 */}




      <View style={{marginTop:39,backgroundColor:'white',width:'90%',marginLeft:20,height:'62%'}}>
          <View style={{borderBottomWidth:1,borderColor:'#d3d3d3',marginTop:10,height:'10%'}}>
          <Text style={{marginBottom:25,fontWeight:'500',marginLeft:16,marginTop:16,fontSize:22}}>Account Information</Text>

          </View>
         

         <View style={{marginTop:22}}>
         <View style={{flexDirection:'row'}}>
             <Text style={{marginBottom:2,fontSize:18,fontWeight:'500',marginLeft:18}}>First Name</Text>
             <Text style={{color:'red',marginLeft:7,fontWeight:'bold'}}>*</Text>
             </View>

             <TextInput placeholder="First Name"   value={firstName}  onChangeText={firstName=>setfirstName({firstName})}  placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />



         <View style={{flexDirection:'row',marginTop:14}}>
             <Text style={{marginBottom:2,fontSize:18,fontWeight:'500',marginLeft:18}}>Last Name</Text>
             <Text style={{color:'red',marginLeft:7,fontWeight:'bold'}}>*</Text>
             </View>

            <TextInput placeholder="Last Name"  value={lastName}  onChangeText={lastName=>setlastName({lastName})} placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />



                
         <View style={{flexDirection:'row',marginTop:14}}>
             <Text style={{marginBottom:2,fontSize:18,fontWeight:'500',marginLeft:18}}>Email</Text>
             <Text style={{color:'red',marginLeft:7,fontWeight:'bold'}}>*</Text>
             </View>

            <TextInput placeholder="E-mail"  value={email}  onChangeText={email=>setEmail({email})}  placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />



                    
         <View style={{flexDirection:'row',marginTop:14}}>
             <Text style={{marginBottom:2,fontSize:18,fontWeight:'500',marginLeft:18}}>Address</Text>
             <Text style={{color:'red',marginLeft:7,fontWeight:'bold'}}>*</Text>
             </View>

            <TextInput placeholder="Address"  value={location}  onChangeText={location=>setLocation({location})}  placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />



            <View style={{flexDirection:'row',marginTop:14}}>
             <Text style={{marginBottom:2,fontSize:18,fontWeight:'500',marginLeft:18}}>Phone Number</Text>
             <Text style={{color:'red',marginLeft:7,fontWeight:'bold'}}>*</Text>
             </View>

            <TextInput placeholder="Contact"   value={phone}  onChangeText={phone=>setPhone({phone})} placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

            <TouchableOpacity   style={{marginTop:29,marginLeft:11,borderRadius:4}} onPress={()=>handleAccountChanges(id,firstName,lastName,email,password,{navigation},website,setLoading,phone,image,location,loginwith,gender,userType,contact_email,
    instagram_url,facebook_id,facebookurl,created_at,updated_at,google_id,member,dribble_url,linkedin_url,twitterurl)}>
             <View  style={{height:45,width:"45%",backgroundColor:"green",marginLeft:4,borderRadius:4}}>
                 <Text style={{color:"white",alignSelf:"center",fontSize:17,fontWeight:"bold",marginTop:10}}>Save Changes</Text>
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

          </View>

          
        </View>


    

      <View style={{flexDirection:'row',marginBottom:5,marginTop:185,marginLeft:99}}>
         
         <TouchableOpacity>
         <Text>
             T&C & our Privacy Policy
         </Text>
         </TouchableOpacity>
  
        <Feather name='arrow-right'  size={16} style={{marginTop:4}}/>


      </View>

      </ScrollView>
        </View>
       
       
    )
}


const  styles=StyleSheet.create({
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 12,
        marginBottom: 8,
      
      },

    
})