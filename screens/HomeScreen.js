import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'
import {Ionicons,FontAwesome,AntDesign,Entypo,EvilIcons} from '@expo/vector-icons'


export default function HomeScreen({navigation}){
  return(
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('agroInput')}>
         <View style={styles.container}>
         <View style={{flexDirection:'row'}}>
           <View  style={{flex:1}}>
                     <EvilIcons name="cart" size={35} color="black" style={{marginTop:5}}/>
                </View>
                <View style={{flex:7}}>
                  <TouchableOpacity onPress={()=>navigation.navigate('agroInput')}>
                   <Text style={{fontWeight:'bold',fontSize:18,marginLeft:30,marginRight:10,marginTop:10}}>Buy agro inputs</Text>
                   </TouchableOpacity>
                </View>
                <View  style={{flex:1}}>
                <AntDesign name="right" size={25} color="black" style={{marginLeft:10,marginTop:10}} onPress={()=>navigation.navigate('agroInput')} />
                </View>
            </View> 
         </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={()=>navigation.navigate('sell')}>
         <View style={styles.container}>
         <View style={{flexDirection:'row'}}>
           <View  style={{flex:1}}>
           <Entypo name="shopping-bag" size={35} color="black" style={{marginTop:5}}/> 
                </View>
                <View style={{flex:6}}>
                   <Text style={{fontWeight:'bold',fontSize:18,marginLeft:30,marginRight:10,marginTop:10}}>Sell Produce</Text>
                </View>
                <View  style={{flex:1}}>
                  
                <AntDesign name="right" size={25} color="black" style={{marginLeft:10,marginTop:10}} />
                </View>
            </View>
           
         </View>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>navigation.navigate('offTaker')} >
         <View style={styles.container}>
         <View style={{flexDirection:'row'}}>
           <View  style={{flex:1}}>
           <AntDesign name="team"  size={34} style={{marginTop:5}} color="black"/>
                </View>
                <View style={{flex:7}}>
                   <Text style={{fontWeight:'bold',fontSize:18,marginLeft:10,marginRight:-4,marginTop:10}}>Membership Form</Text>
                </View>
                <View  style={{flex:1}}>
                <AntDesign name="right" size={25} color="black" style={{marginLeft:10,marginTop:10}} />
                </View>
            </View>
         </View>
         </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('payment')}>

         <View style={styles.container}>
         <View style={{flexDirection:'row'}}>
           <View  style={{flex:1}}>
                     <FontAwesome name='money' style={{marginTop:5}} size={35}/>
                </View>
                <View style={{flex:6}}>
                <TouchableOpacity onPress={()=>navigation.navigate('payment')}>
                   <Text style={{fontWeight:'bold',fontSize:18,marginLeft:30,marginRight:10,marginTop:10}}>Make Payment</Text>
                   </TouchableOpacity>
                </View>
                <View  style={{flex:1}}>
                <AntDesign name="right" size={25} color="black"  style={{marginLeft:10,marginTop:10}} onPress={()=>navigation.navigate('payment')}/>
                </View>
            </View>
         </View>
         </TouchableOpacity>


          

      </View>
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
      borderWidth:2,
      padding:10,
      height:90,
      width:"90%",
      borderRadius:10, 
        marginVertical:10,
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:0 ,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
        marginRight:12,
        marginLeft:12,
        marginTop:29.9
        
        
    }
   



  });