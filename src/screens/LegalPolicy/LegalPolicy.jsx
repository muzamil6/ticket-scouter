import React, { useState } from 'react';
import {
    View, TouchableOpacity, Text, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, StatusBar, SafeAreaView, ScrollView, Dimensions
} from 'react-native';
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import ScrollBar from 'react-native-colored-scrollbar';
const { width, height } = Dimensions.get('screen');
const LegalPolicy = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: "#fefefe", flex: 1 }}>
            <ScrollView>

                <View>
                    <ScrollBar indicatorBackground="#E9EBED"
                        indicatorColor="#355FE5"
                    >
                        <KeyboardAvoidingView>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <View>
                                    <StatusBar backgroundColor="#fefefe" barStyle="dark-content" />
                                    <View style={styles.header}>
                                        <TouchableOpacity
                                            onPress={() => navigation.goBack('abc')}
                                            style={styles.backButton}>
                                            <Icon name="arrowleft" style={styles.backIcon} size={30} />
                                        </TouchableOpacity>
                                        <View style={styles.titleContainer}>
                                            <Text style={styles.headerText}>Legal and Policies</Text>
                                        </View>
                                    </View>
                                    <View style={styles.mainTerms}>
                                        <Text style={{ fontWeight: "bold", color: "black", fontSize: 17, marginBottom: 10 }}>Terms</Text>
                                        <Text style={styles.paragraph}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
                                        </Text>
                                        <Text style={styles.paragraph}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
                                        </Text>
                                    </View>
                                    <View style={styles.mainTerms}>
                                        <Text style={{ fontWeight: "bold", color: "black", fontSize: 17, marginBottom: 10 }}>Changes to the Service and/or Terms:</Text>
                                        <Text style={styles.paragraph}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
                                        </Text>
                                        <Text style={styles.paragraph}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
                                        </Text>
                                        <Text style={styles.paragraph}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
                                        </Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </KeyboardAvoidingView>
                    </ScrollBar>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default LegalPolicy;

const styles = StyleSheet.create({
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
        fontWeight: "400",
        textAlign: 'center',
        fontWeight: "bold"
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
    paragraph: {
        marginBottom: 10,
        lineHeight: 20,
        fontFamily: "aeoniktrial",
        color: 'gray'
    },
});
