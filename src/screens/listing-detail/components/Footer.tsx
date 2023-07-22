import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import RequestToBookModal from "../../../modals/RequestToBookModal";


const Footer = ( item ) => {
    const navigation = useNavigation(); 

    const [modalVisible, setModalVisible] = useState(false);
    const [post_id, setPost_id] = useState(false);
    const price = item.data.price;
    const p_id = item.data.listing_id;
    const instant_booking=item.data.instant_booking;
    const offsite_payment=item.data.offsite_payment;
    const label = "Price";
    return (
        <View style={[ styles.container, styles.row, styles.alignCenter ]}>  
            <View style={{ flexDirection: 'column' }}>
                <View style={{  }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>${price}<Text style={{ fontSize: 10 }}>/{label}</Text></Text>
                </View>
                {item.data.listing_rating >= 1 && item.data.listing_rating < 1.5?
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" /> 
                    <Text style={{ color: 'lightgrey', left: 6 }}>Poor</Text>
                    </View>:''}
                    {item.data.listing_rating >= 1.5 && item.data.listing_rating <  2?
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-half-full" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" /> 
                    <Text style={{ color: 'lightgrey', left: 6 }}>Fair</Text>
                    </View>:''}
                    {item.data.listing_rating >= 2 && item.data.listing_rating < 2.5?
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" /> 
                    <Text style={{ color: 'lightgrey', left: 6 }}>Fair</Text>
                    </View>:''}
                    {item.data.listing_rating >= 2.5 && item.data.listing_rating < 3?
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-half-full" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" /> 
                    <Text style={{ color: 'lightgrey', left: 6 }}>Average</Text>
                    </View>:''}
                    {item.data.listing_rating >= 3 && item.data.listing_rating < 3.5?
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" /> 
                    <Text style={{ color: 'lightgrey', left: 6 }}>Average</Text>
                    </View>:''}
                    {item.data.listing_rating >= 3.5 && item.data.listing_rating < 4?
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-half-full" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" /> 
                    <Text style={{ color: 'lightgrey', left: 6 }}>Good</Text>
                    </View>:''}
                    {item.data.listing_rating >= 4 && item.data.listing_rating< 4.5?
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" /> 
                    <Text style={{ color: 'lightgrey', left: 6 }}>Good</Text>
                    </View>:''}
                    {item.data.listing_rating >= 4.5 && item.data.listing_rating < 5?
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-half-full" size={16} color="#f8b42b" />
                     <Text style={{ color: 'lightgrey', left: 6 }}>Excellent</Text>
                     </View>:''}
                    {item.data.listing_rating >= 5?
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <Text style={{ color: 'lightgrey', left: 6 }}>Excellent</Text>
                     </View>:''}
                
                {/* <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-half-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <Text style={{ color: 'lightgrey', left: 6 }}>Excellent</Text>
                </View>     */}
            </View>
            <View style={{  }}> 
                <Pressable android_ripple={{ color: 'white' }} style={ styles.botton } onPress={() => { setModalVisible(true),setPost_id(p_id) }}>
                {instant_booking == 1  && offsite_payment == 0 ?
                    <Text style={ styles.buttonText }>Instant Booking</Text> :
                    <Text style={ styles.buttonText }>Request Booking</Text>
                    }
                </Pressable> 
                <RequestToBookModal modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={navigation} device_token={item.data.device_token} list_data={item.data} data={post_id} instant_booking={instant_booking} offsite_payment={offsite_payment}  />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 12,
        width: Dimensions.get('screen').width - 30,
        height: 70,
        elevation: 6,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    alignCenter: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    row: {
        flexDirection: 'row',
    },
    botton: {
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f15e75',
        borderRadius: 6
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});


export default Footer