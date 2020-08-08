import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-swiper'
import Button from '../components/Button';

const { width, height } = Dimensions.get('screen');
const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Swiper loop={false}>
        <View style={styles.imageSlide}>
          <ImageBackground
            style={styles.img}
            source={require('../assets/images/flower1.jpg')}
          >
            <View
              style={{
                flex: 8,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 30,
              }}
            >
              <Text style={styles.quote}>
                Welcome to Duapa App!, We are happy to have you onboard.

                DUAPA is an ICT farmer-led mobile platform to support access
                to food production information and technologies through 
                extension services.


              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#F9A91E',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}
              >
                -DUAPA APP
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.imageSlide}>
          <ImageBackground
          style={styles.img}
            source={require('../assets/images/swipe-img-1.jpg')}
          >
            <View
              style={{
                flex: 8,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 30,
              }}
            >
            <Text style={styles.quote1}>
                Create an account with Duapa to enjoy services and
                priviledges that comes with the mobile application.
                Here we provide users access to available AgroInputs and help 
                them sell produce from  thier farm.
                You must register as a member to  enjoy full services
                that comes with DUAPA application
              </Text>
            </View>
          </ImageBackground>
        </View>



        <View style={styles.imageSlide}>
          <ImageBackground
          style={styles.img}
            source={require('../assets/images/plant.jpg')}
          >
            <View
              style={{
                flex: 8,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 30,
              }}
            >
            <Text style={styles.quote2}>
                Feel free to ask all necessary questions on the 
                platform by going to the customer service screen 
                on the main dashboard of the DUAPA application
                You can get intouch with a customer service agent
                through the following means: call, email and SMS
              </Text>
            </View>
          </ImageBackground>
        </View>



        <View style={styles.imageSlide}>
          <ImageBackground
          style={styles.img}
            source={require('../assets/images/swipe-img-4.jpg')}
          >
            <View
              style={{
                flex: 8,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 30,
              }}
            >
            <Text style={styles.quote2}>
              
              </Text>
            </View>
          </ImageBackground>
        </View>
      </Swiper>
      <View style={{ position: 'absolute', bottom: 30, width: '100%' }}>
        <View style={styles.btn}>
          <Button
            title="Get Started"
            pressHandler={() => navigation.navigate('login')}
            bgColor="#F9A91E"
          />
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width,
    height,
  },
  quote: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
    fontWeight:'bold'
  },
  quote1:{
    fontSize:18,
    color:'#FFF',
    fontWeight:'bold'
  },
  quote2:{
    fontSize:18,
    color:'#000',
    fontWeight:'bold'
  },
  btn: {
    margin: 40,
    
  },
});
