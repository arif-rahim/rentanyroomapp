import React, { useEffect,useRef, useState } from 'react';
import { View, Text, Modal, StyleSheet, Alert, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { dummyData } from '../data/Data'
import axios from "axios";
import Api from "../ApiUrl";

const { width, height } = Dimensions.get('window');

const SearchModal = ({ modalVisible = false, setModalVisible, navigation }) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState('');
    const [togo, setTogo] = useState('');
    const [arrive, setArrive] = useState('');
    const [depart, setDepart] = useState('');
    const [guests, setGuests] = useState('');
    useEffect(() => {
        const keyword = {
            keyword: ''
        };

        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/search/homey_half_map", keyword )
            .then(res => {
                //console.log(dummyData);
               // console.log(res);
                setIsLoaded(true);

            })
            .catch(err => {console.log(err)}); 
        
        // fetch("https://staging.webpenter.com/wp-json/wp/v2/listings?_embed")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             setIsLoaded(true);
        //             setItems(result);
        //         }, 
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             setIsLoaded(true);
        //             setError(error);
        //         }
        //     );
        
    }, []);

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
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
                            <FontAwesome name="search" style={{ left: 30 }} size={24} color="lightgrey" />
                            <TextInput style={styles.searchInput} placeholder='Where to go' onChangeText={(togo) => setTogo(togo)} />
                        </View>
                        <View style={[ styles.searchBox, styles.row ]}>
                            <FontAwesome name="calendar-o" style={{ left: 30 }} size={24} color="lightgrey" />
                            <TextInput style={[styles.searchInput, {width: width / 2.42}]} onChangeText={(arrive) => setArrive(arrive)} placeholder='Arrive' />
                            
                            <FontAwesome name="calendar-o" style={{ left: 30 }} size={24} color="lightgrey" />
                            <TextInput style={[styles.searchInput, {width: width / 2.42}]} onChangeText={(depart) => setDepart(depart)} placeholder='Depart' />
                        </View>
                        <View style={[ styles.searchBox, styles.row ]}>
                            <FontAwesome name="user-o" style={{ left: 30 }} size={24} color="lightgrey" />
                            <TextInput style={styles.searchInput} placeholder='Guests' onChangeText={(guests) => setGuests(guests)} />
                        </View>
                        <TouchableOpacity style={[ styles.button, styles.buttonStyle, { flexDirection: 'row' } ]}>
                            <FontAwesome name="sliders" style={{ marginRight: 8 }} size={24} color="lightgrey" />
                            <Text style={styles.buttonText}>Advanced</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.button ]} 
                            onPress={() => {
                                setModalVisible(!modalVisible); 
                                navigation.navigate('SearchResultPage', {
                                    listings: {keyword: togo,
                                        arrive: arrive,
                                        depart: depart,
                                        guest: guests,},
                                });
                        }}>  
                            <Text style={[ styles.buttonText, { color: 'white' } ]}>Search</Text>
                        </TouchableOpacity>
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
    }
});



export default SearchModal;