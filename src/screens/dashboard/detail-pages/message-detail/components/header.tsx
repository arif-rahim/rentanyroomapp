import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {
    const navigation = useNavigation();
    const avatar= props.user.imageUri;
    return(
        <View style={ styles.container }>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={() => { navigation.goBack(); }} />
            <Image style={ styles.avatar } source={{ uri: avatar}} />
            
            <View style={ styles.info }>
                <Text style={ styles.title }>{props.user.name}</Text>
                <Text style={ styles.status }>02-05-2021</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: 'white',
        width: Dimensions.get('screen').width,
        alignItems: 'center'
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
        width: 50, 
        height: 50, 
        borderRadius: 50,
        resizeMode: 'cover',
        backgroundColor: 'lime'
    },
    info: {
        justifyContent: 'center',
    },
    status: {
        
    }
});

export default Header;