import React,{Component,useContext,useMemo} from 'react'
import {StyleSheet }  from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity,ViewProperties } from 'react-native';
import Search from './Search';
import { SearchContext } from './SearchContext';

export default  function  SearchButton({navigation}){
    
        
        return(
            <Ionicons  
               name="ios-search"
               color="#fff"
               size={32}
               style={styles.menuicon}
              
               
            />
            
  
        )}

const styles=StyleSheet.create({
    menuicon:{
        zIndex:9,
        position:'absolute',
        top:10,
        right:15,
        
    }
})
