import React,{Component} from 'react'
import {StyleSheet }  from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity,ViewProperties } from 'react-native';


export default class MenuButton extends Component{
    render(){
        
        return(
          <TouchableOpacity  style={styles.menuicon} onPress={()=>this.props.navigation.toggleDrawer()}>
            <Ionicons 
               name="md-menu"
               color="#fff"
               size={32}
               
            />
            </TouchableOpacity>
            
        )

    }
}


const styles=StyleSheet.create({
    menuicon:{
        zIndex:9,
        position:'absolute',
        top:7,
        left:15,
        
    }
})
