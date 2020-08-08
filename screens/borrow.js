import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity,Platform,LayoutAnimation,UIManager} from 'react-native'
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'
import {Ionicons,FontAwesome,AntDesign,Entypo,EvilIcons,Feather} from '@expo/vector-icons'



export default function BorrowScreen({navigation}){
    const [viewDetails,setviewDetails]=useState(false)
    const [viewDetails1,setviewDetails1]=useState(false)
    const [viewDetails2,setviewDetails2]=useState(false)
    const [viewDetails3,setviewDetails3]=useState(false)
    const [offer1,setOffer1]=useState(4000)
    const [offer2,setOffer2]=useState(3000)
    const [offer3,setOffer3]=useState(2000)
    const [offer4,setOffer4]=useState(1000)



    
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

    const formatNum = (num) => {
        
          let num_parts = num.toString().split('.');
        
          num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        
          return num_parts.join('.');
        
        };



        const  changeLayout = () => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setviewDetails(true)
            // this.setState({ expanded: !this.state.expanded });
          }

        
        

        
        const  changeLayout1 = () => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setviewDetails1(true)
            // this.setState({ expanded: !this.state.expanded });
          }

         
          const  changeLayout2 = () => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setviewDetails2(true)
            // this.setState({ expanded: !this.state.expanded });
          }

          const  changeLayout3 = () => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setviewDetails3(true)
            // this.setState({ expanded: !this.state.expanded });
          }
        
        
        

    return(
        <View style={{flex:1,backgroundColor:'#f2f2f2'}}>
            <ScrollView>
            <Feather  name='arrow-left' style={{marginTop:40,marginLeft:5}} size={29} onPress={()=>navigation.navigate('Root')}/>
            <Text style={{fontWeight:'bold',fontSize:19,marginTop:8,marginLeft:15}}>Available loan offers</Text>

            <Text style={{marginTop:14,marginLeft:15,fontSize:17}}>Based on your profile .</Text>
            <Text style={{marginLeft:15,fontSize:17}}>you are eligible for the following loan amounts</Text>
           
            <View>
            <View style={{borderWidth:2,padding:10,height:90,width:"90%",backgroundColor:'#fff',borderRadius:10,marginLeft:17,marginTop:20,marginBottom:50,borderColor:'#fff'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                 <Text style={{marginLeft:5,fontSize:22,fontWeight:'bold',marginTop:5}}>GH₵ {formatNum(offer1)} </Text>
                 {/* onPress={()=>navigation.navigate('request',{offers:offer1})} */}
                 <TouchableOpacity activeOpacity={0.8} onPress={()=>changeLayout()}>
                 <Text style={{marginRight:20,fontWeight:"bold",color:'green',marginTop:16}}>View Details</Text>
                 </TouchableOpacity>
                </View>
              
               </View>
            {/* style={{height:70,width:'90%',marginLeft:17,marginTop:20,borderRadius:1,borderStyle:'dashed',borderWidth:1,borderWidthColor:'#c0c0c0'}} */}
            <View style={{ height: viewDetails ? null : 0, overflow: 'hidden',width:'90%',backgroundColor:'green',borderRadius:10,marginLeft:17,marginTop:-154,marginBottom:-60}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25}}>
                <View>
                    <Text style={{color:'#fff',marginLeft:9}}>LOAN AMOUNT</Text>
                 <Text style={{marginLeft:9,fontSize:18,fontWeight:'bold',marginTop:5,color:'#fff'}}>GH₵ {formatNum(offer1)} </Text>
                 </View>
                 <View>
                    <Text style={{color:'#fff',marginRight:10}}>DURATION</Text>
                    <Text style={{color:'#fff',fontWeight:'bold',marginRight:10,marginTop:5,fontSize:16}}>2 MONTHS</Text>
                </View>
                 {/* <TouchableOpacity onPress={()=>navigation.navigate('request',{offers:offer1})}>
                 <Text style={{marginRight:20,fontWeight:"bold",color:'green'}}>Request</Text>
                 </TouchableOpacity> */}
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:50}}>
                <View>
                    <Text style={{color:'#fff',marginLeft:14}}>INTEREST</Text>
                 <Text style={{marginLeft:16,fontSize:18,fontWeight:'bold',marginTop:5,color:'#fff'}}>GH₵ {formatNum(0.05*offer1)} (5%)</Text>
                 </View>
                 <View>
                    <Text style={{color:'#fff',marginRight:15}}>TOTAL AMOUNT</Text>
                    <Text style={{color:'#fff',fontWeight:'bold',marginRight:16,marginTop:5,fontSize:18}}>GH₵ {formatNum(offer1+ (0.05*offer1))}</Text>
                </View>
                 {/* <TouchableOpacity onPress={()=>navigation.navigate('request',{offers:offer1})}>
                 <Text style={{marginRight:20,fontWeight:"bold",color:'green'}}>Request</Text>
                 </TouchableOpacity> */}

                </View>
                <TouchableOpacity style={{marginTop:10}} >
                        <View style={{ padding: 10,backgroundColor:'white',alignSelf:'center',marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,borderWidth:1,borderColor:'green',width:126,marginBottom:6,alignSelf:'center'}}>
                             <Text style={{color:"green",fontWeight:'bold',marginLeft:7}}>Request Loan</Text>
                        </View>
             </TouchableOpacity>
            </View>
            </View>






            <View style={{marginTop:120}}>
            <View style={{borderWidth:2,padding:10,height:90,width:"90%",backgroundColor:'#fff',borderRadius:10,marginLeft:17,marginTop:20,marginBottom:50,borderColor:'#fff'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                 <Text style={{marginLeft:5,fontSize:22,fontWeight:'bold',marginTop:5}}>GH₵ {formatNum(offer2)} </Text>
                 {/* onPress={()=>navigation.navigate('request',{offers:offer1})} */}
                 <TouchableOpacity activeOpacity={0.8} onPress={()=>changeLayout1()}>
                 <Text style={{marginRight:20,fontWeight:"bold",color:'green',marginTop:16}}>View Details</Text>
                 </TouchableOpacity>
                </View>
              
               </View>
            {/* style={{height:70,width:'90%',marginLeft:17,marginTop:20,borderRadius:1,borderStyle:'dashed',borderWidth:1,borderWidthColor:'#c0c0c0'}} */}
            <View style={{ height: viewDetails1 ? null : 0, overflow: 'hidden',width:'90%',backgroundColor:'green',borderRadius:10,marginLeft:17,marginTop:-154,marginBottom:-60}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25}}>
                <View>
                    <Text style={{color:'#fff',marginLeft:15}}>LOAN AMOUNT</Text>
                 <Text style={{marginLeft:16,fontSize:18,fontWeight:'bold',marginTop:5,color:'#fff'}}>GH₵ {formatNum(offer2)} </Text>
                 </View>
                 <View>
                    <Text style={{color:'#fff',marginRight:15}}>DURATION</Text>
                    <Text style={{color:'#fff',fontWeight:'bold',marginRight:16,marginTop:5,fontSize:16}}>2 MONTHS</Text>
                </View>
                 {/* <TouchableOpacity onPress={()=>navigation.navigate('request',{offers:offer1})}>
                 <Text style={{marginRight:20,fontWeight:"bold",color:'green'}}>Request</Text>
                 </TouchableOpacity> */}
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:50}}>
                <View>
                    <Text style={{color:'#fff',marginLeft:13}}>INTEREST</Text>
                 <Text style={{marginLeft:16,fontSize:18,fontWeight:'bold',marginTop:5,color:'#fff'}}>GH₵ {formatNum(0.05*offer2)} (5%)</Text>
                 </View>
                 <View>
                    <Text style={{color:'#fff',marginRight:14}}>TOTAL AMOUNT</Text>
                    <Text style={{color:'#fff',fontWeight:'bold',marginRight:16,marginTop:5,fontSize:18}}>GH₵ {formatNum(offer2+ (0.05*offer2))}</Text>
                </View>
                 {/* <TouchableOpacity onPress={()=>navigation.navigate('request',{offers:offer1})}>
                 <Text style={{marginRight:20,fontWeight:"bold",color:'green'}}>Request</Text>
                 </TouchableOpacity> */}
                </View>
                <TouchableOpacity style={{marginTop:10}} >
                        <View style={{ padding: 10,backgroundColor:'white',alignSelf:'center',marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,borderWidth:1,borderColor:'green',width:130,marginBottom:6}}>
                             <Text style={{color:"green",fontWeight:'bold',marginLeft:4}}>Request Loan</Text>
                        </View>
             </TouchableOpacity>
            </View>
            </View>
           
               
        


            <View style={{marginTop:120}}>
            <View style={{borderWidth:2,padding:10,height:90,width:"90%",backgroundColor:'#fff',borderRadius:10,marginLeft:17,marginTop:20,marginBottom:50,borderColor:'#fff'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                 <Text style={{marginLeft:5,fontSize:22,fontWeight:'bold',marginTop:5}}>GH₵ {formatNum(offer3)} </Text>
                 {/* onPress={()=>navigation.navigate('request',{offers:offer1})} */}
                 <TouchableOpacity activeOpacity={0.8} onPress={()=>changeLayout2()}>
                 <Text style={{marginRight:20,fontWeight:"bold",color:'green',marginTop:16}}>View Details</Text>
                 </TouchableOpacity>
                </View>
              
               </View>
            {/* style={{height:70,width:'90%',marginLeft:17,marginTop:20,borderRadius:1,borderStyle:'dashed',borderWidth:1,borderWidthColor:'#c0c0c0'}} */}
            <View style={{ height: viewDetails2 ? null : 0, overflow: 'hidden',width:'90%',backgroundColor:'green',borderRadius:10,marginLeft:17,marginTop:-154,marginBottom:-60}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25}}>
                <View>
                    <Text style={{color:'#fff',marginLeft:15}}>LOAN AMOUNT</Text>
                 <Text style={{marginLeft:16,fontSize:18,fontWeight:'bold',marginTop:5,color:'#fff'}}>GH₵ {formatNum(offer3)} </Text>
                 </View>
                 <View>
                    <Text style={{color:'#fff',marginRight:14}}>DURATION</Text>
                    <Text style={{color:'#fff',fontWeight:'bold',marginRight:16,marginTop:5,fontSize:16}}>2 MONTHS</Text>
                </View>
                 {/* <TouchableOpacity onPress={()=>navigation.navigate('request',{offers:offer1})}>
                 <Text style={{marginRight:20,fontWeight:"bold",color:'green'}}>Request</Text>
                 </TouchableOpacity> */}
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:50}}>
                <View>
                    <Text style={{color:'#fff',marginLeft:14}}>INTEREST</Text>
                 <Text style={{marginLeft:16,fontSize:18,fontWeight:'bold',marginTop:5,color:'#fff'}}>GH₵ {formatNum(0.05*offer3)} (5%)</Text>
                 </View>
                 <View>
                    <Text style={{color:'#fff',marginRight:15}}>TOTAL AMOUNT</Text>
                    <Text style={{color:'#fff',fontWeight:'bold',marginRight:16,marginTop:5,fontSize:18}}>GH₵ {formatNum(offer3+ (0.05*offer3))}</Text>
                </View>
                 {/* <TouchableOpacity onPress={()=>navigation.navigate('request',{offers:offer1})}>
                 <Text style={{marginRight:20,fontWeight:"bold",color:'green'}}>Request</Text>
                 </TouchableOpacity> */}
                </View>
                <TouchableOpacity style={{marginTop:10}} >
                        <View style={{ padding: 10,backgroundColor:'white',alignSelf:'center',marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,borderWidth:1,borderColor:'green',width:130,marginBottom:6}}>
                             <Text style={{color:"green",fontWeight:'bold',marginLeft:4}}>Request Loan</Text>
                        </View>
             </TouchableOpacity>
            </View>
            </View>
           

                  


            <View style={{marginTop:120}}>
            <View style={{borderWidth:2,padding:10,height:90,width:"90%",backgroundColor:'#fff',borderRadius:10,marginLeft:17,marginTop:20,marginBottom:50,borderColor:'#fff'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                 <Text style={{marginLeft:5,fontSize:22,fontWeight:'bold',marginTop:5}}>GH₵ {formatNum(offer4)} </Text>
                 {/* onPress={()=>navigation.navigate('request',{offers:offer1})} */}
                 <TouchableOpacity activeOpacity={0.8} onPress={()=>changeLayout3()}>
                 <Text style={{marginRight:20,fontWeight:"bold",color:'green',marginTop:16}}>View Details</Text>
                 </TouchableOpacity>
                </View>
              
               </View>
            {/* style={{height:70,width:'90%',marginLeft:17,marginTop:20,borderRadius:1,borderStyle:'dashed',borderWidth:1,borderWidthColor:'#c0c0c0'}} */}
            <View style={{ height: viewDetails3 ? null : 0, overflow: 'hidden',width:'90%',backgroundColor:'green',borderRadius:10,marginLeft:17,marginTop:-154,marginBottom:-70}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25}}>
                <View>
                    <Text style={{color:'#fff',marginLeft:15}}>LOAN AMOUNT</Text>
                 <Text style={{marginLeft:16,fontSize:18,fontWeight:'bold',marginTop:5,color:'#fff'}}>GH₵ {formatNum(offer4)} </Text>
                 </View>
                 <View>
                    <Text style={{color:'#fff',marginRight:15}}>DURATION</Text>
                    <Text style={{color:'#fff',fontWeight:'bold',marginRight:16,marginTop:5,fontSize:16}}>2 MONTHS</Text>
                </View>
                 {/* <TouchableOpacity onPress={()=>navigation.navigate('request',{offers:offer1})}>
                 <Text style={{marginRight:20,fontWeight:"bold",color:'green'}}>Request</Text>
                 </TouchableOpacity> */}
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:50}}>
                <View>
                    <Text style={{color:'#fff',marginLeft:13}}>INTEREST</Text>
                 <Text style={{marginLeft:16,fontSize:18,fontWeight:'bold',marginTop:5,color:'#fff'}}>GH₵ {formatNum(0.05*offer4)} (5%)</Text>
                 </View>
                 <View>
                    <Text style={{color:'#fff',marginRight:14}}>TOTAL AMOUNT</Text>
                    <Text style={{color:'#fff',fontWeight:'bold',marginRight:16,marginTop:5,fontSize:18}}>GH₵ {formatNum(offer4+ (0.05*offer4))}</Text>
                </View>
                 {/* <TouchableOpacity onPress={()=>navigation.navigate('request',{offers:offer1})}>
                 <Text style={{marginRight:20,fontWeight:"bold",color:'green'}}>Request</Text>
                 </TouchableOpacity> */}
                </View>
                <TouchableOpacity style={{marginTop:10}} >
                        <View style={{ padding: 10,backgroundColor:'white',alignSelf:'center',marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,borderWidth:1,borderColor:'green',width:130,marginBottom:6}}>
                             <Text style={{color:"green",fontWeight:'bold',marginLeft:4}}>Request Loan</Text>
                        </View>
             </TouchableOpacity>
            </View>
            </View>
           

         






            <View  style={{marginTop:120,marginLeft:18,marginBottom:20}}>
                <TouchableOpacity onPress={()=>navigation.navigate('different')}>
                 <Text style={{color:'green',fontWeight:'bold'}}>Want a different amount ? </Text>
                 </TouchableOpacity>
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

