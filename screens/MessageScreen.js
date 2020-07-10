import React from 'react'
import {View,Text,StyleSheet,ActivityIndicator,Button,ScrollView,TouchableOpacity,Image} from 'react-native'
import {Ionicons,AntDesign, Feather,MaterialCommunityIcons,Entypo} from  '@expo/vector-icons'
import MenuButton from '../components/Menubar'

export default function AgroInputt({navigation}){
    return(
        <View style={{flex:1}}>
        <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:50}}>
        <AntDesign name="left" color="white" size={28} style={{marginTop:3.5}} onPress={()=>navigation.navigate('Main')} />
             <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:60,marginTop:8,marginBottom:5}}>Agro-Input</Text>
        </View>
        <ScrollView>
           <View style={{flexDirection:'row'}}>
           <View style={styles.container}>
           <Image source={require('../assets/images/fertilizer.jpg')} style={{marginLeft:-3,marginTop:-20,height:175,width:168,borderRadius:8}}/>
                <TouchableOpacity  >
                     <Text style={{fontWeight:'bold',fontSize:12,marginTop:-19,color:"white"}}>FERTILIZERS</Text>
                 </TouchableOpacity>
            </View>
        
                <View style={styles.container}>
                <Image source={require('../assets/images/feed-stuff.jpg')} style={{borderRadius:50,height:100,width:100}} />
                  <TouchableOpacity>
                     <Text style={{fontWeight:'bold',fontSize:12}}>FEED STUFFS</Text>
                 </TouchableOpacity>
            </View>
            </View>

            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
            <Image source={require('../assets/images/weedicide.jpg')} style={{marginLeft:-2,marginTop:-20,height:175,width:166,borderRadius:8}}/>
                <TouchableOpacity>
                     <Text style={{fontWeight:'bold',fontSize:12,marginTop:-19,color:"white"}}>WEEDICIDES</Text>
                 </TouchableOpacity>
            </View>
            <View style={styles.container}>
            <Image source={require('../assets/images/fungi.jpg')} style={{marginTop:-20,height:175,width:165,borderRadius:8}}/>
                    <TouchableOpacity >
                     <Text style={{fontWeight:'bold',fontSize:12,color:"white",marginTop:-15,textAlign:'center',marginTop:-20}}>FUNGICIDES</Text>
                 </TouchableOpacity>
            </View>
            </View>


            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
            <Image source={require('../assets/images/Animalfeed.jpg')} style={{marginLeft:-2,marginTop:-20,height:175,width:166,borderRadius:8}} />
                <TouchableOpacity >
                     <Text style={{fontWeight:'bold',fontSize:12,marginTop:-15,textAlign:'center',marginTop:-20}}>ANIMAL FEEDS</Text>
                 </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Image source={require('../assets/images/PoultryFeed.jpg')} style={{borderRadius:50,height:100,width:100}}/>
                    <TouchableOpacity >
                     <Text style={{fontWeight:'bold',fontSize:12,textAlign:'center',marginTop:-5}}>POULTRY FEEDS</Text>
                 </TouchableOpacity>
            </View>
            </View>

            <View style={{flexDirection:'row'}}>
            <View style={styles.container}>
            <Image source={require('../assets/images/machinery.jpg')} style={{marginLeft:-2,marginTop:-20,height:175,width:166,borderRadius:8}} />
                <TouchableOpacity >
                     <Text style={{fontWeight:'bold',fontSize:12,marginTop:-15,textAlign:'center',marginTop:-20}}>MACHINERY</Text>
                 </TouchableOpacity>
            </View>
            <View style={styles.container}>
            <Image source={require('../assets/images/plantmaterial.jpg')} style={{marginLeft:-2,marginTop:-20,height:175,width:166,borderRadius:8}} />
                <TouchableOpacity >
                     <Text style={{fontWeight:'bold',fontSize:12,marginTop:-15,textAlign:'center',marginTop:-29}}>PLANTING MATERIALS</Text>
                 </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
       
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        borderWidth:2,
        padding:10,
        height:180,
        width:"45%",
        borderRadius:10, 
        marginVertical:10,
        alignItems:'center',
        justifyContent:'space-between',
        shadowColor:'black',
        shadowOffset:{width:0 ,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
        marginRight:15,
        marginLeft:8,
        marginTop:30
        
        
    }
 
    


});