import React,{useState}from 'react';
import { ScrollView, StyleSheet,View,Text,TouchableOpacity,TextInput,Button} from 'react-native';


export default class  ChatLogin extends React.Component{

  state={
    name:''
  }
  handleNext=(name)=>{

  this.props.navigation.navigate("Chat",{name:this.state.name})
  console.log(name)
  }

  render(){

  return (
    <View  style={{flex:1}}>
      <Text style={{marginTop:40,fontWeight:'bold',fontSize:15}}>Enter your name</Text>
      <TextInput
      style={styles.nameInput}
      placeholder=""
      value={this.state.name}
      onChangeText={name=>this.setState({name})}/>

  

      <Text style={{marginTop:40,fontWeight:'bold',fontSize:15}}>Enter your phone number</Text>
  
       <TextInput
      style={styles.nameInput}
      placeholder=""
      value={this.state.name}
      onChangeText={name=>this.setState({name})}/>


    <View style={{backgroundColor:'#2f4b78',marginTop:20,width:'50%'}}>
      
       <Button title='Next'   onPress={()=>this.handleNext()}/>
      </View>
      
    </View>

  );
  }
}

ChatLogin.navigationOptions = {
  title: 'ChatApp',
  

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  nameInput:{
    width:'97%',
    height:50,
    borderWidth:1,
    marginTop:15

  }
});
