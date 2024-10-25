import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import { ScrollView, SafeAreaView } from 'react-native';
import { height, width } from 'react-native-dimension';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import dayjs from 'dayjs';
dayjs.extend(require('dayjs/plugin/utc'));
dayjs.extend(require('dayjs/plugin/timezone'));
dayjs.extend(require('dayjs/plugin/advancedFormat'));
dayjs.extend(require('dayjs/plugin/weekday'));
const TicketCalendar = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Upcoming');
    const [selectedDate, setSelectedDate] = useState('');
    const [ticket, setTicket] = useState([]);

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };
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
        setSelectedDate(dayjs().format('YYYY-MM-DD'));
        loadImages();
    }, []);

    const handleTabPress = (tabName) => {
        setActiveTab(tabName);
    };


    const TicketItem = ({ title, imgUrl, location, time, seat }) => {
        const screenWidth = Dimensions.get('window').width;
        return (
            <SafeAreaView>
                <View style={styles.ticketContainer}>
                    <View style={styles.ticketContent}>
                        <View style={{
                            display: 'flex', flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderStyle: 'dashed', borderBottomColor: '#E9EBED', paddingBottom: "30px"
                        }}>
                            <Image
                                source={imgUrl}
                                style={{ borderRadius: 10, height: 55, width: 55, marginRight: 10 }}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, fontFamily: "Plus", }}>{title}</Text>
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
                                <Text style={{ textAlign: 'left' }}>Time</Text>

                                <Text style={{ textAlign: 'left', fontWeight: 'bold', color: 'black', fontFamily: "Plus", }}>
                                    {time}
                                </Text>
                            </View>
                            <View>
                                <Text style={{ textAlign: 'left' }}>Seat</Text>
                                <Text style={{ textAlign: 'left', fontWeight: 'bold', color: 'black', fontFamily: "Plus", }}>
                                    {seat}
                                </Text>
                            </View>
                            <View style={{ alignSelf: 'flex-end' }}>
                                <TouchableOpacity activeOpacity={0.9} style={styles.premium}>
                                    <Text style={{ color: 'black', fontFamily: "Plus", }}>Premium Ticket x1</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    };
    return (
        <SafeAreaView style={{ backgroundColor: "#F6F6F6" }}>
            <ScrollView>
                <View style={{ backgroundColor: "#F6F6F6" }}>
                    <View style={{ justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width }}>
                        <View style={{ width: Dimensions.get('window').width }}>
                            <Calendar onDayPress={onDayPress}
                                markedDates={{
                                    [selectedDate]: {
                                        selected: true,
                                        disableTouchEvent: true,
                                        selectedColor: '#355fe5',
                                        selectedTextColor: 'white',
                                        activeOpacity: 0.9


                                    },
                                }}
                                style={{ backgroundColor: "#F6F6F6" }}
                                markingType={'interactive'}
                                theme={{
                                    backgroundColor: '#ffffff',
                                    calendarBackground: '#ffffff',
                                    textSectionTitleColor: '#b6c1cd',
                                    selectedDayBackgroundColor: '#00adf5',
                                    selectedDayTextColor: '#ffffff',
                                    todayTextColor: '#b6c1cd',
                                    dayTextColor: '#2d4150',
                                }}

                            />
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
                                Past Ticket
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
    premium: {
        backgroundColor: '#F8FCF8',
        padding: 10,
        borderRadius: 5,
    },
    dateText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    dayText: {
        fontSize: 15,
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
        fontFamily: "Plus",
    },
    activeTabText: {
        color: 'blue',
        fontFamily: "Plus",

    },
    contentContainer: {
        color: 'black',
        paddingHorizontal: 25,
    },
    contentText: {
        fontSize: 15,
        fontFamily: "Plus",

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
        fontFamily: "Plus",

    },
    ticketContainer: {
        backgroundColor: '#ffff',
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

export default TicketCalendar;
