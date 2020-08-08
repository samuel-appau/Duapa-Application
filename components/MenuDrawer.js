import React,{Component} from 'react'
import {StyleSheet,Dimensions,Platform, View,Text,TouchableOpacity,Alert,Image}  from 'react-native'
import {Ionicons,AntDesign,Entypo, Feather,FontAwesome,FontAwesome5,MaterialCommunityIcons} from  '@expo/vector-icons'
import { Button } from 'react-native-elements';
import { Linking } from 'expo';

const WIDTH=Dimensions.get('window').width;

const HEIGHT=Dimensions.get('window').height;

export default class MenuDrawer extends  Component{ 


        state={
            responseJSON:'',
            lastName:'',
            photo:'',
            member:'1'
            
             }

     
             componentDidMount(){
                return  fetch('http://abyvoting.tk/profile',{
                    method:"GET",
              
                    })
                  .then((response)=>response.json())
                     .then((responseJSON)=>{
                    //  Alert.alert(responseJSON.image_icon)
                      this.setState({
                          responseJSON:responseJSON.first_name,
                          lastName:responseJSON.last_name,
                          member:responseJSON.is_registered,
                        //   photo:(JSON.stringify(responseJSON.image_icon))
                      })
                
                      
                     })
                     .catch((error)=>{
                       Alert.alert(error)
                     })
                  
                  }
        
        
     url="https://www.linkedin.com/"
     url1="https://www.facebook.com/beitfarms/"
     url2="https://twitter.com/Beitfarms/"

    // navLink(text){
    //     return(
    //         <TouchableOpacity style={{height:40}} >
    //             <View>

    //               {text}
    //               </View>
                
