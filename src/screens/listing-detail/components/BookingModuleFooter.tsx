import { FontAwesome } from "@expo/vector-icons";
import React,{useState} from "react";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import Host_contact from "../../../modals/Host_contact";
import Host_profile from "../../../modals/Host_profile";
import { useNavigation } from "@react-navigation/native";

const BookingModuleFooter = (items) =>{
    const navigation = useNavigation(); 
    const [modalVisible, setModalVisible] = useState(false);
    const [modaProfilelVisible, setModalProfileVisible] = useState(false);
    return (
        <View style={ styles.container }>
            <Pressable android_ripple={{ color: 'lighgrey' }} style={ styles.button } onPress={() => { setModalProfileVisible(true) }} >
                <Text style={ styles.buttonText } ><FontAwesome name="heart-o" size={14} color="black" /> View profile</Text>
            </Pressable>
            <Pressable android_ripple={{ color: 'lightgrey' }} style={ styles.button } onPress={() => { setModalVisible(true) }}>
                <Text style={ styles.buttonText } >Contact the host</Text>
            </Pressable>
            <Host_contact modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={navigation}  data={items} />
            <Host_profile modaProfilelVisible={modaProfilelVisible} setModalProfileVisible={setModalProfileVisible} navigation={navigation} host_id={items.data.author_id}  />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width / 1.2,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        margin: 10
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'grey'   
    }
});


export default BookingModuleFooter