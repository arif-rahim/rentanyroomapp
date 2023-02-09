import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, Alert, Dimensions, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const ImageViewModal = ({ modalVisible = false, setModalVisible, _image }) => {

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ padding: 20, flex: 1 }}>
                    <View style={styles.row}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Image</Text>
                        <FontAwesome name="close" size={24} color="black" onPress={() => setModalVisible(!modalVisible)} />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={ styles.image } source={{ uri: _image }}/>
                    </View>
                </View>
            </Modal>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: Dimensions.get('screen').width,
        height: 300
    }
});



export default ImageViewModal;