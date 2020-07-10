import React,{useState} from 'react';
import { Text, View, Image,ImageBackground, TouchableOpacity,ScrollView,Button, StyleSheet, FlatList,TextInput } from 'react-native';
import { Feather, AntDesign,Ionicons,FontAwesome } from '@expo/vector-icons';
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'


const Fertilizer= [
    {
        id: 1,
        name:"Plant Fertilizer",
        price:"20",
        img: require('../assets/images/fertilizer.jpg')
    },
    {
        id: 2,
        name:"Fungicide spray",
        price:"50",
        img: require('../assets/images/fungi.jpg')
    },
    {
        id: 3,
        name:"Plant Fertilizer",
        price:"60",
        img: require('../assets/images/fertilizer.jpg')
    },
    {
        id: 4,
        name:"Fertilizer spray",
        
        price:"20",
        img: require('../assets/images/fertilizer.jpg')
    },
    {
        id: 5,
        name:"Pesticide spray",
        price:"10",
        img: require('../assets/images/pesticidess.jpg')
    }
];


const AnimalFeeds= [
    {
        id: 1,
        name:"broiler feed",
        price:"20",
        img: require('../assets/images/PoultryFeed.jpg')
    },
    {
        id: 2,
        name:"starter feed",
        price:"20",
        img: require('../assets/images/PoultryFeed.jpg')
    },
    {
        id: 3,
        name:"broiler feed",
        price:"20",
        img: require('../assets/images/PoultryFeed.jpg')
    },
    {
        id: 4,
        name:"broiler feed",
        price:"20",
        img: require('../assets/images/PoultryFeed.jpg')
    },
    {
        id: 5,
        name:"broiler feed",
        price:"20",
        img: require('../assets/images/PoultryFeed.jpg')
    }
];



const Feedstuffs= [
    {
        id: 1,
        name:"millet",
        price:"99",
        img: require('../assets/images/feed-stuff.jpg')
        
    },
    {
        id: 2,
        name:"wheat",
        price:"88",
        img: require('../assets/images/feed-stuff.jpg')
    },
    {
        id: 3,
        name:"snail",
        price:"100",
        img: require('../assets/images/feed-stuff.jpg')
    },
    {
        id: 4,
        name:"rice",
        price:"99",
        
        img: require('../assets/images/feed-stuff.jpg')
    },
    {
        id: 5,
        name:"snail",
        price:"10",
        img: require('../assets/images/feed-stuff.jpg')
        
    }
];



const PlantMaterials= [
    {
        id: 1,
        name:"plant manure",
        price:"99",
        img: require('../assets/images/plantmaterial.jpg')
    },
    {
        id: 2,
        name:"plant manure",
        price:"96",
        img: require('../assets/images/plantmaterial.jpg')
    },
    {
        id: 3,
        name:"plant manure",
        price:"60",
        img: require('../assets/images/plantmaterial.jpg')
    },
    {
        id: 4,
        name:"plant manure",
        price:"50",
        img: require('../assets/images/plantmaterial.jpg')
    },
    {
        id: 5,
        name:"plant manure",
        price:"69",
        img: require('../assets/images/plantmaterial.jpg')
    }
];

const Machinery= [
    {
        id: 1,
        name:"machine driller",
        price:"20",
        img: require('../assets/images/machinery.jpg')
    },
    {
        id: 2,
        name:"machine driller",
        price:"20",
        img: require('../assets/images/machinery.jpg')
    },
    {
        id: 3,
        name:"machine driller",
        price:"20",
        img: require('../assets/images/machinery.jpg')
    },
    {
        id: 4,
        name:"machine driller",
        price:"20",
        img: require('../assets/images/machinery.jpg')
    },
    {
        id: 5,
        name:"machine driller",
        price:"20",
        img: require('../assets/images/machinery.jpg')
    }
];


