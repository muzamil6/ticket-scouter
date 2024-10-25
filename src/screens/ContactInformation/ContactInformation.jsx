import { View, Text, SafeAreaView, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('screen');
import { TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ContactInformation({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ height: height / 1.195, backgroundColor: '#f6f6f6' }}>
                    <View style={{ margin: 20 }}>
                        <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 20 }}>
                            <Text style={styles.h1}>Full Name</Text>
                            <TextInput
                                textContentType="emailAddress"
                                placeholder="Cooper Curtis"
                                placeholderTextColor={'black'}
                                underlineColor="transparent"
                                activeUnderlineColor='black'
                                keyboardType={'email-address'}
                                style={[styles.inputs]}
                            />

                            <Text style={[styles.h1, { marginTop: 20 }]}>Email Address</Text>
                            <TextInput
                                textContentType="emailAddress"
                                placeholder="Cooper998@gmail.com"
                                placeholderTextColor={'black'}
                                underlineColor="transparent"
                                activeUnderlineColor='black'
                                keyboardType={'email-address'}
                                style={[styles.inputs]}
                                left={<TextInput.Icon icon={"mail"} color="gray" size={27} />}
                            />

                            <Text style={[styles.h1, { marginTop: 20 }]}>Mobile Phone</Text>
                            <TextInput
                                textContentType='givenName'
                                placeholder="+1 2345 7789 908"
                                placeholderTextColor={'black'}
                                underlineColor="transparent"
                                activeUnderlineColor='black'
                                keyboardType={'number-pad'}
                                style={[styles.inputs]}
                                left={<TextInput.Icon icon={"phone"} color="gray" size={27} />}
                            />
                        </View>

                        <View style={{ marginTop: 20, backgroundColor: "#F8FCF8", padding: 20, borderRadius: 20, display: 'flex', flexDirection: "row", gap: 10 }}>
                            <Icon name='check-circle' size={23} style={{ marginTop: 3 }} color={'blue'} />
                            <Text style={{ fontSize: 12, color: "black", fontFamily: "Aeonik-Regular" }}>Keep me updated on the latest news, events, and the exclusive offers on this event organizer.</Text>
                        </View>

                        <View style={{ marginTop: 20, fontFamily: "Aeonik" }}>
                            <Text style={{ color: 'gray' }}>By clicking “Register”, I accept the <Text style={{ color: 'black', fontWeight: 'bold' }}>Terms of Service</Text> and have read <Text style={{ color: 'black', fontWeight: 'bold' }}>Privacy Policy</Text>. I agree that Evenline may <Text style={{ color: 'black', fontWeight: 'bold' }}>share my information</Text> with the event organizer.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ marginTop: 20, backgroundColor: '#fff', paddingLeft: 20, paddingBottom: 10, paddingRight: 20, paddingTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, width: "100%" }}>
                <View>
                    <Text style={[{ color: 'black', fontFamily: "Aeonik", fontWeight: "bold" }]}>$37.11</Text>
                    <Text style={{ paddingTop: 10, color: 'gray' }}>You’re going! +1</Text>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.9} style={{ backgroundColor: '#355fe5', padding: 20, borderRadius: 10 }} onPress={() => navigation.navigate("Detail Order")}>
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
        // fontWeight: 'bold',
        fontFamily: "Aeonik-Regular",
        color: 'gray'
    },
    inputs: {
        backgroundColor: '#f6f6f6',
        borderRadius: 5,
        marginTop: 10,
        height: 56,
        color: 'black',
        width: '100%',
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: "Aeonik"
    },
})