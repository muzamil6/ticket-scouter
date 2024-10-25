import { View, Text, SafeAreaView, ScrollView, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
const { width, height } = Dimensions.get('screen');
import bg from '../../assets/CardImages/bgTicket.png'
import Profile from '../../assets/Images/profile.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome';
import card1 from '../../assets/CardImages/card5.png'
import card2 from '../../assets/CardImages/card6.png'
import card5 from '../../assets/CardImages/card7.png'
import card6 from '../../assets/CardImages/card8.png'
import card7 from '../../assets/CardImages/card9.png'
export default function TicketProfile() {
    const [currentSelect, setcurrentSelect] = useState("Events")

    const Suggestions = [
        {
            imgUrl: card5,
            title: 'Self love stories: A Journaling Workshop',
            date: 'Nov 27',
            time: "07:00 PM",
            price: "Free",
        },
        {
            imgUrl: card6,
            title: 'Creative self care: Guide to Intuitive Watercolor',
            date: 'Nov 27',
            time: "07:00 PM",
            price: "$39.00",
        },
        {
            imgUrl: card7,
            title: 'Daft punk discovery: 20 Years Anniversary Party',
            date: 'Nov 27',
            time: "07:00 PM",
            price: "$78.55",
        }
    ]

    const UpcomingEvents = [
        {
            imgUrl: card1,
            title: 'California Art Festival: 2022 Dana Point 29-30',
            date: 'Nov 27',
            time: "07:00 PM",
            price: "$39.00",
        },
        {
            imgUrl: card2,
            title: 'Creative self care: Guide to Intuitive Watercolor',
            date: 'Nov 27',
            time: "07:00 PM",
            price: "$39.00",
        }
    ]
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ height: 'auto', backgroundColor: "#f6f6f6" }}>
                    <Image source={bg} style={{ height: 200, width: '100%' }} />
                    <View style={{ marginLeft: 20, marginRight: 20 }}>
                        <View style={{ alignSelf: 'center', padding: 2, backgroundColor: "#fff", borderRadius: 50, marginTop: -40 }}>
                            <Image source={Profile} style={{ height: 80, width: 80, borderRadius: 50 }} />
                        </View>
                        <View style={{ alignSelf: 'center', marginTop: 10, display: 'flex', flexDirection: 'row', gap: 10 }}>
                            <Text style={{ fontFamily: "Plus", fontWeight: "bold", color: "black" }}>Erico Movement</Text>
                            <Icon name='verified' style={{ color: 'green', marginTop: 2 }} size={20} />
                        </View>
                        <View style={{ alignSelf: 'center', marginTop: 20, display: 'flex', flexDirection: 'row', gap: 40 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.h1}>50</Text>
                                <Text style={{ marginTop: 5, fontFamily: "Plus", color: 'gray' }}>Total events</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.h1}>12</Text>
                                <Text style={{ marginTop: 5, fontFamily: "Plus", color: 'gray' }}>Collections</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row' }}>
                            <TouchableOpacity activeOpacity={0.9} style={{ width: "50%", alignItems: 'center', borderBottomColor: currentSelect == 'Events' ? 'blue' : 'gray', borderBottomWidth: 1 }} onPress={() => setcurrentSelect('Events')}>
                                <Text style={{ fontSize: 16, fontFamily: "Aeonik-Regular", marginBottom: 5, color: currentSelect == 'Events' ? 'blue' : 'gray' }}>Events</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9} style={{ width: "50%", alignItems: 'center', borderBottomColor: currentSelect == 'Collections' ? 'blue' : 'gray', borderBottomWidth: 1 }} onPress={() => setcurrentSelect('Collections')}>
                                <Text style={{ fontSize: 16, fontFamily: "Aeonik-Regular", marginBottom: 5, color: currentSelect == 'Collections' ? 'blue' : 'gray' }}>Collections</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                            {
                                currentSelect == 'Events' ?
                                    Suggestions.map((t, i) => (
                                        <View style={styles.cardEvents} key={i}>
                                            <Image source={t.imgUrl} style={{ height: 90, width: 80, borderRadius: 13 }} />
                                            <View style={{ width: "70%", paddingTop: 5 }}>
                                                <Text style={{ fontFamily: "Aeonik-Regular", color: "black", fontWeight: "bold" }}>{t.title}</Text>
                                                <View style={{ paddingTop: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 200 }}>
                                                    <View style={{ display: 'flex', flexDirection: "row", gap: 5, alignItems: "center" }}>
                                                        <Icon name="today" size={20} color="gray" />
                                                        <Text style={{ fontFamily: "Aeonik-Regular", color: 'gray' }}>{t.date} <Icon2 name="circle" size={6} color="gray" /> {t.time}</Text>
                                                    </View>
                                                    <Text style={{ color: 'blue', fontFamily: "Plus", fontWeight: "bold" }}>{t.price}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    ))
                                    :
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                        {
                                            UpcomingEvents.map((t, i) => (
                                                <View key={i} style={{ alignSelf: 'flex-start', borderRadius: 20, marginLeft: i === 0 ? 0 : 10 }}>
                                                    <Image source={t.imgUrl} style={{ borderRadius: 20, height: 290, width: 250 }} />
                                                    <View style={{ position: 'absolute', right: 0, paddingTop: 20, paddingRight: 15 }}>
                                                        <Icon name="favorite-border" size={30} color="white" />
                                                    </View>

                                                    <View style={styles.cardOne}>
                                                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', lineHeight: 20 }}>{t.title}</Text>
                                                        <View style={{ paddingTop: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 200 }}>
                                                            <View style={{ display: 'flex', flexDirection: "row", gap: 5, alignItems: "center" }}>
                                                                <Icon name="today" size={20} color="gray" />
                                                                <Text style={{ fontFamily: "Aeonik-Regular", color: 'gray' }}>{t.date} <Icon2 name="circle" size={6} color="gray" /> {t.time}</Text>
                                                            </View>
                                                            <Text style={{ color: 'blue', fontFamily: "Plus", fontWeight: "bold" }}>{t.price}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            ))
                                        }
                                    </ScrollView>
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 17,
        color: 'black',
        fontFamily: "Plus",
        fontWeight: "700"
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
    cardOne: {
        position: 'absolute',
        bottom: 15,
        backgroundColor: "#fff",
        alignSelf: 'center',
        borderRadius: 15,
        width: 230,
        height: 100,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
})