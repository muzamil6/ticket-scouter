import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
const { width, height } = Dimensions.get('screen');
import circle1 from '../../assets/CardImages/cardCircle.png'
import circle2 from '../../assets/CardImages/cardCircle2.png'
import cardImage from '../../assets/CardImages/mastercard.png'
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native';
export default function YourCard() {
    const [activeCard, setactiveCard] = useState("")
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ height: height / 1.195, backgroundColor: "#f6f6f6", justifyContent: 'space-between' }}>
                    <View style={{ margin: 20 }}>
                        <View style={{ backgroundColor: "#4040AD", height: 200, borderRadius: 15, padding: 20, justifyContent: 'space-between' }}>
                            <Image source={circle1} style={{ position: 'absolute', left: 0, bottom: 0 }} />
                            <Image source={circle2} style={{ position: 'absolute', right: 0, top: 0 }} />

                            <View style={{ alignSelf: 'flex-end' }}>
                                <Text style={{ color: 'white', fontSize: 20 }}>VISA</Text>
                                <View style={{ alignSelf: 'flex-end' }}>
                                    <Text style={{ color: 'white', fontSize: 10 }}>Debit</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'white', fontFamily: "Plus" }}>9865 3567 4563 4235</Text>
                                <Text style={{ color: 'white', fontFamily: "Plus" }}>12/24</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 20, flexDirection: 'row', gap: 10 }}>
                            {
                                activeCard == "visa" ?
                                    <Icon2 color={'blue'} name='checkcircle' size={30} onPress={() => setactiveCard("")} />
                                    :
                                    <Icon color={'lightgray'} name='circle-thin' size={30} onPress={() => setactiveCard("visa")} />
                            }
                            <Text style={{ fontSize: 17, marginTop: 3, color: 'gray', fontFamily: "Plus" }}>Use as default payment method</Text>
                        </View>

                        <View style={{ backgroundColor: "#171725", height: 200, borderRadius: 15, padding: 20, justifyContent: 'space-between', marginTop: 20 }}>
                            <Image source={circle1} style={{ position: 'absolute', left: 0, bottom: 0 }} />
                            <Image source={circle2} style={{ position: 'absolute', right: 0, top: 0 }} />

                            <View style={{ alignSelf: 'flex-end' }}>
                                <Image source={cardImage} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'white', fontFamily: "Plus" }}>5294 2436 4780 9568</Text>
                                <Text style={{ color: 'white', fontFamily: "Plus" }}>12/24</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 20, flexDirection: 'row', gap: 10 }}>
                            {
                                activeCard == "master" ?
                                    <Icon2 color={'blue'} name='checkcircle' size={30} onPress={() => setactiveCard("")} />
                                    :
                                    <Icon color={'lightgray'} name='circle-thin' size={30} onPress={() => setactiveCard("master")} />
                            }
                            <Text style={{ fontSize: 17, marginTop: 3, color: 'gray', fontFamily: "Plus" }}>Use as default payment method</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 5, alignSelf: 'flex-end' }}>
                        <View style={{ backgroundColor: '#355FE5', alignSelf: 'flex-start', padding: 18, borderRadius: 40 }}>
                            <Icon2 name='plus' size={30} color={'white'} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}