import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {height, width} from 'react-native-dimension';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import card1 from '../../assets/CardImages/card13.png';
import card2 from '../../assets/CardImages/card5.png';
import card3 from '../../assets/CardImages/card18.png';
export default function PriceComparison({navigation}) {
  const [numberTicket, setnumberTicket] = useState(1);
  const [activeBtn, setactiveBtn] = useState('Best prices');

  const tickets = [
    {
      title: 'Ticket Master',
      recommended: true,
      price: '$50.9 USD',
      time: '10:00 PM',
      seat: 'No seat',
      imgUrl: card2,
    },
    {
      title: 'Seat geek',
      recommended: false,
      price: '$50.9 USD',
      time: '09:00 PM',
      seat: '34 H',
      imgUrl: card3,
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{height: 'auto', backgroundColor: '#f6f6f6'}}>
          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                navigation.goBack('abc');
              }}
              style={styles.backButton}>
              <Icon name="cross" style={styles.backIcon} size={30} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.headerText}>Price Comparison</Text>
            </View>
          </View>

          <View style={{margin: 20}}>
            <View style={styles.cardEvents}>
              <Image
                source={card1}
                style={{height: 90, width: 90, borderRadius: 13}}
              />
              <View
                style={{
                  width: '70%',
                  paddingTop: 5,
                  justifyContent: 'space-between',
                  paddingBottom: 5,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontFamily: 'Aeonik-Bold',
                  }}>
                  California Art Festival
                </Text>
                <Text style={{color: 'gray', fontFamily: 'Aeonik-Regular'}}>
                  Sun, 29 March 2021 - 10:00 AM{' '}
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingRight: 10,
                  }}>
                  <View
                    style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                    <Icon2
                      name="minus-box-outline"
                      size={25}
                      color="gray"
                      onPress={() => {
                        numberTicket > 1 && setnumberTicket(numberTicket - 1);
                      }}
                    />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: 17,
                        paddingTop: 1,
                      }}>
                      {numberTicket}
                    </Text>
                    <Icon2
                      name="plus-box-outline"
                      size={25}
                      color="gray"
                      onPress={() => {
                        setnumberTicket(numberTicket + 1);
                      }}
                    />
                  </View>
                  <View>
                    <Icon2 name="trash-can-outline" size={25} color="red" />
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                marginTop: 20,
                backgroundColor: '#fff',
                borderRadius: 20,
                padding: 25,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={[
                    styles.h1,
                    {alignSelf: 'center', fontFamily: 'Aeonik-Bold'},
                  ]}>
                  $300.3
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    alignSelf: 'center',
                    color: 'gray',
                    fontFamily: 'Aeonik-Regular',
                  }}>
                  Lowest Price
                </Text>
              </View>
              <View>
                <Text style={[styles.h1, {alignSelf: 'center'}]}>30 ahead</Text>
                <Text
                  style={{
                    marginTop: 5,
                    alignSelf: 'center',
                    color: 'gray',
                    fontFamily: 'Aeonik-Regular',
                  }}>
                  Ticket Queue
                </Text>
              </View>
              <View>
                <Text style={[styles.h1, {alignSelf: 'center'}]}>109</Text>
                <Text
                  style={{
                    marginTop: 5,
                    alignSelf: 'center',
                    color: 'gray',
                    fontFamily: 'Aeonik-Regular',
                  }}>
                  Ticket left
                </Text>
              </View>
            </View>

            <View
              style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                gap: 15,
              }}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={{
                  backgroundColor:
                    activeBtn == 'Best prices' ? '#355fe5' : 'transparent',
                  padding: 20,
                  borderRadius: 15,
                  borderWidth: activeBtn == 'Best prices' ? 0 : 1,
                  borderColor: 'gray',
                }}
                onPress={() => setactiveBtn('Best prices')}>
                <Text
                  style={{
                    color: activeBtn == 'Best prices' ? 'white' : 'gray',
                    fontFamily: 'Aeonik-Regular',
                  }}>
                  Best prices
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                style={{
                  backgroundColor:
                    activeBtn == 'Cheapest' ? '#355fe5' : 'transparent',
                  padding: 20,
                  borderRadius: 15,
                  borderWidth: activeBtn == 'Cheapest' ? 0 : 1,
                  borderColor: 'gray',
                }}
                onPress={() => setactiveBtn('Cheapest')}>
                <Text
                  style={{
                    color: activeBtn == 'Cheapest' ? 'white' : 'gray',
                    fontFamily: 'Aeonik-Regular',
                  }}>
                  Cheapest - $20
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 20, marginBottom: 50}}>
              {tickets.map((t, i) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={i}
                  style={styles.ticketContainer}>
                  <View style={styles.ticketContent}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: 15,
                        borderBottomWidth: 1,
                        borderStyle: 'dashed',
                        borderBottomColor: '#E9EBED',
                        paddingBottom: '30px',
                      }}>
                      <Image
                        source={t.imgUrl}
                        style={{
                          borderRadius: 10,
                          height: 55,
                          width: 55,
                          marginRight: 10,
                        }}
                      />
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          width: '80%',
                          justifyContent: 'space-between',
                        }}>
                        <View>
                          <Text style={styles.h1}>{t.title}</Text>
                          {t.recommended && (
                            <View
                              style={{
                                backgroundColor: '#77E371',
                                padding: 7,
                                borderRadius: 10,
                              }}>
                              <Text
                                style={{
                                  color: 'black',
                                  fontSize: 14,
                                  fontFamily: 'Aeonik-Bold',
                                }}>
                                Recommended
                              </Text>
                            </View>
                          )}
                        </View>
                        <View style={{justifyContent: 'center'}}>
                          <Text style={styles.h1}>{t.price}</Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: -16,
                        marginHorizontal: -30,
                      }}>
                      <View style={styles.separator} />
                      <View style={styles.separator} />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 15,
                      }}>
                      <View>
                        <Text
                          style={{
                            textAlign: 'left',
                            color: 'gray',
                            fontFamily: 'Aeonik-Regular',
                          }}>
                          Time
                        </Text>
                        <Text
                          style={{
                            textAlign: 'left',
                            fontWeight: 'bold',
                            color: 'black',
                          }}>
                          {t.time}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            textAlign: 'left',
                            color: 'gray',
                            fontFamily: 'Aeonik-Regular',
                          }}>
                          Seat
                        </Text>
                        <Text
                          style={{
                            textAlign: 'left',
                            fontWeight: 'bold',
                            color: 'black',
                          }}>
                          {t.seat}
                        </Text>
                      </View>
                      <View style={{alignSelf: 'flex-end'}}>
                        <TouchableOpacity
                          activeOpacity={0.9}
                          style={styles.premium}
                          onPress={() => {
                            navigation.navigate('TicketView');
                          }}>
                          <Text
                            style={{
                              color: 'black',
                              fontFamily: 'Aeonik-Regular',
                            }}>
                            Premium Ticket x1
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#fff',
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 10,
          paddingTop: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        <View>
          <Text style={styles.h1}>$50.11</Text>
          <Text style={{paddingTop: 10, color: 'gray', fontFamily: 'Plus'}}>
            You’re going! +1
          </Text>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{backgroundColor: '#355fe5', padding: 20, borderRadius: 10}}
            onPress={() => navigation.navigate('Pick you plan')}>
            <Text style={{color: 'white', fontFamily: 'Aeonik-Bold'}}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 10,
    marginTop: 6,
  },
  backIcon: {
    color: 'black',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -30,
  },
  headerText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
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
  h1: {
    fontSize: 17,
    // fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Aeonik-Bold',
  },
  ticketContainer: {
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 10,
  },
  ticketContent: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  separator: {
    height: height(4),
    width: width(8),
    borderRadius: width(10),
    backgroundColor: '#f2f2f2',
  },
  premium: {
    backgroundColor: '#F8FCF8',
    padding: 10,
    borderRadius: 5,
  },
});
