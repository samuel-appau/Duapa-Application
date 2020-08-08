import React from 'react';
import {View,StyleSheet,Text,Dimensions,TouchableOpacity,Image,TouchableHighlight,FlatList} from 'react-native'
import {Ionicons,FontAwesome,AntDesign,Entypo,EvilIcons} from '@expo/vector-icons'



// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;


const FarmProduce= [
    {
        id: 1,
        name:"Plantain",
        price:20,
        img: require('../assets/images/plantain.jpg'),
        contact:'0505444444'
    },
    {
        id: 2,
        name:"Plantain",
        price:50,
        img: require('../assets/images/plantain.jpg'),
        contact:'0505444444'
    },
    {
        id: 3,
        name:"Plantain",
        price:60,
        img: require('../assets/images/plantain.jpg'),
        contact:'0245675758'
    },
    {
        id: 4,
        name:"Fresh Tomato",
        
        price:20,
        img: require('../assets/images/tomato.jpg'),
        contact:'0500228274'
    },
    {
        id: 5,
        name:"Tomato",
        price:10,
        img: require('../assets/images/plantain.jpg'),
        contact:'0505444444'
    },
    {
        id: 6,
        name:"Tomato",
        price:10,
        img: require('../assets/images/tomato.jpg'),
        contact:'0505444444'
    }
];


const renderFarmProduce = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' >
    <View style={styles.container}>
      <Image style={styles.img} source={ item.img }/>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>GHS {item.price}</Text>
      <Text style={styles.contact}>{item.contact}</Text>
    </View>
  </TouchableHighlight>
  );

export default function ViewProduct({navigation}){
    return(

        <View style={{flex:1}}>

        <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:62}}>
          <TouchableOpacity style={{marginTop:25}} onPress={()=>navigation.navigate('Root')}>
          <AntDesign name="left" color="white" size={28}/>
         </TouchableOpacity>
             <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:95,marginTop:27,marginBottom:5}}>Farm Produce</Text>
           
             <Ionicons name="ios-notifications" size={25} color="white"  style={{marginTop:23,marginLeft:107}}/>
        </View>
         
         <View>

              <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={FarmProduce}
                renderItem={renderFarmProduce}
                keyExtractor={item => String(item.id)}
        />
          </View>


          
            {/* <Text>ViewProduct</Text> */}



        </View> 

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: RECIPE_ITEM_MARGIN,
      marginTop: 20,
      width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
      height: RECIPE_ITEM_HEIGHT + 75,
      borderColor: '#cccccc',
      borderWidth: 0.5,
      borderRadius: 15
    },
    img: {
      width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
      height: RECIPE_ITEM_HEIGHT,
      borderRadius: 15,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    name: {
      flex: 1,
      fontSize: 17,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#444444',
      marginTop: 3,
      marginRight: 5,
      marginLeft: 5,
    },
    contact: {
        marginTop: 5,
        marginBottom: 5
      }
      ,
      price: {
        marginTop: 5,
        marginBottom: 5,
        color:'red'

      }

  });