import { View, Text, SafeAreaView, ScrollView, Dimensions, StyleSheet, Image, TouchableOpacity, Animated, PanResponder } from 'react-native'
import React, { useState, useEffect } from 'react'
const { width, height } = Dimensions.get('screen');
import card1 from '../../assets/CardImages/card13.png'
import iconImage from '../../assets/Icons/icon5.png'
import iconImage2 from '../../assets/Icons/icon6.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import { Modal } from 'react-native';
import { Button } from '@rneui/base';
export default function DetailOrder({ navigation }) {
    const [orientation, setOrientation] = useState('portrait');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false)
    const [activeMethod, setactiveMethod] = useState("")

    const pan = React.useRef(new Animated.ValueXY()).current;

    // Create a PanResponder to handle touch gestures
    const panResponder = React.useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dy: pan.y }], { useNativeDriver: false }),
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > 50) {
                    setModalVisible(false);
                } else {
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;
    const closeModal = () => {
        setModalVisible(false);
    };

    const closeModal2 = () => {
        setModalVisible2(false);
    };

    const paymentMethod = [
        {
            title: 'Paypall',
            desc: "magdalen****@mail.com",
            imgUrl: iconImage,
        },
        {
            title: 'Mastercard',
            desc: "4827 8472 7424 ****",
            imgUrl: iconImage2,
        }
    ]

    const handleOrientationChange = ({ window: { width, height } }) => {
        setOrientation(width > height ? 'landscape' : 'portrait');
    };

    useEffect(() => {
        const orientationChangeListener = Dimensions.addEventListener('change', handleOrientationChange);

        return () => {
            orientationChangeListener?.remove?.(); // Check if the listener exists before calling remove()
        };

    }, []);

    const handlePress = () => {
        setModalVisible(false)
        setModalVisible2(true)
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ height: height / 1.195 }}>
                    <View style={{ margin: 20 }}>
                        <View style={styles.cardEvents}>
                            <Image source={card1} style={{ height: 95, width: 90, borderRadius: 13 }} />
                            <View style={{ width: "70%", paddingTop: 5, justifyContent: 'space-between', paddingBottom: 5, }}>
                                <Text style={styles.h2}>California Art Festival: 2022 Dana Point 29-30</Text>
                                <View style={{ display: 'flex', flexDirection: "row", gap: 5, alignContent: "center" }}>
                                    <Icon name='calendar-month-outline' style={{ color: 'gray' }} size={20} />
                                    <Text style={{ fontFamily: "Aeonik-Regular", color: 'gray' }}>March 29, 2022 </Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: "row", gap: 5, alignItems: "center" }}>
                                    <Icon name='clock-time-five-outline' style={{ color: 'gray' }} size={20} />
                                    <Text style={{ fontFamily: "Aeonik-Regular", color: 'gray' }}>10:00 PM - 12:00 PM</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.h1}>Order summary</Text>
                            <View style={{ marginTop: 15, backgroundColor: "#fff", padding: 20, borderRadius: 20, borderWidth: 1, borderColor: 'lightgray' }}>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                                    <Text style={{ fontFamily: "Aeonik-Regular", color: 'gray' }}>1x Regular price</Text>
                                    <Text style={{ fontSize: 16, color: "black", fontWeight: 'bold', fontFamily: "Aeonik" }}>$35.00</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', marginTop: 20 }}>
                                    <Text style={{ fontFamily: "Aeonik-Regular", color: 'gray' }}>Subtotal</Text>
                                    <Text style={{ fontSize: 16, color: "black", fontWeight: 'bold', fontFamily: "Aeonik" }}>$35.00</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', marginTop: 20, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: 'lighgray', borderStyle: "dashed" }}>
                                    <View style={{ display: 'flex', flexDirection: "row", gap: 5 }}>
                                        <Text style={{ fontFamily: "Aeonik-Regular", color: 'gray' }}>Fees</Text>
                                        <Icon name='alert-circle-outline' style={{ color: 'gray' }} size={20} />
                                    </View>
                                    <Text style={{ fontSize: 16, color: "black", fontWeight: 'bold', fontFamily: "Aeonik" }}>$02.11</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', marginTop: 20 }}>
                                    <Text style={{ fontFamily: "Aeonik-Regular", color: 'gray' }}>Total</Text>
                                    <Text style={{ fontSize: 16, color: "black", fontWeight: 'bold', fontFamily: "Aeonik" }}>$37.11</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
                                <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', fontFamily: "Aeonik-Regular" }}>Payment method</Text>
                                <TouchableOpacity activeOpacity={0.9} style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: "center" }} onPress={() => setModalVisible(true)}>
                                    <Text style={{ fontSize: 16, color: 'blue', alignItems: "center", fontWeight: "400" }}>Change</Text>
                                    <Icon2 name='right' style={{ color: 'blue', marginTop: 5 }} size={15} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 20, borderWidth: 1, borderColor: 'lightgray', borderRadius: 15, padding: 20, display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={styles.h1}>Paypal</Text>
                                    <Text style={{ paddingTop: 5, fontFamily: "Aeonik-Regular", color: 'gray' }}>cooper998@gmail.com</Text>
                                </View>
                                <View>
                                    <Image source={iconImage} style={{ height: 48, width: 48 }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ marginTop: 20, backgroundColor: '#fff', paddingLeft: 20, paddingRight: 20, paddingTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, width: "100%" }}>
                <View>
                    <Text style={[styles.h1, { color: 'black', fontFamily: "Aeonik" }]}>$37.11</Text>
                    <Text style={{ paddingTop: 10, fontFamily: "Plus", color: 'gray' }}>You’re going! +1</Text>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.9} style={{ backgroundColor: '#355fe5', padding: 20, borderRadius: 10 }}>
                        <Text style={{ color: "white", fontWeight: "600" }} onPress={() => { navigation.navigate("TicketProfile"), setModalVisible(false) }}>Pay Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <Animated.View
                        style={[
                            {
                                transform: [{ translateY: pan.y }],
                            }
                        ]}
                    >
                        <View style={[styles.modalContent, { marginTop: orientation == 'portrait' ? height / 3 : 0 }]} {...panResponder.panHandlers}>
                            <View style={styles.modalCloser}></View>
                            <View style={{ marginTop: 15, alignItems: 'flex-start' }}><Text style={styles.h1}>Payment Method</Text></View>
                            {
                                paymentMethod.map((t, i) => (
                                    <View key={i} style={{ marginTop: 20, padding: 20, backgroundColor: '#fff', borderRadius: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ display: 'flex', flexDirection: "row", gap: 10 }}>
                                            <Image source={t.imgUrl} style={{ height: 48, width: 48 }} />
                                            <View style={{ justifyContent: 'space-between' }}>
                                                <Text style={styles.h2}>{t.title}</Text>
                                                <Text style={{ color: "gray" }}>{t.desc}</Text>
                                            </View>
                                        </View>
                                        <View style={{ justifyContent: 'center' }}>
                                            {
                                                activeMethod == t.title ?
                                                    <Icon name='checkbox-marked' size={25} color='blue' onPress={() => setactiveMethod(t.title)} />
                                                    :
                                                    <Icon name='checkbox-blank-outline' size={25} color='gray' onPress={() => setactiveMethod(t.title)} />
                                            }
                                        </View>
                                    </View>
                                ))
                            }

                            <TouchableOpacity activeOpacity={0.9} style={{ marginTop: 20, padding: 15, backgroundColor: '#fff', borderRadius: 20, display: 'flex', flexDirection: 'row', gap: 20 }} onPress={() => { navigation.navigate("Add New Card"), setModalVisible(false) }}>
                                <View style={{ backgroundColor: '#f2f2f2', padding: 3, borderRadius: 20 }}>
                                    <Icon name='plus-circle-outline' color="black" size={30} />
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.h1}>Add Payment Method</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9} style={{ backgroundColor: '#355fe5', height: 50, marginTop: 30, borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onPress={handlePress}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: "Aeonik" }} >Confirm Payment</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </View>
            </Modal>

            <Modal
                visible={modalVisible2}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal2}
            >
                <View style={styles.modalContainer2}>
                    <View style={styles.modalContent2}>
                        <View style={styles.modalImageContainer}>
                            <Image
                                source={require("../../assets/Images/hand.png")}
                                style={styles.hand}
                            />
                        </View>
                        <View style={styles.modalTextContainer}>
                            <Text style={styles.successtext}>Payment Completed</Text>
                            <Text style={styles.modalText}>
                                Your payment was successfull! see you at the event
                            </Text>
                        </View>
                        <View style={styles.modalButtonContainer}>
                            <Button
                                title="Continue"
                                buttonStyle={styles.modalButton}
                                onPress={closeModal2}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: "Aeonik"
    },
    h2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    cardEvents: {
        marginTop: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 4,
            },
            android: {
                elevation: 1,
            },
        }),
    },

    modalContainer: {
        height: height,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#f6f6f6',
        width: '100%',
        height: height,
        // borderRadius: 20,
        // alignItems: 'center',
        paddingVertical: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingLeft: 20,
        paddingRight: 20
    },
    modalCloser: {
        backgroundColor: 'lightgray',
        height: 7,
        width: 70,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalContainer2: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent2: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        paddingVertical: 20,
    },
    modalImageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    hand: {
        marginVertical: 10,
    },
    modalTextContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    successtext: {
        fontWeight: 'bold',
        color: 'black',
        fontFamily: "Aeonik-Regular"

    },
    modalText: {
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: 'center',
        fontFamily: "Aeonik-Regular",
        color: 'gray'
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
})