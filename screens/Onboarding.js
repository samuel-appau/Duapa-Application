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
            source={require('../assets/images/swiper1.jpg')}
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
                For verily I say unto you, That whosoever shall say unto this
                mountain, Be thou removed, and be thou cast into the sea; and
                shall not doubt in his heart, but shall believe that those
                things which he saith shall come to pass; he shall have
                whatsoever he saith. Therefore I say unto you, What things
                soever ye desire, when ye pray, believe that ye receive them,
                and ye shall have them.
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#F9A91E',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}
              >
                -Mark 11:23
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.imageSlide}>
          <ImageBackground
            style={styles.img}
            source={require('../assets/images/swiper1.jpg')}
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
                Welcome to Preach. Here we provide you with all the sermons from
                your church services. You must be registered on this app to
                provide important details such as your name, email address and
                the church you attend. You will be notified when new sermons
                from your church services are made available. You would be able
                to listen to these sermons, read notes from the sermons and
                download them as well.
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
  },
  btn: {
    margin: 40,
  },
});
