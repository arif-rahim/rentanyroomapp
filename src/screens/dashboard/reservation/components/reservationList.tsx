import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,SafeAreaView,ActivityIndicator,Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { DataTable, List } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

const ReservationList = ({ item, navigation }) => {
   // console.log(item); 
    if(item){
    return (
        <List.Accordion title={`Reservation ${item.id}`} id={item.id}>
            <DataTable.Row>
                <DataTable.Cell>Author</DataTable.Cell>
                <DataTable.Cell numeric>
                
                <Avatar.Image style={styles.testimonialThumb} size={24} source={{ uri: item.photo}} />
                    </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>ID</DataTable.Cell>
                <DataTable.Cell numeric>#{item.id}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Status</DataTable.Cell>
                <DataTable.Cell numeric>
                {item.status === 'booked' ? 
                    <View style={styles.booked}><Text style={{ color: 'white', fontSize: 12 }}>{item.status}</Text></View> : 
                    <View style={styles.declined}><Text style={{ color: 'white', fontSize: 12 }}>{item.status}</Text></View>}
                </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Date</DataTable.Cell>
                <DataTable.Cell numeric>{item.date}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Address</DataTable.Cell>
                <DataTable.Cell numeric textStyle={{ textAlign: 'right' }}>{item.photo}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Chech-in</DataTable.Cell>
                <DataTable.Cell numeric>{item.checkin}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Check-out</DataTable.Cell>
                <DataTable.Cell numeric>{item.checkout}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Guests</DataTable.Cell>
                <DataTable.Cell numeric>{item.guest}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Pets</DataTable.Cell>
                <DataTable.Cell numeric>{item.pets}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Subtotal</DataTable.Cell>
                <DataTable.Cell numeric>{item.price}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Actions</DataTable.Cell>
                <DataTable.Cell numeric>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('ReservationDetailPage',
    { itemId: item.id}) }}>
                        <Text style={{ color: 'white' }}> Details </Text>
                    </TouchableOpacity>
                </DataTable.Cell>
            </DataTable.Row>
        </List.Accordion>
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
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    button: {
        borderRadius: 10,
        padding: 8,
        backgroundColor: '#54c4d9'
    },
    booked: {
        backgroundColor: '#85c341',
        borderRadius: 6,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2
    },
    pending: {
        backgroundColor: '#fcb900',
        borderRadius: 6,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2
    },
    declined: {
        backgroundColor: '#c31b1b',
        borderRadius: 6,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2
    },
    testimonialThumb: {
        alignSelf: 'center',
        margin: 0
    },
    
    loader: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: Dimensions.get('window').width,
  },
});


export default ReservationList;