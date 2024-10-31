import React, {useState} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Button} from '@rneui/base';
import {StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('screen');

const PersonalInfo = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{backgroundColor: '#fefefe', height: height / 1.1}}>
              <StatusBar backgroundColor="#fefefe" barStyle="dark-content" />
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack('abc');
                  }}
                  style={styles.backButton}>
                  <Icon name="arrowleft" style={styles.backIcon} size={30} />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                  <Text style={styles.headerText}>Persoanl Info</Text>
                </View>
                <View>
                  <Icon2 name="circle-edit-outline" color={'black'} size={23} />
                </View>
              </View>
              <View style={styles.main}>
                <View style={styles.inputContainer}>
                  <View>
                    <Text style={styles.paraInput}>First Name</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Gustavo"
                      placeholderTextColor={'gray'}
                    />
                    <Text style={styles.paraInput}>Last Name</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Lipshuts"
                      placeholderTextColor={'gray'}
                    />
                    <Text style={styles.paraInput}>Email Address</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Gustavolipshuts@gmail.com"
                      placeholderTextColor={'gray'}
                    />
                    <Text style={styles.paraInput}>Phone</Text>
                    <View style={styles.passwordInput}>
                      <TextInput
                        style={styles.input}
                        placeholder="+1 9003430"
                        placeholderTextColor={'gray'}
                      />
                    </View>
                  </View>

                  <Button
                    title="Save Changes"
                    disabled
                    buttonStyle={{
                      borderRadius: 50,
                      paddingVertical: 14,
                      backgroundColor: '#ecf1f6',
                      color: 'gray',
                    }}
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  input: {
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#f6f6f6',
    borderRadius: 5,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -40,
  },
  headerText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
  },
  passwordInput: {
    marginBottom: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    color: 'black',
  },
  main: {
    justifyContent: 'center',
    padding: 10,
  },
  paraInput: {
    fontWeight: '500',
    color: 'black',
  },
  inputContainer: {
    marginBottom: 20,
    paddingHorizontal: 13,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginRight: 6,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#9CA4AB',
    padding: 15,
    borderRadius: 50,
  },
  signWithText: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#333',
  },
  icon: {
    marginHorizontal: 10,
  },
  mainAgree: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
