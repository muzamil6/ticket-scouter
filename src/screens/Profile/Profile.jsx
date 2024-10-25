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
import Icon from 'react-native-vector-icons/AntDesign';
import {Modal} from 'react-native';
import React, {useState} from 'react';
import {Button} from '@rneui/base';
const {width, height} = Dimensions.get('screen');

const Profile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };
  const handleSubmit = () => {
    setModalVisible(true);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: '#f6f6f6', height: height / 1.1}}>
          <StatusBar backgroundColor="#f6f6f6" barStyle="dark-content" />
          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.backButton}
              onPress={() => navigation.goBack('abc')}>
              <Icon name="arrowleft" style={styles.backIcon} size={30} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.headerText}>Profile</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.profileContainer}>
              <Image
                source={require('../../assets/Profile/abc.png')}
                style={{
                  borderRadius: 10,
                  height: 55,
                  width: 55,
                  marginRight: 10,
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Muhammad Muzamil</Text>
                <Text style={styles.usernameText}>@muzamil12</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.editIconContainer}>
                <Image
                  source={require('../../assets/Icons/edit.png')}
                  style={{marginRight: 8, height: 25, width: 25}}
                />
                {/* <Edit name="circle-edit-outline" size={24} color="black" /> */}
              </TouchableOpacity>
            </View>
            <View style={styles.sectionContainer}>
              <Text
                style={{
                  marginBottom: 15,
                  marginLeft: 10,
                  fontSize: 16,
                  fontFamily: 'Plus',
                  color: 'gray',
                }}>
                Setting
              </Text>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.sectionItem}
                onPress={() => navigation.navigate('Your Card')}>
                <Image
                  source={require('../../assets/Icons/Wallet.png')}
                  style={{
                    marginRight: 15,
                    paddingBottom: 16,
                    marginBottom: 13,
                    height: 25,
                    width: 25,
                  }}
                />
                {/* <Edit name="circle-edit-outline" size={24} color="black" style={{ marginRight: 15, paddingBottom: 16 }} /> */}
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(233, 235, 237, 1)',
                    paddingBottom: 16,
                    width: '85%',
                  }}>
                  <Text style={styles.profileText}>Your Card</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate('Security');
                }}>
                <View style={styles.sectionItem}>
                  <Image
                    source={require('../../assets/Icons/done.png')}
                    style={{
                      marginRight: 15,
                      paddingBottom: 16,
                      marginBottom: 13,
                      height: 25,
                      width: 25,
                    }}
                  />
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: 'rgba(233, 235, 237, 1)',
                      paddingBottom: 16,
                      width: '85%',
                    }}>
                    <Text style={styles.profileText}>Security</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate('NotificationsScreen');
                }}>
                <View style={styles.sectionItem}>
                  <Image
                    source={require('../../assets/Icons/notify.png')}
                    style={{
                      marginRight: 15,
                      paddingBottom: 16,
                      marginBottom: 13,
                      height: 25,
                      width: 25,
                    }}
                  />
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: 'rgba(233, 235, 237, 1)',
                      paddingBottom: 16,
                      width: '85%',
                    }}>
                    <Text style={styles.profileText}>Notification</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate('Language');
                }}>
                <View style={styles.sectionItem}>
                  <Image
                    source={require('../../assets/Icons/la.png')}
                    style={{
                      marginRight: 15,
                      paddingBottom: 16,
                      marginBottom: 13,
                      height: 25,
                      width: 25,
                    }}
                  />
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: 'rgba(233, 235, 237, 1)',
                      paddingBottom: 16,
                      width: '85%',
                    }}>
                    <Text style={styles.profileText}>Languages</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate('Help Support');
                }}>
                <View style={styles.sectionItem}>
                  <Image
                    source={require('../../assets/Icons/info.png')}
                    style={{
                      marginRight: 15,
                      paddingBottom: 16,
                      marginBottom: 13,
                      height: 25,
                      width: 25,
                    }}
                  />
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: 'rgba(233, 235, 237, 1)',
                      paddingBottom: 16,
                      width: '85%',
                    }}>
                    <Text style={styles.profileText}>Help and Support</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'red',
                    fontWeight: 'bold',
                    fontFamily: 'Aeonik-Regular',
                  }}
                  onPress={handleSubmit}>
                  Logout
                </Text>
              </View>
              {/* Modal for logout */}
              <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <View style={styles.modalImageContainer}>
                      <Image
                        source={require('../../assets/Images/questions.png')}
                        style={styles.hand}
                      />
                    </View>
                    <View style={styles.modalTextContainer}>
                      <Text style={styles.successtext}>Are You Sure?</Text>
                      <Text style={styles.modalText}>
                        Do you want to log out ?
                      </Text>
                    </View>
                    <View style={styles.modalButtonContainer}>
                      {/* <Button
                                                title="Log Out"
                                                buttonStyle={styles.modalLogout}
                                                onPress={closeModal}
                                            /> */}
                      <Button
                        title="Logout"
                        buttonStyle={styles.logoutButton}
                        titleStyle={styles.logoutButtonText}
                        onPress={handleSubmit}
                      />
                      <Button
                        title="Cancel"
                        buttonStyle={styles.modalButton}
                        onPress={closeModal}
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  logoutButton: {
    paddingHorizontal: 1,
    paddingVertical: 15,
    borderRadius: 50,
    minWidth: 130,
    marginEnd: 5,
    backgroundColor: 'transparent', // Set the background color to transparent
    borderWidth: 1, // Add a border
    borderColor: 'red', // Set the border color to red
    borderRadius: 50, // Optional: To add rounded corners
    // Optional: Align the button in the center
  },
  logoutButtonText: {
    color: 'red', // Set the text color to red
    fontFamily: 'Aeonik-Regular',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 40,
  },
  hand: {
    marginVertical: 10,
  },
  modalImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTextContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center',
    fontFamily: 'Aeonik-Regular',
    color: 'gray',
  },
  successtext: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Aeonik-Bold',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  modalButton: {
    backgroundColor: '#3369e7',
    paddingHorizontal: 1,
    paddingVertical: 15,
    borderRadius: 50,
    minWidth: 130,
    fontFamily: 'Aeonik-Regular',
  },
  modalLogout: {
    backgroundColor: 'pink',
    paddingHorizontal: 1,
    paddingVertical: 15,
    borderRadius: 50,
    minWidth: 120,
    marginEnd: 10,
  },
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
    fontFamily: 'Aeonik-Regular',
  },
  container: {
    paddingHorizontal: 16,
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
    fontWeight: '500',
    color: 'black',
    fontSize: 17,
    marginBottom: 5,
    fontFamily: 'Aeonik-Bold',
  },
  usernameText: {
    fontSize: 14,
    fontFamily: 'Plus',
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
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Aeonik-Regular',
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

export default Profile;
