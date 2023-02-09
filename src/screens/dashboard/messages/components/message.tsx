import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const Message = ({ item, navigation }) => {
    const avatar= item.custom_picture;
    return (
        <TouchableOpacity style={ styles.container } onPress={() => { navigation.navigate('MessageDetailPage',{thread_id:item.thread_id})  }}>
            <View style={{}}>
                <Image style={ styles.avatar } source={{ uri: avatar}} />
            </View>
            <View style={ styles.info }>
                <Text style={ styles.title }>{item.sender_display_name}</Text>
                <Text numberOfLines={1} ellipsizeMode='tail' style={ styles.message }>{item.message} </Text>
                <Text>{item.message_time} </Text>
            </View>
            <View style={ styles.info }>
                
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        margin: 6,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 6,
        elevation: 2
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    message: {
        textAlign: 'justify',
        color: 'grey'
    },
    avatar: {
        marginRight: 6,
        borderRadius: 50,
        width: 50, 
        height: 50, 
        resizeMode: 'cover', 
        backgroundColor: 'lime'
    },
    info: {
        justifyContent: 'center',
    },
    date: {
        right: 80
    }
});

export default Message;