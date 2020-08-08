import  React,{Component} from 'react'
import {Keyboard, Button, Image, View,StyleSheet,Text,TextInput,Alert,ScrollView,ActivityIndicator,TouchableWithoutFeedback,KeyboardAvoidingView,TouchableOpacity} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import {Ionicons,FontAwesome,AntDesign,Entypo,EvilIcons} from '@expo/vector-icons'


  
export default class SellProduce extends Component{
          
        state = {
            LocalImage:null,
            mode:true,
            nameOfProduct:'',
            price:'',
            id:'',
            description:'',
            title:'',
            name:'',
            contact:'',
            location:'',
            usertype:'',
            Loading:false,
           
            }


         


            handlePost=async ()=>{


                
              this.setState({Loading:true})  
            // Alert.alert(this.state.LocalImage)
            //   const formData = new FormData();
            
            //   formData.append('user_id', this.state.id);
            //   formData.append('category', "1");
            //   formData.append('sub_category', "1");
            //   formData.append('price', this.state.price);
            //   formData.append('location_id',"0");
            //   formData.append('featured_listing', "1");
            //   formData.append('title', this.state.title);
            //   formData.append('listing_slug',"");
            //   formData.append('description', this.state.description);
            //   formData.append('address', this.state.location);

           

             
              const sourceAsString = this.state.LocalImage.toString();
            
              const fileName = sourceAsString.split('/').pop();
            
            // //   alert(fileName)
            //   formData.append('featured_image', {
            //     uri: sourceAsString,
            //     type: 'image/jpg',
            //     name: fileName,
            //   });
        //    formData.append('featured_image',fileName);
              Alert.alert(this.state.id)
            
            // Alert.alert(JSON.stringify(this.state.LocalImage))

            fetch("http://abyvoting.tk/submit_listing",{
                method:"POST",
                headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
                     },
             body:JSON.stringify({
                user_id:this.state.id,
                category:"1",
                sub_category: "1",
                price:this.state.price,
                location_id: "0",
                featured_listing:"1" ,
                title:this.state.title,
                listing_slug: "",
                description:this.state.description,
                address: this.state.location,
                featured_image:fileName,
                         })
                        })
         .then((response)=>response.text())
            .then((responseJSON)=>{
                this.setState({Loading:false})
                Alert.alert(responseJSON)
              Alert.alert("Product has been sent for review")    
            })
            .catch((error)=>{
                Alert.alert("Network Error")
            })
        
      

        }

            
   
  
       
        

    componentDidMount(){
       fetch('http://abyvoting.tk/profile',{
          method:"GET",
    
          })
        .then((response)=>response.json())
           .then((responseJSON)=>{
          
            this.setState({
             
                id:JSON.stringify(responseJSON.id),
                contact:responseJSON.mobile,
                name:responseJSON.first_name + responseJSON.last_name
              
            })
      
            
           })
           .catch((error)=>{
             Alert.alert(error)
           })
        
        }
  
 
  
        
    _renderImages(){
        
         
        <View     style={{marginLeft:2,alignSelf:'center'}}>
        {
    this.state.LocalImage &&
    <Image source={{ uri:this.state.LocalImage}}  style={{ width:'90%', height: 160}} />}
    <TouchableOpacity>
    <AntDesign name="minuscircle" color='red' size={16}  style={{marginTop:-5}}/>
    </TouchableOpacity>
    
        
    </View>

      }


      

      _pickImage = async () => {
        this.setState({
            mode:false
           })


      
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1
        });
    
        if (!result.cancelled) {
            this.setState({
                LocalImage:result.uri
            }
            );
        }
      };
    
    
      
    //     let pickerResult = await ImagePicker.launchImageLibraryAsync({
    //       mediaTypes: ImagePicker.MediaTypeOptions.All,
    //       base64: true,
    //       allowsEditing: true,
    //       aspect: [4, 3],
    //     })
    //     let imageUri = pickerResult ?   `data:image/jpg;base64,${pickerResult.uri}` : null
    //      imageUri && {uri: imageUri}
    //      this.state.multipleUrl.push(imageUri)
    //       this.setState({
    //   LocalImage: this.state.LocalImage.concat([pickerResult.uri]),
    //   })
    //   }

  

    render() {
       return (
        <KeyboardAvoidingView style={{flex:1}} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                     <Button title="Pick images of farm produce to sell"  color='green' onPress={this._pickImage}/>
               </View>
              
                <View >
                  {this.state.mode===true  ?
                  (

                    
                    <View style={{backgroundColor:'#fff',height:160,width:'100%'}}>
                            <TouchableOpacity>

                             <EvilIcons name='image' size={110} color='black' style={{marginTop:18,marginLeft:'34%'}} />
                            </TouchableOpacity>
                        </View>
                   
                  
                  ):(
                 
                  
                  
                    <View  style={styles.containers}>
                    <View     style={{alignSelf:'center'}}>
                 {
             this.state.LocalImage &&
             <Image source={{ uri:this.state.LocalImage}}  style={{ width:350, height: 180,marginLeft:8 }} />}
            
             
                 
             </View>
         
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
             
             onChangeText={(title)=>this.setState({title:title})}
             style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>
             <TextInput  
             
             onChangeText={(nameOfProduct)=>this.setState({nameOfProduct:nameOfProduct})}
             placeholder="Name of farm Product"   
             style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>
             <TextInput  
             placeholder="Description" 
           
             onChangeText={(description)=>this.setState({description:description})}
             multiline={true}  
             style={{marginLeft:'5%',height:60,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>

             <TextInput  
             placeholder="Price(GH₵)"  
             autoFocus  keyboardType="phone-pad"
             onChangeText={(price)=>this.setState({price:price})}
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
                 /* onChangeText={(name)=>this.setState({name:name})} */
                 style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>

                 <TextInput  
                 placeholder="Contact Number" 
                 value={this.state.contact}
                 /* onChangeText={(contact)=>this.setState({contact:contact})}  */
                 style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>

                 
                 <TextInput  
                 placeholder="Location"  
                 onChangeText={(location)=>this.setState({location})} 
                 style={{marginLeft:'5%',height:40,marginTop:38,backgroundColor:'white',width:'92%',borderColor:"#c0c0c0",borderBottomWidth:1}}/>

                 </View>
 
                <View>
                 <TouchableOpacity  onPress={this.handlePost} style={{marginTop:17}}>
                        <View style={{ padding: 9,backgroundColor:'green',marginLeft:'4%', width:"94%",marginHorizontal:5,shadowColor: '#000', shadowOffset: { width: 0, height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5,}}>
                             <Text style={{color:"white",fontWeight:'bold',fontSize:17,marginLeft:'38%',}}>Post Product</Text>
                        </View>
              </TouchableOpacity>
                    {this.state.Loading &&
                <View style={{
               position: 'absolute',
               left: 0,
               right: 0,
               top: 8,
               bottom: 0,
               alignItems: 'center',
               justifyContent: 'center'
                 }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            }

                 </View>  

                 </View> 
               

                 </ScrollView>

            
               
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
    
          )


          
       }
      }       

       
    const styles=StyleSheet.create({
        containers:{
            flex:1,
            flexDirection:'row',
            marginTop:4,
            backgroundColor:'#fff',
            height:190,
        },
        buttons:{
            marginLeft:1, 
            marginTop:-2
        },
        mainView:{
            flex:1,
            backgroundColor:'#f2f2f2'
        }
    })