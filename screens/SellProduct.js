import  React,{Component} from 'react'
import { Button, Image, View,StyleSheet,Text,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import {Ionicons,FontAwesome,AntDesign,Entypo,EvilIcons} from '@expo/vector-icons'


  
    // _takePhoto = async () => {
    // const {
    // status: cameraPerm
    // } = await Permissions.askAsync(Permissions.CAMERA)
    // const {
    // status: cameraRollPerm
    // } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    // // only if user allows permission to camera AND camera roll
    // if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
    // let pickerResult = await ImagePicker.launchCameraAsync({
    //      base64: true,
    //      allowsEditing: true,
    //      aspect: [4, 3],
    // })
    // if (!pickerResult.cancelled) {
    //    let imageUri = pickerResult ?     `data:image/jpg;base64,${pickerResult.base64}` : null
    // this.state.multipleUrl.push(imageUri)
    // this.setState({
    // LocalImage: this.state.LocalImage.concat([pickerResult.uri]),
    //     })
    // }
    //  }
    // }
  
export default class SellProduce extends Component{
          
        state = {
            LocalImage:[],
            multipleUrl:[]
            }
            componentDidMount() {
               this.getPermissionAsync()
            }
            getPermissionAsync = async () => {
                 if (Constants.platform.ios) {const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if (status !== 'granted') {
                     alert('Sorry, we need camera roll permissions to make this work!')
                  }
            }
            }
        
    _renderImages(){
        let images = []
        this.state.LocalImage.map((item, index) => {
           images.push(
             <View   key={index}  style={{flexDirection:'row',marginLeft:16,justifyContent:'space-between'}}>
             
             <Image source={{ uri: item }}  style={{ width:   100, height: 100,marginLeft:-10 }} />
             <TouchableOpacity >
             <AntDesign name="minuscircle" color='red' size={16}  style={{marginTop:-5}}/>
             </TouchableOpacity>
             
             </View>
             )
           })
        return images
      }


      

      _pickImage = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          base64: true,
          allowsEditing: true,
          aspect: [4, 3],
        })
      let imageUri = pickerResult ?   `data:image/jpg;base64,${pickerResult.base64}` : null
         imageUri && {uri: imageUri}
         this.state.multipleUrl.push(imageUri)
          this.setState({
      LocalImage: this.state.LocalImage.concat([pickerResult.uri]),
      })
      }

    render() {
       return (
          <View style={styles.mainView}>
              <ScrollView>
              <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:62}}>
       <TouchableOpacity style={{marginTop:25}} onPress={()=>this.props.navigation.navigate('Root')}>
        <AntDesign name="left" color="white" size={28}   />
        </TouchableOpacity>
             <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:60,marginTop:27,marginBottom:5}}>Sell Produce from farm</Text>
             <Entypo name="shopping-bag" size={25} color="white" style={{marginTop:23,marginLeft:60}}/> 
                </View>
           
               <View style={styles.buttons}>
                     <Button title="Pick images of farm produce to sell"  onPress={this._pickImage}/>
               </View>
               {/* <View style={styles.buttons}>
                     <Button onPress={this._takePhoto} title="Take a photo" />
               </View>
                */}
                <View style={styles.containers}>
                  {this._renderImages()}
                 </View>


                 <View style={{height:360,width:'90%',marginLeft:17,marginTop:60,borderRadius:1,borderStyle:'dashed',borderWidth:1,borderWidthColor:'#c0c0c0'}}>
                 
                 <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#c0c0c0',height:65}}>
               <Text style={{marginTop:30,fontWeight:'bold',fontSize:15,marginLeft:6}}>Name</Text>
                 <TextInput    
                   style={{marginLeft:70,height:40,marginTop:18,backgroundColor:'white',width:190,borderColor:"#c0c0c0",borderWidth:1}}/>
               </View>

                 <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#c0c0c0',height:65}}>
                 <Text style={{marginTop:30,fontWeight:'bold',marginLeft:6,fontSize:15}}>Contact</Text>
                 <TextInput placeholder="0245657558"   
                   style={{marginLeft:58,height:40,marginTop:22,backgroundColor:'white',width:150,borderColor:"#c0c0c0",borderWidth:1}}/>
               </View>
               <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#c0c0c0',height:65}}>
               <Text style={{marginTop:30,fontWeight:'bold',fontSize:15,marginLeft:6}}>Price</Text>
                 <TextInput    
                   style={{marginLeft:77,height:40,marginTop:22,backgroundColor:'white',width:150,borderColor:"#c0c0c0",borderWidth:1}}/>
               </View>

               <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#c0c0c0',height:105}}>
               <Text style={{marginTop:30,fontWeight:'bold',fontSize:15,marginLeft:6}}>Description</Text>
                 <TextInput  
                   multiline={true}  
                   style={{marginLeft:32,height:80,marginTop:22,backgroundColor:'white',width:190,borderColor:"#c0c0c0",borderWidth:1}}/>
               </View>

               
               <TouchableOpacity onPress={()=>navigation.navigate('payment')} style={{marginTop:10}}>
                        <View style={{ padding: 9,backgroundColor:'green',marginLeft:100, width:"40%",marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold',fontSize:17,marginLeft:40,}}>Post</Text>
                        </View>
        </TouchableOpacity> 
                </View>
                </ScrollView>
            </View>
    
          )
       }
    }

    const styles=StyleSheet.create({
        containers:{
            flex:1,
            flexDirection:'row',
            marginTop:4,
        },
        buttons:{
            marginLeft:1, 
            marginTop:20
        },
        mainView:{
            flex:1
        }
    })