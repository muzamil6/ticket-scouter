import React, { useState, useRef } from 'react';
import {
    TextInput, View, TouchableOpacity, Text, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, StatusBar, Modal, SafeAreaView, ScrollView,
    ActivityIndicator
} from 'react-native';
import { Button } from '@rneui/base';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';

const Otp = ({ navigation, route }) => {
    const UserInfo = route.params;
    const [otp, setOtp] = useState(['', '', '', '']);
    const [focusedIndex, setFocusedIndex] = useState(0);
    const inputRefs = useRef([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoading, setisLoading] = useState(false)

    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleOtpKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0) {
            const newOtp = [...otp];
            newOtp[index - 1] = '';
            setOtp(newOtp);
            inputRefs.current[index - 1].focus();
        }
    };

    const handleOtpInputFocus = (index) => {
        setFocusedIndex(index);
    };

    const handleSubmit = () => {
        // const enteredOtp = otp.join('');
        // if (enteredOtp == UserInfo.otp) {
        setModalVisible(true);
        // } else {
        //     return alert("Incorrect OTP")
        // }
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleAgree = () => {
        // const formData = {
        //     email: UserInfo.email,
        //     password: UserInfo.password,
        //     full_name: UserInfo.fullName
        // }

        // axios.post(`${global.backendUrl}/users`, formData)
        //     .then((response) => {
        setModalVisible(false);
        //     navigation.navigate("SignIn")
        // }).catch((err) => {
        //     console.log(err)
        // })
    }

    const handleResend = () => {
        // setisLoading(true)
        // const formData = { to: UserInfo.email, subject: "Verification Email", body: `Your Verification OTP is <h1>${UserInfo.otp}</h1>` }

        // axios.post(`${global.backendUrl}/send-email`, formData)
        //     .then((response) => {
        //         console.log(response.status)
        //         setisLoading(false)
        //         if (response.status == 200) {
        //             alert("Resend Successfully")
        //         }
        //     }).catch((err) => {
        //         setisLoading(false)
        //         console.log(err)
        //     })
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6F6" }}>
            <ScrollView>

                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                            <StatusBar backgroundColor="#3369e7" barStyle="light-content" />
                            <View style={styles.header}>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => {
                                        navigation.goBack('abc');
                                    }}
                                    style={styles.backButton}
                                >
                                    <Icon name='arrow-left' style={{ color: 'black' }} size={30} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.main}>
                                <View style={styles.heading}>
                                    <Text style={styles.signIn}>Enter OTP</Text>
                                    <Text style={styles.para1}>
                                        We have just sent you a 4-digit code via email
                                    </Text>
                                    <Text style={styles.emailOtp}>
                                        {/* {UserInfo?.email} */}
                                        example@gmail.com
                                    </Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <View style={styles.otpContainer}>
                                        {otp.map((digit, index) => (
                                            <TextInput
                                                key={index}
                                                ref={(ref) => (inputRefs.current[index] = ref)}
                                                style={[
                                                    styles.otpInput,
                                                    focusedIndex === index && styles.otpInputFocused,
                                                ]}
                                                placeholder="*"
                                                keyboardType="numeric"
                                                maxLength={1}
                                                value={digit}
                                                onChangeText={(text) => handleOtpChange(text, index)}
                                                onKeyPress={(e) => handleOtpKeyPress(e, index)}
                                                onFocus={() => handleOtpInputFocus(index)}
                                            />
                                        ))}
                                    </View>
                                </View>
                                <Button
                                    title="Continue"
                                    buttonStyle={styles.button}
                                    containerStyle={styles.buttonContainer}
                                    onPress={handleSubmit}
                                />
                                <View style={styles.footer}>
                                    <Text style={styles.text}>Didn't receive the code?</Text>
                                    <TouchableOpacity
                                        activeOpacity={0.9}
                                        onPress={handleResend}
                                    >
                                        <Text style={styles.register}>
                                            {
                                                isLoading ? <ActivityIndicator color={'blue'} /> : 'Resend Code'
                                            }
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <Modal
                        visible={modalVisible}
                        animationType="slide"
                        transparent={true}
                        onRequestClose={closeModal}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalText}>I agree to the <Text style={styles.terms}>Terms of Service</Text> and <Text style={styles.terms}>Conditions</Text> of Use including consent to electronic communications and I affirm that the information provided is my own.</Text>
                                <View style={styles.modalButtonContainer}>
                                    <Button
                                        title="Disagree"
                                        buttonStyle={[styles.modalButton, styles.transparentButton]}
                                        titleStyle={styles.redButtonText}
                                        onPress={closeModal}
                                    />
                                    <Button
                                        title="Agree"
                                        buttonStyle={styles.modalButton}
                                        onPress={handleAgree}
                                    />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: '#efece9',
        borderRadius: 5,
    },
    terms: {
        color: "#171725"
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    emailOtp: {
        // fontWeight: 'bold',
        color: '#171725',
        fontFamily: "Aeonik-Regular"

    },
    otpInput: {
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 8,
        borderWidth: 2,
        borderRadius: 25,
        borderColor: '#efece9',
        width: 60,
        height: 60,
        backgroundColor: "#efece9",
        color: "#9CA4AB"

    },
    otpInputFocused: {
        borderColor: '#3369e7',
        backgroundColor: "transparent",
        color: "black"
    },
    main: {
        paddingTop: 60,
        padding: 10,
    },
    paraInput: {
        fontWeight: 'bold',
    },
    signIn: {
        // fontWeight: 'bold',
        color: 'black',
        fontSize: 24,
        fontFamily: "Aeonik-Bold",
        marginBottom: 10

    },
    para1: {
        fontSize: 14,
        fontFamily: "Aeonik-Regular",
        color: "#78828A",
        marginBottom: 5

    },
    heading: {
        alignItems: 'center',
        marginBottom: 40,
    },
    inputContainer: {
        marginBottom: 20,
        paddingHorizontal: 13,
        marginTop: 10,
        alignItems: 'center',
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
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 14,
    },
    text: {
        fontSize: 16,
        marginRight: 6,
        fontFamily: "Aeonik-Regular",
        color: "#9CA4AB"

    },
    register: {
        fontSize: 16,
        color: '#355FE5',
        fontFamily: "Aeonik-Regular"

    },
    button: {
        backgroundColor: '#3369e7',
        padding: 15,
        borderRadius: 10,
        fontFamily: "Aeonik-Bold"

    },
    buttonContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20,
    },
    modalContainer: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        // padding: 20,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 15,
        paddingVertical: 10,
        textAlign: "center",
        fontFamily: "Aeonik-Regular",
        color: "#78828A"

    },
    modalButton: {
        backgroundColor: '#3369e7',
        paddingHorizontal: 1,
        paddingVertical: 15,
        borderRadius: 50,
        marginVertical: 5,
        minWidth: 150,
    },
    transparentButton: {
        backgroundColor: 'transparent',
        borderRadius: 50,

    },
    redButtonText: {
        color: 'red',
    },
    modalButtonRight: {
        marginLeft: 10,
    },
});

export default Otp;
