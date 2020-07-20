import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SearchContext } from './SearchContext';

const Search = () => {
  const { setSearchState } = useContext(SearchContext);
  const [searchText, setsearchText] = useState('');
  const searchSong = () => {};
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search for something"
        value={searchText}
        onChangeText={(searchText) => setsearchText(searchText)}
      ></TextInput>
      <View>
        <TouchableOpacity
          onPress={
            searchText !== ''
              ? searchSong
              : () => setSearchState({ searchMode: false })
          }
        >
          <AntDesign
            name={searchText !== '' ? 'search1' : 'close'}
            color="#fff"
            size={25}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 6,
  },
  textInput: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    flex: 8,
    marginHorizontal: 10,
    paddingLeft: 5,
    color: '#fff',
   
  },
});
