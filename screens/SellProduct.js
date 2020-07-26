import  React,{Component} from 'react'
import { Button, Image, View,StyleSheet,Text,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import {Ionicons,FontAwesome,AntDesign,Entypo,EvilIcons} from '@expo/vector-icons'


  
    
  
export default class SellProduce extends Component{
          
        state = {
            LocalImage:[],
            multipleUrl:[],
            mode:true,
            nameOfProduct:'',
            price:'',
            description:'',
            title:'',
            name:'',
            contact:'',
            location:''
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



            
   
  
        handlePost(){
         fetch("http://abyvoting.tk/submit_listing",{
             method:"POST",
             headers:{
             'Accept':'application/json',
             'Content-type':'application/json'
                  },
          body:JSON.stringify({
                
                total:this.state.price,
                per_page:10,
                current_page:1,
                last_page:0,
                next_page_url:null,
                prev_page_url:null,
                from:null,
                to:null,
                data:[{
                  "id": 1,
                  "user_id": "2",
                  "cat_id": "1",
                  "sub_cat_id": "1",
                  "price": "20",
                  "location_id": "0",
                  "featured_listing": "1",
                  "title": "Fertilizer",
                  "listing_slug": "fertilizer",
                  "description": "<p>Sample fertilizer</p>",
                  "address": "Tamale",
                  "featured_image": "fertilizer_1594821586",
                  "review_avg": "",
                  "status": "1",
                  "created_at": "2020-07-15 13:59:46",
                  "updated_at": "2020-07-15 14:00:06"
                }]
              
              
          })
      })
      .then((response)=>response.json())
         .then((responseJSON)=>{
           Alert.alert(responseJSON)
           Alert.alert("Product has been sent for review")
             
         })
         .catch((error)=>{
             Alert.alert(error)
         })
        }
          
   
    

    componentDidMount(){
      return  fetch('http://abyvoting.tk/profile',{
          method:"GET",
    
          })
        .then((response)=>response.json())
           .then((responseJSON)=>{
          
            this.setState({
             
               
                contact:responseJSON.mobile,
                name:responseJSON.first_name + responseJSON.last_name
              
            })
      
            
           })
           .catch((error)=>{
             Alert.alert(error)
           })
        
        }

        
    _renderImages(){
      // this.setState({
      //   mode:false
      // })
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
      this.setState({
        mode:false
       })
      
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

    handleDescription=(text)=>{
      this.setState({description:text})

    }

    handleTitle=(text)=>{
      this.setState({title:text})
    }
    

    handleProduct=(text)=>{
      this.setState({nameOfProduct:text
      })
    }

    handlePrice=(text)=>{
      this.setState({price:text})
    }

    render() {
       return (
          <View style={styles.mainView}>
              
              <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,backgroundColor:'green',marginBottom:10,height:62}}>
       <TouchableOpacity style={{marginTop:25}} onPress={()=>this.props.navigation.navigate('Root')}>
        <AntDesign name="left" color="white" size={28}   />
        </TouchableOpacity>
             <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:60,marginTop:27,marginBottom:5}}>Sell Produce from farm</Text>
             <Entypo name="shopping-bag" size={25} color="white" style={{marginTop:23,marginLeft:60}}/> 
                </View>
                <ScrollView>
               <View style={styles.buttons}>
                     <Button title="Pick images of farm produce to sell"  onPress={this._pickImage}/>
               </View>
               {/* <View style={styles.buttons}>
                     <Button onPress={this._takePhoto} title="Take a photo" />
               </View>
                */}
                <View >
                  {this.state.mode===true  ?
                  (

                    
                    <View style={{backgroundColor:'#fff',height:110,width:'100%'}}>
                            <TouchableOpacity>

                             <AntDesign name='addfile' size={90} color='black' style={{marginTop:7,marginLeft:'34%'}} />
                            </TouchableOpacity>
                        </View>
                   
                  
                  ):(
                 
                  
                  
                    <View  style={styles.containers}>
                    {this._renderImages()}
                  </View>
                  

                  )
                  }

                
                 </View>



             

                 <View style={{height:60,width:'100%',marginTop:20}}>
               <Text style={{marginTop:18,marginLeft:100,fontSize:20,fontWeight:'bold'}}>Product Details:</Text>
               </View>
             <View  style={{marginTop:10,height:390,width:'100%',backgroundColor:'#fff'}}>
             <TextInput  
             placeholder="Title"   
             
             onChangeText={this.handleTitle}
             style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>
             <TextInput  
             
             onChangeText={this.handleProduct}
             placeholder="Name of farm Product"   
             style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>
             <TextInput  
             placeholder="Description" 
           
             onChangeText={this.handleDescription}
             multiline={true}  
             style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>

             <TextInput  
             placeholder="Price(GH₵)"  
             autoFocus  keyboardType="phone-pad"
             

             onChangeText={this.handlePrice}
             style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>
            </View>





             

            <View style={{height:40,width:'100%',marginTop:14}}>
             
               <Text style={{marginTop:18,marginLeft:100,fontSize:20,fontWeight:'bold'}}>Contact Details:</Text>
               </View>


               <View style={{marginTop:10,height:400,width:'100%',backgroundColor:'#fff'}}>
               <View style={{height:319,width:'94%',marginLeft:'3.5%',marginTop:15,borderRadius:1,borderWidth:1,borderColor:'#c0c0c0'}}>
               <TextInput  
                 placeholder="Name"   
                 value={this.state.name}
                 style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>

                 <TextInput  
                 placeholder="Contact Number" 
                 value={this.state.contact}  
                 style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>

                 
                 <TextInput  
                 placeholder="Location"   
                 style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>

                 </View>

                 <TouchableOpacity  onPress={this.handlePost} style={{marginTop:17}}>
                        <View style={{ padding: 9,backgroundColor:'green',marginLeft:'4%', width:"94%",marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold',fontSize:17,marginLeft:'38%',}}>Post Product</Text>
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
            backgroundColor:'#fff',
            height:110,
        },
        buttons:{
            marginLeft:1, 
            marginTop:-2
        },
        mainView:{
            flex:1,
            backgroundColor:'#dcdcdc'
        }
    })