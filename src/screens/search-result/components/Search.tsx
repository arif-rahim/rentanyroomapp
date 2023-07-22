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
        <View style={styles.alignCenter}>
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
        </View>
    );
}


const styles = StyleSheet.create({
    alignCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchButton: {
        width: width / 1.15,
        height: 50,
        backgroundColor: 'lightgrey',
        paddingLeft: 20
    }
});

export default SearchBox;