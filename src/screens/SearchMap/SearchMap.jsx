import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/SimpleLineIcons'
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('screen');
import cardOne from '../../assets/CardImages/card1.png'
import cardTwo from '../../assets/CardImages/cardTwo.jpg'

export default function SearchMap({ navigation }) {
    const [activeEvent, setactiveEvent] = useState("All Events")

    const Events = [
        {
            title: "All Events",
            iconName: "fire"
        },
        {
            title: "Sports",
            iconName: "basketball"
        },
        {
            title: "Music",
            iconName: "music"
        },
        {
            title: "Exercise",
            iconName: "dumbbell"
        }
    ]

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
    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={[StyleSheet.absoluteFill, { position: 'absolute' }]}
                initialRegion={{
                    latitude: 30.8138,
                    longitude: 73.4534,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <View style={styles.head}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <View style={styles.crossbtn}><Icon name="window-close" style={{ color: 'gray' }} size={20} /></View>
                    <View style={styles.searchbtn}>
                        <Text style={{ fontFamily: "Aeonik", color: "black" }}>New York, US</Text>
                        <Icon2 name="location-pin" style={{ color: 'blue', marginRight: 10 }} size={20} />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                        {
                            Events.map((t, i) => (
                                <TouchableOpacity activeOpacity={0.9} onPress={() => setactiveEvent(t.title)} key={i} style={[styles.eventbtn, { alignItems: "center", borderWidth: 1, borderColor: activeEvent == t.title ? "#355fe5" : "gray", backgroundColor: activeEvent == t.title ? "#355fe5" : "white" }]}>
                                    <Icon name={t.iconName} size={20} color={activeEvent == t.title ? "white" : "gray"} />
                                    <Text style={{ fontSize: 15, fontFamily: "aeoniktrial", color: activeEvent == t.title ? "white" : "gray" }}>{t.title}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>

                <View style={{ marginTop: height / 2.7 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            ticket.map((t, i) => (
                                <TouchableOpacity activeOpacity={0.9} key={i} style={[styles.card2, { marginLeft: i === 0 ? 0 : 10 }]} onPress={() => navigation.navigate('ViewTicket')}>
                                    <Image source={t.ImgUrl} style={{ borderRadius: 10, height: 140, width: 216 }} />
                                    <View style={{ position: 'absolute', right: 0, paddingTop: 20, paddingRight: 20 }}><Icon3 name="favorite-border" size={25} color="white" /></View>
                                    <Text style={[styles.h1, { paddingTop: 10, fontFamily: "Aeonik", color: "black" }]}>{t.title}</Text>
                                    <View style={{ paddingTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                                        <View style={{ display: 'flex', flexDirection: "row", gap: 5, alignItems: "center" }}>
                                            <Icon3 name="today" size={20} color="gray" />
                                            <Text style={{ fontFamily: "aeoniktrial", color: 'gray' }}>{t.date} <Icon4 name="circle" size={6} color="gray" /> {t.time}</Text>
                                        </View>
                                        <Text style={{ color: 'blue', fontFamily: "aeoniktrial", fontWeight: "bold" }}>{t.price}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    head: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },
    searchbtn: {
        marginTop: 10,
        height: 50,
        borderRadius: 10,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        width: '80%',
        backgroundColor: "#fff"
    },
    crossbtn: {
        backgroundColor: "#fff",
        alignSelf: "flex-start",
        borderRadius: 10,
        marginTop: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%'
    },
    eventbtn: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        padding: 13,
        borderRadius: 15,
        gap: 5,
        marginLeft: 5
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