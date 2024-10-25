import { View, Text, StatusBar, SafeAreaView, ScrollView, TextInput, StyleSheet, Dimensions, Image, PanResponder, TouchableOpacity, Animated } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/SimpleLineIcons'
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons'
const { width, height } = Dimensions.get('screen');
import card1 from '../../assets/CardImages/card13.png'
import card2 from '../../assets/CardImages/card4.png'
import { Modal } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import filterIcon from '../../assets/Icons/Filter.png'

export default function Search({ navigation }) {
    const [activeEvent, setactiveEvent] = useState("All Events")
    const [activeCate, setactiveCate] = useState("Best Prices")
    const [modalVisible, setModalVisible] = useState(false);
    const [sliderValues, setSliderValues] = useState([40, 120]);

    const handleSliderChange = (values) => {
        setSliderValues(values);
    };
    const moreEvents = [
        {
            title: "Disco Tehran - Goodbye Party",
            ImgUrl: card1,
            date: "23 Oct",
            time: "08:00 PM",
        },
        {
            title: "Everyday People NYC: rOLLER",
            ImgUrl: card2,
            date: "31 Oct",
            time: "08:00 PM",
        },
        {
            title: "Disco Tehran - Goodbye Party",
            ImgUrl: card1,
            date: "23 Oct",
            time: "08:00 PM",
        },
        {
            title: "Everyday People NYC: rOLLER",
            ImgUrl: card2,
            date: "31 Oct",
            time: "08:00 PM",
        },
        {
            title: "Disco Tehran - Goodbye Party",
            ImgUrl: card1,
            date: "23 Oct",
            time: "08:00 PM",
        },
        {
            title: "Everyday People NYC: rOLLER",
            ImgUrl: card2,
            date: "31 Oct",
            time: "08:00 PM",
        },
    ]

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

    const Categories = [
        {
            title: "Best Prices",
            iconName: "fire"
        },
        {
            title: "Artist",
            iconName: "basketball"
        },
        {
            title: "Best Value",
            iconName: "music"
        },
        {
            title: "Team",
            iconName: "dumbbell"
        }
    ]

    const pan = React.useRef(new Animated.ValueXY()).current;

    // Create a PanResponder to handle touch gestures
    const panResponder = React.useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dy: pan.y }], { useNativeDriver: false }),
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > 50) {
                    setModalVisible(false);
                } else {
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;
    const closeModal = () => {
        setModalVisible(false);
    };

    const handleApplyFilter = () => {
        navigation.navigate("SearchMap")
        setModalVisible(false)
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ backgroundColor: "#f6f6f6", height: 'auto', paddingLeft: 20, paddingRight: 20 }}>
                    <View style={styles.searchBar}>
                        <Icon name='search' color={'gray'} size={20} />
                        <TextInput style={{ width: "70%", fontFamily: "aeoniktrial", fontWeight: "bold" }} placeholderTextColor={'gray'} placeholder="Search..." />
                        {/* <Icon2 name='filter-list' size={20} onPress={() => setModalVisible(true)} /> */}
                        <TouchableOpacity activeOpacity={0.9} onPress={() => setModalVisible(true)}>
                            <Image source={filterIcon} style={{ height: 28, width: 28 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center", marginTop: 30, marginBottom: 30 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                            <Icon3 name="location-pin" style={{ color: 'blue', marginRight: 10 }} size={20} />
                            <Text style={{ color: 'blue', fontWeight: "600" }} >My Current Location</Text>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View>
                            <Text style={styles.h1}>Recommendation Events</Text>
                        </View>

                        {
                            moreEvents.map((t, i) => (
                                <View style={styles.cardEvents} key={i}>
                                    <Image source={t.ImgUrl} style={{ height: 72, width: 72, borderRadius: 13 }} />
                                    <View style={{ width: "50%" }}>
                                        <Text style={{ fontSize: 16, color: 'blue', fontFamily: "Aeonik" }}>{t.date} - {t.time} </Text>
                                        <Text style={[styles.h1, { paddingTop: 5, fontFamily: "Aeonik" }]}>{t.title}</Text>
                                    </View>
                                    <View style={{ position: 'absolute', right: 0, paddingTop: 15, paddingRight: 20 }}><Icon2 name="favorite-border" size={25} color="gray" /></View>
                                </View>
                            ))
                        }
                    </View>

                </View>
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalContainer}>
                        <Animated.View
                            style={[
                                {
                                    transform: [{ translateY: pan.y }],
                                }
                            ]}
                        >
                            <View style={styles.modalContent} {...panResponder.panHandlers}>
                                <View style={styles.modalCloser}></View>
                                <View style={{ marginTop: 15, alignItems: 'center' }}><Text style={styles.h1}>Filter Events</Text></View>
                                <View style={{ marginTop: 20 }}>
                                    <Text style={styles.h2}>Locations</Text>
                                    <View style={styles.filterbtn}>
                                        <Text style={{ fontFamily: "Aeonik", color: "gray" }}>New York, US</Text>
                                        <Icon3 name="location-pin" style={{ color: 'blue', marginRight: 10 }} size={20} />
                                    </View>
                                </View>
                                <View style={{ marginTop: 15 }}>
                                    <Text style={styles.h2}>Events</Text>
                                    <View>
                                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                                            {
                                                Events.map((t, i) => (
                                                    <TouchableOpacity activeOpacity={0.9} onPress={() => setactiveEvent(t.title)} key={i} style={[styles.eventbtn, { borderWidth: 1, alignItems: "center", borderColor: activeEvent == t.title ? "#355fe5" : "gray", backgroundColor: activeEvent == t.title ? "#355fe5" : "transparent" }]}>
                                                        <Icon4 name={t.iconName} size={20} color={activeEvent == t.title ? "white" : "gray"} />
                                                        <Text style={{ fontSize: 15, fontFamily: "aeoniktrial", color: activeEvent == t.title ? "white" : "gray" }}>{t.title}</Text>
                                                    </TouchableOpacity>
                                                ))
                                            }
                                        </ScrollView>
                                    </View>
                                </View>

                                <View style={{ marginTop: 15 }}>
                                    <Text style={styles.h2}>Categories</Text>
                                    <View>
                                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                                            {
                                                Categories.map((t, i) => (
                                                    <TouchableOpacity activeOpacity={0.9} onPress={() => setactiveCate(t.title)} key={i} style={[styles.eventbtn, { alignItems: "center", borderWidth: 1, borderColor: activeCate == t.title ? "#355fe5" : "gray", backgroundColor: activeCate == t.title ? "#355fe5" : "transparent" }]}>
                                                        <Text style={{ fontSize: 15, fontFamily: "aeoniktrial", color: activeCate == t.title ? "white" : "gray" }}>{t.title}</Text>
                                                    </TouchableOpacity>
                                                ))
                                            }
                                        </ScrollView>
                                    </View>
                                </View>

                                <View style={{ marginTop: 15 }}>
                                    <Text style={styles.h2}>Dates</Text>
                                    <View style={styles.filterbtn}>
                                        <Text style={{ fontFamily: "Aeonik", color: "gray" }}>24 October 2021</Text>
                                        <Icon4 name="calendar-month-outline" style={{ color: 'blue', marginRight: 10 }} size={20} />
                                    </View>
                                </View>

                                <View style={{ marginTop: 15 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                                        <Text style={styles.h2}>Price Range</Text>
                                        <Text style={{
                                            fontSize: 16, color: 'blue', fontFamily: "aeoniktrial",
                                        }}>{`$${sliderValues[0]} - $${sliderValues[1]}`}</Text>
                                    </View>
                                    <View>
                                        <MultiSlider
                                            values={sliderValues}
                                            sliderLength={300}
                                            onValuesChange={handleSliderChange}
                                            min={0}
                                            max={200}
                                            step={1}
                                            allowOverlap={false}
                                            snapped
                                            selectedStyle={{
                                                backgroundColor: 'blue',
                                            }}
                                            markerStyle={{
                                                backgroundColor: 'blue',
                                            }}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity activeOpacity={0.9} onPress={handleApplyFilter} style={{ backgroundColor: '#355fe5', height: 50, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontWeight: "500" }}>Apply Filter</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </View>
                </Modal>
                <StatusBar barStyle="dark-content" backgroundColor="#f6f6f6" />
            </ScrollView >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 20,
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
    h1: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: "aeoniktrial",
    },
    h2: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
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

    modalContainer: {
        height: height,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        marginTop: height / 6,
        backgroundColor: 'white',
        width: '100%',
        height: height,
        // borderRadius: 20,
        // alignItems: 'center',
        paddingVertical: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingLeft: 20,
        paddingRight: 20
    },
    modalCloser: {
        backgroundColor: 'lightgray',
        height: 7,
        width: 70,
        borderRadius: 10,
        alignSelf: 'center'
    },
    filterbtn: {
        borderWidth: 1,
        borderColor: "#3369e7",
        marginTop: 10,
        height: 50,
        borderRadius: 15,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
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
})