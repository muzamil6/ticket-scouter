import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, SafeAreaView, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Modal } from 'react-native';
import React, { useState } from 'react';
import { Button } from '@rneui/base';

const NotificationsScreen = ({ navigation }) => {
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

                <View style={{backgroundColor:'#fefefe'}}>
                    <StatusBar backgroundColor="#fefefe" barStyle="dark-content" />
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
                            <Icon name="arrowleft" style={styles.backIcon} size={30} />
                        </TouchableOpacity>
                        <View style={styles.titleContainer}>
                            <Text style={styles.headerText}>Notifications</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.sectionContainer}>
                            <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10, fontSize: 18, fontFamily: "aeoniktrial",marginBottom:20 }}>Today</Text>
                            <View style={styles.sectionItem}>
                                <Image source={require("../../assets/Images/love.png")} style={{ marginRight: 15,marginBottom:20 }} />
                                <View style={{ borderBottomWidth: 1, borderBottomColor: "rgba(233, 235, 237, 1)", paddingBottom: 16, width: "85%", alignSelf: "center" }}>
                                    <Text style={styles.profileText}>
                                        Jhone Elean and 8 others friend joined to Art & Craft Professional event
                                    </Text>
                                    <Text style={{ fontFamily: "aeoniktrial",marginTop:5,color:'gray' }}>
                                        2 hours Ago
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.sectionItem}>
                                <Image source={require("../../assets/Images/love.png")} style={{ marginRight: 15,marginBottom:20 }} />
                                {/* <Edit name="circle-edit-outline" size={24} color="black" style={{ marginRight: 15, paddingBottom: 16 }} /> */}
                                <View style={{ borderBottomWidth: 1, borderBottomColor: "rgba(233, 235, 237, 1)", paddingBottom: 16, width: "85%", alignSelf: "center" }}>
                                    <Text style={styles.profileText}>
                                        Jhone Elean and 8 others friend joined to Art & Craft Professional event
                                    </Text>
                                    <Text style={{ fontFamily: "aeoniktrial",marginTop:5,color:'gray' }}>
                                        2 hours Ago
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.sectionItem}>
                                <Image source={require("../../assets/Images/love.png")} style={{ marginRight: 15,marginBottom:20}} />
                                {/* <Edit name="circle-edit-outline" size={24} color="black" style={{ marginRight: 15, paddingBottom: 16 }} /> */}
                                <View style={{ borderBottomWidth: 1, borderBottomColor: "rgba(233, 235, 237, 1)", paddingBottom: 16, width: "85%", alignSelf: "center" }}>
                                    <Text style={styles.profileText}>
                                        Jhone Elean and 8 others friend joined to Art & Craft Professional event
                                    </Text>
                                    <Text style={{ fontFamily: "aeoniktrial",marginTop:5,color:'gray' }}>
                                        2 hours Ago
                                    </Text>
                                </View>
                            </View>
                            <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10, fontSize: 18, marginBottom: 10,marginBottom:20 }}>Yesterday</Text>

                            <View style={styles.sectionItem}>
                                <Image source={require("../../assets/Images/love.png")} style={{ marginRight: 15,marginBottom:20 }} />
                                {/* <Edit name="circle-edit-outline" size={24} color="black" style={{ marginRight: 15, paddingBottom: 16 }} /> */}
                                <View style={{ borderBottomWidth: 1, borderBottomColor: "rgba(233, 235, 237, 1)", paddingBottom: 16, width: "85%", alignSelf: "center" }}>
                                    <Text style={styles.profileText}>
                                        Jhone Elean and 8 others friend joined to Art & Craft Professional event
                                    </Text>
                                    <Text style={{ fontFamily: "aeoniktrial",marginTop:5,color:'gray' }}>
                                        2 hours Ago
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.sectionItem}>
                                <Image source={require("../../assets/Images/love.png")} style={{ marginRight: 15,marginBottom:20 }} />
                                {/* <Edit name="circle-edit-outline" size={24} color="black" style={{ marginRight: 15, paddingBottom: 16 }} /> */}
                                <View style={{ borderBottomWidth: 1, borderBottomColor: "rgba(233, 235, 237, 1)", paddingBottom: 16, width: "85%", alignSelf: "center" }}>
                                    <Text style={styles.profileText}>
                                        Jhone Elean and 8 others friend joined to Art & Craft Professional event
                                    </Text>
                                    <Text style={{ fontFamily: "aeoniktrial",marginTop:5,color:'gray' }}>
                                        2 hours Ago
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.sectionItem}>
                                <Image source={require("../../assets/Images/love.png")} style={{ marginRight: 15,marginBottom:20 }} />
                                {/* <Edit name="circle-edit-outline" size={24} color="black" style={{ marginRight: 15, paddingBottom: 16 }} /> */}
                                <View style={{ borderBottomWidth: 1, borderBottomColor: "rgba(233, 235, 237, 1)", paddingBottom: 16, width: "85%", alignSelf: "center" }}>
                                    <Text style={styles.profileText}>
                                        Jhone Elean and 8 others friend joined to Art & Craft Professional event
                                    </Text>
                                    <Text style={{ fontFamily: "aeoniktrial",marginTop:5,color:'gray' }}>
                                        2 hours Ago
                                    </Text>
                                </View>
                            </View>


                            {/* Modal for logout */}
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
                                                source={require("../../assets/Images/questions.png")}
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
        backgroundColor: "transparent", // Set the background color to transparent
        borderWidth: 1, // Add a border
        borderColor: "red", // Set the border color to red
        borderRadius: 50, // Optional: To add rounded corners
        // Optional: Align the button in the center
    },
    logoutButtonText: {
        color: "red", // Set the text color to red
        fontWeight: "bold",
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
    },
    successtext: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 17
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
    modalLogout: {
        backgroundColor: 'pink',
        paddingHorizontal: 1,
        paddingVertical: 15,
        borderRadius: 50,
        minWidth: 120,
        marginEnd: 10
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
        color: "black",
        fontSize: 15,
        fontFamily: "aeoniktrial",
    },
    container: {
        paddingHorizontal: 16,
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 15,
    },
    nameText: {
        fontWeight: '500',
        color: 'black',
        fontSize: 17,
        marginBottom: 5
    },
    usernameText: {
        fontSize: 14,
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
        fontWeight: "500",
        textAlign: 'center',
    },
    sectionContainer: {
        marginBottom: 20,
    },
    sectionItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
        marginLeft: 5,
        marginRight:5
    },
});

export default NotificationsScreen;