    //         </TouchableOpacity>
    //     )
    // }
render(){
    return(
        <View style={{flex:1,backgroundColor:'#fff'}}>
        {
            this.state.member==='1' ?

            (
                <View  style={styles.container}>
           
         <View style={{backgroundColor:'#dcdcdc',height:168}}>
          <View>
            
                   <FontAwesome  name="user-circle"  size={90} color="white" style={{borderRadius:40,height:96,marginLeft:'31%',width:96,marginTop:20}}/>  
                {/* <Image  source={{uri:`https://abyvoting.tk/${this.state.photo`} }  style={{borderRadius:42,height:89,width:89,marginTop:34}}  />    */}
               <Text style={{marginTop:-5,fontSize:14,marginLeft:'34%',fontWeight:'500'}}>DUAPA APP</Text>
        
        </View>
        
                <View style={{flexDirection:'row',marginTop:2}}>
                <Text style={{fontWeight:'bold',fontSize:20,marginLeft:'27.2%'}}> {this.state.responseJSON}</Text>
                <Text style={{fontWeight:'bold',fontSize:20,}}>{this.state.lastName}</Text>
            
          
            </View>
       
        </View>
       
        <View style={{backgroundColor:'#fff'}}>
        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Dashboard')}>
        <View style={{flexDirection:'row',backgroundColor:'#dcdcdc',height:50,marginTop:1,padding:5,borderBottomWidth:1, shadowColor:'white', shadowOffset:{width:0 ,height:2}, shadowRadius:3,borderColor:'#c0c0c0'}}>
         <View style={{flex:2,marginTop:4}}>
         <FontAwesome name="dashboard" size={20} style={{marginLeft:8,marginTop:13}}/>
         </View>
         <View style={{flex:20,marginTop:10}}>
             <Text style={{fontSize:17,marginLeft:15, margin:5,textAlign:'left',fontWeight:'500'}}>
           Dashboard 
             </Text>
        </View>
        </View>
        </TouchableOpacity>


        

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')} >
        <View style={{flexDirection:'row',backgroundColor:'#dcdcdc',height:50,marginTop:1,padding:5,borderBottomWidth:1, shadowColor:'white', shadowOffset:{width:0 ,height:2}, shadowRadius:3,borderColor:'#c0c0c0'}}>
         <View style={{flex:2}}>
         <FontAwesome5 name="user-edit" size={20} style={{marginLeft:8,marginTop:13}}/>
         </View>
         <View style={{flex:20,marginTop:7}} >
             <Text style={{fontSize:17,marginLeft:15, margin:5,textAlign:'left',fontWeight:'500'}}>
         Edit Profile
         </Text>
        </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Change')} >
        <View style={{flexDirection:'row',backgroundColor:'#dcdcdc',height:50,marginTop:1,padding:5,borderBottomWidth:1, shadowColor:'white', shadowOffset:{width:0 ,height:2}, shadowRadius:3,borderColor:'#c0c0c0'}}>
         <View style={{flex:2,marginTop:4}}>
         <MaterialCommunityIcons name='key-change' size={20} style={{marginLeft:8,marginTop:13}}/>
         </View>
         <View style={{flex:20,marginTop:7}}>
             <Text style={{fontSize:17,marginLeft:15, margin:5,textAlign:'left',fontWeight:'500'}}>
         Change Password         </Text>
        </View>
        </View>
        </TouchableOpacity>


     
        
        {/* <TouchableOpacity>
        <View style={{flexDirection:'row',backgroundColor:'#fff',padding:5,borderBottomWidth:1,borderColor:'#c0c0c0'}}>
         <View style={{flex:2}}>
         <AntDesign name="check" size={26} style={{marginLeft:8}} />
         </View>
         <View style={{flex:20}}>
         {this.navLink('Member','Become a registered member')}
        </View>
        </View>
        </TouchableOpacity> */}
        
       
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Notification')}>
        <View style={{flexDirection:'row',backgroundColor:'#dcdcdc',padding:5,height:50,marginTop:1,borderBottomWidth:1, shadowColor:'white', shadowOffset:{width:0 ,height:2}, shadowRadius:3,borderColor:'#c0c0c0'}}>
         <View style={{flex:2,marginTop:4}}>
         <Ionicons name="ios-notifications" size={20} style={{marginLeft:8,marginTop:13}} />
         </View>
         <View style={{flex:20,marginTop:7}}>
             <Text style={{fontSize:17,marginLeft:15, margin:5,textAlign:'left',fontWeight:'500'}}>
         Notification
         </Text>
        </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Logout')}>
        <View style={{flexDirection:'row',backgroundColor:'#dcdcdc',height:50,marginTop:1,padding:5,borderBottomWidth:1, shadowColor:'white', shadowOffset:{width:0 ,height:2}, shadowRadius:3,borderColor:'#c0c0c0'}}>
         <View style={{flex:2}}>
         <MaterialCommunityIcons name='logout' size={20} color="black" style={{marginLeft:8,marginTop:13}} />
         {/* <AntDesign name="logout" size={26} color="black" style={{marginLeft:8}} /> */}

         </View>
         <View style={{flex:20,marginTop:5}}>
             <Text style={{fontSize:17,marginLeft:15, margin:5,textAlign:'left',fontWeight:'500'}}>
             Logout
           </Text>
        </View>
        </View>
        </TouchableOpacity>

       

       
        </View>

        <View style={{height:120,marginTopWidth:1,flexDirection:'row',marginTop:180,backgroundColor:'#dcdcdc' }}>
        <TouchableOpacity onPress={() => Linking.openURL(this.url)}>
        <AntDesign name="linkedin-square" size={24} style={{marginLeft:100,marginTop:10}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(this.url1)}>
        <Entypo name="facebook-with-circle" size={24}  style={{marginLeft:20,marginTop:10}}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(this.url2)}>
        <FontAwesome name="twitter-square"  size={24} style={{marginLeft:20,marginTop:10}} />
        </TouchableOpacity>
        </View>
    
    </View>

            )
            :
            (
                <View  style={styles.container}>
           
         <View style={{backgroundColor:'#dcdcdc',height:168}}>
          <View>
            
                   <FontAwesome  name="user-circle"  size={90} color="white" style={{borderRadius:40,height:96,marginLeft:'31%',width:96,marginTop:20}}/>  

                    {/* <Image  source={{uri:this.state.photo}}   style={{borderRadius:42,height:89,width:89,marginTop:34}}  />    */}
               <Text style={{marginTop:-5,fontSize:14,marginLeft:'34%',}}>DUAPA APP</Text>
        
        </View>
        
                <View style={{flexDirection:'row',marginTop:2}}>
                <Text style={{fontWeight:'bold',fontSize:20,marginLeft:'27.2%'}}>{this.state.responseJSON} </Text>
                <Text style={{fontWeight:'bold',fontSize:20,}}>{this.state.lastName} </Text>
        
            </View>
       
        </View>
       
        <View style={{backgroundColor:'#fff'}}>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Dashboard')}>
        <View style={{flexDirection:'row',backgroundColor:'#dcdcdc',padding:5,height:50,marginTop:1,borderBottomWidth:1, shadowColor:'white', shadowOffset:{width:0 ,height:2}, shadowRadius:3,borderColor:'#c0c0c0'}}>
         <View style={{flex:2,marginTop:4}}>
         <FontAwesome name="dashboard" size={20} style={{marginLeft:8,marginTop:13}}/>
         </View>
         <View style={{flex:20,marginTop:7.5}}>
             <Text style={{fontSize:17,marginLeft:15, margin:5,textAlign:'left',fontWeight:'500'}}>
           Dashboard
             </Text>
        </View>
        </View>
        </TouchableOpacity>

        

        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Profile')}>
        <View style={{flexDirection:'row',backgroundColor:'#dcdcdc',padding:5,height:50,marginTop:1,borderBottomWidth:1, shadowColor:'white', shadowOffset:{width:0 ,height:2}, shadowRadius:3,borderColor:'#c0c0c0'}}>
         <View style={{flex:2,marginTop:8}}>
         <FontAwesome5 name="user-edit" size={20} style={{marginLeft:8}}/>
         </View>
         <View style={{flex:20,marginTop:5}}>
             <Text style={{fontSize:17,marginLeft:15, margin:5,textAlign:'left',fontWeight:'500'}}>
           Edit Profile
             </Text>
        </View>
        </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Member')}>
        <View style={{flexDirection:'row',backgroundColor:'#dcdcdc',padding:5,height:50,marginTop:1,borderBottomWidth:1, shadowColor:'white', shadowOffset:{width:0 ,height:2}, shadowRadius:3,borderColor:'#c0c0c0'}}>
         <View style={{flex:2,marginTop:4}}>
         <AntDesign name="check" size={20} style={{marginLeft:8,marginTop:4}} />
         </View>
         <View style={{flex:20}}>
             <Text style={{fontSize:17,marginLeft:15, margin:5,textAlign:'left',marginTop:7,fontWeight:'500'}}>
            Become a registered member
           </Text>
        </View>
        </View>
        </TouchableOpacity>
        




        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Change')} >
        <View style={{flexDirection:'row',backgroundColor:'#dcdcdc',padding:5,height:50,marginTop:1,borderBottomWidth:1, shadowColor:'white', shadowOffset:{width:0 ,height:2}, shadowRadius:3,borderColor:'#c0c0c0'}}>
         <View style={{flex:2,marginTop:9}}>
         <MaterialCommunityIcons name='key-change' size={20} style={{marginLeft:8}}/>
         </View>
         <View style={{flex:20,marginTop:7}}>
             <Text style={{fontSize:17,marginLeft:15, margin:5,textAlign:'left',fontWeight:'500'}}>

         Change Password
        </Text>
        </View>
        </View>
        </TouchableOpacity>



        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Notification')}>
        <View style={{flexDirection:'row',backgroundColor:'#dcdcdc',padding:5,height:50,marginTop:1,borderBottomWidth:1, shadowColor:'white', shadowOffset:{width:0 ,height:2}, shadowRadius:3,borderColor:'#c0c0c0'}}>
         <View style={{flex:2,marginTop:9}}>
         <Ionicons name="ios-notifications" size={20} style={{marginLeft:8}}/>
         </View>
         <View style={{flex:20,marginTop:8}}>
             <Text style={{fontSize:17,marginLeft:15, margin:5,textAlign:'left',fontWeight:'500'}}>
           Notification
           </Text>
        </View>
        </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Logout')}>
        <View style={{flexDirection:'row',backgroundColor:'#dcdcdc',padding:5,height:50,marginTop:1,borderBottomWidth:1, shadowColor:'white', shadowOffset:{width:0 ,height:2}, shadowRadius:3,borderColor:'#c0c0c0'}}>
         <View style={{flex:2,marginTop:9}}>
         <MaterialCommunityIcons name='logout' size={20} color="black" style={{marginLeft:8}} />
         </View>
         <View style={{flex:20,marginTop:6.4}}>
             <Text style={{fontSize:17,marginLeft:15, margin:5,textAlign:'left',fontWeight:'500'}}>
             Logout
           </Text>
        </View>
        </View>
        </TouchableOpacity>
        
        
        {/* <TouchableOpacity>
        <View style={{flexDirection:'row',backgroundColor:'#fff',padding:5,borderBottomWidth:1,borderColor:'#c0c0c0'}}>
         <View style={{flex:4}}>
         <Entypo name="help-with-circle" size={26} style={{marginLeft:16}}/>
         </View>
         <View style={{flex:14}}>
         {this.navLink('Help','Help')}
        </View>
        </View>
        </TouchableOpacity> */}

       

       
        </View>

        <View style={{height:120,marginTopWidth:1,flexDirection:'row',marginTop:100,borderWidthColor:'black',backgroundColor:'#dcdcdc' }}>
        <TouchableOpacity onPress={() => Linking.openURL(this.url)}>
        <AntDesign name="linkedin-square" size={24}  style={{marginLeft:100,marginTop:10}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(this.url1)}>
        <Entypo name="facebook-with-circle" size={24}  style={{marginLeft:20,marginTop:10}}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(this.url2)}>
        <FontAwesome name="twitter-square" size={24} style={{marginLeft:20,marginTop:10}} />
        </TouchableOpacity>
        </View>
    
    </View>

            )
        }

        </View>
     
    )
}
   

}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },

})