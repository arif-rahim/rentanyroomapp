import React,{useState,useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity,SafeAreaView,ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { DataTable, List } from 'react-native-paper';
import Invoice from './invoice';
import Carousel from '../../../../helper/Carousel';
import { dummyData } from '../../../../data/Data';
import axios from "axios";
import Api from "../../../../ApiUrl";
import * as SecureStore from 'expo-secure-store';

const Invoices = () => {
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
    const [userid, setUserId] = useState(); 
    const [invoices, setInvoices] = useState([]);
    const [spiner, setSpiner] = useState(true);
    const fetchData = () => {
        axios.get((Api.api_url)+"wp-json/jwt-auth/v1/listing/invoices?user_id="+global.userid )
        .then(res => { 
           
            setInvoices(res.data);
            setSpiner(false);
        })
        .catch(err => {console.log(err)}); 
    }
    useEffect(() => {
        fetchData();
    }, []);   
    if(invoices.length!= 0){

    return (
        <View style={styles.center}>
            <View style={styles.container}>
                <View style={{ height: 50 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, left: 20, top: 10 }}>My Invoices</Text>
                </View>

                <View style={{ width: Dimensions.get('screen').width - 20, height: 2, backgroundColor: '#eee' }} />

                <DataTable>
                    
                    <List.AccordionGroup>
                        <Carousel
                            data={invoices}
                            component={Invoice}
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
                {spiner && <ActivityIndicator color={"red"} />}
                    {spiner==false?<Text style={{fontSize:16,color:'red'}}>No result found</Text>:''}
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
        marginBottom: 20,
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


export default Invoices;