export default function AgroInput({navigation}) {

    const [fertilizerItem,setFertilizerItem]=useState(Fertilizer)
    const [animalFeedsItem,setAnimalFeedsItem]=useState(AnimalFeeds)
    const [machineryItem,setMachineryItem]=useState(Machinery)
    const [plantMaterialItem,setPlantMaterialItem]=useState(PlantMaterials)
    const [FeedstuffsItem,setFeedstuffItem]=useState(Feedstuffs)
    const [cart,updateCart]=useState([])
    
    // updateCart(cart)
    // function addFertilizerToCart(item){
    //     const newFertilizer={
    //       name:item.name,
    //       id:item.id,
    //       price:item.price,
    //       image:item.image
    //     }
    //     updateCart([newFertilizer,...cart]);
    //   }
    
     

    return (
       
        <View style={{flex:1}}>  
             
           
             <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:65}}>
        <TouchableOpacity style={{marginTop:24}} onPress={()=>navigation.navigate('Root')}>
        <AntDesign name="left" color="white" size={30}   />
           </TouchableOpacity>
             <Text style={{fontSize:17,color:'white',marginLeft:60,fontWeight:'bold',marginTop:31,marginBottom:5,}}>AgroInput Screen</Text>
             <View  style={{flex:2,marginLeft:81,marginTop:28}}>
            <Ionicons
                    name="ios-cart"
                    size={24}
                    color="white"
                    style={{marginRight:40,marginBottom:-4}}
                />
                <View  style={{borderRadius:40,width:17,height:17,backgroundColor:'red',alignItems:'center',justifyContent:'center',marginTop:-22.5,marginLeft:15}}>
                  <Text style={{color:"white",fontSize:10}}>{cart.length}</Text>
                  </View>
                
          </View>
      
        </View>
        <ScrollView>
        
          
            <View  style={{marginBottom:10}}>
                <Text  style={{marginLeft:72,fontWeight:'bold'}}>Fertilizers, Pesticides and Weedicides</Text>
            <FlatList horizontal
                style={{ borderBottomWidth: 0.5, borderBottomColor: '#ccc', flexGrow: 0,marginBottom:8 }}
                contentContainerStyle={{ paddingLeft: 5 }}
                showsHorizontalScrollIndicator={false}
                data={fertilizerItem}
                renderItem={FertilizerThumbnail}
                keyExtractor={(item) => String(item.id)}
            />
    
            </View>
        
        <View style={{marginTop:29}}>
        <Text style={{marginLeft:96,fontWeight:'bold'}}>Animal Feeds and Poultry Feeds </Text>
        <FlatList horizontal
                style={{ borderBottomWidth: 0.5, borderBottomColor: '#ccc', flexGrow: 0,marginBottom:8 }}
                contentContainerStyle={{ paddingLeft: 5 }}
                showsHorizontalScrollIndicator={false}
                data={AnimalFeeds}
                renderItem={AnimalFeedsThumbnail}
                keyExtractor={(item) => String(item.id)}
            />

        </View>


        <View style={{marginTop:29}}>
        <Text style={{marginLeft:120,fontWeight:'bold'}}>Feed-Stuffs</Text>
           <FlatList horizontal
                style={{ borderBottomWidth: 0.5, borderBottomColor: '#ccc', flexGrow: 0,marginBottom:8 }}
                contentContainerStyle={{ paddingLeft: 5 }}
                showsHorizontalScrollIndicator={false}
                data={Feedstuffs}
                renderItem={FeedStuffThumbnail}
                keyExtractor={(item) => String(item.id)}
              />

            </View>



            <View style={{marginTop:29}}>
        <Text style={{marginLeft:120,fontWeight:'bold'}}>Plant-Materials</Text>
           <FlatList horizontal
                style={{ borderBottomWidth: 0.5, borderBottomColor: '#ccc', flexGrow: 0,marginBottom:8 }}
                contentContainerStyle={{ paddingLeft: 5 }}
                showsHorizontalScrollIndicator={false}
                data={PlantMaterials}
                renderItem={PlantmaterialThumbnail}
                keyExtractor={(item) => String(item.id)}
              />

            </View>


            <View style={{marginTop:29}}>
        <Text style={{marginLeft:110,fontWeight:'bold'}}>Machinery and Tools</Text>
           <FlatList horizontal
                style={{ borderBottomWidth: 0.5, borderBottomColor: '#ccc', flexGrow: 0,marginBottom:8 }}
                contentContainerStyle={{ paddingLeft: 5 }}
                showsHorizontalScrollIndicator={false}
                data={Machinery}
                renderItem={MachineryThumbnail}
                keyExtractor={(item) => String(item.id)}
              />

            </View>
            </ScrollView>
            </View>
            
        
    );
}

const AnimalFeedsThumbnail = function ({ item },updateCart,cart) {

    function addAnimalFeedsToCart({item},updateCart,cart){
        
            const newAnimalFeeds={

                
             name:item.name,
             id:item.id,
             price:item.price,
             image:item.img
             }
    
             cart=[newAnimalFeeds.id,newAnimalFeeds.name,newAnimalFeeds.price,newAnimalFeeds.image]
    
        // const Feed_data=[newAnimalFeeds.id,newAnimalFeeds.name,newAnimalFeeds.price,newAnimalFeeds.image]
          alert(cart)
          }
    return (      
        <View style={{ width:170,height:250}}>
        <Image source={item.img} style={{ width: 160, height: 170,marginRight:29, borderColor: '#ccc', borderWidth: 1 }} />
        <View style={{marginTop:0.5,borderWidth:1,borderColor:'#c0c0c0',width:160,height:74}}>
         <Text style={{ marginLeft:16, fontSize: 14,fontWeight:'bold'}}>{item.name}</Text>
         <Text style={{marginLeft:40,color:"red"}}>{item.price} cedis</Text>
         <TouchableOpacity  onPress={()=>addAnimalFeedsToCart({item},updateCart,cart)}>
             <View style={{backgroundColor:"green",height:34,marginTop:3,borderRadius:2}}>
                 <Text style={{color:"white",alignContent:'center',alignItems:"center",fontSize:14,fontWeight:"bold",marginLeft:32,marginTop:8}}>ADD TO CART</Text>
             </View>
         
         </TouchableOpacity>
        
         </View>
       </View>
       
   );
}



