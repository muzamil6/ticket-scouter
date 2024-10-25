import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView, Dimensions, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Map from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/SimpleLineIcons'
import Loc1 from '../../assets/Images/location1.png'
import Loc2 from '../../assets/Images/location2.png'
import Loc3 from '../../assets/Images/location3.png'
import Map1 from '../../assets/Images/Map1.png'
import Map2 from '../../assets/Images/Map2.png'
import Map3 from '../../assets/Images/Map3.png'
import locIcon from '../../assets/Icons/location.png'
const { width, height } = Dimensions.get('screen');

export default function ChooseLocation({ navigation }) {
    const [popularLocation, setpopularLocation] = useState('')
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.main}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => { navigation.goBack('GetStarted') }} style={{ paddingLeft: 20, marginTop: 20 }}>
                        <Icon name='arrow-left' style={{ color: 'black' }} size={30} />
                    </TouchableOpacity>
                    <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                        <Text style={styles.h1}>Choose your location</Text>
                        <Text style={styles.h2}>Let’s find your unforgettable event. Choose a
                            location below to get started.</Text>

                        <TouchableOpacity activeOpacity={0.9} style={styles.searchBtn} onPress={() => { navigation.navigate('ChooseLocationMap') }}>
                            <Map name="map-pin" style={{ color: 'blue', marginRight: 10 }} size={20} />
                            <Text style={{ fontSize: 20, fontFamily: "Aeonik-Regular", fontWeight: '400', color: 'gray' }}>Search event in...</Text>
                        </TouchableOpacity>

                        <View>
                            <Text style={{ fontSize: 20, color: 'black', paddingTop: 8, paddingBottom: 8, fontFamily: "Aeonik-Regular", fontWeight: "400" }}>Popular location</Text>

                            <TouchableOpacity activeOpacity={0.9} onPress={() => setpopularLocation("losAngeles")} style={[styles.popularBtn, { borderColor: popularLocation == "losAngeles" ? "blue" : 'lightgray' }]}>
                                <View>
                                    <Text style={{
                                        fontSize: 18, fontWeight: 'bold', color: "black", fontFamily: "Aeonik"
                                    }}>Los Angeles</Text>
                                    <Text style={{
                                        paddingTop: 8, fontFamily: "Aeonik-Regular", color: 'gray'
                                    }}>Los Angeles, United States</Text>
                                </View>
                                <Image source={Map1} style={[styles.popularBtnImg, { borderColor: popularLocation == "losAngeles" ? "blue" : 'gray' }]} />
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.9} onPress={() => setpopularLocation("sanFrancisco")} style={[styles.popularBtn, { borderColor: popularLocation == "sanFrancisco" ? "blue" : 'lightgray' }]}>
                                <View>
                                    <Text style={{
                                        fontSize: 18, fontWeight: 'bold', color: "black", fontFamily: "Aeonik"
                                    }}>San Francisco</Text>
                                    <Text style={{
                                        paddingTop: 8, fontFamily: "Aeonik-Regular", color: 'gray'
                                    }}>San Francisco, United States</Text>
                                </View>
                                <Image source={Map2} style={[styles.popularBtnImg, { borderColor: popularLocation == "sanFrancisco" ? "blue" : 'lightgray' }]} />
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.9} onPress={() => setpopularLocation("newYork")} style={[styles.popularBtn, { borderColor: popularLocation == "newYork" ? "blue" : 'lightgray' }]}>
                                <View>
                                    <Text style={{
                                        fontSize: 18, fontWeight: 'bold', color: "black", fontFamily: "Aeonik"
                                    }}>New York</Text>
                                    <Text style={{
                                        paddingTop: 8, fontFamily: "Aeonik-Regular", color: 'gray'
                                    }}>New York, United States</Text>
                                </View>
                                <Image source={Map3} style={[styles.popularBtnImg, { borderColor: popularLocation == "newYork" ? "blue" : 'lightgray' }]} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 5 }}>
                        <TouchableOpacity activeOpacity={0.9} style={styles.nextBtn} onPress={() => { navigation.navigate('ChooseInterests') }}><Text style={{
                            color: "white", fontSize: 18, fontWeight: "600"
                        }}>Next</Text></TouchableOpacity>
                    </View>
                    <StatusBar barStyle="dark-content" backgroundColor="white" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#fff",
        // flex: 1,
        justifyContent: 'space-between',
        height: height / 1.1,
    },
    h1: {
        fontSize: 27,
        color: 'black',
        fontWeight: "700",
        fontFamily: "Aeonik"

    },
    h2: {
        paddingTop: 8,
        fontSize: 15,
        paddingBottom: 8,
        fontFamily: "Aeonik-Regular",
        fontWeight: "400",
        color: 'gray'
    },
    searchBtn: {
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: '#f9f9f9',
        borderColor: "#355fe5",
        borderWidth: 1,
        borderRadius: 7,
        height: 55,
        padding: 12,
        flexDirection: 'row', // Add flexDirection property to display elements horizontally
        alignItems: 'center', // Align items in the center of the container
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
    popularBtn: {
        marginTop: 8,
        borderWidth: 1.3,
        height: 95,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 30
    },
    popularBtnImg: {
        borderWidth: 4,
        // borderColor: 'gray',
        borderRadius: 50,
    },
    nextBtn: {
        backgroundColor: '#355fe5',
        // marginTop: 20,
        height: 50,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
})