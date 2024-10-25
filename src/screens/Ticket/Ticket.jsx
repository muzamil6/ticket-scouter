import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, SafeAreaView } from 'react-native';
import { height, width } from 'react-native-dimension';

const Ticket = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Upcoming');
    const [selectedDate, setSelectedDate] = useState({ id: '3', date: '29', day: 'Tue' });
    const [ticket, setTicket] = useState([]);

    const Dates = [
        { id: '1', date: '27', day: 'Sun' },
        { id: '2', date: '28', day: 'Mon' },
        { id: '3', date: '29', day: 'Tue' },
        { id: '4', date: '30', day: 'Wed' },
        { id: '5', date: '31', day: 'Mon' },
    ];

    useEffect(() => {
        // Load the images dynamically
        const loadImages = async () => {
            const ticketData = [
                {
                    id: '1',
                    title: 'Bring Me The Horizon Tour',
                    ImgUrl: require('../../assets/Images/b.png'),
                    time: "10:00pm",
                    seat: '34 H',
                },
                {
                    id: '2',
                    title: 'Bring Me The Horizon Tour',
                    ImgUrl: require('../../assets/Images/abc.png'),
                    time: "11:00pm",
                    seat: 'No Seat',
                },
                {
                    id: '3',
                    title: 'Bring Me The Horizon Tour',
                    ImgUrl: require('../../assets/Images/12.png'),
                    time: "09:00am",
                    seat: 'available',
                },
            ];

            setTicket(ticketData);
        };

        loadImages();
    }, []);

    const handleTabPress = (tabName) => {
        setActiveTab(tabName);
    };

    const handleDatePress = (date) => {
        setSelectedDate(date);
    };

    const TicketItem = ({ title, imgUrl, location, time, seat }) => {
        const screenWidth = Dimensions.get('window').width;
        return (
            <SafeAreaView>
                <TouchableOpacity activeOpacity={0.9} style={styles.ticketContainer} onPress={() => navigation.navigate("Price Comparison")}>
                    <View style={styles.ticketContent}>
                        <View style={{
                            display: 'flex', flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderStyle: 'dashed', borderBottomColor: '#E9EBED', paddingBottom: "30px"
                        }}>
                            <Image
                                source={imgUrl}
                                style={{ borderRadius: 10, height: 55, width: 55, marginRight: 10 }}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, fontFamily: "aeoniktrial", }}>{title}</Text>
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>
                                    {location}
                                </Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: -16, marginHorizontal: -30 }}>
                            <View style={styles.separator} />
                            <View style={styles.separator} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                            <View>
                                <Text style={{
                                    textAlign: 'left', fontFamily: "Aeonik-Regular", color: 'gray'
                                }}>Time</Text>
                                <Text style={{ textAlign: 'left', fontWeight: 'bold', color: 'black', fontFamily: "Plus", }}>
                                    {time}
                                </Text>
                            </View>
                            <View>
                                <Text style={{ textAlign: 'left', fontFamily: "Aeonik-Regular", color: 'gray' }}>Seat</Text>
                                <Text style={{ textAlign: 'left', fontWeight: 'bold', color: 'black', fontFamily: "Plus", }}>
                                    {seat}
                                </Text>
                            </View>
                            <View style={{ alignSelf: 'flex-end' }}>
                                <TouchableOpacity activeOpacity={0.9} style={styles.premium} onPress={() => { navigation.navigate("TicketView") }}>
                                    <Text style={{ color: 'black', fontFamily: "Plus", }}>Premium Ticket x1</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        );
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                navigation.goBack('abc');
                            }}
                            style={styles.backButton}>
                            <Icon name='arrow-left' style={{ color: 'black' }} size={30} />
                        </TouchableOpacity>
                        <View style={styles.titleContainer}>
                            <Text style={styles.headerText}>Ticket</Text>
                        </View>
                        <View>
                            <Icon2 name="calendar-outline" color={'black'} size={23} onPress={() => {
                                navigation.navigate('Calendar');
                            }} />
                        </View>
                    </View>
                    <View style={styles.mainDate}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            {Dates.map((date) => (
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    key={date.id}
                                    onPress={() => handleDatePress(date)}
                                    style={[
                                        styles.mainTicket,
                                        selectedDate && selectedDate.id === date.id && styles.selectedTicket,
                                    ]}>
                                    <Text
                                        style={[
                                            styles.dateText,
                                            selectedDate && selectedDate.id === date.id && styles.selectedDateText,
                                        ]}>
                                        {date.date}
                                    </Text>
                                    <Text
                                        style={[
                                            styles.dayText,
                                            selectedDate && selectedDate.id === date.id && styles.selectedDateText,
                                        ]}>
                                        {date.day}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View style={styles.tabsContainer}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={[styles.tabItem, activeTab === 'Upcoming' && styles.activeTabItem]}
                            onPress={() => handleTabPress('Upcoming')}>
                            <Text style={[styles.tabText, activeTab === 'Upcoming' && styles.activeTabText]}>
                                Upcoming
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={[styles.tabItem, activeTab === 'Past Ticket' && styles.activeTabItem]}
                            onPress={() => handleTabPress('Past Ticket')}>
                            <Text style={[styles.tabText, activeTab === 'Past Ticket' && styles.activeTabText]}>
                                Past Tickets
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentContainer}>
                        {activeTab === 'Upcoming' && (
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
                                    />
                                )}
                            />
                        )}
                        {activeTab === 'Past Ticket' && (
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
                                    />
                                )}
                            />
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainTicket: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8FCF8',
        borderRadius: 15,
        paddingHorizontal: 18,
        paddingVertical: 10,
        marginBottom: 10,
        fontFamily: "aeoniktrial",
        marginLeft: 2
    },
    premium: {
        backgroundColor: '#F8FCF8',
        padding: 10,
        borderRadius: 5,
    },
    dateText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        fontFamily: "aeoniktrial",

    },
    selectedTicket: {
        backgroundColor: 'blue',
        fontFamily: "aeoniktrial",

    },
    selectedDateText: {
        color: 'white',
        fontFamily: "aeoniktrial",

    },
    mainDate: {
        paddingHorizontal: 20,
    },
    dayText: {
        fontSize: 15,
        color: 'gray'
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
        fontFamily: "Aeonik-Regular",
        color: 'gray'
    },
    activeTabText: {
        color: 'blue',
        fontFamily: "Aeonik-Regular",

    },
    contentContainer: {
        color: 'black',
        paddingHorizontal: 25,
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
        backgroundColor: 'white',
        marginBottom: 15,
        borderRadius: 10,
    },
    ticketContent: {
        paddingHorizontal: 15,
        paddingBottom: 10,
    },
    separator: {
        height: height(4),
        width: width(8),
        borderRadius: width(10),
        backgroundColor: '#f2f2f2',
    },
});

export default Ticket;
