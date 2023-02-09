import React, {useState, useEffect } from "react";
import { StyleSheet, ScrollView, View,ActivityIndicator,Dimensions,Text } from "react-native";
import DetailInformation from "./components/DetailInformation";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import Api from "../../../../ApiUrl";
import * as SecureStore from 'expo-secure-store';

const ReservationDetailPage = (props ) => {
    const [reserv, setReserv] = useState();
    const post_id= props.route.params.itemId;
    axios.get((Api.api_url)+"wp-json/jwt-auth/v1/profile/rservation_detail?reservation_detail="+post_id+"&user_id="+global.userid )
        .then(res => {
            setReserv(res.data);
     }) .catch(err => {console.log(err)});
     if(reserv){return (
        <SafeAreaView style={ styles.container }>
            <ScrollView>
                <DetailInformation data={reserv}/> 
            </ScrollView>
        </SafeAreaView>
    );}
    else{
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
    container: {
        flex: 1,
        alignItems: 'center'
    },
    
    loader: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: Dimensions.get('window').width,
  },
});


export default ReservationDetailPage;