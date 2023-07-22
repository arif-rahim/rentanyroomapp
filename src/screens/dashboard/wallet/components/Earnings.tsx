import React, { useState,useEffect } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View, Text, Modal, Alert,ActivityIndicator } from "react-native";
import { DataTable, List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Earning from "./Earning";
import Carousel from "../../../../helper/Carousel";
import { dummyData } from "../../../../data/Data";
import PayoutForm from "./PayoutForm";
import axios from "axios";
import Api from "../../../../ApiUrl";
import * as SecureStore from 'expo-secure-store';

const Earnings = () => {
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
    const [earning_item, setEarning_item] = useState([]);
    useEffect(() => {
        axios.get((Api.api_url)+"wp-json/jwt-auth/v1/profile/wallet?user_id="+global.userid+"&limit=10000" )
            .then(res => { 
               
                setEarning_item(res.data.host_earnings);
            })
            .catch(err => {console.log(err)}); 
    }, []);  
    return (
        <View style={styles.center}>
            <View style={styles.container}>
                <View style={{ height: 80, flexDirection: 'row', alignItems: 'center', left: 20 }}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={() => { navigation.goBack(); }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 24, left: 20 }}>Earnings</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={{ height: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>History</Text>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#f15e75' }]} onPress={() => setModalVisible(true)}>
                        <Text style={{ color: 'white' }}>Request A Payout</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: Dimensions.get('screen').width - 20, height: 2, backgroundColor: '#eee' }} />

                <DataTable>

                    <List.AccordionGroup>
                        <Carousel
                            data={earning_item}
                            component={Earning}
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
            
            <PayoutForm modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
        paddingBottom: 6,
        marginBottom: 15
    },
    button: {
        borderRadius: 6,
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

export default Earnings