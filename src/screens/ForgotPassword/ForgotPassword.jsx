import React, { useState } from 'react';
import {
    TextInput, View, TouchableOpacity, Text, StatusBar, SafeAreaView,
    ScrollView,
} from 'react-native';
import { Button } from '@rneui/base';
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather'

const Radio = ({ checked, onChange }) => {
    return (
        <TouchableOpacity onPress={onChange} style={styles.radio}>
            {checked ? <View style={styles.radioDot} /> : null}
        </TouchableOpacity>
    );
};

const ForgotPassword = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6F6" }}>
            <ScrollView>
                <View>
                    <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
                    <View style={styles.header}>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => { navigation.goBack('abc') }} style={styles.backButton}>
                            <Icon name='arrow-left' style={{ color: 'black' }} size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.main}>
                        <View style={styles.heading}>
                            <Text style={styles.signIn}>Forgot Password</Text>
                            <Text style={styles.para1}>Recover your account password</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <View>
                                <Text style={styles.paraInput}>E-mail</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter your email'
                                />
                            </View>

                            <Button
                                title="Next"
                                onPress={() => { navigation.navigate("Create New Password") }}
                                buttonStyle={styles.button}
                                containerStyle={styles.buttonContainer}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ForgotPassword;

const styles = StyleSheet.create({
    input: {
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: "#efece9",
        borderRadius: 5,
        fontFamily: "Aeonik-Regular"

    },
    main: {
        paddingTop: 60,
        padding: 10,
    },
    paraInput: {
        // fontWeight: "bold",
        fontFamily: "Aeonik-Regular",
        color: "#78828A"


    },
    signIn: {
        // fontWeight: "bold",
        color: "black",
        fontSize: 24,
        fontFamily: "Aeonik-Bold",
        marginBottom: 9

    },
    para1: {
        fontSize: 15,
        fontFamily: "Aeonik-Regular",
        color: "#9CA4AB"


    },
    radioBtn: {
        display: "flex",
        flexDirection: "row"
    },
    heading: {
        alignItems: "center",
        marginBottom: 40,
    },
    inputContainer: {
        marginBottom: 20,
        paddingHorizontal: 13,
        marginTop: 10

    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    radio: {
        marginRight: 3,
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    radioDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#3369e7',
    },
    checkboxLabel: {
        fontSize: 16,
        marginLeft: 5,
    },
    forgotLink: {
        fontSize: 16,
        color: "red",
        alignSelf: 'flex-end',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 14
    },
    text: {
        fontSize: 16,
        marginRight: 6,
        fontWeight: "bold"
    },
    register: {
        fontSize: 16,
        color: "#3369e7",
    },
    button: {
        backgroundColor: "#3369e7",
        padding: 15,
        borderRadius: 10,
        fontFamily: "Plus"
    },
    buttonContainer: {
        marginTop: 10,
    },
    signWithContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
        marginHorizontal: 30,
    },
    signWithText: {
        fontSize: 16,
        color: '#333',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 35
    },
    icon: {
        marginHorizontal: 10,
    },
    agree: {
        paddingHorizontal: 10,
        textAlign: "center"

    },
    mainAgree: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        marginTop: 20,
    },
    backButton: {
        padding: 10,
    },
    backIcon: {
        color: 'black',
    },
});
