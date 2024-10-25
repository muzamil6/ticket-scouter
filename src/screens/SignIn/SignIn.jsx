import React, { useState, useEffect } from 'react';
import { TextInput, View, TouchableOpacity, Image, Text, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, StatusBar, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Button } from '@rneui/base';
const { width, height } = Dimensions.get('screen');
import { StyleSheet } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Feather';
import googleIcon from '../../assets/Icons/google.png'
import axios from 'axios';
const Radio = ({ checked, onChange }) => {
    return (
        <TouchableOpacity onPress={onChange} style={styles.radio}>
            {checked ? <View style={styles.radioDot} /> : null}
        </TouchableOpacity>
    );
};

const SignIn = ({ navigation }) => {
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        // if (!email) {
        //     return alert("Please Enter The Email")
        // }
        // if (!password) {
        //     return alert("Please Enter The Password")
        // }

        // axios.get(`${global.backendUrl}/users`)
        //     .then((response) => {
        //         const emailChecker = response.data.filter(t => t.email === email);
        //         if (emailChecker.length == 0) {
        //             return alert("Incorrect Email")
        //         }
        //         else if (emailChecker[0].password !== password) {
        //             return alert("Incorrect Password")
        //         }

        //         setemail("")
        //         setpassword("")
        navigation.navigate("Home")
        // }).catch((err) => {
        //     console.log(err)
        // })
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6F6" }}>
            <ScrollView>
                <View style={{ backgroundColor: "#fefefe", height: height / 1.1 }}>
                    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                    <View style={styles.header}>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => { navigation.goBack('abc') }} style={styles.backButton}>
                            <Icon name='arrow-left' style={{ color: 'black' }} size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.main}>
                        <View style={styles.heading}>
                            <Text style={styles.signIn}>Let's Sign you in</Text>
                            <Text style={styles.para1}>Lorem ipsum dolor sit amet consectetur</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <View>
                                <Text style={styles.paraInput1}>Email Address</Text>
                                <TextInput
                                    style={styles.input1}
                                    placeholder='Enter email address'
                                    value={email}
                                    onChangeText={val => setemail(val)}
                                />
                                <Text style={styles.paraInput}>Password</Text>
                                <View style={styles.passwordInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='*************'
                                        value={password}
                                        secureTextEntry={!showPassword}
                                        onChangeText={val => setpassword(val)}
                                    />
                                    <TouchableOpacity activeOpacity={0.9} onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                                        <Icon2
                                            name={showPassword ? 'eye' : 'eye-off'}
                                            size={25}
                                            color='#000000'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <View style={styles.radioBtn}>
                                    <Radio checked={rememberMe} onChange={handleRememberMeChange} />
                                    <Text style={styles.checkboxLabel}>Remember Me</Text>
                                </View>
                                <TouchableOpacity activeOpacity={0.9} onPress={() => { navigation.navigate("Forgot Password") }}>
                                    <Text style={styles.forgotLink}>
                                        Forgot Password
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <Button
                                onPress={handleLogin}
                                title="Sign In"
                                buttonStyle={styles.button}
                                containerStyle={styles.buttonContainer}
                            />
                        </View>

                        <View style={styles.footer}>
                            <Text style={styles.text}>
                                Don't have an account?
                            </Text>
                            <TouchableOpacity activeOpacity={0.9} onPress={() => { navigation.navigate("Create Account") }}>
                                <Text style={styles.register}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.signWithContainer}>
                            <View style={styles.line} />
                            <Text style={styles.signWithText}>or Sign in with</Text>
                            <View style={styles.line} />
                        </View>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity activeOpacity={0.9} style={styles.icon}>
                                <Image source={googleIcon} style={{ width: 28, height: 28 }} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9} style={styles.icon}>
                                <FontAwesome5
                                    name='apple'
                                    size={30}
                                    color="#000000"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9} style={styles.icon}>
                                <Icon3
                                    name='facebook-f'
                                    size={30}
                                    color="#4267B2"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.mainAgree}>
                            <Text style={styles.agree}>
                                By signing up you agree to our and <Text style={{ color: "#171725" }}>Terms</Text>  and
                                <Text style={styles.agree1}> Conditions of Use</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignIn;

const styles = StyleSheet.create({
    input: {
        marginVertical: 12,
        paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: "#F6F6F6",
        borderRadius: 5,
        fontFamily: "Aeonik-Regular",
        color: "#9CA4AB",



    },
    input1: {
        marginVertical: 12,
        paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: "#F6F6F6",
        borderRadius: 5,
        fontFamily: "Aeonik-Regular",
        color: "#9CA4AB"


    },
    main: {
        justifyContent: "center",
        padding: 10,
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
    paraInput1: {
        fontFamily: "Aeonik-Bold",
        color: "#78828A",

    },
    paraInput: {
        fontFamily: "Aeonik-Bold",
        color: "#78828A",

    },
    signIn: {
        color: "black",
        fontSize: 24,
        fontFamily: "Aeonik-Bold",
        marginBottom: 10
    },
    para1: {
        fontSize: 15,
        fontFamily: "Aeonik-Regular",
        color: "#9CA4AB"
    },
    radioBtn: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
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
        borderColor: "#E3E9ED"
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
        fontFamily: "Aeonik-Regular",
        color: "#78828A"

    },
    forgotLink: {
        fontSize: 16,
        color: "red",
        alignSelf: 'flex-end',
        // fontFamily: "Aeonik-Regular"

    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 14,
        alignItems: "center"
    },
    text: {
        fontSize: 16,
        marginRight: 6,
        // fontWeight: "bold",
        fontFamily: "Aeonik-Regular",
        color: "#78828A"

    },
    register: {
        fontSize: 16,
        color: "#355FE5",
        fontFamily: "Aeonik-Regular"

    },
    button: {
        backgroundColor: "#3369e7",
        padding: 15,
        borderRadius: 10,
        fontFamily: "Plus",
    },
    buttonContainer: {
        marginTop: 10,
    },
    signWithContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 12,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#E9EBED',
        marginHorizontal: 30,
    },
    signWithText: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: '#9CA4AB',
        fontFamily: "Aeonik-Regular"

    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 35
    },
    icon: {
        // marginHorizontal: 10,
        backgroundColor: '#F6F6F6',
        padding: 10,
        borderRadius: 10,
        height: 55,
        width: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    agree: {
        paddingHorizontal: 10,
        textAlign: "center",
        fontFamily: "Aeonik-Regular",
        color: "#78828A"


    },
    agree1: {
        paddingHorizontal: 10,
        textAlign: "center",
        fontFamily: "Aeonik-Regular",
        color: "#171725"


    },
    mainAgree: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    passwordInput: {
        position: 'relative',
    },
    eyeIcon: {
        position: 'absolute',
        top: 25,
        right: 15,
        zIndex: 1,
    },

});


