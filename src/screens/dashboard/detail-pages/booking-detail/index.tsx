import React, {useState, useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import DetailInformation from "./components/DetailInformation";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import Api from "../../../../ApiUrl";
import * as SecureStore from 'expo-secure-store';

const BookingDetailPage = (props ) => {
    const post_id= props.route.params.itemId;
    
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
    axios.get((Api.api_url)+"wp-json/jwt-auth/v1/profile/rservation_detail?reservation_detail="+ post_id+"&user_id="+global.userid )
        .then(res => {
            setReserva(res.data);
        })
        .catch(err => {console.log(err)});
    return (
        <SafeAreaView style={ styles.container }>
            <ScrollView>
                <DetailInformation data={reserva}/>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});


export default BookingDetailPage;