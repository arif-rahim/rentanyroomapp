import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { DataTable } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
 
const DetailInformation = (item) => {
    const navigation = useNavigation();
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
                        <Text style={{ fontWeight: 'bold' }}>Invoice: </Text>
                        {item.data.invoice_id}
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>Date: </Text>
                        {item.data.publish_date}
                    </Text>
                </View>
            </View>

            <View style={styles.card}>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.title}>{item.data.invoice_company_name}</Text>
                    <Text style={styles.text}> {item.data.invoice_address}</Text>
                    
                </View>
                <View style={{ marginTop: 20, marginBottom: 10 }}>
                    <Text style={styles.title}>To:</Text>
                    <Text style={styles.text}>{item.data.fullname}</Text>
                    <Text style={styles.text}>Email: {item.data.user_email}</Text>
                    <Text style={styles.text}>Phone: {item.data.user_phone}</Text>
                </View>
            </View>

            <View style={styles.card}>
                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Detail</DataTable.Title>
                </DataTable.Header >

                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>{item.data.cost_day.price_per_night} {item.data.cost_day.price_per_night ? "x": ""}  {item.data.cost_day.no_of_days}  {item.data.cost_day.night_label}  </DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_day.nights_total_price}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>{item.data.cost_day.additional_guests} Additional Guest</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_day.guests_total_price}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Cleaning</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_day.cleaning_fee}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Security Deposite</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_day.security_deposit}</DataTable.Cell>
                </DataTable.Row>
            </View>

            <View style={styles.card}>
                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Extra Services</DataTable.Title>
                </DataTable.Header >

                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Service</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_day.services_fee}</DataTable.Cell>
                </DataTable.Row>
            </View>

            {/* <View style={styles.card}>
                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Sub Total</DataTable.Title>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}  numeric>$225</DataTable.Title>
                </DataTable.Header >

                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Service Fees</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>$45</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Taxes 20%</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>$54</DataTable.Cell>
                </DataTable.Row>
            </View> */}

            <View style={styles.card}>
                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Total</DataTable.Title>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}  numeric>{item.data.cost_day.upfront_price}</DataTable.Title>
                </DataTable.Header >
                {/* <DataTable.Row>
                    <View style={{ paddingTop: 10 }}>
                        <Text><FontAwesome name="info-circle" size={14} color="black" /> Balance due of $225.00 to pay locally to the host</Text>
                    </View>
                </DataTable.Row> */}
            </View>

            <View style={styles.card}>
                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Additional Information:</DataTable.Title>
                </DataTable.Header >

                <DataTable.Row>
                    <Text style={{ lineHeight: 20, marginTop: 10, marginBottom: 10 }}>
                    {item.data.additional_info}
                    </Text>
                </DataTable.Row>
            </View>
        </View>
    );
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
        resizeMode: 'cover'
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
    }
});


export default DetailInformation;