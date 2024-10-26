import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import img4 from '../../assets/Images/Circle.png';
import Frame4 from '../../assets/Images/home.jpg';
import Frame5 from '../../assets/Images/favScreen.jpg';
import Frame6 from '../../assets/Images/ticket.jpg';
import {useRoute} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
export default function GetStarted({navigation}) {
  const route = useRoute();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{height: height / 1.1, backgroundColor: '#fff'}}>
          <View style={{height: height / 1.3}}>
            <Swiper
              style={styles.wrapper}
              activeDot={<View style={styles.activeDot} />}>
              <View style={styles.slide1}>
                <View
                  style={{
                    height: height / 2,
                    width: width,
                    backgroundColor: '#021246',
                  }}>
                  <Image
                    source={img4}
                    style={{position: 'absolute', left: 0}}
                  />
                  <Image
                    source={Frame6}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      alignSelf: 'center',
                      zIndex: 1,
                      height: 310,
                      width: 310,
                      borderTopRightRadius: 30,
                      borderTopLeftRadius: 30,
                    }}
                  />
                </View>
                <Text style={styles.slideText}>
                  Get tickets for events you like easily
                </Text>
                <Text style={styles.slideText2}>
                  Create an account to save your preferences and access your
                  saved news from any device
                </Text>
              </View>

              <View style={styles.slide2}>
                <View
                  style={{
                    height: height / 2,
                    width: width,
                    backgroundColor: '#021246',
                  }}>
                  <Image
                    source={img4}
                    style={{position: 'absolute', left: 0}}
                  />
                  <Image
                    source={Frame5}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      alignSelf: 'center',
                      zIndex: 1,
                      height: 310,
                      width: 310,
                      borderTopRightRadius: 30,
                      borderTopLeftRadius: 30,
                    }}
                  />
                </View>
                <Text style={styles.slideText}>
                  Get tickets for events you like easily
                </Text>
                <Text style={styles.slideText2}>
                  Create an account to save your preferences and access your
                  saved news from any device
                </Text>
              </View>

              <View style={styles.slide3}>
                <View
                  style={{
                    height: height / 2,
                    width: width,
                    backgroundColor: '#021246',
                  }}>
                  <Image
                    source={img4}
                    style={{position: 'absolute', left: 0}}
                  />
                  <Image
                    source={Frame4}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      alignSelf: 'center',
                      zIndex: 1,
                      height: 310,
                      width: 310,
                      borderTopRightRadius: 30,
                      borderTopLeftRadius: 30,
                    }}
                  />
                </View>
                <Text style={styles.slideText}>
                  Get tickets for events you like easily
                </Text>
                <Text style={styles.slideText2}>
                  Create an account to save your preferences and access your
                  saved news from any device
                </Text>
              </View>
            </Swiper>
          </View>

          <View>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.btn1}
              onPress={() => {
                navigation.navigate('ChooseLocation');
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Aeonik-Regular',
                }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 5}}>
            <TouchableOpacity
              activeOpacity={0.9}
              s
              onPress={() => {
                navigation.navigate('SignIn');
              }}
              style={styles.btn2}>
              <Text
                style={{
                  fontFamily: 'Aeonik-Regular',
                  color: 'black',
                }}>
                already got an account? Login
              </Text>
            </TouchableOpacity>
          </View>

          <StatusBar barStyle="white-content" backgroundColor="#051548" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDot: {
    backgroundColor: 'black',
    width: 8,
    height: 8,
    borderRadius: 6,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  slideText: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 30,
    fontWeight: '700',
    marginTop: 40,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Aeonik',
  },
  slideText2: {
    marginTop: 5,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Aeonik-Regular',
    color: 'gray',
  },
  btn1: {
    backgroundColor: '#355fe5',
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btn2: {
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});
