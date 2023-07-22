import React, {useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { DataTable, List } from 'react-native-paper';
import Booking from './booking';
import Carousel from '../../../helper/Carousel';
import { dummyData } from '../../../data/Data';
import axios from "axios";
import Api from "../../../ApiUrl";
import * as SecureStore from 'expo-secure-store';
 
const Bookings = () => { 

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

        const [reserva, setReserva] = useState();
        axios.get((Api.api_url)+"wp-json/jwt-auth/v1/profile/rservation?user_id="+global.userid )
            .then(res => {
                setReserva(res.data);
            })
            .catch(err => {console.log(err)}); 
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
                            data={reserva}
                            component={Booking}
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
    );
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
    }
});


export default Bookings;