import { View, Text, SafeAreaView, ScrollView, Dimensions, Switch } from 'react-native'
import React, { useState } from 'react'
const { width, height } = Dimensions.get('screen');
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default function TicketAlert() {
    const [getNotified, setgetNotified] = useState(false)
    const [addAlert, setaddAlert] = useState(false)
    const [sliderValues, setSliderValues] = useState([0, 7500]);

    const handleSliderChange = (values) => {
        setSliderValues(values);
    };

    const handleNotified = () => {
        setgetNotified((prevToggleState) => !prevToggleState);
    };
    const handleAlert = () => {
        setaddAlert((prevToggleState) => !prevToggleState)
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ height: height, backgroundColor: '#f6f6f6' }}>
                    <View style={{ margin: 20 }}>
                        <View style={{ marginTop: 20, flexDirection: 'row', borderBottomWidth: 1, paddingBottom: 20, borderBottomColor: "lightgray" }}>
                            <Text style={{ fontSize: 17, color: "black", width: '60%', fontFamily: "Aeonik-Regular" }}>Get notified when tickets go on sale</Text>
                            <View style={{ width: '40%' }}>
                                <Switch
                                    value={getNotified} onValueChange={handleNotified}
                                    thumbColor={getNotified ? '#3369e7' : 'gray'}
                                    trackColor={"white"}
                                />
                            </View>
                        </View>

                        <View style={{ marginTop: 20, flexDirection: 'row' }}>
                            <Text style={{ fontSize: 17, color: "black", width: '60%', fontFamily: "Aeonik-Regular" }}>Add alerts for a certain ticket price</Text>
                            <View style={{ width: '40%' }}>
                                <Switch
                                    value={addAlert} onValueChange={handleAlert}
                                    thumbColor={addAlert ? '#3369e7' : 'gray'}
                                    trackColor={"white"}
                                />
                            </View>
                        </View>

                        <View style={{ marginTop: 40 }}>
                            <MultiSlider
                                values={sliderValues}
                                sliderLength={300}
                                onValuesChange={handleSliderChange}
                                min={0}
                                max={10000}
                                step={1}
                                allowOverlap={false}
                                snapped
                                selectedStyle={{
                                    backgroundColor: 'blue',
                                }}
                                markerStyle={{
                                    backgroundColor: 'white',
                                    width: 23,
                                    height: 23,
                                    borderRadius: 15,
                                    borderWidth: 1.5,
                                    borderColor: 'blue',
                                    marginTop: 35,

                                }}
                                trackStyle={{
                                    height: 5,
                                    borderRadius: 5,
                                }}
                                customMarker={(e) => {
                                    const valueText = `${e.currentValue.toFixed(0)}`;
                                    return (
                                        <View style={{ alignSelf: 'center' }}>
                                            <View style={e.markerStyle} />
                                            <Text style={{ color: 'black', backgroundColor: 'white', padding: 4, borderRadius: 2, borderWidth: 0.2, borderColor: "black", marginTop: 5, fontFamily: "Aeonik-Bold" }}>{valueText}</Text>
                                        </View>
                                    );
                                }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}