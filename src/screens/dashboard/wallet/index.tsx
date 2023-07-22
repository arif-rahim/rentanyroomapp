import React, { useState,useEffect } from "react";
import { StyleSheet, ScrollView, Dimensions, FlatList,View,ActivityIndicator,Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import Card         from "./components/Card";
import Table        from "./components/DataTable";
import Earnings     from "./components/Earnings";
import Payouts      from "./components/Payouts";
import PayoutForm   from "./components/PayoutForm";
import axios from "axios";
import Api from "../../../ApiUrl";
import * as SecureStore from 'expo-secure-store';

const WalletPage = () => {
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
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [wallet_item, setWallet_item] = useState([]);
    const fetchData = () => {
        axios.get((Api.api_url)+"wp-json/jwt-auth/v1/profile/wallet?user_id="+global.userid+"&limit=5" )
        .then(res => { 
           
            setWallet_item(res.data);
        })
        .catch(err => {console.log(err)}); 
    }
    useEffect(() => {
        fetchData();
    }, []);   
    if(wallet_item.length!= 0){
    return (
        <ScrollView
            style={{ width: Dimensions.get('screen').width }}
            contentContainerStyle={{ alignItems: 'center', backgroundColor: 'white' }}
        >
            <Card
                title='Total Earning'
                badge={true}
                description='Excluding the service fee, the host fee and the security deposit'
                buttonText='Details'
                numbers={wallet_item.total_earnings}
                onPress={() => navigation.navigate('EarningPage')} />

            <Card
                title='Available Balance'
                badge={false}
                description='Represents the available amount you can currently withdraw to your account'
                buttonText='Request A Payout'
                numbers={wallet_item.available_balance}
                onPress={() => setModalVisible(true)} />
 
            <Card
                title='Total Reservations'
                badge={false}
                description='Represents the total number of paid reservations you have received'
                buttonText='Manage'
                numbers={wallet_item.reservation_count}
                onPress={() => console.log('Total Reservations')} />

            <Table title="Earning" status={false} data={wallet_item.host_earnings} onPress={() => { navigation.navigate('EarningPage') }} />
            <Table title="Payout" status={true} data={wallet_item.payouts} onPress={() => { navigation.navigate('PayoutPage') }} />

            <PayoutForm modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </ScrollView>

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

const EarningPage = () => {
    return (
        <SafeAreaView>
            <FlatList
                data={null}
                renderItem={null}
                ListEmptyComponent={Earnings}
            />
        </SafeAreaView>
    );
}

const PayoutPage = () => {
    const [payout_item, setPayout_item] = useState([]);
    useEffect(() => {
        axios.get((Api.api_url)+"wp-json/jwt-auth/v1/profile/wallet?user_id="+global.userid )
            .then(res => { 
               
                setPayout_item(res.data.payouts);
            })
            .catch(err => {console.log(err)}); 
    }, []);   
    if(payout_item.length!= 0){
    return (
        <SafeAreaView>
            <FlatList
                data={payout_item}
                renderItem={null}
                ListEmptyComponent={Payouts}
            />
        </SafeAreaView>
    );} else{
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
        
    },
    
    loader: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: Dimensions.get('window').width,
  },
});


export default WalletPage;
export {EarningPage, PayoutPage};