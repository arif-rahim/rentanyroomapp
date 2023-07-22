import React, { useState,useEffect } from 'react';
import { View, Text, Modal, StyleSheet, Alert, TextInput, Dimensions, TouchableOpacity,ActivityIndicator,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Calendar from "react-native-calendar-range-picker";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import Api from "../ApiUrl";
import * as SecureStore from 'expo-secure-store';
import CalendarPicker from 'react-native-calendar-picker';
import Moment from 'moment';


const { width, height } = Dimensions.get('window');

const Host_profile = ({ modaProfilelVisible = false, setModalProfileVisible, navigation,host_id }) => {
   
    const [items, setItems] = useState([]);
    const [spiner, setSpiner] = useState(true);
    const fetchData = () => {
        const post_data = {user_id: host_id};
      
        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/token/user_info", post_data )
            .then(res => {
                setItems(res.data);
                setSpiner(false);
               
            })
            .catch(err => {console.log(err);setSpiner(false);}); 
    }
   
    useEffect(() => {
            fetchData();
    }, []);
    if(spiner){
        return (
            <View style={styles.container}>
                <Modal
                animationType="slide"
                visible={modaProfilelVisible}
                onRequestClose={() => {
                    setModalProfileVisible(!modaProfilelVisible);
                }}
            >
                 <View style={styles.loader}>
                     <ActivityIndicator size="large" color="#0c9" />
                </View>

            </Modal>
               
            </View>
        );
    } else{

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                visible={modaProfilelVisible}
                onRequestClose={() => {
                    setModalProfileVisible(!modaProfilelVisible);
                }}
            >
                <View style={styles.form}>
                    <View style={styles.row}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Host Profile</Text>
                        <FontAwesome name="close" size={24} color="black" onPress={() => setModalProfileVisible(!modaProfilelVisible)} /> 
                    </View>
                    <View style={styles.container}>
                <Image
                    source={{uri:items.img_url}}
                    style={styles.avatar}
                />
                <Text style={styles.name}>{items.user?.user_nicename}</Text>
                <Text style={styles.position}>{items.user?.user_email}</Text>
                <Text style={styles.bio}>
                {items.meta?.description?items.meta?.description:items.author?.bio}
                </Text>
                <Text style={styles.contact}>Contact: {items.user?.phone}</Text>
                </View>
                    
                </View>
            </Modal>
        </View>
    );}
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
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
      },
      name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      position: {
        fontSize: 18,
        marginBottom: 10,
      },
      bio: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
      },
      contact: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
      },
      loader: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        width: Dimensions.get('window').width,
    },
   
});



export default Host_profile;