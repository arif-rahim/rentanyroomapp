import React, { useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View, Text, Modal, Alert } from "react-native";
import { DataTable, List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import { dummyData } from "../../../../data/Data";
import Carousel from "../../../../helper/Carousel";
import Payout from "./Payout";

const Payouts = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.center}>
            <View style={styles.container}>
                <View style={{ height: 80, flexDirection: 'row', alignItems: 'center', left: 20 }}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={() => { navigation.goBack(); }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 24, left: 20 }}>Payouts</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={{ height: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>History</Text>
                    {/* <TouchableOpacity style={[styles.button, { backgroundColor: '#f15e75' }]} onPress={() => {}}>
                        <Text style={{ color: 'white' }}>Setup The Payment Method</Text>
                    </TouchableOpacity> */}
                </View>

                <View style={{ width: Dimensions.get('screen').width - 20, height: 2, backgroundColor: '#eee' }} />

                <DataTable>

                    <List.AccordionGroup>
                        <Carousel
                            data={dummyData}
                            component={Payout}
                            HeaderComponent={null}
                            horizontal={false}
                            pagingEnabled={false}
                            dotView={false}
                            spaceBetween={6}
                            customStyle={{
                                container: {
                                    marginBottom: 10
                                }
                            }}
                        />
                    </List.AccordionGroup>

                </DataTable>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        width: Dimensions.get('screen').width - 20,
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 5,
        marginTop: 10,
        paddingBottom: 6,
        marginBottom: 15
    },
    button: {
        borderRadius: 6,
        padding: 8,
        backgroundColor: '#54c4d9'
    },
    status: {
        backgroundColor: '#fcb900',
        borderRadius: 6,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2
    }
});

export default Payouts;