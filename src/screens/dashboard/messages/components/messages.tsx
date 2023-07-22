import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity,SafeAreaView,ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { DataTable, List } from 'react-native-paper';
import Message from './message';
import Carousel from '../../../../helper/Carousel';
import { dummyData } from '../../../../data/Data';
import axios from "axios";
import Api from "../../../../ApiUrl";
import { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

const Messages = () => {
    const isFocused = useIsFocused();
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
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [spiner, setSpiner] = useState(true);

    console.log(global.userid );
    const fetchData = () => {
        setSpiner(true);
        axios.get((Api.api_url)+"wp-json/jwt-auth/v1/listing/message?user_id="+global.userid )
        .then(res => {
            //console.log(res);
            setIsLoaded(true);
            setItems(res.data);
            setSpiner(false);
    
        })
        .catch(err => {console.log(err)});
      };
    useEffect(() => { 
        if (isFocused) {
            fetchData();
          } 
        
    }, [useIsFocused,isFocused,items]);
    if(items.length!= 0){
    return (
        <View style={styles.center}>
            <View style={styles.container}>
                <View style={{ height: 50 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, left: 20, top: 10 }}>My Messages</Text>
                </View>

                <View style={{ width: Dimensions.get('screen').width - 20, height: 2, backgroundColor: '#eee' }} />

                <Carousel
                    data={items}
                    component={Message}
                    HeaderComponent={null}
                    horizontal={false}
                    pagingEnabled={true}
                    dotView={false}
                    spaceBetween={6}
                    customStyle={{
                        container: {
                            marginBottom: 10
                        }
                    }}
                />
                
            </View>
        </View>
    );}else{
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.loader}>
                    {/* <ActivityIndicator size="large" color="#0c9" /> */}
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


export default Messages;