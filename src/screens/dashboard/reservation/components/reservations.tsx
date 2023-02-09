import React, {useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity,SafeAreaView,ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { DataTable, List } from 'react-native-paper';
import Reservation_list from './reservationList';
import Carousel from '../../../../helper/Carousel';
import { dummyData } from '../../../../data/Data';
import axios from "axios";
import Api from "../../../../ApiUrl";
import * as SecureStore from 'expo-secure-store';
const Reservations = () => { 
    
    const [userid, setUserId] = useState(); 
    const [reserv, setReserva] = useState([]);
    useEffect(() => {
        axios.get((Api.api_url)+"wp-json/jwt-auth/v1/profile/rservation?user_id="+global.userid )
            .then(res => { 
               
                setReserva(res.data);
            })
            .catch(err => {console.log(err)}); 
    }, []);   
    if(reserv.length!= 0){
    return (
        
        <View style={styles.center}>
            <View style={styles.container}>
                <View style={{ height: 80 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, left: 20, top: 10 }}>My Reservations</Text>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ color: '#f15e75', bottom: 10, right: 20 }}>View All  <FontAwesome name="arrow-circle-right" size={14} color="#f15e75" /></Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: Dimensions.get('screen').width - 20, height: 2, backgroundColor: '#eee' }} />
                
                <DataTable> 
                    
                    <List.AccordionGroup>
                        <Carousel
                            data={reserv}
                            component={Reservation_list}
                            HeaderComponent={null}
                            horizontal={false}
                            pagingEnabled={false}
                            dotView={false}
                            spaceBetween={6}
                            customStyle={{
                                container: {
                                    marginBottom: 10
                                }
                            }}
                        />
                    </List.AccordionGroup>

                </DataTable> 
            </View> 
        </View>
       


    );}else{
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{fontSize:16,color:'red'}}>Loading ...</Text>
                </View>
            </SafeAreaView>
        );}
}


const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        width: Dimensions.get('screen').width - 20,
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 5,
        marginTop: 10,
        paddingBottom: 6
    },
    button: {
        borderRadius: 10,
        padding: 8,
        backgroundColor: '#54c4d9'
    },
    status: {
        backgroundColor: '#fcb900',
        borderRadius: 6,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2
    },
    
    loader: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: Dimensions.get('window').width,
  },
});


export default Reservations;