const PlantmaterialThumbnail = function ({ item },fertilizerItem) {

    
    function addPlantmaterialToCart(fertilizerItem){
        const newPlantmaterial={
          name:item.name,
          id:item.id,
          price:item.price,
          image:item.image
        }

      }
    return (      
        <View style={{ width:170,height:250}}>
        <Image source={item.img} style={{ width: 160, height: 170,marginRight:29, borderColor: '#ccc', borderWidth: 1 }} />
        <View style={{marginTop:0.5,borderWidth:1,borderColor:'#c0c0c0',width:160,height:74}}>
         <Text style={{ marginLeft:16, fontSize: 14,fontWeight:'bold'}}>{item.name}</Text>
         <Text style={{marginLeft:40,color:"red"}}>{item.price} cedis</Text>
         <TouchableOpacity onPress={()=>addPlantmaterialToCart(fertilizerItem)}>
             <View style={{backgroundColor:"green",height:34,marginTop:3,borderRadius:2}}>
                 <Text style={{color:"white",alignContent:'center',alignItems:"center",fontSize:14,fontWeight:"bold",marginLeft:32,marginTop:8}}>ADD TO CART</Text>
             </View>
         
         </TouchableOpacity>
         </View>
       </View>
       
   );
}



const MachineryThumbnail = function ({ item },fertilizerItem) {

    
    function addMachineryToCart(fertilizerItem){
        const newMachinery={
          name:item.name,
          id:item.id,
          price:item.price,
          image:item.image
        }

      }
    return (      
        <View style={{ width:170,height:250}}>
        <Image source={item.img} style={{ width: 160, height: 170,marginRight:29, borderColor: '#ccc', borderWidth: 1 }} />
        <View style={{marginTop:0.5,borderWidth:1,borderColor:'#c0c0c0',width:160,height:74}}>
         <Text style={{ marginLeft:16, fontSize: 14,fontWeight:'bold'}}>{item.name}</Text>
         <Text style={{marginLeft:40,color:"red"}}>{item.price} cedis</Text>
         <TouchableOpacity onPress={()=>addMachineryToCart(fertilizerItem)}>
             <View style={{backgroundColor:"green",height:34,marginTop:3,borderRadius:2}}>
                 <Text style={{color:"white",alignContent:'center',alignItems:"center",fontSize:14,fontWeight:"bold",marginLeft:32,marginTop:8}}>ADD TO CART</Text>
             </View>
         
         </TouchableOpacity>
        
         </View>
       </View>
       
   );
}




const FertilizerThumbnail = function ({ item },cart,updateCart,fertilizerItem) {
    

    function addFertilizerToCart(fertilizerItem){
        const newFertilizer={
          name:item.name,
          id:item.id,
          price:item.price,
          image:item.image
        }

      }
    
     
    return (      
        <View style={{ width:170,height:250}}>
        <Image source={item.img} style={{ width: 160, height: 170,marginRight:29, borderColor: '#ccc', borderWidth: 1 }} />
        <View style={{marginTop:0.5,borderWidth:1,borderColor:'#c0c0c0',width:160,height:74}}>
         <Text style={{ marginLeft:16, fontSize: 14,fontWeight:'bold'}}>{item.name}</Text>
         <Text style={{marginLeft:40,color:"red"}}>{item.price} cedis</Text>
         <TouchableOpacity onPress={()=>addFertilizerToCart(fertilizerItem)}>
             <View style={{backgroundColor:"green",height:34,borderRadius:2,marginTop:2}}>
                 <Text style={{color:"white",alignContent:'center',alignItems:"center",fontSize:14,fontWeight:"bold",marginLeft:32,marginTop:8}}>ADD TO CART</Text>
             </View>
         
         </TouchableOpacity>
        
         </View>
       </View>
       
   );
}


const FeedStuffThumbnail = function ({ item },fertilizerItem) {
    
    function addFeedStuffToCart(fertilizerItem){
        const newFeedSuff={
          name:item.name,
          id:item.id,
          price:item.price,
          image:item.image
        }

      }
    
    return (      
        <View style={{ width:170,height:250}}>
        <Image source={item.img} style={{ width: 160, height: 170,marginRight:29, borderColor: '#ccc', borderWidth: 1 }} />
        <View style={{marginTop:0.5,borderWidth:1,borderColor:'#c0c0c0',width:160,height:74}}>
         <Text style={{ marginLeft:16, fontSize: 14,fontWeight:'bold'}}>{item.name}</Text>
         <Text style={{marginLeft:40,color:"red"}}>{item.price} cedis</Text>
         <TouchableOpacity onPress={()=>addFeedStuffToCart(fertilizerItem)}>
             <View style={{backgroundColor:"green",height:34,borderRadius:2,marginTop:2}}>
                 <Text style={{color:"white",alignContent:'center',alignItems:"center",fontSize:14,fontWeight:"bold",marginLeft:32,marginTop:8}}>ADD TO CART</Text>
             </View>
         
         </TouchableOpacity>
       </View>
       </View>
       
   );
}


 const styles = StyleSheet.create({
   container: {
        flex: 1,
        
  },
 
 

});