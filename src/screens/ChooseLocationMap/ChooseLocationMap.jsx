import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/FontAwesome6'
import Icon2 from 'react-native-vector-icons/SimpleLineIcons'
const { width, height } = Dimensions.get('screen');
import filterIcon from '../../assets/Icons/Filter.png'
import locIcon from '../../assets/Icons/currentlocation.png'
export default function ChooseLocationMap() {
    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={[StyleSheet.absoluteFill, { position: 'absolute' }]}
                initialRegion={{
                    // latitude: 30.956317045395803,
                    // longitude: 73.45030325398146,
                    latitude: 30.8138,
                    longitude: 73.4534,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <View style={styles.searchBar}>
                <Icon name='search' color={'gray'} size={20} />
                <TextInput style={{ width: "70%", fontFamily: "Plus", color: 'gray' }} placeholder="Search..." />
                {/* <Icons name='filter-list' size={20} /> */}
                <Image source={filterIcon} />
            </View>

            <View style={styles.currentLoc}>
                <Icons name='location-crosshairs' size={25} color={'#355fe5'} />
                {/* <Image source={locIcon} style={{ height: 27, width: 27 }} /> */}
            </View>

            <View style={styles.searchMenu}>
                <Text style={{
                    fontFamily: "Aeonik-Regular", color: 'gray'
                }}>Your Location</Text>
                <View style={{ marginTop: 14, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                        fontSize: 18, fontWeight: 'bold', color: 'black', paddingTop: 5, fontFamily: "Aeonik"
                    }}>St. Margareth, NY</Text>
                    <TouchableOpacity activeOpacity={0.9} style={styles.useBtn}><Text style={{ color: 'white' }}>Use</Text></TouchableOpacity>
                </View>
                <View style={{ borderWidth: 1, marginTop: 8, borderColor: 'lightgray', marginBottom: 8 }}></View>
                <View>
                    <Text style={{
                        fontFamily: "Aeonik-Regular", color: 'gray'
                    }}>Popular Location</Text>
                    <View style={{ marginTop: 10, display: 'flex', flexDirection: "row", gap: 20 }}>
                        <View style={styles.searchIcon}><Icon2 name="location-pin" style={{ color: 'blue' }} size={20} /></View>
                        <View>
                            <Text style={{
                                fontSize: 16, color: 'black', fontWeight: 'bold', fontFamily: "Aeonik"
                            }}>Los Angeles</Text>
                            <Text style={{
                                fontFamily: "Aeonik-Regular", color: 'gray'
                            }} >California, United States</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 10, display: 'flex', flexDirection: "row", gap: 20 }}>
                        <View style={styles.searchIcon}><Icon2 name="location-pin" style={{ color: 'blue' }} size={20} /></View>
                        <View>
                            <Text style={{
                                fontSize: 16, color: 'black', fontWeight: 'bold', fontFamily: "Aeonik"
                            }}>San Francisco</Text>
                            <Text style={{
                                fontFamily: "Aeonik-Regular", color: 'gray'
                            }}>California, United States</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#fff",
        height: 50,
        borderRadius: 30,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
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
    currentLoc: {
        marginTop: height / 2.8,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#fff",
        height: 60,
        width: 60,
        marginLeft: width / 1.3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 17,
    },
    searchMenu: {
        marginTop: 12,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#fff",
        height: 240,
        borderRadius: 30,
        padding: 20
    },
    useBtn: {
        backgroundColor: '#355fe5',
        height: 35,
        width: 90,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        fontFamily: "Aeonik",
        fontWeight: "bold"

    },
    searchIcon: {
        // borderWidth:1,
        width: 40,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#f1f1f1'
    }
})