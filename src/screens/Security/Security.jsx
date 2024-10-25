import React, { useState } from 'react';
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, StatusBar, SafeAreaView, ScrollView, Switch,Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
const { width, height } = Dimensions.get('screen');

const Security = ({navigation}) => {
    const [isFaceIdEnabled, setIsFaceIdEnabled] = useState(false);
    const [isToggle2Enabled, setIsToggle2Enabled] = useState(false);
    const [isToggle3Enabled, setIsToggle3Enabled] = useState(true);

    const handleFaceIdToggleChange = () => {
        setIsFaceIdEnabled((prevToggleState) => !prevToggleState);
    };

    const handleToggle2Change = () => {
        setIsToggle2Enabled((prevToggleState) => !prevToggleState);
    };

    const handleToggle3Change = () => {
        setIsToggle3Enabled((prevToggleState) => !prevToggleState);
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{backgroundColor:"#fefefe",height:height/1.1}}>
                            <StatusBar backgroundColor="#fefefe" barStyle="dark-content" />
                            <View style={styles.header}>
                                <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
                                    <Icon name="arrowleft" style={styles.backIcon} size={30} />
                                </TouchableOpacity>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.headerText}>Security</Text>
                                </View>
                            </View>

                            {/* Add Toggle */}
                            <View style={styles.container}>
                                <View style={styles.toggleContainer}>
                                    <ToggleSwitch label="Face ID" value={isFaceIdEnabled} onToggle={handleFaceIdToggleChange} />
                                    <ToggleSwitch label="Remember Password" value={isToggle2Enabled} onToggle={handleToggle2Change} />
                                    <ToggleSwitch label="Touch ID" value={isToggle3Enabled} onToggle={handleToggle3Change} />
                                </View>
                            </View>

                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}

const ToggleSwitch = ({ label, value, onToggle }) => {
    return (
        <View style={[styles.toggleItem, label === "Touch ID" ? styles.noBorder : null]}>
            <Text style={{ fontWeight: "500", color: "black", fontSize: 16, fontFamily: "Aeonik-Regular" }}>{label}</Text>
            <Switch
                value={value}
                onValueChange={onToggle}
                thumbColor={value ? '#3369e7' : 'white'}
                trackColor={{ false: "#3369e7", true: "white" }}
            />
        </View>
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
        marginBottom: 10
    },
    headerText: {
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
        textAlign: 'center',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginBottom: 10
    },
    backButton: {
        padding: 10,
    },
    backIcon: {
        color: 'black',
    },
    container: {
        paddingHorizontal: 25, // Add horizontal padding to the container
    },
    toggleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderColor: "#E9EBED",
        borderWidth: 1,
        backgroundColor: "transparent",
        borderRadius: 15
    },
    toggleItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
        paddingHorizontal: 18,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E9EBED',
        marginLeft: 20, // Add left margin
        marginRight: 20, // Add right margin
    },
    noBorder: {
        borderBottomWidth: 0,
    },
});

export default Security;

