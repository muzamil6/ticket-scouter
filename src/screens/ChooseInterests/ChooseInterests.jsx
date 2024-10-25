import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Feather'
import Icon4 from 'react-native-vector-icons/FontAwesome';
import filterIcon from '../../assets/Icons/Filter.png'
const { width, height } = Dimensions.get('screen');

export default function ChooseInterests({ navigation }) {
    const ChooseArray = [
        { id: 1, text: 'Birthday Party', activeIndex: false },
        { id: 2, text: 'Sports & Fitness', activeIndex: false },
        { id: 3, text: 'Music', activeIndex: false },
        { id: 4, text: 'Film & Entertainment', activeIndex: false },
        { id: 5, text: 'Charity & Causes', activeIndex: false },
        { id: 6, text: 'Technology', activeIndex: false },
        { id: 7, text: 'Concert', activeIndex: false },
        { id: 8, text: 'Personal Development', activeIndex: false },
        { id: 9, text: 'Seminar', activeIndex: false },
        { id: 10, text: 'Food & Drink', activeIndex: false },
    ]

    const [chooseArray, setChooseArray] = useState(ChooseArray);

    const handlePress = (index) => {
        const updatedArray = [...chooseArray];
        updatedArray[index].activeIndex = !updatedArray[index].activeIndex;
        setChooseArray(updatedArray);
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.main}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => { navigation.goBack('ChooseLocation') }} style={{ paddingLeft: 20, marginTop: 20 }}>
                        <Icon name='arrow-left' style={{ color: 'black' }} size={30} />
                    </TouchableOpacity>
                    <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                        <Text style={styles.h1}>Choose Interests</Text>
                        <Text style={styles.h2}>Choose your favorite interest to get new shows all
                            in one place related to it</Text>

                        <View style={styles.searchBar}>
                            <Icon2 name='search' color={'#355fe5'} size={25} />
                            <TextInput style={{ width: "70%" }} placeholderTextColor={'gray'} placeholder="Search ..." />
                            {/* <Icon3 name='filter-list' color={'lightgray'} size={25} /> */}
                            <Image source={filterIcon} style={{ height: 28, width: 28 }} />
                        </View>

                        <View style={{ marginTop: 25, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                            {chooseArray.map((t, i) => (
                                <TouchableOpacity activeOpacity={0.9} onPress={() => handlePress(i)} key={i} style={[styles.btn1, { borderColor: t.activeIndex ? 'blue' : 'lightgray' }]}>
                                    {
                                        t.activeIndex == true ?
                                            <Icon4 name="check" size={10} color="blue" style={{ marginTop: 3 }} />
                                            :
                                            <Icon4 name="circle" size={8} style={{ marginTop: 3 }} color="gray" />
                                    }
                                    <Text style={[styles.btn1text, { color: t.activeIndex ? 'blue' : 'black', fontFamily: "Aeonik-Regular" }]}>{t.text}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                    </View>
                    <View>
                        <TouchableOpacity activeOpacity={0.9} style={styles.finishBtn} onPress={() => { navigation.navigate('Home') }}><Text style={{ color: "white", fontWeight: "bold", fontFamily: "Plus" }}>Finish</Text></TouchableOpacity>
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
        height: height / 1.1,
        justifyContent: 'space-between'
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
        color: 'gray'
    },
    searchBar: {
        marginTop: 30,
        backgroundColor: "#fff",
        height: 55,
        borderRadius: 5,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
        borderWidth: 1,
        borderColor: '#355fe5',
        fontFamily: "Aeonik-Regular"
    },
    btn1: {
        borderWidth: 1,
        alignSelf: 'flex-start',
        height: 55,
        paddingLeft: 10,
        paddingRight: 10,
        gap: 14,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15

    },
    btn1text: {
        fontSize: 16,
        fontFamily: "Aeonik-Regular"
    },
    finishBtn: {
        backgroundColor: '#355fe5',
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        height: 50,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        fontFamily: "Plus"

    }
})