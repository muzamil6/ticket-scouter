import React, { useState } from 'react';
import {
    TextInput, View, TouchableOpacity, Text, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, StatusBar, SafeAreaView, ScrollView, Dimensions
} from 'react-native';
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Collapsible from 'react-native-collapsible';
const { width, height } = Dimensions.get('screen');

const HelpSupport = ({ navigation }) => {
    const accordionData = [
        { title: 'Lorem ipsum dolor sit amet', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
        { title: 'Lorem ipsum dolor sit amet', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
        { title: 'Lorem ipsum dolor sit amet', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
        { title: 'Lorem ipsum dolor sit amet', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
        { title: 'Lorem ipsum dolor sit amet', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },

    ];

    const [activeAccordionIndex, setActiveAccordionIndex] = useState(-1);

    const toggleAccordion = (index) => {
        setActiveAccordionIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{ backgroundColor: '#fefefe', height: height / 1.1 }}>
                            <StatusBar backgroundColor="#fefefe" barStyle="dark-content" />
                            <View style={styles.header}>
                                <TouchableOpacity activeOpacity={0.9} style={styles.backButton} onPress={() => navigation.goBack()}>
                                    <Icon name="arrowleft" style={styles.backIcon} size={30} />
                                </TouchableOpacity>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.headerText}>Help and Support</Text>
                                </View>
                            </View>

                            {/* Add container with padding */}
                            <View style={styles.searchBarContainer}>
                                <View style={styles.searchBar}>
                                    <Icon2 name='search' color={'gray'} size={20} />
                                    <TextInput style={{ width: "85%", fontWeight: "bold" }} placeholderTextColor={"gray"} placeholder="Search..." />
                                </View>
                            </View>
                            {/* End of container with padding */}

                            {/* Accordions */}
                            {accordionData.map((accordion, index) => (
                                <View key={index} style={styles.accordionContainer}>
                                    <View style={{ paddingHorizontal: 12 }}>
                                        <TouchableOpacity activeOpacity={0.9} onPress={() => toggleAccordion(index)} style={styles.accordionToggle}>
                                            <Text style={[styles.accordionTitle, activeAccordionIndex === index && styles.activeAccordionTitle]}>
                                                {accordion.title} {activeAccordionIndex === index ? 'collapse' : 'expand'}
                                            </Text>
                                            {activeAccordionIndex === index ? (
                                                <Icon2 name='chevron-up' size={20} color={"blue"} /> // Change icon color to blue when open
                                            ) : (
                                                <Icon2 name='chevron-down' size={20} color={"black"} />
                                            )}
                                        </TouchableOpacity>
                                        <Collapsible collapsed={activeAccordionIndex !== index}>
                                            <View style={styles.accordionContent}>
                                                <Text style={{ color: "#9CA4AB", fontSize: 15 }}>
                                                    {accordion.content}
                                                </Text>
                                            </View>
                                        </Collapsible>
                                    </View>
                                    {/* Add border bottom to separate accordions */}
                                    {index !== accordionData.length - 1 && <View style={styles.accordionSeparator} />}
                                </View>
                            ))}
                            {/* End of Accordions */}
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    searchBarContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 20
    },
    accordionContainer: {
        marginBottom: 27, // Add vertical spacing between the accordions
        overflow: "hidden",
    },
    searchBar: {
        backgroundColor: "transparent",
        height: 50,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: "#E9EBED",
        borderWidth: 1.5,
    },
    accordionToggle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    accordionTitle: {
        color: 'black',
        fontWeight: '500',
        fontSize: 15,
        fontFamily: "Aeonik"
    },
    activeAccordionTitle: {
        color: 'blue',

    },
    accordionContent: {
        padding: 20,
        backgroundColor: 'transparent',
        fontFamily: "Aeonik-Regular"

    },
    accordionSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E9EBED',
        marginTop: 15,
        marginLeft: 27,
        marginRight: 27,
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        marginLeft: -40,

    },
    mainTerms: {
        paddingHorizontal: 25,
        marginBottom: 10
    },
    headerText: {
        fontSize: 18,
        color: 'black',
        fontWeight: "bold",
        textAlign: 'center',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    backButton: {
        padding: 10,
    },
    backIcon: {
        color: 'black',
    },
});

export default HelpSupport;
