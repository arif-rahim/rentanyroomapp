import React, { useState,useEffect } from 'react';
import { View, Text, Modal, StyleSheet, Alert, TextInput, Dimensions, TouchableOpacity,ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import Api from "../ApiUrl";
import * as SecureStore from 'expo-secure-store';
import Moment from 'moment';


const { width, height } = Dimensions.get('window');

const RequestToBookModal = ({ modalVisible = false, setModalVisible, navigation,data,instant_booking,offsite_payment }) => {
    //console.log(instant_booking);
    const [selectedRange, setRange] = useState({});
    const [start, setStartDate] = useState('');
    const [end, setEndDate] = useState('');
    const [guestchange, setGuestchange] = useState('');
    const guest=''; 
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const endDate= selectedEndDate ? selectedEndDate : ''
    const startDate= selectedStartDate ? selectedStartDate : ''
    const onDateChange = (date, type) => {
      //function to handle the date change
      if (type === 'END_DATE') {
        setSelectedEndDate(date);
        setEndDate(Moment(date).format('YYYY-MM-DD'));
        const endD=Moment(date).format('YYYY-MM-DD');
        if(date !== '') {
            let n = new Date(endDate).getDate() - new Date(startDate).getDate()
            if(n != 0) {
                //get_data(start, endD,guest);
                setVisible(!visible);
            } else {
                Alert.alert('please choose another day')
            }
        }
        
      } else {
        //setSelectedEndDate(null);
        setSelectedStartDate(date);
        setStartDate(Moment(date).format('YYYY-MM-DD'))
      }
    };

    const [isLoading, setLoading] = useState(false);
    const [loading, setisLoading] = useState(false);
    const [book_msg, setBookmsg] = useState('');
    const listing_id=data;
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [visible, setVisible] = useState(false);
    const [message, setMesg] = useState('');
    const [error, setError] = useState(false);
    const [total_price, setBookprice] = useState('');
    
   
    const onSubmit = (data : any) => {
        setisLoading(true);
        const keyword = {
            user_id: global.userid,
            listing_id: listing_id,
            check_in_date: start,
            check_out_date: end,
            guest_message: data.guest_message,
            guests: data.guests
        };
        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/booking/booking_request", keyword )
            .then(res => {
                
                setBookmsg(res.data.message);
                if(res.data.success){setError(res.data.success);}
                setisLoading(false);
               console.log(res.data);

            })
            .catch(err => {console.log(err)});
    }

    

    function get_data(start:any ,end:any,guest:any): void{
     if(end)   {
        setGuestchange(guest);
        setLoading(true);
    axios.get((Api.api_url)+"wp-json/jwt-auth/v1/search/search_availability?listing_id="+data+"&check_in_date="+start+"&check_out_date="+end+"&guests=",guest )
    .then(res => {
        setLoading(false);
        console.log(res.data);
        if(res.data.booking_cost){setBookprice(res.data.booking_cost.total_price);}
        if(res.data.message){setMesg(res.data.message);}
        if(res.data.success){setError(res.data.success);}
        if(res.data.booking_check){setMesg(res.data.booking_check.message); setError(res.data.booking_check.success);}
        
    }).catch(err => {console.log(err)}); } }

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.form}>
                    <View style={styles.row}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Request to Book</Text>
                        <FontAwesome name="close" size={24} color="black" onPress={() => setModalVisible(!modalVisible)} /> 
                    </View>
                    <View style={styles.row}>
                        {error !=false ?
                        <Text style={{ color: 'green' }}>{message} </Text> : 
                        <Text style={{ color: 'red' }}>{message} </Text>
                    }
                    </View>
                    
                    <View style={styles.formFields}>
                        <View style={[ styles.searchBox, styles.row ]}>
                            <FontAwesome name="calendar-o" style={{ left: 30 }} size={24} color="lightgrey" />
                            {/* <TextInput value={start} style={[styles.searchInput]} placeholder='Arrive' onPressIn={() => {setVisible(true)}}  /> */}
                            <Controller
                                    control={control}
                                    rules={{}}
                                    
                                    render={() => (
                                        <TextInput
                                            placeholder="Arrive"
                                            style={[styles.searchInput]}
                                            onPressIn={() => {setVisible(true)}}
                                            value={ start }
                                        />
                                    )}
                                    name="check_in_date"
                                    defaultValue={start}
                                />
                        </View>
                        <View style={[ styles.searchBox, styles.row ]}>
                            <FontAwesome name="calendar-o" style={{ left: 30 }} size={24} color="lightgrey" />
                            {/* <TextInput value={end} style={[styles.searchInput]} placeholder='Depart' /> */}
                            <Controller
                                    control={control}
                                    rules={{}}
                                    
                                    render={() => (
                                        <TextInput
                                            placeholder="Depart"
                                            style={[styles.searchInput]}
                                            value={ end }
                                        />
                                    )}
                                    name="check_out_date"
                                    defaultValue={ end }
                                />
                        </View>
                        <View style={[ styles.searchBox, styles.row ]}>
                            <FontAwesome name="user-o" style={{ left: 30 }} size={24} color="lightgrey" />
                            {/* <TextInput keyboardType='number-pad' style={styles.searchInput} placeholder='Guests' name="ok" /> */}
                            <Controller
                                    control={control}
                                    rules={{}}
                                    
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Guests"
                                            onBlur={onBlur}
                                            style={{ ...styles.searchInput}}
                                            onChangeText={text => get_data(start,end,text)}
                                            value={ guestchange }
                                            keyboardType='number-pad'
                                        />
                                    )}
                                    name="guests"
                                    defaultValue=""
                                />
                        </View>
                        <View style={[ styles.searchBox, styles.row ]}>
                            {/* <TextInput multiline numberOfLines={4} style={[styles.searchInput, {left: 20}]} placeholder='' /> */}
                            <Controller
                                    control={control}
                                    rules={{}}
                                    
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Introduce yourself to the host"
                                            onBlur={onBlur}
                                            style={{ ...styles.searchInput,  ...{left: 20}}}
                                            onChangeText={onChange}
                                            value={ value }
                                        />
                                    )}
                                    name="guest_message"
                                    defaultValue=""
                                />
                        </View>
                        <View style={[ styles.searchBox, styles.row, {left: 0, marginTop: 30, marginBottom: 30} ]}>
                            <View style={{  }}>
                                <Text style={ styles.price }>Total</Text>
                                <Text style={{ color: 'grey' }}>Includes Taxes and fees</Text>
                            </View>
                            <View style={{  }}>
                            {isLoading ?
                            <View style={styles.loader}>
                                <ActivityIndicator size="large" color="#0c9" />
                                {/* <Text style={{fontSize:16,color:'red'}}>Loading Data...</Text> */}
                            </View> : <Text style={ styles.price }>${total_price}</Text>
                                }
                                
                                <Text style={{  }}>View details</Text>
                            </View>

                        </View>
                       {global.userid !=='' ?
                       instant_booking && offsite_payment == 0 ?
                       <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('InstantBookingForm',
                       { itemId: data,start: start,end: end,guestchange: guestchange}) }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Instant Booking</Text>
                        </TouchableOpacity> : <TouchableOpacity style={[ styles.button ]} onPress={handleSubmit(onSubmit)}>
                            <Text style={[ styles.buttonText, { color: 'white', fontWeight: 'bold' } ]}>Request to Book</Text>
                        </TouchableOpacity> :
                        <TouchableOpacity style={[ styles.button ]} onPress={() => navigation.navigate('Login')}
                        >
                        <Text style={[ styles.buttonText, { color: 'white', fontWeight: 'bold' } ]}>Request to Book</Text>
                    </TouchableOpacity>
                         }
                        <View style={styles.row}>
                        
                        {loading ?
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                </View> : <Text style={{ color: 'green' }}>{book_msg} </Text>
            }
                    </View>
                    </View>
                </View>
                
            </Modal>
            <Modal
                animationType="slide"
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible);
                }}
            >
              
            </Modal>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        padding: 20
    },
    formFields: {
        marginTop: 30
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    searchInput: {
        width: width - 40,
        height: 50,
        borderRadius: 6,
        borderColor: 'lightgrey',
        borderWidth: 1,
        paddingLeft: 40,
        paddingRight: 10
    },
    searchBox: {
        alignItems: 'center',
        right: 20,
        marginTop: 10
    },
    buttonText: {
        color: 'lightgrey'
    },
    button: {
        width: width - 40,
        height: 50,
        backgroundColor: '#f15e75',
        borderRadius: 6,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle: {
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 1
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    
  loader: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
},
});



export default RequestToBookModal;