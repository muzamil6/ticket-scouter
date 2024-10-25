import { View, Text, Dimensions, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
const height2 = Dimensions.get('screen').height;
import card1 from '../../assets/CardImages/card13.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { height, width } from 'react-native-dimension';

export default function GetTicket({ navigation }) {
    const [numberTicket, setnumberTicket] = useState(1)
    const [selectedTicket, setselectedTicket] = useState('')

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ height: height2 / 1.1 }}>
                    <View style={{ margin: 20 }}>
                        <View style={styles.cardEvents}>
                            <Image source={card1} style={{ height: 90, width: 90, borderRadius: 13 }} />
                            <View style={{ width: "70%", paddingTop: 5, justifyContent: 'space-between', paddingBottom: 5 }}>
                                <Text style={styles.h2}>California Art Festival</Text>
                                <Text style={{ fontFamily: "Aeonik-Regular", color: 'gray' }}>Sun, 29 March 2021 - 10:00 AM </Text>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                        <Icon name="minus-box-outline" size={25} color="gray" onPress={() => { numberTicket > 1 && setnumberTicket(numberTicket - 1) }} />
                                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17, paddingTop: 1 }}>{numberTicket}</Text>
                                        <Icon name="plus-box-outline" size={25} color="gray" onPress={() => { setnumberTicket(numberTicket + 1) }} />
                                    </View>
                                    <View>
                                        <Icon name="trash-can-outline" size={25} color="red" />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <View>
                                <Text style={styles.h1}>Ticket type</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.9} style={[styles.ticketHead, { borderColor: selectedTicket == 'regular' ? 'blue' : 'gray' }]} onPress={() => setselectedTicket("regular")}>
                                <View style={[styles.ticketBody, { borderRightColor: selectedTicket == 'regular' ? 'blue' : 'gray' }]}>
                                    <View style={{ backgroundColor: "#f6f6f6", alignSelf: 'flex-start', padding: 8, borderRadius: 10 }}>
                                        <Icon name="ticket-confirmation-outline" size={25} color={selectedTicket == 'regular' ? 'blue' : 'gray'} />
                                    </View>
                                    <Text style={{ fontFamily: "Plus", fontWeight: "bold", color: "black" }}>Regular</Text>
                                    <Text style={{ fontFamily: "Aeonik-Regular", color: 'gray' }}>
                                        Admission to the inperson drink & draw.
                                    </Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', marginTop: -14, marginBottom: -14, marginLeft: -15 }}>
                                    <View style={[styles.separator1, { borderLeftColor: selectedTicket == 'regular' ? 'blue' : 'gray' }]} />
                                    <View style={[styles.separator2, { borderLeftColor: selectedTicket == 'regular' ? 'blue' : 'gray' }]} />
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: "26%" }}><Text style={{ transform: [{ rotate: '-90deg' }], color: selectedTicket == 'regular' ? 'blue' : 'gray', fontSize: 16 }}>$35.00/pax</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.9} style={[styles.ticketHead, { borderColor: selectedTicket == 'vvip' ? 'blue' : 'gray' }]} onPress={() => setselectedTicket("vvip")}>
                                <View style={[styles.ticketBody, { borderRightColor: selectedTicket == 'vvip' ? 'blue' : 'gray' }]}>
                                    <View style={{ backgroundColor: "#f6f6f6", alignSelf: 'flex-start', padding: 8, borderRadius: 10 }}>
                                        <Icon name="ticket-confirmation-outline" size={25} color={selectedTicket == 'vvip' ? 'blue' : 'gray'} />
                                    </View>
                                    <Text style={{ fontFamily: "Plus", fontWeight: "bold", color: "black" }}>VVIP</Text>
                                    <Text style={{ fontFamily: "Aeonik-Regular", color: 'gray' }}>
                                        Admission to the inperson drink & draw.
                                    </Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', marginTop: -14, marginBottom: -14, marginLeft: -15 }}>
                                    <View style={[styles.separator1, { borderLeftColor: selectedTicket == 'vvip' ? 'blue' : 'gray' }]} />
                                    <View style={[styles.separator2, { borderLeftColor: selectedTicket == 'vvip' ? 'blue' : 'gray' }]} />
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: "26%" }}><Text style={{ transform: [{ rotate: '-90deg' }], color: selectedTicket == 'vvip' ? 'blue' : 'gray', fontSize: 16 }}>$45.00/pax</Text></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ marginTop: 20, backgroundColor: '#fff', paddingLeft: 20, paddingRight: 20, paddingTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, width: "100%", paddingBottom: 10 }}>
                <View>
                    <Text style={styles.h1}>$37.11</Text>
                    <Text style={{ paddingTop: 10, color: 'gray' }}>You’re going! +1</Text>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.9} style={{ backgroundColor: '#355fe5', padding: 20, borderRadius: 10 }} onPress={() => navigation.navigate("Contact Information")}>
                        <Text style={{ color: "white", fontFamily: "Aeonik" }} >Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        fontFamily: "Aeonik"
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
    separator1: {
        height: height(4),
        width: width(8),
        borderRadius: width(10),
        backgroundColor: '#f6f6f6',
        borderLeftWidth: 1,
        transform: [{ rotate: '270deg' }],
    },
    separator2: {
        height: height(4),
        width: width(8),
        borderRadius: width(10),
        backgroundColor: '#f6f6f6',
        borderLeftWidth: 1,
        transform: [{ rotate: '90deg' }],
    },
    ticketHead: {
        backgroundColor: 'white', display: 'flex', flexDirection: 'row', height: 200, marginTop: 15, borderRadius: 20, borderWidth: 1,
    },
    ticketBody: {
        width: "70%",
        borderRightWidth: 1,
        borderStyle: 'dashed',
        padding: 30,
        justifyContent: 'space-between'
    }
})
