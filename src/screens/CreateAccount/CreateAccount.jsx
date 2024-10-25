import React, { useState, useEffect } from 'react';
import {
    TextInput, View, TouchableOpacity, Image, Text, StatusBar, SafeAreaView,
    ScrollView, ActivityIndicator
} from 'react-native';
import { Button } from '@rneui/base';
import { StyleSheet } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Feather'
import googleIcon from '../../assets/Icons/google.png'
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import axios from 'axios'

const CreateAccount = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [fullName, setfullName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState('')
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const otp = Math.floor(1000 + Math.random() * 9000);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignUp = () => {
        // if (!email) {
        //     return alert("Please Enter The Email")
        // }
        // if (!password) {
        //     return alert("Please Enter The Password")
        // }
        // if (!fullName) {
        //     return alert("Please Enter Your Name")
        // }
        // const Checker = data.filter((t)=>t.email == email)
        // if(Checker.length !== 0){
        //     return alert("This Email is Already Existed Try Another !")
        // }
        // setisLoading(true)
        // const formData = { to: email, subject: "Verification Email", body: `Your Verification OTP is <h1>${otp}</h1>` }

        // axios.post(`${global.backendUrl}/send-email`, formData)
        //     .then((response) => {
        //         // console.log(response.status)
        //         setisLoading(false)
        //         if (response.status == 200) {
        //             setemail("")
        //             setpassword("")
        //             setfullName("")
        navigation.navigate('OTP', { email, password, otp, fullName })
        //     }
        // }).catch((err) => {
        //     setisLoading(false)
        //     console.log(err)
        // })
    }

    useEffect(() => {
        axios.get(`${global.backendUrl}/users`)
            .then((response) => {
                setdata(response.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

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
                            <Text style={styles.signIn}>Create Account</Text>
                            <Text style={styles.para1}>Lorem ipsum dolor sit amet consectetur</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <View>
                                <Text style={styles.paraInput}>Full Name</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter Your Name'
                                    value={fullName}
                                    onChangeText={val => setfullName(val)}
                                />
                                <Text style={styles.paraInput}
                                >E-mail</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter your email'
                                    value={email}
                                    onChangeText={val => setemail(val)}
                                />
                                <Text style={styles.paraInput}>Password</Text>
                                <View style={styles.passwordInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='*************'
                                        secureTextEntry={!showPassword}
                                        value={password}
                                        onChangeText={val => setpassword(val)}
                                    />
                                    <TouchableOpacity activeOpacity={0.9} onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                                        {/* <Feather
                                            name={showPassword ? 'eye' : 'eye-off'}
                                            size={20}
                                            color='#000000'
                                        /> */}
                                        <Icon2
                                            name={showPassword ? 'eye' : 'eye-off'}
                                            size={25}
                                            color='#000000'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Button
                                title={isLoading ? <ActivityIndicator color={'white'} /> : 'Create An Account'}
                                onPress={handleSignUp}
                                buttonStyle={styles.button}
                                containerStyle={styles.buttonContainer}
                            />
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
                        {/* <View style={styles.mainAgree}>
                            <Text style={styles.agree}>
                                By signing up you agree to our and Terms and
                                <Text style={styles.agree}> Conditions of Use</Text>
                            </Text>
                        </View> */}
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

export default CreateAccount;

const styles = StyleSheet.create({
    input: {


        marginVertical: 12,
        paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: "#E9EBED",
        borderRadius: 5,
        fontFamily: "Aeonik-Regular",
        color: "#9CA4AB"

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
    main: {
        justifyContent: "center",
        padding: 10,
    },
    paraInput: {
        fontWeight: "bold",
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
    agree1: {
        paddingHorizontal: 10,
        textAlign: "center",
        fontFamily: "Aeonik-Regular",
        color: "#171725"

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
        backgroundColor: '#E9EBED',
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
        fontFamily: "Aeonik-Regular"


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
        top: 26,
        right: 14,
        zIndex: 1,
    },
});
