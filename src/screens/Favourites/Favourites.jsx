import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';
// import { Image } from '@rneui/base';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import cardOne from '../../assets/CardImages/card1.png'
import cardTwo from '../../assets/Images/b.png'
import { ScrollView } from 'react-native';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import calicon from '../../assets/Icons/calendar.png'

const Favourites = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Events');

    const ticket = [
        {
            title: "Bring Me The Horizon Tour",
            ImgUrl: cardOne,
            date: "Nov 27",
            time: "07:00 PM",
            price: "$39.00",
        },
        {
            title: "New York City",
            ImgUrl: cardTwo,
            date: "Dec 31",
            time: "07:00 PM",
            price: "$59.00",
        }
    ]
    const handleTabPress = (tabName) => {
        setActiveTab(tabName);
    }

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
                            style={styles.backButton}
                        >
                            <Icon name='arrow-left' style={{ color: 'black' }} size={30} />
                        </TouchableOpacity>
                        <View style={styles.titleContainer}>
                            <Text style={styles.headerText}>Favorites</Text>
                        </View>
                    </View>
                    <View style={styles.tabsContainer}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={[styles.tabItem, activeTab === 'Events' && styles.activeTabItem]}
                            onPress={() => handleTabPress('Events')}
                        >
                            <Text style={[styles.tabText, activeTab === 'Events' && styles.activeTabText]}>Events</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={[styles.tabItem, activeTab === 'Collections' && styles.activeTabItem]}
                            onPress={() => handleTabPress('Collections')}
                        >
                            <Text style={[styles.tabText, activeTab === 'Collections' && styles.activeTabText]}>Collections</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentContainer}>
                        {/* Additional content below the tabs */}
                        {activeTab === 'Events' && (
                            <>
                                <View>
                                    <View style={styles.date}>
                                        <Icon name="calendar" style={styles.calendar} size={23} />
                                        {/* <Image source={calicon} style={styles.calendar} /> */}
                                        <Text style={styles.dated}>Tue, March 29</Text>
                                    </View>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                        {
                                            ticket.map((t, i) => (
                                                <View key={i} style={[styles.card2, { marginLeft: i === 0 ? 0 : 10 }]}>
                                                    <Image source={t.ImgUrl} style={{ borderRadius: 10, height: 140, width: 216 }} />
                                                    <View style={{ position: 'absolute', right: 0, paddingTop: 20, paddingRight: 20 }}><Icon2 name="favorite-border" size={25} color="white" /></View>
                                                    <Text style={[styles.h1, { paddingTop: 10, fontWeight: "bold", color: "black" }]}>{t.title}</Text>
                                                    <View style={{ paddingTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <View style={{ display: 'flex', flexDirection: "row", gap: 5, alignItems: "center" }}>
                                                            <Icon2 name="today" size={20} color="gray" />
                                                            <Text style={{ fontFamily: "aeoniktrial", color: 'gray' }}>{t.date} <Icon3 name="circle" size={6} color="gray" /> {t.time}</Text>
                                                        </View>
                                                        <Text style={{ color: 'blue', fontFamily: "aeoniktrial", fontWeight: "bold" }}>{t.price}</Text>
                                                    </View>
                                                </View>
                                            ))
                                        }
                                    </ScrollView>
                                </View>
                                <View>
                                    <View style={styles.date2}>
                                        <Icon name="calendar" style={styles.calendar} size={23} />
                                        {/* <Image source={calicon} style={styles.calendar} /> */}
                                        <Text style={styles.dated}>Tue, March 29</Text>
                                    </View>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                        {
                                            ticket.map((t, i) => (
                                                <View key={i} style={[styles.card2, { marginLeft: i === 0 ? 0 : 10 }]}>
                                                    <Image source={t.ImgUrl} style={{ borderRadius: 10, height: 140, width: 216 }} />
                                                    <View style={{ position: 'absolute', right: 0, paddingTop: 20, paddingRight: 20 }}><Icon2 name="favorite-border" size={25} color="white" /></View>
                                                    <Text style={[styles.h1, { paddingTop: 10, fontWeight: "bold", color: "black" }]}>{t.title}</Text>
                                                    <View style={{ paddingTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <View style={{ display: 'flex', flexDirection: "row", gap: 5, alignItems: "center" }}>
                                                            <Icon2 name="today" size={20} color="gray" />
                                                            <Text style={{ fontFamily: "aeoniktrial", color: 'gray' }}>{t.date} <Icon3 name="circle" size={6} color="gray" /> {t.time}</Text>
                                                        </View>
                                                        <Text style={{ color: 'blue', fontFamily: "aeoniktrial", fontWeight: "bold" }}>{t.price}</Text>
                                                    </View>
                                                </View>
                                            ))
                                        }
                                    </ScrollView>
                                </View>
                            </>

                        )}
                        {activeTab === 'Collections' && (
                            <Text style={styles.contentText}>Collections Content</Text>
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Favourites

const styles = StyleSheet.create({
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
        fontFamily: "aeoniktrial",
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
        paddingHorizontal: 35,
        marginBottom: 20
    },
    tabItem: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent', // Set initial border color to transparent
        width: '50%',
    },
    activeTabItem: {
        borderBottomColor: 'blue', // Set border color for active tab
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
        color: "black",
        paddingHorizontal: 25,

    },
    contentText: {
        fontSize: 15,
        color: 'gray'
    },
    calendar: {
        color: '#9CA4AB',
        marginRight: 8
    },
    date: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10
    },
    date2: {
        display: "flex",
        flexDirection: "row",
        marginTop: 15
    },
    dated: {
        color: "black",
        fontWeight: "bold"
    },
    contentContainer: {
        paddingHorizontal: 25,
    },
    card2: {
        marginTop: 15,
        backgroundColor: "#fff",
        alignSelf: 'flex-start',
        padding: 12,
        borderRadius: 10,
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
})

