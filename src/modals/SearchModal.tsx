import React, { useEffect,useRef, useState } from 'react';
import { View, Text, Modal, StyleSheet, Alert, TextInput, Dimensions, TouchableOpacity,Platform,Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { dummyData } from '../data/Data'
import axios from "axios";
import Api from "../ApiUrl";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import Moment from 'moment';

const { width, height } = Dimensions.get('window');

const SearchModal = ({ modalVisible = false, setModalVisible, navigation }) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState('');
    const [togo, setTogo] = useState('');

    const [showFromPicker, setShowFromPicker] = useState(false);
    const [showToPicker, setShowToPicker] = useState(false);

    const [guests, setGuests] = useState('');
    const [arrive, setFromDate] = useState(new Date());
    const [depart, setToDate] = useState(new Date());
    const [checkstart, setStartcheck] = useState(false);
    const [checkend, setEndcheck] = useState(false);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [searchcity, setSearchCity] = useState([]);
    useEffect(() => {
            // axios.get((Api.api_url)+"wp-json/jwt-auth/v1/listing/listing_city" )
            // .then(resp => {
            //     //console.log(dummyData);
            //     console.log(resp.data.city);
            //    // setSearchCity(resp.data.city);

            // })
            // .catch(err => {console.log(err)}); 
        
        
        
    }, []);
    const [guestchange, setGuestchange] = useState('');
    const guest=''; 
    const [mode, setMode] = useState('date');
  
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        
      };
    
      const showMode = () => {
        setShow(true);
      };

      const showFromDatePicker = () => {
        setShowFromPicker(true);
      };
    
      const showToDatePicker = () => {
        setShowToPicker(true);
      };
    
      const handleFromDateChange = (event, selectedDate) => {
        
        const currentDate = selectedDate || Moment(arrive).format('YYYY-MM-DD'); 
        
        setShowFromPicker(false);
        setFromDate(currentDate);
      };
    
      const handleToDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || Moment(depart).format('YYYY-MM-DD');
        setShowToPicker(false);
        setToDate(currentDate);
      };
      const [selectedCity, setSelectedCity] = useState();
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    ///Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.form}>
                    <View style={styles.row}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Search</Text>
                        <FontAwesome name="close" size={24} color="black" onPress={() => setModalVisible(!modalVisible)} />
                    </View>
                    <View style={styles.formFields}>
                        <View style={[ styles.searchBox, styles.row ]}>
                        {/* <FontAwesome name="search" style={{ left: 30 }} size={24} color="lightgrey" />

                        <Picker
                            selectedValue={togo}
                            style={[styles.searchInput,{ height: 50, width: 250 }]}
                                // onValueChange={onChange}
                                onValueChange={(itemValue, itemIndex) => setTogo(itemValue)}
                                mode='dropdown'
                                itemStyle={{ color: 'red' }}
                                        >
                                <Picker.Item label="Where to go" value="" enabled={false} />
                                {searchcity.map((item, index) => {
        return (<Picker.Item label={item.name} value={item.slug} key={index}/>) 
    })}
                               
                                </Picker> */}
                            <FontAwesome name="search" style={{ left: 30 }} size={24} color="lightgrey" />
                            <TextInput style={styles.searchInput} placeholder='Where to go' onChangeText={(togo) => setTogo(togo)} />
                        </View>
                        <View style={[ styles.searchBox, styles.row ]}>
                            <FontAwesome name="calendar-o" style={{ left: 30 }} size={24} color="lightgrey" />
                            <TextInput style={[styles.searchInput, {width: width / 2.42}]} placeholder='Arrive' onPressIn={() => {showFromDatePicker()}}
                                            value={ arrive.toDateString() } />
                            
                            <FontAwesome name="calendar-o" style={{ left: 30 }} size={24} color="lightgrey" />
                            <TextInput style={[styles.searchInput, {width: width / 2.42}]} placeholder='Depart' onPressIn={() => {showToDatePicker()}}
                                            value={ depart.toDateString() }/>
                        </View>
                        <View style={[ styles.searchBox, styles.row ]}>
                            <FontAwesome name="user-o" style={{ left: 30 }} size={24} color="lightgrey" />
                            <TextInput style={styles.searchInput} placeholder='Guests' onChangeText={(guests) => setGuests(guests)} />
                        </View>
                        {/* <TouchableOpacity style={[ styles.button, styles.buttonStyle, { flexDirection: 'row' } ]}>
                            <FontAwesome name="sliders" style={{ marginRight: 8 }} size={24} color="lightgrey" />
                            <Text style={styles.buttonText}>Advanced</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity style={[ styles.button ]} 
                            onPress={() => {
                                setModalVisible(!modalVisible); 
                                
                                navigation.navigate('SearchResultPage', { 
                                    listings: {keyword: togo,
                                        arrive: Moment(arrive).format('YYYY-MM-DD'),
                                        depart: Moment(depart).format('YYYY-MM-DD'),
                                        guest: guests,
                                        check_act: true,},
                                });
                           
                        }}>   
                            <Text style={[ styles.buttonText, { color: 'white' } ]}>Search</Text>
                        </TouchableOpacity>
                        
                        
                    </View>
                </View>
                {showFromPicker && (
        <DateTimePicker
          testID="fromDateTimePicker"
          value={arrive}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleFromDateChange}
        />
      )}

      {showToPicker && (
        <DateTimePicker
          testID="toDateTimePicker"
          value={depart}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleToDateChange}
        />
      )}
            </Modal>
            {/* <Modal
                animationType="slide"
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible);
                }}
                
            >  */}
           
            {/* </Modal> */}
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
    }
});



export default SearchModal;