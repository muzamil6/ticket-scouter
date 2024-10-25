import { View, Text, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
const { width, height } = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
export default function PickPlan({ navigation }) {
    const [activeBtn, setactiveBtn] = useState('Annually');
    const [activePlan, setactivePlan] = useState("")

    const plans = [
        {
            title: "Starter",
            recommended: false,
            price: "$9.99 USD",
            desc: "Access to see price comparison"
        },
        {
            title: "Premium",
            recommended: true,
            price: "$50.9 USD",
            desc: "Access to Preorder events tickets"
        },
        {
            title: "Regular",
            recommended: false,
            price: "$30.0 USD",
            desc: "Access to get event tickets alerts"
        }
    ]
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ height: 'auto', backgroundColor: '#f6f6f6' }}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                navigation.goBack('abc');
                            }}
                            style={styles.backButton}>
                            <Icon name="cross" style={styles.backIcon} size={30} />
                        </TouchableOpacity>
                        <View style={styles.titleContainer}>
                            <Text style={styles.headerText}>Pick your plan</Text>
                        </View>
                    </View>
                    <View style={{ margin: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                            <TouchableOpacity activeOpacity={0.9} style={[styles.btn, { backgroundColor: activeBtn == "Annually" ? '#355fe5' : 'transparent', borderWidth: activeBtn == "Annually" ? 0 : 1 }]} onPress={() => setactiveBtn("Annually")}>
                                <Text style={{ color: activeBtn == "Annually" ? 'white' : 'gray', fontFamily: "Aeonik-Regular" }}>Annually</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9} style={[styles.btn, { backgroundColor: activeBtn == "Monthly" ? '#355fe5' : 'transparent', borderWidth: activeBtn == "Monthly" ? 0 : 1 }]} onPress={() => setactiveBtn("Monthly")}>
                                <Text style={{ color: activeBtn == "Monthly" ? 'white' : 'gray', fontFamily: "Aeonik-Regular" }}>Monthly</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.h1}>Save on annual plans</Text>
                            {
                                plans.map((t, i) => (
                                    <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate("Ticket alert")} key={i} style={{ marginTop: 15, borderWidth: 1, borderColor: 'lightgray', padding: 20, borderRadius: 15, height: 180, justifyContent: 'space-between', backgroundColor: activePlan == t.title ? "#fff" : 'transparent' }}>
                                        <View>
                                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={styles.h1}>{t.title}</Text>
                                                <View style={{ flexDirection: 'row', gap: 5 }}>
                                                    {
                                                        t.recommended &&
                                                        <View style={{ backgroundColor: "#77E371", padding: 5, borderRadius: 10 }}>
                                                            <Text style={{ color: 'black', fontSize: 14, fontFamily: "Aeonik-Bold" }}>Recommended</Text>
                                                        </View>
                                                    }
                                                    {
                                                        activePlan == t.title ?
                                                            <Icon3 name="check-box" color={"blue"} size={25} onPress={() => setactivePlan("")} />
                                                            :
                                                            <Icon2 name="checkbox-blank-outline" color={"gray"} size={25} onPress={() => setactivePlan(t.title)} />
                                                    }
                                                </View>
                                            </View>
                                            <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                                                <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', fontFamily: "Aeonik-Regular" }}>{t.price}</Text>
                                                <Text style={{ paddingTop: 7, color: 'gray', fontFamily: "Aeonik-Regular" }}>per annum</Text>
                                            </View>
                                        </View>
                                        <Text style={{ color: 'gray', fontFamily: "Aeonik-Regular" }}>{t.desc}</Text>
                                        <View style={{ flexDirection: 'row', gap: 8 }}>
                                            <Text style={{ color: 'black', fontWeight: 'bold', fontFamily: "Aeonik-Regular" }}>See benefits</Text>
                                            <Icon name='chevron-down' size={20} color={"black"} />
                                        </View>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    backButton: {
        padding: 10,
        marginTop: 6,
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
    btn: {
        borderColor: 'gray', alignItems: 'center', padding: 15, borderRadius: 30, width: 100
    },
    h1: {
        fontSize: 17,
        color: 'black',
        fontFamily: "Aeonik-Regular"
    }
})