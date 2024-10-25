import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import card1 from '../../assets/CardImages/card5.png';
import card2 from '../../assets/CardImages/card6.png';
import card3 from '../../assets/CardImages/card1.png';
import card4 from '../../assets/CardImages/cardTwo.jpg';
import card5 from '../../assets/CardImages/card7.png';
import card6 from '../../assets/CardImages/card8.png';
import card7 from '../../assets/CardImages/card9.png';
import card8 from '../../assets/CardImages/card10.png';
import card9 from '../../assets/CardImages/card11.png';
import card10 from '../../assets/CardImages/card12.png';
import notificationIcon from '../../assets/Icons/profile/icon.png';
import filterIcon from '../../assets/Icons/Filter.png';
const {width, height} = Dimensions.get('screen');

export default function Explore({navigation}) {
  const [activeEvent, setactiveEvent] = useState('All Events');

  const Events = [
    {
      title: 'All Events',
      iconName: 'fire',
    },
    {
      title: 'Sports',
      iconName: 'basketball',
    },
    {
      title: 'Music',
      iconName: 'music',
    },
    {
      title: 'Exercise',
      iconName: 'dumbbell',
    },
  ];

  const UpcomingEvents = [
    {
      imgUrl: card1,
      title: 'California Art Festival: 2022 Dana Point 29-30',
      date: 'Nov 27',
      time: '07:00 PM',
      price: '$39.00',
    },
    {
      imgUrl: card2,
      title: 'Creative self care: Guide to Intuitive Watercolor',
      date: 'Nov 27',
      time: '07:00 PM',
      price: '$39.00',
    },
  ];

  const Event2 = [
    {
      title: 'Disco Tehran - Goodbye Party',
      ImgUrl: card3,
      date: '23 Oct',
      time: '08:00 PM',
    },
    {
      title: 'Everyday People NYC: rOLLER',
      ImgUrl: card4,
      date: '31 Oct',
      time: '08:00 PM',
    },
  ];

  const Suggestions = [
    {
      imgUrl: card5,
      title: 'Self love stories: A Journaling Workshop',
      date: 'Nov 27',
      time: '07:00 PM',
      price: 'Free',
    },
    {
      imgUrl: card6,
      title: 'Creative self care: Guide to Intuitive Watercolor',
      date: 'Nov 27',
      time: '07:00 PM',
      price: '$39.00',
    },
    {
      imgUrl: card7,
      title: 'Daft punk discovery: 20 Years Anniversary Party',
      date: 'Nov 27',
      time: '07:00 PM',
      price: '$78.55',
    },
  ];

  const BestOrganizers = [
    {
      imgUrl: card8,
      title: 'Muhammad Muzamil',
      followers: '25k Followers',
    },
    {
      imgUrl: card9,
      title: 'Ashley G.',
      followers: '12.5k Followers',
    },
    {
      imgUrl: card10,
      title: 'Santa',
      followers: '12.5k Followers',
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#f6f6f6',
            height: 'auto',
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <View style={styles.head}>
            <View>
              <Text
                style={{
                  paddingTop: 4,
                  fontFamily: 'aeoniktrial',
                  color: 'gray',
                }}>
                Your Location
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: 'black',
                  paddingTop: 4,
                  fontFamily: 'aeoniktrial',
                }}>
                California, USA
              </Text>
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
                  style={{width: 25, height: 25}}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: 1,
                    right: 6,
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

          <View style={styles.searchBar}>
            <Icon2 name="search" color={'gray'} size={20} />
            <TextInput
              style={{
                width: '70%',
                fontFamily: 'aeoniktrial',
                fontWeight: 'bold',
                color: 'gray',
              }}
              placeholder="Search..."
            />
            {/* <Icon3 name='filter-list' size={20} /> */}
            <Image source={filterIcon} style={{width: 28, height: 28}} />
          </View>

          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginTop: 20}}>
              {Events.map((t, i) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => setactiveEvent(t.title)}
                  key={i}
                  style={[
                    styles.eventbtn,
                    {
                      borderWidth: 1,
                      alignItems: 'center',
                      borderColor: activeEvent == t.title ? '#355fe5' : 'gray',
                      backgroundColor:
                        activeEvent == t.title ? '#355fe5' : 'transparent',
                    },
                  ]}>
                  <Icon4
                    name={t.iconName}
                    size={20}
                    color={activeEvent == t.title ? 'white' : 'gray'}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      color: activeEvent == t.title ? 'white' : 'gray',
                      fontFamily: 'aeoniktrial',
                    }}>
                    {t.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={{marginTop: 20}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.h1}>Upcoming events</Text>
              <Text
                style={{fontSize: 16, color: 'blue', fontFamily: 'aeoniktrial'}}
                onPress={() => navigation.navigate('Search')}>
                See All
              </Text>
            </View>

            <View style={{marginTop: 20}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {UpcomingEvents.map((t, i) => (
                  <View
                    key={i}
                    style={{
                      alignSelf: 'flex-start',
                      borderRadius: 20,
                      marginLeft: i === 0 ? 0 : 10,
                    }}>
                    <Image
                      source={t.imgUrl}
                      style={{borderRadius: 20, height: 290, width: 250}}
                    />
                    <View
                      style={{
                        position: 'absolute',
                        right: 0,
                        paddingTop: 20,
                        paddingRight: 15,
                      }}>
                      <Icon3 name="favorite-border" size={30} color="white" />
                    </View>

                    <View style={styles.cardOne}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: 'bold',
                          lineHeight: 20,
                          fontFamily: 'aeoniktrial',
                        }}>
                        {t.title}
                      </Text>
                      <View
                        style={{
                          paddingTop: 15,
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: 200,
                        }}>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 5,
                            alignItems: 'center',
                          }}>
                          <Icon3 name="today" size={20} color="gray" />
                          <Text
                            style={{fontFamily: 'aeoniktrial', color: 'gray'}}>
                            {t.date}{' '}
                            <Icon5 name="circle" size={6} color="gray" />{' '}
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
                  </View>
                ))}
              </ScrollView>
            </View>

            <View style={{marginTop: 20}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.h1}>More Events</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'blue',
                    fontFamily: 'aeoniktrial',
                  }}
                  onPress={() => navigation.navigate('Search')}>
                  See All
                </Text>
              </View>

              {Event2.map((t, i) => (
                <View style={styles.cardEvents} key={i}>
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
                    <Text
                      style={[
                        styles.h1,
                        {paddingTop: 5, fontFamily: 'aeoniktrial'},
                      ]}>
                      {t.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      right: 0,
                      paddingTop: 15,
                      paddingRight: 20,
                    }}>
                    <Icon3 name="favorite-border" size={25} color="gray" />
                  </View>
                </View>
              ))}
            </View>

            <View style={{marginTop: 20}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.h1}>Suggestion for you</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'blue',
                    fontFamily: 'aeoniktrial',
                  }}
                  onPress={() => navigation.navigate('Search')}>
                  See All
                </Text>
              </View>

              {Suggestions.map((t, i) => (
                <View style={styles.cardEvents} key={i}>
                  <Image
                    source={t.imgUrl}
                    style={{height: 90, width: 80, borderRadius: 13}}
                  />
                  <View style={{width: '70%', paddingTop: 5}}>
                    <Text style={styles.h2}>{t.title}</Text>
                    <View
                      style={{
                        paddingTop: 15,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 200,
                      }}>
                      <View
                        style={{display: 'flex', flexDirection: 'row', gap: 5}}>
                        <Icon3 name="today" size={20} color="gray" />
                        <Text style={{color: 'gray'}}>
                          {t.date} <Icon5 name="circle" size={6} color="gray" />{' '}
                          {t.time}
                        </Text>
                      </View>
                      <Text style={{color: 'blue'}}>{t.price}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            <View style={{marginTop: 20, marginBottom: 20}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.h1}>Best Organizers</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'blue',
                    fontFamily: 'aeoniktrial',
                  }}
                  onPress={() => navigation.navigate('Search')}>
                  See All
                </Text>
              </View>

              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {BestOrganizers.map((t, i) => (
                    <View
                      key={i}
                      style={[
                        styles.cardOrganizers,
                        {marginLeft: i === 0 ? 0 : 10},
                      ]}>
                      <Image
                        source={t.imgUrl}
                        style={{height: 48, width: 48}}
                      />
                      <Text
                        style={{paddingTop: 10, color: 'black', fontSize: 16}}>
                        {t.title}
                      </Text>
                      <Text style={{paddingTop: 3, color: 'gray'}}>
                        {t.followers}
                      </Text>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        style={{
                          marginTop: 8,
                          backgroundColor: '#355fe5',
                          height: 30,
                          width: 96,
                          borderRadius: 10,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={{color: 'white'}}>Follow</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
        <StatusBar barStyle="dark-content" backgroundColor="#f6f6f6" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  head: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBar: {
    marginTop: 20,
    backgroundColor: '#fff',
    height: 50,
    borderColor: '#355fe5',
    borderWidth: 1,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
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
  eventbtn: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 13,
    borderRadius: 15,
    gap: 5,
    marginLeft: 5,
  },
  h1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'aeoniktrial',
  },
  h2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  cardOne: {
    position: 'absolute',
    bottom: 15,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 15,
    width: 230,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  cardEvents: {
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
  cardOrganizers: {
    backgroundColor: '#fff',
    marginTop: 20,
    alignSelf: 'flex-start',
    height: 170,
    width: 140,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
