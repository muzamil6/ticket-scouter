import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import ChevronRight from 'react-native-vector-icons/Octicons';
import User from 'react-native-vector-icons/Feather';
import Edit from 'react-native-vector-icons/Feather';
import Card from 'react-native-vector-icons/MaterialCommunityIcons';
import Bell from 'react-native-vector-icons/Fontisto';
import Lan from 'react-native-vector-icons/Ionicons';
import Setting from 'react-native-vector-icons/Feather';
import Copy from 'react-native-vector-icons/AntDesign';
import iconImage from '../../assets/Icons/iconTicket.png';
const {width, height} = Dimensions.get('screen');

const ProfileMain = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: '#f6f6f6', height: height / 1.181}}>
          <StatusBar backgroundColor="#f6f6f6" barStyle="dark-content" />
          <View style={styles.container}>
            <View style={styles.profileContainer}>
              <Image
                source={require('../../assets/Images/My.jpg')}
                style={{
                  borderRadius: 10,
                  height: 55,
                  width: 55,
                  marginRight: 10,
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Muzamil Khan</Text>
                <Text style={styles.usernameText}>@muzamil12</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.editIconContainer}>
                {/* <Image source={require('../../assets/Icons/edit.png')} style={{ marginRight: 8, width: 30, height: 30 }} /> */}
                <Edit name="edit" size={24} color="black" />
              </TouchableOpacity>
            </View>
            {/* First Section */}
            <View
              style={{
                marginTop: 12,
                borderWidth: 1,
                borderColor: '#3369e7',
                borderRadius: 15,
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 12,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 14,
                }}>
                <Image
                  source={iconImage}
                  style={{
                    height: 36,
                    width: 36,
                    marginRight: 10,
                    borderRadius: 5,
                  }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '400',
                    fontFamily: 'Aeonik-Regular',
                  }}>
                  Free Trial
                </Text>
              </View>
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '400',
                    marginRight: 10,
                    fontFamily: 'Aeonik-Regular',
                  }}>
                  Ends in 6 days
                </Text>
                <ChevronRight
                  name="chevron-right"
                  size={20}
                  color={'rgba(176, 176, 176, 1)'}
                  style={{marginRight: 15}}
                />
              </View>
            </View>

            {/* Second Section */}
            <View style={{marginLeft: 10, marginBottom: 12}}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Aeonik-Regular',
                  color: 'gray',
                }}>
                Profile
              </Text>
              <View
                style={{
                  marginTop: 12,
                  backgroundColor: 'white',
                  padding: 10,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  marginBottom: 12,
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    navigation.navigate('PersonalInfo');
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 12,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          backgroundColor: '#F4F4F4',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        {/* <Image source={require("../../assets/Icons/profile/profile.png")} style={{ height: 25, width: 25, borderRadius: 15 }} /> */}
                        <User name="user" size={26} color=" black" />
                      </View>
                      <View style={{marginLeft: 10}}>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: '400',
                            marginBottom: 5,
                            fontFamily: 'Aeonik-Regular',
                          }}>
                          Profile Information
                        </Text>
                        <Text
                          style={{
                            fontWeight: '400',
                            fontFamily: 'Aeonik-Regular',
                            color: 'gray',
                          }}>
                          Edit Profile
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                      <ChevronRight
                        name="chevron-right"
                        size={20}
                        color={'rgba(176, 176, 176, 1)'}
                        style={{marginRight: 5}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 12,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: '#F4F4F4',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Card
                        name="credit-card-edit-outline"
                        size={26}
                        color="black"
                      />
                      {/* <Image source={require("../../assets/Icons/profile/card.png")} style={{ height: 25, width: 25, borderRadius: 15 }} /> */}
                    </View>
                    <View style={{marginLeft: 10}}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: '400',
                          marginBottom: 5,
                          fontFamily: 'Aeonik-Regular',
                        }}>
                        Subscription
                      </Text>
                      <Text
                        style={{
                          fontWeight: '400',
                          fontFamily: 'Aeonik-Regular',
                          color: 'gray',
                        }}>
                        Your card
                      </Text>
                    </View>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <ChevronRight
                      name="chevron-right"
                      size={20}
                      color={'rgba(176, 176, 176, 1)'}
                      style={{marginRight: 5}}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    navigation.navigate('Notifications');
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 12,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          backgroundColor: '#F4F4F4',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Bell name="bell" size={26} color="black" />
                        {/* <Image source={require("../../assets/Icons/profile/icon.png")} style={{ height: 25, width: 25, borderRadius: 15 }} /> */}
                      </View>
                      <View style={{marginLeft: 10}}>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: '400',
                            marginBottom: 5,
                            fontFamily: 'Aeonik-Regular',
                          }}>
                          Notification
                        </Text>
                        <Text
                          style={{
                            fontWeight: '400',
                            fontFamily: 'Aeonik-Regular',
                            color: 'gray',
                          }}>
                          Seek support when issues arise
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                      <ChevronRight
                        name="chevron-right"
                        size={20}
                        color={'rgba(176, 176, 176, 1)'}
                        style={{marginRight: 5}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* another sections */}
            <View style={{marginLeft: 10, marginBottom: 12}}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Aeonik-Regular',
                  color: 'gray',
                }}>
                About
              </Text>
              <View
                style={{
                  marginTop: 12,
                  backgroundColor: 'white',
                  padding: 10,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  marginBottom: 12,
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    navigation.navigate('Language');
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 12,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          backgroundColor: '#F4F4F4',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Lan name="language-sharp" size={26} color="black" />
                        {/* <Image source={require("../../assets/Icons/profile/shield.png")} style={{ height: 25, width: 25, borderRadius: 15 }} /> */}
                      </View>
                      <View style={{marginLeft: 10}}>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: '400',
                            marginBottom: 5,
                            fontFamily: 'Aeonik-Regular',
                          }}>
                          Languagee
                        </Text>
                        <Text
                          style={{
                            fontWeight: '400',
                            fontFamily: 'Aeonik-Regular',
                            color: 'gray',
                          }}>
                          Change language preferences
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                      <ChevronRight
                        name="chevron-right"
                        size={20}
                        color={'rgba(176, 176, 176, 1)'}
                        style={{marginRight: 5}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    navigation.navigate('Profile');
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 12,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          backgroundColor: '#F4F4F4',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Setting name="settings" size={26} color="black" />
                        {/* <Image source={require("../../assets/Icons/profile/setting-2.png")} style={{ height: 25, width: 25, borderRadius: 15 }} /> */}
                      </View>
                      <View style={{marginLeft: 10}}>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: '400',
                            marginBottom: 5,
                            fontFamily: 'Aeonik-Regular',
                          }}>
                          Settings
                        </Text>
                        <Text
                          style={{
                            fontWeight: '400',
                            fontFamily: 'Aeonik-Regular',
                            color: 'gray',
                          }}>
                          Change some settings
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                      <ChevronRight
                        name="chevron-right"
                        size={20}
                        color={'rgba(176, 176, 176, 1)'}
                        style={{marginRight: 5}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    navigation.navigate('LegalPolicy');
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 12,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          backgroundColor: '#F4F4F4',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Copy name="copyright" size={26} color="black" />
                        {/* <Image source={require("../../assets/Icons/profile/terms.png")} style={{ height: 25, width: 25, borderRadius: 15 }} /> */}
                      </View>
                      <View style={{marginLeft: 10}}>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: '400',
                            marginBottom: 5,
                            fontFamily: 'Aeonik-Regular',
                          }}>
                          Terms of service
                        </Text>
                        <Text
                          style={{
                            fontWeight: '400',
                            fontFamily: 'Aeonik-Regular',
                            color: 'gray',
                          }}>
                          Seek support when issues arise
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                      <ChevronRight
                        name="chevron-right"
                        size={20}
                        color={'rgba(176, 176, 176, 1)'}
                        style={{marginRight: 5}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 10,
  },
  profileText: {
    color: 'black',
    fontSize: 16,
  },
  container: {
    // paddingHorizontal: 16,
    // paddingVertical: 40,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    // backgroundColor:'#f6f6f6',
    // height:height/1.295
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  nameText: {
    color: 'black',
    fontSize: 17,
    marginBottom: 5,
    fontFamily: 'Aeonik-Bold',
  },
  usernameText: {
    fontSize: 14,
    fontFamily: 'Aeonik-Regular',
    color: 'gray',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  editIconContainer: {
    position: 'absolute',
    right: 15,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    color: 'black',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -55,
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginLeft: 10,
  },
});

export default ProfileMain;
