import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions, Modal } from 'react-native';
import { ScrollView, SafeAreaView } from 'react-native';
import { height, width } from 'react-native-dimension';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import card1 from '../../assets/CardImages/card14.png'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import Icon8 from 'react-native-vector-icons/MaterialCommunityIcons'


const screenDetails = Dimensions.get('screen');
const screenHeight = screenDetails.height;
const screenWidth = screenDetails.width

const TicketPreview = ({ navigation }) => {
    const [ticket, setTicket] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [orientation, setOrientation] = useState('portrait');

    useEffect(() => {
        const loadImages = async () => {
            const ticketData = [
                {
                    id: '1',
                    title: 'Bring Me The Horizon Tour:',
                    ImgUrl: require('../../assets/Images/b.png'),
                    time: "Dec 11, 2022",
                    seat: '07:00 PM',
                    TicketSeat: "The Regular",
                    Venue: 'The Living'


                },
            ];

            setTicket(ticketData);
        };
        loadImages();
    }, []);


    useEffect(() => {
        const orientationChangeListener = Dimensions.addEventListener('change', handleOrientationChange);

        return () => {
            orientationChangeListener?.remove?.();
        };

    }, []);
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

    const TicketItem = ({ title, imgUrl, location, time, seat, TicketSeat, Venue }) => {
        // const screenWidth = Dimensions.get('window').width;
        // const screenHeight = Dimensions.get('window').height;
        const cardHeight = screenHeight * 0.64;
        return (
            <SafeAreaView>
                <View style={[styles.ticketContainer, { height: 'auto' }]}>
                    <View style={styles.ticketContent}>
                        <View style={{ padding: 12 }}>
                            <Image
                                source={imgUrl}
                                style={{ borderRadius: 10, height: 160, width: "100%", marginBottom: 10 }}
                            />
                            <View style={{ padding: 12, borderBottomWidth: 1, borderStyle: 'dashed', borderBottomColor: '#E9EBED', paddingBottom: "30px" }}>
                                <Text style={{ fontFamily: "Aeonik-Regular" }}>Event</Text>
                                <Text style={styles.eventName}>{title}</Text>
                                <Text style={styles.eventName}>{location}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 25 }}>
                            <View>
                                <Text style={{ marginBottom: 5, fontFamily: "Aeonik-Regular" }}>Event Date</Text>
                                <Text style={styles.eventTime}>{time}</Text>
                            </View>
                            <View>
                                <Text style={{ marginBottom: 5, fontFamily: "Aeonik-Regular" }}>Time</Text>
                                <Text style={styles.eventTime}>{seat}</Text>
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderStyle: 'dashed', borderBottomColor: '#E9EBED', paddingBottom: "30px" }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 25, paddingTop: 0 }}>
                                <View>
                                    <Text style={{ marginBottom: 5, fontFamily: "Aeonik-Regular" }}>Ticket Seat</Text>
                                    <Text style={styles.eventTime}>{TicketSeat}</Text>
                                </View>
                                <View>
                                    <Text style={{ marginBottom: 5 }}>Venue</Text>
                                    <Text style={styles.eventTime}>{Venue}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: -16, marginHorizontal: -30 }}>
                            <View style={styles.separator} />
                            <View style={styles.separator} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/Images/barcode.png')} />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 32, justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.download}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require("../../assets/Icons/download.png")} style={{ marginRight: 8 }} />
                            <Text style={{ color: 'white', fontWeight: "bold" }}>Download Image</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.premium}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require("../../assets/Icons/qr.png")} style={{ marginRight: 8 }} />
                            <Text style={{ color: 'black', fontWeight: "bold" }} onPress={() => setModalVisible(true)}>Show QR Code</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={styles.contentContainer}>
                        <FlatList
                            data={ticket}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TicketItem
                                    title={item.title}
                                    imgUrl={item.ImgUrl}
                                    location="Danapoint 29-30"
                                    time={item.time}
                                    seat={item.seat}
                                    TicketSeat={item.TicketSeat}
                                    Venue={item.Venue}
                                />
                            )}
                        />
                    </View>
                    <Modal
                        visible={modalVisible}
                        animationType="slide"
                        transparent={true}
                        onRequestClose={closeModal}
                    >
                        <View style={[styles.modalContainer, { alignItems: "center" }]}>
                            <View style={[styles.modalContent, { marginTop: orientation == 'portrait' ? screenHeight / 2.4 : 0, screenHeight: orientation == 'portrait' ? screenHeight / 2.2 : screenHeight / 1.3, bottom: orientation == "portrait" && 50, marginLeft: 5, marginRight: 5 }]}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                                    <Text style={styles.h1}>QR Code</Text>
                                    <TouchableOpacity activeOpacity={0.9} onPress={() => setModalVisible(false)} style={{ backgroundColor: '#F6F6F6', borderRadius: 20 }}>
                                        <Icon2 name="window-close" size={20} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ padding: 10, paddingBottom: orientation == "portrait" ? 20 : 0, borderBottomWidth: 2, borderStyle: 'dashed', borderBottomColor: '#E9EBED', marginBottom: 10 }}>
                                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                        <Image source={card1} style={{ height: 90, width: 90, borderRadius: 20, marginEnd: 10 }} />
                                        <View style={{ width: '80%' }}>
                                            <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', marginBottom: 10, fontFamily: "Aeonik-Regular" }}>
                                                California Art Festival:2022
                                            </Text>
                                            <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', fontFamily: "Aeonik-Regular" }}>
                                                Dana Point 29-30
                                            </Text>
                                            <View style={{ marginTop: 10, flexDirection: 'row', alignItems: "center" }}>
                                                <View style={{ flexDirection: "row", gap: 5, alignItems: "center", marginEnd: 5 }}>
                                                    <Icon4 name="today" size={20} color="gray" />
                                                    <Text style={{ fontFamily: "Aeonik-Regular" }}>Nov 29, 07:00 PM</Text>
                                                </View>
                                                <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
                                                    <Icon8 name="clock-outline" size={20} />
                                                    <Text style={{ fontFamily: "Aeonik-Regular" }}>
                                                        10:00 PM</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ justifyContent: "center", alignItems: "center", marginTop: orientation == "portrait" ? 15 : -30, transform: orientation == "portrait" ? "" : [{ scale: 0.5 }] }}>
                                    <Image source={require('../../assets/Images/code.png')} />
                                </View>

                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: "relative",
        paddingHorizontal: 25
    },
    h1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "black",
        fontFamily: "Plus",

    },
    modalContent: {
        backgroundColor: 'white',
        // width: '100%',
        padding: 20,
        borderRadius: 20,
        paddingHorizontal: 10,
        // marginLeft: 10,
        // marginRight: 10,
        position: "absolute",
    },
    eventTime: {
        fontFamily: "Aeonik-Regular"
    },
    eventName: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 17,
        fontFamily: "Aeonik-Regular"
    },
    premium: {
        backgroundColor: '#F8FCF8',
        padding: 15,
        borderRadius: 50,
    },
    download: {
        backgroundColor: '#355FE5',
        padding: 15,
        borderRadius: 5,
        marginRight: 15
    },
    dateText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    dayText: {
        fontSize: 15,
    },
    eventTime: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
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
        marginLeft: -30,
    },
    headerText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
        paddingHorizontal: 35,
        marginBottom: 20,
    },
    tabItem: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent',
        width: '50%',
    },
    activeTabItem: {
        borderBottomColor: 'blue',
    },
    tabText: {
        fontSize: 15,
        textAlign: 'center',
    },
    activeTabText: {
        color: 'blue',
    },
    contentContainer: {
        color: 'black',
        paddingHorizontal: 25,
        marginBottom: 20
    },
    contentText: {
        fontSize: 15,
    },
    calendar: {
        color: '#9CA4AB',
        marginRight: 8,
    },
    date: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },
    date2: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
    },
    dated: {
        color: 'black',
        fontWeight: 'bold',
    },
    ticketContainer: {
        backgroundColor: '#ffff',
        marginTop: 40,
        borderRadius: 20,
    },
    ticketContent: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    separator: {
        height: height(4),
        width: width(8),
        borderRadius: width(10),
        backgroundColor: '#f2f2f2',
    },
});

export default TicketPreview;