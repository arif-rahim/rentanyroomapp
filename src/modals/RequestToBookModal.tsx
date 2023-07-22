import React, { useState,useEffect } from 'react';
import { View, Text, Modal, StyleSheet,Button, Alert, TextInput, Dimensions, TouchableOpacity,ActivityIndicator,Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from "axios";
import Api from "../ApiUrl";
import * as SecureStore from 'expo-secure-store';
import Moment from 'moment';


const { width, height } = Dimensions.get('window');

async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: 'You have a new reservation from',
      body: global.username,
      data: { someData: 1 },
    };
  
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    
  }

const RequestToBookModal = ({ modalVisible = false, setModalVisible, navigation,device_token,list_data,data,instant_booking,offsite_payment}) => {
    //console.log(instant_booking);
    const [selectedRange, setRange] = useState({});
    const [guestchange, setGuestchange] = useState('');
    const guest=''; 
    const [showFromPicker, setShowFromPicker] = useState(false);
    const [showToPicker, setShowToPicker] = useState(false);
    const [start, setFromDate] = useState(new Date());
    const [end, setToDate] = useState(new Date());
  

    const [isLoading, setLoading] = useState(false);
    const [loading, setisLoading] = useState(false);
    const [book_msg, setBookmsg] = useState('');
    const listing_id=data;
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [visible, setVisible] = useState(false);
    const [message, setMesg] = useState('');
    const [error, setError] = useState(false);
    const [total_price, setBookprice] = useState('');
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
   
    const onSubmit = (data : any) => {
        setisLoading(true);
       
        const keyword = {
            user_id: global.userid,
            listing_id: listing_id,
            check_in_date: start,
            check_out_date: end,
            guest_message: data.guest_message,
            guests: guestchange
        };
       
        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/booking/booking_request", keyword )
            .then(res => {
                
                setBookmsg(res.data.message);
                if(res.data.success){setError(res.data.success); }
                sendPushNotification(device_token);

                setisLoading(false);

            })
            .catch(err => {console.log(err)});
    }

    

    function get_data(start:any ,end:any,guest:any): void{
       
     if(end)   {
        setMesg('');
        setBookprice('');
        setGuestchange(guest);
        setLoading(true);
    axios.get((Api.api_url)+"wp-json/jwt-auth/v1/search/search_availability?listing_id="+data+"&check_in_date="+start+"&check_out_date="+end+"&guests=",guest )
    .then(res => {
        setLoading(false);
        if(res.data.booking_cost){setBookprice(res.data.booking_cost.total_price);}
        if(res.data.message){setMesg(res.data.message);}
        if(res.data.success){setError(res.data.success);}
        if(res.data.booking_check){setMesg(res.data.booking_check.message); setError(res.data.booking_check.success);}
        
    }).catch(err => {console.log(err)}); } }

//     const [mydate, setDate1] = useState(new Date());
//    const [displaymode, setMode1] = useState('time');
//    const [isDisplayDate, setShow1] = useState(false);
//    const changeSelectedDate = (event, selectedDate) => {
//       const currentDate = selectedDate || mydate;
//       setDate1(currentDate);
//       setShow1(false);
//    };
//    const showMode1 = (currentMode) => {
//     setShow1(true);
//       setMode1(currentMode);
     
//    };
//     const displayTimepicker = () => { 
//         showMode1('date');
//      };



  const showFromDatePicker = () => {
    setShowFromPicker(true);
  };

  const showToDatePicker = () => {
   
    setShowToPicker(true);
  };

  const handleFromDateChange = (event, selectedDate) => {
    
    const currentDate = selectedDate; 
    setFromDate(currentDate);
    setShowFromPicker(false);
    
  };

  const handleToDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    
    setToDate(currentDate);
    get_data(Moment(start).format('YYYY-MM-DD'),Moment(currentDate).format('YYYY-MM-DD'),guest);
    setShowToPicker(false);
  }; 


  
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
                                            onPressIn={() => {showFromDatePicker()}}
                                           
                                            value={ start.toDateString() }
                                        />
                                    )}
                                    name="check_in_date" 
                                    defaultValue=''
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
                                            onPressIn={() => {showToDatePicker()}}
                                            value={ end.toDateString() }
                                        />
                                    )}
                                    name="check_out_date"
                                    defaultValue=''
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
                            </View> : <Text style={ styles.price }>{total_price}</Text>
                                }
                                
                                <Text style={{  }}>View details</Text>
                            </View>
 
                        </View>
                       {global.userid !=='' ?   
                       instant_booking == 1 && offsite_payment == 0 ?
                       <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('InstantBookingForm',
                       {list_data:list_data, itemId: data,start: start,end: end,guestchange: guestchange,total_price: total_price}) }}>
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
                   
                    {/* <TouchableOpacity
        onPress={() =>}>
        <Text>Hello Date</Text>
      </TouchableOpacity> */}
                    </View>


                </View>
                {showFromPicker && (
        <DateTimePicker
          testID="fromDateTimePicker"
          value={start}
          minimumDate={new Date()}
          mode="date"
          display="default"
          onChange={handleFromDateChange}
        />
      )}

      {showToPicker && (
        <DateTimePicker
          testID="toDateTimePicker"
          value={end}
          minimumDate={start ? new Date(start) : end ? new Date(start) : undefined}
          mode="date"
          display="default"
          onChange={handleToDateChange}
        />
      )}

      {/* Render the selected dates */}
      
              
                
              {/* {isDisplayDate &&  <DateTimePicker 
           value={date}
           mode={'date'}
           minimumDate={checkstart ? new Date(start) : checkend ? new Date(start) : undefined}
           display={Platform.OS === 'ios' ? 'spinner' : 'default'}
           is24Hour={true}
           onChange={onChange}
         /> } */}
 
            </Modal>
            {/* <Modal
                animationType="slide"
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible);
                }}
                style={{backgroundColor: '#f15e75' }}
            > 
          <Text style={[ styles.buttonText, { color: 'black', fontWeight: 'bold' } ]}>Request to Book</Text>
          <DateTimePicker 
           value={date}
           mode={'date'}
           minimumDate={checkstart ? new Date(start) : checkend ? new Date(start) : undefined}
           display={Platform.OS === 'ios' ? 'spinner' : 'default'}
           is24Hour={true}
           onChange={onChange}
         />  
              
            </Modal> */}
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