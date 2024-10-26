import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('screen');
import Img1 from '../../assets/Images/My.jpg';
import Img2 from '../../assets/Images/HomeImage.png';
import cardOne from '../../assets/CardImages/card1.png';
import cardTwo from '../../assets/CardImages/cardTwo.jpg';
import cardThree from '../../assets/CardImages/card3.png';
import cardFour from '../../assets/CardImages/card4.png';
import notificationIcon from '../../assets/Icons/profile/icon.png';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
export default function Home({navigation}) {
  const ticket = [
    {
      title: 'Bring Me The Horizon Tour',
      ImgUrl: cardOne,
      date: 'Nov 27',
      time: '07:00 PM',
      price: '$39.00',
    },
    {
      title: 'New York City',
      ImgUrl: cardTwo,
      date: 'Dec 31',
      time: '07:00 PM',
      price: '$59.00',
    },
  ];
  const Events = [
    {
      title: 'Disco Tehran - Goodbye Party',
      ImgUrl: cardThree,
      date: '23 Oct',
      time: '08:00 PM',
    },
    {
      title: 'Everyday People NYC: rOLLER',
      ImgUrl: cardFour,
      date: '31 Oct',
      time: '08:00 PM',
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: '#f6f6f6', height: 'auto'}}>
          <View style={styles.head}>
            <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
              <Image source={Img1} style={styles.headImag} />
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'black',
                    paddingTop: 4,
                    fontFamily: 'Aeonik',
                  }}>
                  Hi, Muzamil
                </Text>
                <Text
                  style={{
                    paddingTop: 4,
                    fontFamily: 'Aeonik-Regular',
                    color: 'gray',
                  }}>
                  Find your favorite events
                </Text>
              </View>
            </View>
            <View style={{paddingTop: 8}}>
              <View
                style={{
                  position: 'relative',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  padding: 5,
                  height: 40,
                  width: 40,
                  borderRadius: 50,
                }}>
                {/* <Icon name="bell" size={25} color="black" /> */}
                <Image
                  source={notificationIcon}
                  style={{height: 30, width: 30}}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 4,
                    backgroundColor: 'red',
                    borderRadius: 10,
                    minWidth: 10,
                    height: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}></View>
              </View>
            </View>
          </View>

          <View style={{padding: 15}}>
            <Text style={styles.h1}>Your Ticket Events</Text>

            <View style={styles.card1}>
              <Image
                source={Img2}
                style={{borderRadius: 15, width: '38%', height: 137}}
              />
              <View style={{width: '60%'}}>
                <Text
                  style={[
                    styles.h1,
                    {
                      lineHeight: 30,
                      fontFamily: 'Aeonik',
                    },
                  ]}>
                  California Art Festival: 2022 Dana Point 29-30
                </Text>
                <View
                  style={{
                    marginTop: 35,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: 3,
                      marginTop: 5,
                    }}>
                    <Icon2 name="location-on" size={20} color="lightgray" />
                    <Text style={{fontFamily: 'Aeonik-Regular', color: 'gray'}}>
                      California, CA
                    </Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.detailBtn}>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'aeoniktrial',
                      }}>
                      Detail
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={{padding: 15}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.h1}>Explore Nearby</Text>
              <Text
                style={{fontSize: 16, color: 'blue', fontFamily: 'aeoniktrial'}}
                onPress={() => navigation.navigate('Search')}>
                See All
              </Text>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {ticket.map((t, i) => (
                <View
                  key={i}
                  style={[styles.card2, {marginLeft: i === 0 ? 0 : 10}]}>
                  <Image
                    source={t.ImgUrl}
                    style={{borderRadius: 10, height: 140, width: 216}}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      right: 0,
                      paddingTop: 20,
                      paddingRight: 20,
                    }}>
                    <Icon2 name="favorite-border" size={25} color="white" />
                  </View>
                  <Text
                    style={[
                      styles.h1,
                      {
                        paddingTop: 10,
                        fontFamily: 'aeoniktrial',
                        fontWeight: 'bold',
                      },
                    ]}>
                    {t.title}
                  </Text>
                  <View
                    style={{
                      paddingTop: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 5,
                        alignItems: 'center',
                      }}>
                      <Icon2 name="today" size={20} color="gray" />
                      <Text style={{fontFamily: 'aeoniktrial', color: 'gray'}}>
                        {t.date}{' '}
                        <Icon3
                          name="circle"
                          size={6}
                          color="gray"
                          style={{fontFamily: 'aeoniktrial'}}
                        />{' '}
                        {t.time}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: 'blue',
                        fontFamily: 'aeoniktrial',
                        fontWeight: 'bold',
                      }}>
                      {t.price}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={{padding: 15}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.h1}>More Events</Text>
              <Text
                style={{fontSize: 16, color: 'blue', fontFamily: 'aeoniktrial'}}
                onPress={() => navigation.navigate('Search')}>
                See All
              </Text>
            </View>

            {Events.map((t, i) => (
              <View style={styles.card3} key={i}>
                <Image
                  source={t.ImgUrl}
                  style={{height: 72, width: 72, borderRadius: 13}}
                />
                <View style={{width: '50%'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'blue',
                      fontFamily: 'aeoniktrial',
                      fontWeight: 'bold',
                    }}>
                    {t.date} - {t.time}{' '}
                  </Text>
                  <Text style={[styles.h1, {paddingTop: 5}]}>{t.title}</Text>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    right: 0,
                    paddingTop: 15,
                    paddingRight: 20,
                  }}>
                  <Icon2
                    name="favorite-border"
                    size={25}
                    color="gray"
                    style={{fontFamily: 'aeoniktrial'}}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
        <StatusBar barStyle="dark-content" backgroundColor="#f6f6f6" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  head: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headImag: {
    borderRadius: 50,
    height: 60,
    width: 60,
  },
  h1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'aeoniktrial',
  },
  card1: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  detailBtn: {
    backgroundColor: '#355fe5',
    height: 30,
    width: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  card2: {
    marginTop: 15,
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    padding: 12,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  card3: {
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 1,
      },
    }),
  },
});
