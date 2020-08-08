import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Alert,ScrollView} from 'react-native'
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'
import {Ionicons,FontAwesome,AntDesign,Entypo,EvilIcons} from '@expo/vector-icons'



export default function HomeScreen({navigation}){

  const [member,setMember]=useState('0')
  const [mode,setMode]=useState(false)

  useEffect(()=>{
    async function fetchData(){

    const response=fetch('http://abyvoting.tk/profile',{
    method:"GET",

    })
  .then((response)=>response.json())
     .then((responseJSON)=>{
    
        // setName(responseJSON.first_name)
        setMember(responseJSON.is_registered)
     })
     .catch((error)=>{
       Alert.alert(error.message)
     })

    }
     fetchData()
     setMode(true)
  
  
})

  return(
    <ScrollView>


    <View>



      {

        mode===false?
        (

          <View style={{

                alignSelf:'center'

                 }}>
                    
                    <ActivityIndicator size="large" color="#0000ff" />
              

              </View>

        ):(


        
        member==='0' ?


        (

          
          <View style={{flex:1}}>
      
      <TouchableOpacity onPress={()=>navigation.navigate('agroInput')}>
         <View style={styles.container}>
         <View style={{flexDirection:'row'}}>
           <View  style={{flex:1.4}}>
                     <EvilIcons name="cart" size={35}  style={{marginTop:5}}/>
                </View>
                <View style={{flex:7}}>
                  <TouchableOpacity onPress={()=>navigation.navigate('agroInput')}>
                   <Text style={{fontWeight:'bold',fontSize:18,marginLeft:30,marginRight:10,marginTop:10}}>Buy agro inputs</Text>
                   </TouchableOpacity>
                </View>
                <View  style={{flex:1}}>
                <AntDesign name="right" size={25}  style={{marginLeft:10,marginTop:10}} onPress={()=>navigation.navigate('agroInput')} />
                </View>
            </View> 
         </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={()=>navigation.navigate('produce')} >
         <View style={styles.container}>
         <View style={{flexDirection:'row'}}>
           <View  style={{flex:1.3}}>
           <AntDesign name="team"  size={34} style={{marginTop:5}}  />
                </View>
                <View style={{flex:7}}>
                <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,marginRight:-4,marginTop:10}}>Buy Farm Produce from</Text>
                <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,marginRight:-4,}}>other farmers</Text>
                </View>
                <View  style={{flex:1}}>
                <AntDesign name="right" size={25}   style={{marginLeft:10,marginTop:10}} />
                </View>
            </View>
         </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={()=>navigation.navigate('member')} >
         <View style={styles.container}>
         <View style={{flexDirection:'row'}}>
           <View  style={{flex:1.5}}>
           <AntDesign name="team"  size={34} style={{marginTop:5}}  />
                </View>
                <View style={{flex:7}}>
                   <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,marginRight:-4,marginTop:10}}>Membership Option</Text>
                </View>
                <View  style={{flex:1}}>
                <AntDesign name="right" size={25}   style={{marginLeft:10,marginTop:10}} />
                </View>
            </View>
         </View>
         </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('payment')}>

         <View style={styles.container}>
         <View style={{flexDirection:'row'}}>
           <View  style={{flex:1.5}}>
                     <FontAwesome name='money' style={{marginTop:5}}    size={35}/>
                </View>
                <View style={{flex:6}}>
                <TouchableOpacity onPress={()=>navigation.navigate('payment')}z>
                   <Text style={{fontWeight:'bold',fontSize:18,marginLeft:30,marginRight:10,marginTop:10}}>Make Payment</Text>
                   </TouchableOpacity>
                </View>
                <View  style={{flex:1}}>
                <AntDesign name="right" size={25}   style={{marginLeft:10,marginTop:10}} onPress={()=>navigation.navigate('payment')}/>
                </View>
            </View>
         </View>
         </TouchableOpacity>


         

      </View>

        ):
        
        (

          <View style={{flex:1}}>
      
      <TouchableOpacity onPress={()=>navigation.navigate('agroInput')}>
         <View style={styles.container}>
         <View style={{flexDirection:'row'}}>
           <View  style={{flex:1.4}}>
                     <EvilIcons name="cart" size={35}  style={{marginTop:5}}/>
                </View>
                <View style={{flex:7}}>
                  <TouchableOpacity onPress={()=>navigation.navigate('agroInput')}>
                   <Text style={{fontWeight:'bold',fontSize:18,marginLeft:30,marginRight:10,marginTop:10}}>Buy agro inputs</Text>
                   </TouchableOpacity>
                </View>
                <View  style={{flex:1}}>
                <AntDesign name="right" size={25}  style={{marginLeft:10,marginTop:10}} onPress={()=>navigation.navigate('agroInput')} />
                </View>
            </View> 
         </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={()=>navigation.navigate('sell')}>
         <View style={styles.container}>
         <View style={{flexDirection:'row'}}>
           <View  style={{flex:1.4}}>
           <Entypo name="shopping-bag" size={35}  style={{marginTop:5}}/> 
                </View>
                <View style={{flex:6}}>
                   <Text style={{fontWeight:'bold',fontSize:18,marginLeft:30,marginRight:10,marginTop:10}}>Sell Produce</Text>
                </View>
                <View  style={{flex:1}}>
                  
                <AntDesign name="right" size={25} style={{marginLeft:10,marginTop:10}} />
                </View>
            </View>
           
         </View>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>navigation.navigate('produce')} >
         <View style={styles.container}>
         <View style={{flexDirection:'row'}}>
           <View  style={{flex:1.4}}>
           <AntDesign name="team"  size={34} style={{marginTop:5}}  />
                </View>
                <View style={{flex:7,marginTop:-3}}>
                <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,marginRight:-4,marginTop:10}}>Buy Farm Produce from</Text>
                <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,marginRight:-4,}}>other farmers</Text>
                </View>
                <View  style={{flex:1}}>
                <AntDesign name="right" size={25}   style={{marginLeft:10,marginTop:10}} />
                </View>
            </View>
         </View>
         </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('payment')}>

         <View style={styles.container}>
         <View style={{flexDirection:'row'}}>
           <View  style={{flex:1.4}}>
                     <FontAwesome name='money' style={{marginTop:5}}    size={35}/>
                </View>
                <View style={{flex:6}}>
                <TouchableOpacity onPress={()=>navigation.navigate('payment')}>
                   <Text style={{fontWeight:'bold',fontSize:18,marginLeft:30,marginRight:10,marginTop:10}}>Make Payment</Text>
                   </TouchableOpacity>
                </View>
                <View  style={{flex:1}}>
                <AntDesign name="right" size={25}   style={{marginLeft:10,marginTop:10}} onPress={()=>navigation.navigate('payment')}/>
                </View>
            </View>
         </View>
         </TouchableOpacity>


         


         

      </View>
        )

        )
      }


     </View> 
    
      </ScrollView>
  )
}
HomeScreen.navigationOptions =({navigation})=> ({
  title: 'Home',
  headerStyle:{
    backgroundColor:'green'
  },
  headerTintColor:'#fff',
  headerTitleStyle:{
    fontWeight:'bold',
    marginLeft:40
  },
  headerLeft:<MenuButton navigation={navigation} />,
  headerRight:<SearchButton/>
});


  const styles=StyleSheet.create({
    container:{
      borderWidth:1,
      padding:10,
      height:90,
      width:"90%",
      borderRadius:10, 
        marginVertical:10,
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:0 ,height:2},
        shadowRadius:6,
        shadowOpacity:0.34,
        borderColor:'#c0c0c0',
        padding:20,
        borderRadius:10,
        marginRight:12,
        marginLeft:12,
        marginTop:28,
        backgroundColor:'white'
        
        
    },
  

   

   

   
    


  });





















