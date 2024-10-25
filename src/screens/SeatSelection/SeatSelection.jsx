import { View, Text, SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
// const height2 = Dimensions.get('screen').height;
import { height, width } from 'react-native-dimension';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Frame from '../../assets/CardImages/Frame.png'
import card2 from '../../assets/CardImages/card5.png'

export default function SeatSelection() {
    const [activeBtn, setactiveBtn] = useState('Available');

    const tickets = [
        {
            title: 'Balcony Left',
            recommended: true,
            price: "$50.9 USD",
            seat: "34 H",
            imgUrl: card2,
        },
        {
            title: 'Balcony Left',
            recommended: false,
            price: "$50.9 USD",
            seat: "34 H",
            imgUrl: card2,
        },
        {
            title: 'Balcony Left',
            recommended: false,
            price: "$50.9 USD",
            seat: "34 H",
            imgUrl: card2,
        },
    ]
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ height: 'auto', backgroundColor: '#f6f6f6' }}>
                    <Image source={Frame} style={{ height: 80, width: '100%', marginTop: 20 }} />
                    <View style={{ margin: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15, marginTop: 10 }}>
                            <TouchableOpacity style={[styles.btn, { backgroundColor: activeBtn == "Available" ? '#355fe5' : 'transparent', borderWidth: activeBtn == "Available" ? 0 : 1 }]} onPress={() => setactiveBtn("Available")}>
                                <Text style={{ color: activeBtn == "Available" ? 'white' : 'gray', fontFamily: "Aeonik-Regular" }}>Available seats</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn, { backgroundColor: activeBtn == "Best" ? '#355fe5' : 'transparent', borderWidth: activeBtn == "Best" ? 0 : 1 }]} onPress={() => setactiveBtn("Best")}>
                                <Text style={{ color: activeBtn == "Best" ? 'white' : 'gray', fontFamily: "Aeonik-Regular" }}>Best Seats</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 30, marginBottom: 50 }}>
                            {
                                tickets.map((t, i) => (
                                    <View key={i} style={styles.ticketContainer}>
                                        <View style={styles.ticketContent}>
                                            <View style={{
                                                display: 'flex', flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderStyle: 'dashed', borderBottomColor: '#E9EBED', paddingBottom: "30px"
                                            }}>
                                                <Image
                                                    source={t.imgUrl}
                                                    style={{ borderRadius: 10, height: 55, width: 55, marginRight: 10 }}
                                                />
                                                <View style={{ display: 'flex', flexDirection: 'row', width: '80%', justifyContent: 'space-between' }}>
                                                    <View>
                                                        <Text style={styles.h1}>{t.title}</Text>
                                                        {
                                                            t.recommended &&
                                                            <View style={{ backgroundColor: '#77E371', padding: 7, borderRadius: 10 }}>
                                                                <Text style={{ color: 'black', fontSize: 14, fontFamily: "Aeonik-Bold" }}>
                                                                    Recommended
                                                                </Text>
                                                            </View>
                                                        }
                                                    </View>
                                                    <View style={{ justifyContent: 'center' }}>
                                                        <Text style={styles.h1}>{t.price}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: -16, marginHorizontal: -30 }}>
                                                <View style={styles.separator} />
                                                <View style={styles.separator} />
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                                                <View style={{ justifyContent: 'center' }}>
                                                    <Icon name='sofa' color={"gray"} size={25} />
                                                </View>
                                                <View>
                                                    <Text style={{ textAlign: 'left', color: 'gray', fontFamily: "Aeonik-Regular" }}>Seat</Text>
                                                    <Text style={{ textAlign: 'left', fontWeight: 'bold', color: 'black' }}>
                                                        {t.seat}
                                                    </Text>
                                                </View>
                                                <View style={{ alignSelf: 'flex-end' }}>
                                                    <TouchableOpacity style={styles.premium} onPress={() => { navigation.navigate("TicketView") }}>
                                                        <Text style={{ color: 'black', fontFamily: "Aeonik-Regular" }}>Premium Ticket x1</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ marginTop: 20, backgroundColor: '#fff', paddingLeft: 20, paddingRight: 20, paddingTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, width: "100%" }}>
                <View>
                    <Text style={styles.h1}>$50.11</Text>
                    <Text style={{ paddingTop: 10, color: 'gray', fontFamily: "Aeonik-Regular" }}>You’re going! +1</Text>
                </View>
                <View>
                    <TouchableOpacity style={{ backgroundColor: '#355fe5', padding: 20, borderRadius: 10 }}>
                        <Text style={{ color: "white", fontFamily: "Aeonik-Bold" }} >Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderColor: 'gray', alignItems: 'center', padding: 15, borderRadius: 30, width: 130
    },
    h1: {
        fontSize: 17,
        color: 'black',
        fontFamily: "Aeonik-Bold"
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
    premium: {
        backgroundColor: '#F8FCF8',
        padding: 10,
        borderRadius: 5,
    },
})