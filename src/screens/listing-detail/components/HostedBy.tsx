import React from "react";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { Avatar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";


const HostedBy = (item) => {
    // source={avatar} 
    const avatar=item.data.avatar;
    return (
        <View style={ styles.container }>
            <View style={{ flexDirection: 'row' }}> 
                <Avatar.Image size={60} source={{uri:avatar}} />
                <View style={ styles.avatar }>
                    <Text style={[ styles.bold, { fontSize: 18 }]}>Hosted by {item.data.author}</Text>
                    <Text><FontAwesome name="map-marker" size={16} color="black" />  {item.data.author_country}</Text>
                </View>
            </View>
            <View style={{ marginTop: 20, marginBottom: 20 }}>
                <Text style={ styles.bold }>Language</Text>
                <Text>{item.data.author_language}</Text>
            </View>
            <View style={{ marginTop: 20, marginBottom: 20 }}>
                <Text style={ styles.bold }>Profile Status</Text>
                <Text style={{ color: 'green' }}><FontAwesome name="times" size={16} color="green" />  Verified</Text>
               
            </View>
            <View style={{ marginTop: 20, marginBottom: 20 }}>
                <Text style={ styles.bold }>Host Rating</Text>
                {item.data.author_rating.host_rating >= 1 && item.data.author_rating.host_rating < 1.5?
                <Text style={{ color: 'lightgrey' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" /> Poor</Text>:''}
                    {item.data.author_rating.host_rating >= 1.5 && item.data.author_rating.host_rating <  2?
                <Text style={{ color: 'lightgrey' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-half-full" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" /> Fair</Text>:''}
                    {item.data.author_rating.host_rating >= 2 && item.data.author_rating.host_rating < 2.5?
                <Text style={{ color: 'lightgrey' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" /> Fair</Text>:''}
                    {item.data.author_rating.host_rating >= 2.5 && item.data.author_rating.host_rating < 3?
                <Text style={{ color: 'lightgrey' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-half-full" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" /> Average</Text>:''}
                    {item.data.author_rating.host_rating >= 3 && item.data.author_rating.host_rating < 3.5?
                <Text style={{ color: 'lightgrey' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" /> Average</Text>:''}
                    {item.data.author_rating.host_rating >= 3.5 && item.data.author_rating.host_rating < 4?
                <Text style={{ color: 'lightgrey' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-half-full" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" /> Good</Text>:''}
                    {item.data.author_rating.host_rating >= 4 && item.data.author_rating.host_rating < 4.5?
                <Text style={{ color: 'lightgrey' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-o" size={16} color="#f8b42b" /> Good</Text>:''}
                    {item.data.author_rating.host_rating >= 4.5 && item.data.author_rating.host_rating < 5?
                <Text style={{ color: 'lightgrey' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star-half-full" size={16} color="#f8b42b" /> Excellent</Text>:''}
                    {item.data.author_rating.host_rating >= 5?
                <Text style={{ color: 'lightgrey' }}>
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" />
                    <FontAwesome name="star" size={16} color="#f8b42b" /> Excellent</Text>:''}
            </View>
            {/* <Pressable style={ styles.button }><Text style={ styles.buttonText }>Contact the host</Text></Pressable>
            <Pressable style={ styles.button }><Text style={ styles.buttonText }>View profile</Text></Pressable> */}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginTop: 30,
        marginBottom: 30
    },
    avatar: {
        justifyContent: 'center',
        left: 30
    },
    bold: {
        fontWeight: 'bold'
    },
    button: {
        width: Dimensions.get('screen').width - 50,
        height: 50,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'grey',
        fontWeight: 'bold'
    }
});


export default HostedBy