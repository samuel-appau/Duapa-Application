import React,{Component,useContext,useMemo} from 'react'
import {StyleSheet }  from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity,ViewProperties,View } from 'react-native';
import Search from './Search';
import { SearchContext } from './SearchContext';

export default  function  SearchButton({navigation}){
    const { searchState, setSearchState } = useContext(SearchContext);
        
        return(
            <View>
            {searchState.searchMode === false ? (
         <TouchableOpacity  style={styles.menuicon} onPress={() => setSearchState({ searchMode: true })}
            style={{ padding: 5 }}>
            <Ionicons  
               name="ios-search"
               color="#fff"
               size={32}
              
              
               
            />
            </TouchableOpacity>
        ) : (
        <View>
          <Search />
        </View>
      )}
    </View>
            
  
        )}

const styles=StyleSheet.create({
    menuicon:{
        zIndex:9,
        position:'absolute',
        top:7,
        right:15,
        
    }
})
