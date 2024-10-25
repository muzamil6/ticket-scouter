import React, { useState } from 'react';
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
    Image,
} from 'react-native';
import { Button } from '@rneui/base';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';
import Eye from 'react-native-vector-icons/Feather';
import { Modal } from 'react-native';

const CreateNewPassword = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [confirmShowPassword, setConfirmShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmShowPassword(!confirmShowPassword);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleSubmit = () => {
        setModalVisible(true);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6F6" }}>
            <ScrollView>
                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
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
                                    <Text style={styles.signIn}>Create New Password</Text>
                                    <Text style={styles.para1}>Enter your new password</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.paraInput}>New Password</Text>
                                    <View style={styles.passwordInput1}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter new password"
                                            secureTextEntry={!showPassword}
                                        />
                                        <TouchableOpacity
                                            activeOpacity={0.9}
                                            onPress={togglePasswordVisibility}
                                            style={styles.eyeIcon}
                                        >
                                            <Eye
                                                name={showPassword ? 'eye' : 'eye-off'}
                                                size={25}
                                                color='#000000'
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginBottom: 25 }}>
                                        <Text style={styles.paraInput}>Confirm Password</Text>
                                        <View style={styles.passwordInput}>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Confirm your password"
                                                secureTextEntry={!confirmShowPassword}
                                            />
                                            <TouchableOpacity
                                                activeOpacity={0.9}
                                                onPress={toggleConfirmPasswordVisibility}
                                                style={styles.eyeIcon}
                                            >
                                                <Eye
                                                    name={confirmShowPassword ? 'eye' : 'eye-off'}
                                                    size={25}
                                                    color="#000000"
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Button
                                        title="Next"
                                        buttonStyle={styles.button}
                                        containerStyle={styles.buttonContainer}
                                        onPress={handleSubmit}
                                    />
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
                                <View style={styles.modalImageContainer}>
                                    <Image
                                        source={require("../../assets/Images/hand.png")}
                                        style={styles.hand}
                                    />
                                </View>
                                <View style={styles.modalTextContainer}>
                                    <Text style={styles.successtext}>Success</Text>
                                    <Text style={styles.modalText}>
                                        Your password is created successfully
                                    </Text>
                                </View>
                                <View style={styles.modalButtonContainer}>
                                    <Button
                                        title="Continue"
                                        buttonStyle={styles.modalButton}
                                        onPress={closeModal}
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
    modalContainer: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    successtext: {
        fontWeight: 'bold',
        color: 'black',
    },
    modalImageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    modalTextContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    modalText: {
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: 'center',
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
    },
    input: {
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: "#efece9",

        borderRadius: 5,
        width: '100%',
        fontFamily: "Aeonik-Regular"

    },
    main: {
        paddingTop: 50,
        padding: 10,
    },
    paraInput: {
        // fontWeight: 'bold',
        fontFamily: "Aeonik-Bold"

    },
    signIn: {
        // fontWeight: 'bold',
        color: 'black',
        fontSize: 24,
        fontFamily: "Aeonik-Bold",
        marginBottom: 10
    },
    para1: {
        fontSize: 15,
        fontFamily: "Aeonik-Regular",
        color: "#9CA4AB",



    },
    heading: {
        alignItems: 'center',
        marginBottom: 50,
    },
    inputContainer: {
        marginBottom: 20,
        paddingHorizontal: 13,
        marginTop: 10,
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
    passwordInput: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput1: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    eyeIcon: {
        position: 'absolute',
        top: '50%', // Center the eye icon vertically
        right: 15,
        transform: [{ translateY: -10 }], // Adjust the translateY value to center the icon precisely
        zIndex: 1,
    },
    button: {
        backgroundColor: '#3369e7',
        padding: 15,
        borderRadius: 10,
        fontFamily: "Plus"

    },
    buttonContainer: {
        marginTop: 10,
    },
});

export default CreateNewPassword;
