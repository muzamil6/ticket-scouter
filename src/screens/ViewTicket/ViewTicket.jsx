import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
const { width, height } = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/SimpleLineIcons'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'
import card1 from '../../assets/CardImages/card14.png'
import mini1 from '../../assets/CardImages/mini1.png'
import mini2 from '../../assets/CardImages/mini2.png'
import mini3 from '../../assets/CardImages/mini3.png'
import MapView from 'react-native-maps';
import card2 from '../../assets/CardImages/card15.png'
import card3 from '../../assets/CardImages/card16.png'
import card4 from '../../assets/CardImages/card17.png'
import card5 from '../../assets/CardImages/card13.png'
import card6 from '../../assets/CardImages/card4.png'
import icon1 from '../../assets/Icons/Icon1.png'
import icon2 from '../../assets/Icons/Icon2.png'
import icon3 from '../../assets/Icons/Icon3.png'
import icon4 from '../../assets/Icons/Icon4.png'
import { Modal } from 'react-native';

export default function ViewTicket({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [orientation, setOrientation] = useState('portrait');
    const [showFullText, setShowFullText] = useState(false);
    const t = { title: "Join us every Wednesday for 2 hours of inperson figure drawing. We provide drawing supplies and wine. Or, you can bring your you can bring your" };

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleOrientationChange = ({ window: { width, height } }) => {
        setOrientation(width > height ? 'landscape' : 'portrait');
    };


    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.substring(0, maxLength) + '...';
        }
    };

    useEffect(() => {
        const orientationChangeListener = Dimensions.addEventListener('change', handleOrientationChange);

        return () => {
            orientationChangeListener?.remove?.(); // Check if the listener exists before calling remove()
        };

    }, []);

    const moreEvents = [
        {
            title: "Disco Tehran - Goodbye Party",
            ImgUrl: card5,
            date: "23 Oct",
            time: "08:00 PM",
        },
        {
            title: "Everyday People NYC: rOLLER",
            ImgUrl: card6,
            date: "31 Oct",
            time: "08:00 PM",
        },
    ]

    const ChooseArray = [
        { id: 1, text: 'United States Events', activeIndex: false },
        { id: 2, text: 'New York Events', activeIndex: false },
        { id: 3, text: 'Art Class', activeIndex: false },
        { id: 4, text: 'Drawing Classes', activeIndex: false },
        { id: 5, text: 'Visual Art', activeIndex: false },
    ]

    const [chooseArray, setChooseArray] = useState(ChooseArray);

    const handlePress = (index) => {
        const updatedArray = [...chooseArray];
        updatedArray[index].activeIndex = !updatedArray[index].activeIndex;
        setChooseArray(updatedArray);
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ height: 'auto' }}>
                    <View style={{ position: 'absolute', padding: 20, width: "100%", zIndex: 1 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() => { navigation.goBack('SearchMap') }}><Icon name='arrowleft' style={{ color: 'white' }} size={30} /></TouchableOpacity>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                <Icon2 name='heart-outline' style={{ color: 'white' }} size={30} />
                                <Icon2 onPress={() => setModalVisible(true)} name='dots-vertical' style={{ color: 'white' }} size={30} />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 320 }}>
                        <Swiper style={styles.wrapper} paginationStyle={styles.paginationStyle} activeDot={<View style={styles.activeDot} />} dot={<View style={styles.dot} />}>
                            <View style={styles.slide1}>
                                <View style={{ width: "100%", backgroundColor: "#021246" }}>
                                    <Image source={card1} style={{ width: "100%" }} />
                                </View>
                            </View>
                            <View style={styles.slide2}>
                                <View style={{ width: "100%", backgroundColor: "#021246" }}>
                                    <Image source={card1} style={{ width: "100%" }} />
                                </View>
                            </View>
                        </Swiper>
                    </View>
                    <View style={{ marginLeft: 20, marginRight: 20, marginTop: orientation == 'portrait' ? '-22%' : '-10%' }}>
                        <View style={{ backgroundColor: '#fff', height: 150, borderRadius: 15, justifyContent: 'center', padding: 20 }}>
                            <Text style={styles.h1}>California Art Festival</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <View>
                                    <View style={{ display: 'flex', flexDirection: "row", gap: 5, alignItems: "center" }}>
                                        <Icon2 name='calendar-month-outline' style={{ color: 'gray' }} size={20} />
                                        <Text style={{ paddingTop: 1, fontFamily: "aeoniktrial", color: "gray" }}>29 Oct - 07:00 PM</Text>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: "row", gap: 5, marginTop: 10, alignItems: "center" }}>
                                        <Icon3 name='location-pin' style={{ color: 'gray' }} size={20} />
                                        <Text style={{ paddingTop: 1, fontFamily: "aeoniktrial", color: "gray" }}>Brooklyn</Text>
                                    </View>
                                </View>
                                <View style={{ alignSelf: "flex-end", display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                                    <Image source={mini1} style={{ height: 30, width: 32, marginRight: 10 }} />
                                    <Image source={mini2} style={{ height: 30, width: 32, position: 'absolute', marginLeft: 20 }} />
                                    <Image source={mini3} style={{ height: 30, width: 32 }} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20, marginRight: 20, }}>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 17, color: 'black', fontFamily: "aeoniktrial", fontWeight: "500" }}>About this event</Text>
                            <Text style={{ fontSize: 14, marginTop: 5, color: "gray" }}>
                                {showFullText ? t.title : truncateText(t.title, 125)}
                                {t.title.length > 125 && (
                                    <TouchableOpacity onPress={toggleText}>
                                        <Text style={{ color: 'blue', fontSize: 13, fontFamily: "aeoniktrial", marginLeft: showFullText ? 110 : 0 }}>
                                            {showFullText ? 'Read less' : 'Read more'}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            </Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 17, color: 'black', fontFamily: "aeoniktrial", }}>Location</Text>
                            <View style={{ marginTop: 10 }}>
                                <MapView
                                    style={{ height: 180 }}
                                    initialRegion={{
                                        latitude: 37.78825,
                                        longitude: -122.4324,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                    }}
                                />
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 17, color: 'black', fontFamily: "Aeonik" }}>Organizer</Text>
                            <View style={{ marginTop: 10, backgroundColor: '#fff', padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 10 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                    <Image source={card2} style={{ height: 50, width: 50 }} />
                                    <View>
                                        <Text style={{ fontSize: 17, color: 'black', fontFamily: "Aeonik" }}>Erico Movement</Text>
                                        <Text style={{ marginTop: 5, fontFamily: "Aeonik-Regular", color: "gray" }}>10.5K Followers</Text>
                                    </View>
                                </View>
                                <View style={{ margin: 5, alignItems: "center" }}>
                                    <TouchableOpacity activeOpacity={0.9} style={{ backgroundColor: "#355fe5", paddingTop: 10, paddingBottom: 10, paddingLeft: 25, paddingRight: 25, borderRadius: 20 }}>
                                        <Text style={{ color: 'white' }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 17, color: 'black', fontFamily: "Aeonik" }}>Agenda</Text>
                            <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', gap: 12 }}>
                                <View style={{ width: 150, backgroundColor: 'white', height: 200, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={card3} style={{ height: 65, width: 65, borderRadius: 30 }} />
                                    <Text style={{ marginTop: 10, fontSize: 15, color: 'black', fontFamily: "Aeonik" }}>Warm welcome</Text>
                                    <Text style={{ marginTop: 7, fontFamily: "Aeonik-Regular", color: "gray" }}>Daryl Nehls</Text>
                                    <View style={{ marginTop: 7, display: 'flex', flexDirection: 'row', gap: 3, alignItems: "center" }}>
                                        <Icon2 name='clock-time-five-outline' color={"gray"} size={20} />
                                        <Text style={{ fontFamily: "Aeonik-Regular", color: "gray" }}>10:00 - 10:15 PM</Text>
                                    </View>
                                </View>
                                <View style={{ width: 150, backgroundColor: 'white', height: 200, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={card4} style={{ height: 65, width: 65, borderRadius: 30 }} />
                                    <Text style={{ marginTop: 10, fontSize: 15, color: 'black', fontFamily: "Aeonik" }}>Art live contest</Text>
                                    <Text style={{ marginTop: 7, fontFamily: "Aeonik-Regular", color: "gray" }}>The Creative</Text>
                                    <View style={{ marginTop: 7, display: 'flex', flexDirection: 'row', gap: 3, alignItems: "center" }}>
                                        <Icon2 name='clock-time-five-outline' color={"gray"} size={20} />
                                        <Text style={{ fontFamily: "Aeonik-Regular", color: "gray" }}>10:15 - 11:15 PM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', fontFamily: "Aeonik" }}>Tags</Text>
                            <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                                {chooseArray.map((t, i) => (
                                    <TouchableOpacity activeOpacity={0.9} onPress={() => handlePress(i)} key={i} style={[styles.btn1, { borderColor: t.activeIndex ? 'blue' : 'lightgray' }]}>
                                        <Text style={[styles.btn1text, { color: t.activeIndex ? 'blue' : 'black', fontFamily: "Aeonik-Regular" }]}>{t.text}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        <View style={{ marginTop: 20, marginBottom: 80 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', fontFamily: "Aeonik" }}>Other Events</Text>
                                <Text style={{ fontSize: 16, color: 'blue', fontFamily: "Plus" }} onPress={() => navigation.navigate('Search')}>See All</Text>
                            </View>

                            {
                                moreEvents.map((t, i) => (
                                    <View style={styles.cardEvents} key={i}>
                                        <Image source={t.ImgUrl} style={{ height: 72, width: 72, borderRadius: 13 }} />
                                        <View style={{ width: "50%" }}>
                                            <Text style={{ fontSize: 16, color: 'blue', fontFamily: "Plus" }}>{t.date} - {t.time} </Text>
                                            <Text style={[styles.h1, { paddingTop: 5, fontFamily: "Aeonik" }]}>{t.title}</Text>
                                        </View>
                                        <View style={{ position: 'absolute', right: 0, paddingTop: 15, paddingRight: 20 }}><Icon4 name="favorite-border" size={25} color="gray" /></View>
                                    </View>
                                ))
                            }
                        </View>

                    </View>
                </View>
            </ScrollView>
            <View style={{ marginTop: 20, backgroundColor: '#fff', paddingLeft: 20, paddingBottom: 10, paddingRight: 20, paddingTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, width: "100%" }}>
                <View>
                    <Text style={styles.h1}>$25.98 - $35.00</Text>
                    <Text style={{ paddingTop: 10, fontFamily: "Aeonik-Regular", color: 'gray' }}>100 Spot left</Text>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.9} style={{ backgroundColor: '#355fe5', padding: 20, borderRadius: 10 }}>
                        <Text style={{ color: "white", fontFamily: "Aeonik" }} onPress={() => navigation.navigate('GetTicket')}>Get a Ticket</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={[styles.modalContent, { marginTop: orientation == 'portrait' ? height / 2.4 : height / 7, height: orientation == 'portrait' ? height / 2.2 : height / 1.3 }]}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                                <Text style={styles.h1}>Share this event</Text>
                                <TouchableOpacity activeOpacity={0.9} onPress={() => setModalVisible(false)} style={{ backgroundColor: 'lightgray', borderRadius: 20, padding: 3 }}>
                                    <Icon2 name="window-close" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ height: 1, backgroundColor: 'lightgray' }}></View>

                            <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', gap: 10 }}>
                                <Image source={card1} style={{ height: 90, width: 90, borderRadius: 20 }} />
                                <View style={{ width: orientation == 'portrait' && '80%' }}>
                                    <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', fontFamily: "Aeonik" }}>Creative self care: Guide to Intuitive Watercolor</Text>
                                    <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', }}>
                                        <View style={{ display: 'flex', flexDirection: "row", gap: 5 }}>
                                            <Icon4 name="today" size={20} color="gray" />
                                            <Text style={{ fontFamily: "Plus", color: 'gray' }}>Nov 27 <Icon5 name="circle" size={6} color="gray" /> 07:00 PM</Text>
                                        </View>
                                        <Text style={{ color: 'blue', paddingLeft: 20, fontFamily: "Plus", fontWeight: "bold" }}>$39.00</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginTop: 15, backgroundColor: 'lightgray', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10, display: 'flex', flexDirection: 'row', gap: 8 }}>
                                <Text style={{ color: 'black', fontFamily: "Aeonik-Regular" }}> {truncateText('ticketin .com/23Xcvb/arteventisment', orientation == 'portrait' ? 29 : 60)}</Text>
                                <TouchableOpacity activeOpacity={0.9} style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#FFF', padding: 4, borderRadius: 7 }}>
                                    <Icon2 name="content-copy" size={20} color="blue" />
                                    <Text style={{ color: 'blue', fontFamily: "Plus" }}>Copy</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', gap: 5, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 70, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={icon1} />
                                    <Text style={{ marginTop: 5, color: 'black', fontFamily: "Aeonik-Regular" }}>Airdrop</Text>
                                </View>
                                <View style={{ width: 70, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={icon2} />
                                    <Text style={{ marginTop: 5, color: 'black', fontFamily: "Aeonik-Regular" }}>Whatsapp</Text>
                                </View>
                                <View style={{ width: 70, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={icon3} />
                                    <Text style={{ marginTop: 5, color: 'black', fontFamily: "Aeonik-Regular" }}>Facebook</Text>
                                </View>
                                <View style={{ width: 70, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={icon4} />
                                    <Text style={{ marginTop: 5, color: 'black', fontFamily: "Aeonik-Regular" }}>Instagram</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeDot: {
        backgroundColor: 'white',
        width: 9,
        height: 9,
        borderRadius: 6,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    dot: {
        backgroundColor: 'transparent',
        width: 9,
        height: 9,
        borderRadius: 6,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
        borderWidth: 1,
        borderColor: 'white'
    },
    paginationStyle: {
        bottom: '30%',
    },
    h1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "black",
        fontFamily: "aeoniktrial"
    },
    btn1: {
        borderWidth: 1,
        alignSelf: 'flex-start',
        height: 55,
        paddingLeft: 10,
        paddingRight: 10,
        gap: 14,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15

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
        backgroundColor: 'white',
        // width: '100%',
        padding: 20,
        borderRadius: 30,
        marginLeft: 10,
        marginRight: 10
    },
})