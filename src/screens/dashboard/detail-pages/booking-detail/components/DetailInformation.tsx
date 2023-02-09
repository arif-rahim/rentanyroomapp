import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, {useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { DataTable } from "react-native-paper";
import axios from "axios";
import Api from "../../../../../ApiUrl";
import * as SecureStore from 'expo-secure-store';


const DetailInformation = (item) => {
    const navigation = useNavigation();
    console.log(item.data);
    
    return (
       
        <View style={styles.container}>
            <View style={[styles.card, styles.row, styles.align]}>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={() => { navigation.goBack(); }} />
                <View style={{}}>
                    <Image
                        style={styles.logo}
                        source={
                            require('../../../../../assets/images/logo.png')
                        } />
                </View>
                <View style={{}}>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>Reservation:  </Text>
                        #{item.data.reservationID}
                    </Text>
                    <View style={[styles.status, { marginTop: 4 }]}>
                        <Text style={{ color: 'white', fontSize: 12 }}>{item.data.reservation_status}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.card}>

                <Image style={ styles.avatar } source={{
                    uri: item.data.renter_photo
                }} />

                <View style={ styles.personalDetail }>
                    <Text style={styles.title}>Date: </Text>
                    <Text style={styles.text}>{item.data.month_names}</Text>
                </View>
                <View style={ styles.personalDetail }>
                    <Text style={styles.title}>From: </Text>
                    <Text style={styles.text}>{item.data.renter_name}</Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.text}>{item.data.title}</Text>
                </View>  
            </View>

            <View style={styles.card}>
                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Details</DataTable.Title>
                </DataTable.Header >

                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Chech In: </DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.check_in_simple}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Check Out: </DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.check_out_simple}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Nights: </DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.no_of_days}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Guests: </DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.guests}</DataTable.Cell>
                </DataTable.Row>
                {item.data.additional_guests ? 
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Additional Guests: </DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.additional_guests}</DataTable.Cell>
                </DataTable.Row> : ""}
            {/* </View>

            <View style={styles.card}> */}
                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Payment</DataTable.Title>
                </DataTable.Header >

                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>{item.data.cost_day.price_per_night} {item.data.cost_day.price_per_night ? "x": ""}  {item.data.no_of_days} Nights</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_day.nights_total_price}</DataTable.Cell>
                </DataTable.Row>
                {item.data.cost_day.additional_guests ?
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}> {item.data.cost_day.additional_guests} Additional Guest</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_day.guests_total_price}</DataTable.Cell>
                </DataTable.Row> : ""}
                {item.data.cost_day.cleaning_fee ?
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Cleaning</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_day.cleaning_fee}</DataTable.Cell>
                </DataTable.Row>: ""}
                {item.data.cost_day.city_fee ?
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>City fee</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_day.city_fee}</DataTable.Cell>
                </DataTable.Row>: ""}
                {item.data.cost_day.security_deposit ?
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Security Deposite</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_day.security_deposit}</DataTable.Cell>
                </DataTable.Row>: ""}
                {item.data.cost_day.services_fee ?
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Service fees</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_day.services_fee}</DataTable.Cell>
                </DataTable.Row>: ""}

                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Total</DataTable.Title>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}  numeric>{item.data.cost_day.upfront_price}</DataTable.Title>
                </DataTable.Header >
                <DataTable.Row>
                    <View style={{ paddingTop: 10 }}>
                        <Text><FontAwesome name="info-circle" size={14} color="black" /> Balance due of $225.00 to pay locally to the host</Text>
                    </View>
                </DataTable.Row>
            </View>

            <View style={styles.card}>
                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Note:</DataTable.Title>
                </DataTable.Header >

                <DataTable.Row>
                    <Text style={{ lineHeight: 20, marginTop: 10, marginBottom: 10 }}>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </DataTable.Row>
            </View>

            <View  style={[ styles.card, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                <TouchableOpacity style={[ styles.button, { backgroundColor: '#85c341' } ]}>
                    <Text style={ styles.buttonText }>Confirm Availability</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[ styles.button, { backgroundColor: '#949ca5' } ]}>
                    <Text style={ styles.buttonText }>Decline</Text>
                </TouchableOpacity>
            </View>
        </View> 
    ) ;
}


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 20
    },
    logo: {
        height: 50,
        width: 120,
        resizeMode: 'cover',
    },
    row: {
        flexDirection: 'row'
    },
    align: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    card: {
        width: Dimensions.get('screen').width - 40,
        backgroundColor: 'white',
        marginTop: 20,
        padding: 10,
        borderRadius: 8,
        elevation: 6
    },
    title: {
        fontWeight: 'bold'
    },
    text: {
        textAlign: 'left',
        lineHeight: 20
    },
    status: {
        backgroundColor: '#fcb900',
        borderRadius: 6,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2,
        alignItems: 'center'
    },
    personalDetail: { 
        marginTop: 10,
        flexDirection: 'row'
    },
    avatar: { 
        width: 100, 
        height: 100,
        borderRadius: 50,
        backgroundColor: 'green',
        position: 'absolute',
        top: 40,
        right: 20
    },
    button: {
        width: Dimensions.get('screen').width / 2.5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});


export default DetailInformation;