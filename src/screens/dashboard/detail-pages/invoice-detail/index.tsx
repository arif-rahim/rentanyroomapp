import React, {useEffect,useState} from "react";
import { StyleSheet, ScrollView, View,ActivityIndicator,Text,Dimensions } from "react-native";
import DetailInformation from "./components/DetailInformation";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import Api from "../../../../ApiUrl";
import * as SecureStore from 'expo-secure-store';
const InvoiceDetailPage = (props) => {
    const [invoice, setInvoice] = useState();
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
    axios.get((Api.api_url)+"wp-json/jwt-auth/v1/listing/invoice_detail?invoice_id="+post_id+"&user_id="+global.userid )
        .then(res => {
            setInvoice(res.data);
     }) .catch(err => {console.log(err)});
     if(invoice){
    return (
        <SafeAreaView style={ styles.container }>
            <ScrollView>
                <DetailInformation data={invoice} />
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


export default InvoiceDetailPage;