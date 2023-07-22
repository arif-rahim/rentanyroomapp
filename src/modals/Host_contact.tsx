import React, { useState,useEffect } from 'react';
import { View, Text, Modal, StyleSheet, Alert, TextInput, Dimensions, TouchableOpacity,ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Calendar from "react-native-calendar-range-picker";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import Api from "../ApiUrl";
import * as SecureStore from 'expo-secure-store';
import CalendarPicker from 'react-native-calendar-picker';
import Moment from 'moment';


const { width, height } = Dimensions.get('window');

const Host_contact = ({ modalVisible = false, setModalVisible, navigation,data }) => {
    
    const [loading, setisLoading] = useState(false);
    const [book_msg, setBookmsg] = useState('');
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [message, setMesg] = useState('');
    const [error, setError] = useState(false);
    
   
    const onSubmit = (post_data : any) => {
        setisLoading(true);
        const keyword = {
            phone: post_data.phone,
            listing_title: data.listing_title,
            target_email: data.data.author_mail,
            name: post_data.name,
            email: post_data.email,
            message: post_data.message,
            permalink: data.data.url,
        };
        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/host/host_contact", keyword )
            .then(res => {
                
                setBookmsg(res.data.message);
                if(res.data.success){setError(res.data.success);}
                setisLoading(false);
              

            })
            .catch(err => {console.log(err)});
    }

    


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
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Contact the host</Text>
                        <FontAwesome name="close" size={24} color="black" onPress={() => setModalVisible(!modalVisible)} /> 
                    </View>
                    <View style={styles.row}>
                        {error !=false ?
                        <Text style={{ color: 'green' }}>{error.msg} </Text> : 
                        <Text style={{ color: 'red' }}>{error.msg} </Text>
                    }
                    </View>
                    
                    <View style={styles.formFields}>
                        <View style={[ styles.searchBox, styles.row ]}>
                        <FontAwesome name="user-o" style={{ left: 30 }} size={24} color="lightgrey" />
                            {/* <TextInput value={start} style={[styles.searchInput]} placeholder='Arrive' onPressIn={() => {setVisible(true)}}  /> */}
                            <Controller
                                    control={control}
                                    rules={{}}
                                    
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Name"
                                            style={[styles.searchInput]}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={ value }
                                        />
                                    )}
                                    name="name"
                                    defaultValue=''
                                />
                        </View>
                        <View style={[ styles.searchBox, styles.row ]}>
                        <FontAwesome name="envelope" style={{ left: 30 }} size={24} color="lightgrey" />
                            {/* <TextInput value={end} style={[styles.searchInput]} placeholder='Depart' /> */}
                            <Controller
                                    control={control}
                                    rules={{}}
                                    
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Email"
                                            style={[styles.searchInput]}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={ value }
                                        />
                                    )}
                                    name="email"
                                    defaultValue=''
                                />
                        </View>
                        <View style={[ styles.searchBox, styles.row ]}>
                            <FontAwesome name="phone" style={{ left: 30 }} size={24} color="lightgrey" />
                            {/* <TextInput keyboardType='number-pad' style={styles.searchInput} placeholder='Guests' name="ok" /> */}
                            <Controller
                                    control={control}
                                    rules={{}}
                                    
                                    render={({ field: { onBlur, onChange, value } }) => (
                                        <TextInput
                                            placeholder="Phone"
                                            onBlur={onBlur}
                                            style={[styles.searchInput]}
                                            onChangeText={onChange}
                                            value={ value }
                                            keyboardType='number-pad'
                                        />
                                    )}
                                    name="phone"
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
                                            placeholder="Message"
                                            onBlur={onBlur}
                                            style={[styles.searchInput]}
                                            onChangeText={onChange}
                                            value={ value }
                                        />
                                    )}
                                    name="message"
                                    defaultValue=""
                                />
                        </View>
                        <TouchableOpacity style={[ styles.button ]} onPress={handleSubmit(onSubmit)}>
                            <Text style={[ styles.buttonText, { color: 'white', fontWeight: 'bold' } ]}>Submit</Text>
                        </TouchableOpacity> 
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



export default Host_contact;