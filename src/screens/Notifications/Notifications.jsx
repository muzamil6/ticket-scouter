import React, { useState } from 'react';
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, StatusBar, SafeAreaView, ScrollView, Switch,Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
const { width, height } = Dimensions.get('screen');

const Notifications = ({navigation}) => {
    const [isFaceIdEnabled, setIsFaceIdEnabled] = useState(false);
    const [isToggle2Enabled, setIsToggle2Enabled] = useState(false);
    const [isToggle3Enabled, setIsToggle3Enabled] = useState(true);
    const [isToggle4Enabled, setIsToggle4Enabled] = useState(true);

    const handleFaceIdToggleChange = () => {
        setIsFaceIdEnabled((prevToggleState) => !prevToggleState);
    };

    const handleToggle2Change = () => {
        setIsToggle2Enabled((prevToggleState) => !prevToggleState);
    };

    const handleToggle3Change = () => {
        setIsToggle3Enabled((prevToggleState) => !prevToggleState);
    };
    const handleToggle4Change = () => {
        setIsToggle4Enabled((prevToggleState) => !prevToggleState);
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{backgroundColor:'#fefefe',height:height/1.1}}>
                            <StatusBar backgroundColor="#fefefe" barStyle="dark-content" />
                            <View style={styles.header}>
                                <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack('abc')}>
                                    <Icon name="arrowleft" style={styles.backIcon} size={30} />
                                </TouchableOpacity>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.headerText}>Notifications</Text>
                                </View>
                            </View>

                            {/* Add Toggle */}
                            <View style={styles.container}>
                                <View style={styles.toggleContainer}>
                                    <Text style={styles.messageNotificationText}>Messages Notifications</Text>
                                    <ToggleSwitch label="New Event" value={isFaceIdEnabled} onToggle={handleFaceIdToggleChange} />
                                    <ToggleSwitch label="Ticket alert" value={isToggle2Enabled} onToggle={handleToggle2Change} />
                                    <ToggleSwitch label="Message" value={isToggle3Enabled} onToggle={handleToggle3Change} />
                                    <ToggleSwitch label="Payment" value={isToggle4Enabled} onToggle={handleToggle4Change} />
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
        <View style={[styles.toggleItem, label === "Payment" ? styles.noBorder : null]}>
            <Text style={{ fontWeight: "500", color: "black", fontSize: 16 }}>{label}</Text>
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
        paddingHorizontal: 20, // Add horizontal padding to the container
        paddingVertical:10
    },
    toggleContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start', // Align items to the left
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
    messageNotificationText: {
        fontWeight: "500",
        fontSize: 15,
        marginLeft: 30,
        marginTop: 15,
        color:"gray"
    },
});

export default Notifications;
