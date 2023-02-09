import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React,{useEffect,useState} from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { DataTable } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from 'expo-secure-store';

const DetailInformation = (item) => {
    const navigation = useNavigation();
    const [userrole, setUserrole] = useState();
    useEffect(() => {
        const bootstrapAsync = async () => {
            let fetchData: any;
            try {
                fetchData = await SecureStore.getItemAsync('userrole');
                setUserrole(fetchData);
            } catch (e) {
            }
    
    
        };
        bootstrapAsync();
      }, []); 
      
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
                        <Text style={{ fontWeight: 'bold' }}>Reservation ID: </Text>
                        {item.data.reservation_id}
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>Date: </Text>
                        {item.data.date}
                    </Text>
                </View>
            </View>

            <View style={[styles.card, styles.row]}>
                <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>Listing: </Text>
                        {item.data.listing}
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>From: </Text>
                        {item.data.display_name}
                    </Text>
                </View>
            </View>

            <View style={styles.card}>
                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Earnings</DataTable.Title>
                </DataTable.Header >

                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>{item.data.cost_wallet.price_per} X {item.data.cost_wallet.no_of_days} {item.data.cost_wallet.night_label}</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_wallet.price_count}</DataTable.Cell>
                </DataTable.Row>
                {item.data.cost_wallet.security_deposit !='$0.00' ? 
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Security Deposit</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_wallet.security_deposit}</DataTable.Cell>
                </DataTable.Row> : ''}
                {item.data.cost_wallet.cleaning_fee !='$0.00' ? 
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Cleaning Fee</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_wallet.cleaning_fee}</DataTable.Cell>
                </DataTable.Row> : ''}
                {item.data.cost_wallet.services_fee !='$0.00' && userrole!='homey_host' ? 
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Services Fee</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_wallet.services_fee}</DataTable.Cell>
                </DataTable.Row> : ''}
                {item.data.cost_wallet.taxes !='$0.00' ? 
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Taxes</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_wallet.taxes}</DataTable.Cell>
                </DataTable.Row> : ''}
                {item.data.cost_wallet.city_fee !='$0.00' ? 
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>City Fee</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_wallet.city_fee}</DataTable.Cell>
                </DataTable.Row> : ''}
                {item.data.cost_wallet.additional_guests_price !='$0.00' ? 
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>{item.data.cost_wallet.additional_guests} {item.data.cost_wallet.add_guest_label} {item.data.cost_wallet.additional_guests_price}</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_wallet.additional_guests_total_price}</DataTable.Cell>
                </DataTable.Row> : ''}
            {/* </View>

            <View style={styles.card}> */}
                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Gross Pyment</DataTable.Title>
                </DataTable.Header >

                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Total Amount</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.total_amount}</DataTable.Cell>
                </DataTable.Row>
            {/* </View>

            <View style={styles.card}> */}

                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Paid</DataTable.Title>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.upfront_payment}</DataTable.Cell>
                </DataTable.Header >
                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Fess</DataTable.Title>
                </DataTable.Header >

                {/* <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Service Fee</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>- $45</DataTable.Cell>
                </DataTable.Row> */}
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Host Fee ({item.data.host_fee_percent}%)</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>- {item.data.host_fee}</DataTable.Cell>
                </DataTable.Row>
            {/* </View>

            <View style={styles.card}> */}
                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Net Earnings</DataTable.Title>
                </DataTable.Header >

                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Total Amount</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.net_earnings}</DataTable.Cell>
                </DataTable.Row>
            </View>

            <View style={styles.card}>
                {/* <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Payout</DataTable.Title>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }} numeric>{item.data.upfront_payment}</DataTable.Title>
                </DataTable.Header > */}
                {/* <DataTable.Row>
                    <View style={{ paddingTop: 10 }}>
                        <Text><FontAwesome name="info-circle" size={14} color="black" /> Balance due of $225.00 to pay locally to the host</Text>
                    </View>
                </DataTable.Row> */}
            </View>

            {/* <View style={styles.card}>
                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Additional Information:</DataTable.Title>
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
            </View> */}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 15
    },
    logo: {
        width: 120,
        height: 50,
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