import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
// import { Searchbar, Button } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import SearchModal from '../../../modals/SearchModal';


const { width, height } = Dimensions.get('window');

const SearchBox = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    // const [searchQuery, setSearchQuery] = React.useState('');
    // const onChangeSearch = (query) => setSearchQuery(query);

    return (
        <ImageBackground
            source={{ uri: 'https://www.rentanyroom.com/wp-content/uploads/2023/06/bedroom-1872196_1920.jpg' }}
            style={styles.imageBackground}
            resizeMode='cover'
        >
            <View style={styles.layer} />
            <Text style={styles.heading}>Rent any room anywhere in the world</Text>
            <Text style={styles.text}>your premier destination for short to medium term stays and a wide range of rental options</Text>
            <FontAwesome.Button
                name="search"
                style={styles.searchButton} size={16}
                color='grey'
                onPress={() => setModalVisible(true)}
            >
                <Text
                    style={{
                        color: 'grey',
                        marginLeft: 10,
                        fontSize: 16
                    }}
                >
                    Where to go?
                </Text>
            </FontAwesome.Button>
            {/* <Searchbar 
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style = {{ marginLeft: 30, marginRight: 30 }}
                onTouchStart = { () => setModalVisible(true) }
            /> */}
            <SearchModal navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    imageBackground: {
        width: width,
        height: height / 1.4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50
    },
    layer: {
        position: 'absolute',
        width: width,
        height: height / 1.4,
        backgroundColor: 'grey',
        opacity: .5
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 20
    },
    text: {
        color: 'white',
        fontSize: 14,
        paddingBottom: 15
    },
    searchButton: {
        width: width / 1.35,
        height: 50,
        backgroundColor: 'white',
        paddingLeft: 20
    }
});

export default SearchBox;