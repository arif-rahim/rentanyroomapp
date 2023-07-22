import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, {useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity,Button } from "react-native";
import { DataTable } from "react-native-paper";
import axios from "axios";
import Api from "../../../../../ApiUrl";
import * as SecureStore from 'expo-secure-store';
import { useForm, Controller } from 'react-hook-form';

const DetailInformation = (item) => {
    useEffect(() => {
        const bootstrapAsync = async () => {
          let fetchData: any;
          let fetchname: any;
          try {
              fetchData = await SecureStore.getItemAsync('userid');
              global.userid = fetchData;
              fetchname = await SecureStore.getItemAsync('username');
              global.username= fetchname;
          } catch (e) {
          }
    
    
      };
      bootstrapAsync();
    }, [ ]); 
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data : any) => {
        const keyword = {
            user_id: global.userid,
            reservation_id: item.data.reservationID,
        };console.log(keyword);
        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/profile/confirm_reservation", keyword )
            .then(res => {
               console.log(res.data);
            })
            .catch(err => {console.log(err)});
    }

    const onDecline = (data : any) => {
        const keyword = {
            user_id: global.userid,
            reservation_id: item.data.reservationID,
        };console.log(keyword);
        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/profile/decline_reservation", keyword )
            .then(res => {
               console.log(res.data);
            })
            .catch(err => {console.log(err)});
    }
    const onCancel = (data : any) => {
        const keyword = {
            user_id: global.userid,
            reservation_id: item.data.reservationID,
        };console.log(keyword);
        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/profile/decline_reservation", keyword )
            .then(res => {
               console.log(res.data);
            })
            .catch(err => {console.log(err)});
    }
    const onMark_Paid = (data : any) => {
        const keyword = {
            user_id: global.userid,
            reservation_id: item.data.reservationID,
        };console.log(keyword);
        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/reservations/reservation_mark_paid", keyword )
            .then(res => {
               console.log(res.data);
            })
            .catch(err => {console.log(err)});
    }
    
   //console.log(item.data.action);
    
    return (
       
        <View style={styles.container}>
            <View style={[styles.card, styles.row, styles.align]}>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={() => { navigation.goBack(); }} />
                <View style={{}}>
                    <Image
                        style={styles.logo}
                        source={{uri:global.site_logo}} />
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
                {item.data.cost_day.taxes ?
                <DataTable.Row>
                    <DataTable.Cell textStyle={{}}>Taxes 20%</DataTable.Cell>
                    <DataTable.Cell textStyle={{}} numeric>{item.data.cost_day.taxes}</DataTable.Cell>
                </DataTable.Row>: ""}

                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Total</DataTable.Title>
                    <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 18 }}  numeric>${item.data.cost_day.upfront_payment}</DataTable.Title>
                </DataTable.Header >
                <DataTable.Row>
                    <View style={{ paddingTop: 10 }}>
                        <Text><FontAwesome name="info-circle" size={14} color="black" /> Balance due of ${item.data.cost_day.upfront_payment} to pay locally to the host</Text>
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

            <View  style={[ styles.card, { flexDirection: 'row',alignItems: 'center',
        justifyContent: 'center',flex: 1, }]}>
            
            {item.data.action=='guest_under_review'?
             <View>
            <Text style={[styles.hashText,{ color: '#85c341'}] }>Submitted</Text>
            <TouchableOpacity style={[ styles.button, { backgroundColor: '#949ca5' } ]} onPress={handleSubmit(onCancel)}>
                <Text style={ styles.buttonText }>Cancel</Text>
                </TouchableOpacity></View>:''}
                {item.data.action=='guest_available'?
             <View>
<TouchableOpacity style={[ styles.button, { backgroundColor: '#85c341' } ]} onPress={handleSubmit(onSubmit)}><Text style={ styles.buttonText }>Pay Now</Text></TouchableOpacity>       
<TouchableOpacity style={[ styles.button, { backgroundColor: '#949ca5' } ]} onPress={handleSubmit(onCancel)}><Text style={ styles.buttonText }>Cancel</Text></TouchableOpacity></View>:''} 
{item.data.action=='guest_booked'?
             <View>
 <Text style={[styles.hashText,{ color: '#85c341'}] }>Booked</Text>
 <TouchableOpacity style={[ styles.button, { backgroundColor: '#949ca5' } ]} onPress={handleSubmit(onCancel)}><Text style={ styles.buttonText }>Cancel</Text></TouchableOpacity></View>:''}
 {item.data.action=='guest_waiting_host_payment'?
             <View>
 <Text style={[styles.hashText,{ color: '#000'}] }>Waiting Approval</Text></View>:''}
 {item.data.action=='under_review_offsite_payment'?
             <View>
  <TouchableOpacity style={[ styles.button, { backgroundColor: '#85c341' } ]} onPress={handleSubmit(onSubmit)}><Text style={ styles.buttonText }>Confirm Availability</Text></TouchableOpacity>
  <TouchableOpacity style={[ styles.button, { backgroundColor: '#949ca5' } ]} onPress={handleSubmit(onDecline)}><Text style={ styles.buttonText }>Decline</Text></TouchableOpacity>
  </View>:  <View>
   </View>
}
{item.data.action=='under_review_instant_payment'?
             <View>
  <TouchableOpacity style={[ styles.button, { backgroundColor: '#85c341' } ]} onPress={handleSubmit(onSubmit)}><Text style={ styles.buttonText }>Confirm Availability</Text></TouchableOpacity>
   <TouchableOpacity style={[ styles.button, { backgroundColor: '#949ca5' } ]} onPress={handleSubmit(onDecline)}><Text style={ styles.buttonText }>Decline</Text></TouchableOpacity>
  </View>:  <View>
   </View>
}
{item.data.action=='available'?
             <View>
   <Text style={[styles.hashText,{ color: '#85c341'}] }>Available</Text>             
  <TouchableOpacity style={[ styles.button, { backgroundColor: '#949ca5' } ]} onPress={handleSubmit(onDecline)}><Text style={ styles.buttonText }>Decline</Text></TouchableOpacity>
  </View>:  <View>
  </View>
}
{item.data.action=='booked'?
             <View  style={{ flexDirection: "row" ,marginLeft: 0, justifyContent: 'space-evenly'}}>
   <Text style={[styles.hashText,{ color: '#85c341'}] }>Booked</Text>             
   <TouchableOpacity style={[ styles.button, { backgroundColor: '#949ca5' } ]} onPress={handleSubmit(onCancel)}><Text style={ styles.buttonText }>Cancel</Text></TouchableOpacity>
  </View>:  <View>
  </View>
}
{item.data.action=='waiting_host_payment_verification'?
             <View>
   <TouchableOpacity style={[ styles.button, { backgroundColor: '#85c341' } ]} onPress={handleSubmit(onMark_Paid)}><Text style={ styles.buttonText }>Payment Received? Mark as Paid</Text></TouchableOpacity>
  </View>:  <View>
  </View>
}
{item.data.action=='declined'?
             <View>
<Text style={[styles.hashText,{ color: 'red'}] }>Declined</Text>
  </View>:  <View>
  </View>
}
{item.data.action=='listing_guestunder_review'?
             <View>
<TouchableOpacity style={[ styles.button, { backgroundColor: '#85c341' } ]} onPress={handleSubmit(onSubmit)}><Text style={ styles.buttonText }>Extra Expenses</Text></TouchableOpacity>
<TouchableOpacity style={[ styles.button, { backgroundColor: '#85c341' } ]} onPress={handleSubmit(onSubmit)}><Text style={ styles.buttonText }>Discount</Text></TouchableOpacity>
  </View>:  <View>
  </View>
}
                     
                {/* <TouchableOpacity style={[ styles.button, { backgroundColor: '#85c341' } ]} onPress={handleSubmit(onSubmit)}>
                    <Text style={ styles.buttonText }>Confirm Availability</Text>
                </TouchableOpacity> */}
 
                {/* <TouchableOpacity style={[ styles.button, { backgroundColor: '#949ca5' } ]}>
                    <Text style={ styles.buttonText }>Decline</Text>
                </TouchableOpacity> */}
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
    buttonContainer: {
        flex: 1,
    },
    logo: {
        height: 50,
        width: 120,
        resizeMode: 'contain',

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
        width: 80, 
        height: 80,
        borderRadius: 50,
        backgroundColor: 'green',
        position: 'absolute',
        top: 15,
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
    },
    
    hashText: {
        
        width: Dimensions.get('screen').width / 2.5,
        marginRight:5,
    borderWidth:1,
    borderColor:'black',
     paddingLeft:50,
        paddingTop:10,
        paddingBottom:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    }
});


export default DetailInformation;