import { View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('screen');

export default function AddNewCard({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ height: height / 1.195, justifyContent: 'space-between' }}>
                    <View style={{ margin: 20 }}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.h1}>Card Number</Text>
                            <View style={{ marginTop: 10 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter Card Number'
                                />
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.h1}>Card Holder Name</Text>
                            <View style={{ marginTop: 10 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter Holder Name'
                                />
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.h1}>Card Holder Name</Text>
                            <View style={{ marginTop: 10 }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter Holder Name'
                                />
                            </View>
                        </View>

                        <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', gap: 10 }}>
                            <View>
                                <Text style={styles.h1}>Expired</Text>
                                <View style={{ marginTop: 10 }}>
                                    <TextInput
                                        style={styles.input2}
                                        placeholder='MM/YY'
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.h1}>CVV Code</Text>
                                <View style={{ marginTop: 10 }}>
                                    <TextInput
                                        style={styles.input2}
                                        placeholder='CVV'
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.9} style={styles.btn} onPress={() => navigation.navigate("Detail Order")}>

                        <Text style={{ fontSize: 17, color: "white", fontFamily: "Aeonik-Regular" }}>Add Card</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 17,
        // fontWeight: 'bold',
        color: 'black',
        fontFamily: "Aeonik-Regular",
        fontWeight: "500"

    },
    input: {
        backgroundColor: '#fff',
        height: 50,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        paddingLeft: 20,
        fontSize: 15,
        fontFamily: "Aeonik-Regular"

    },
    input2: {
        backgroundColor: '#fff',
        height: 50,
        width: width / 2.35,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        paddingLeft: 20,
        fontSize: 15,
        fontFamily: "Aeonik-Regular"

    },
    btn: {
        marginLeft: 20, marginRight: 20, marginBottom: 20, backgroundColor: '#355fe5', padding: 18, borderRadius: 30, alignItems: 'center'
    }
})