import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Switch,
} from 'react-native';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English (UK)');

  const handleLanguageSelect = language => {
    setSelectedLanguage(language);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
              <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.9} style={styles.backButton}>
                  <Icon name="arrowleft" style={styles.backIcon} size={30} />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                  <Text style={styles.headerText}>Languages</Text>
                </View>
              </View>

              {/* Add Toggle */}
              <View style={styles.container}>
                <View style={styles.toggleContainer}>
                  <Text style={styles.messageNotificationText}>
                    Suggested Languages
                  </Text>
                  <Languages
                    label="English (UK)"
                    isSelected={selectedLanguage === 'English (UK)'}
                    onPress={() => handleLanguageSelect('English (UK)')}
                  />
                  <Languages
                    label="English"
                    isSelected={selectedLanguage === 'English'}
                    onPress={() => handleLanguageSelect('English')}
                  />
                  <Languages
                    label="Bahasa Indonesia"
                    isSelected={selectedLanguage === 'Bahasa Indonesia'}
                    onPress={() => handleLanguageSelect('Bahasa Indonesia')}
                  />
                </View>
              </View>
              <View style={styles.container}>
                <View style={styles.toggleContainer}>
                  <Text style={styles.messageNotificationText}>
                    Other Languages
                  </Text>
                  <Languages
                    label="Chineses"
                    isSelected={selectedLanguage === 'Chineses'}
                    onPress={() => handleLanguageSelect('Chineses')}
                  />
                  <Languages
                    label="Croatian"
                    isSelected={selectedLanguage === 'Croatian'}
                    onPress={() => handleLanguageSelect('Croatian')}
                  />
                  <Languages
                    label="Czech"
                    isSelected={selectedLanguage === 'Czech'}
                    onPress={() => handleLanguageSelect('Czech')}
                  />
                  <Languages
                    label="Danish"
                    isSelected={selectedLanguage === 'Danish'}
                    onPress={() => handleLanguageSelect('Danish')}
                  />
                  <Languages
                    label="Filipino"
                    isSelected={selectedLanguage === 'Filipino'}
                    onPress={() => handleLanguageSelect('Filipino')}
                  />
                  <Languages
                    label="Finland"
                    isSelected={selectedLanguage === 'Finland'}
                    onPress={() => handleLanguageSelect('Finland')}
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

const Languages = ({label, isSelected, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.toggleItem,
        label === 'Bahasa Indonesia' || label === 'Finland'
          ? styles.noBorder
          : null,
      ]}
      onPress={onPress}>
      <Text
        style={{color: 'black', fontSize: 16, fontFamily: 'Aeonik-Regular'}}>
        {label}
      </Text>
      {isSelected && <Icon name="check" style={{color: '#3369e7'}} size={20} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -55,
  },
  mainTerms: {
    paddingHorizontal: 25,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 10,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    color: 'black',
  },
  container: {
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  toggleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderColor: '#E9EBED',
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderRadius: 15,
  },
  toggleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 18,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E9EBED',
    marginLeft: 20,
    marginRight: 20,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  messageNotificationText: {
    fontWeight: '500',
    fontSize: 13,
    marginLeft: 30,
    marginTop: 15,
    fontFamily: 'Plus',
  },
});

export default Language;
