import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image, Dimensions, ImageBackground,TouchableOpacity  } from 'react-native'
import { Avatar } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons'
import axios from 'axios'
import RatingStars from '../../../components/RatingStars'
import { useNavigation } from '@react-navigation/native';

 
const { width, height } = Dimensions.get('window')

const CarouselItem = ({ item }) => {
    const navigation = useNavigation();
    const [error, setError] = useState(null);
    let image_url = 'https://via.placeholder.com/300/FF0000/FFFFFF?text=Image+Not+Availabe';
    let avatar_url = 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Image+Not+Availabe';
    let listing_id =item.id;
    if( typeof item.thumbnail != 'undefined' ) {
        let source_url = item.thumbnail;
        image_url = source_url !== '' ? source_url : "https://via.placeholder.com/300/FF0000/FFFFFF?text=Image+Not+Availabe";
    }
    avatar_url = typeof item.avatar != 'undefined' ? item.avatar : "https://via.placeholder.com/300/FF0000/FFFFFF?text=Image+Not+Availabe";
 
    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => navigation.navigate('ListingDetailPage',{listing_id})}>
            <View style={styles.cardView}  key={listing_id}>
                <ImageBackground style={{ ...styles.backgoundImage }} source={{ uri: image_url }} borderRadius={10}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', zIndex: 2 }}>
                        <Text style={{ ...styles.textPrice }}> $.{ item.price } </Text>
                        <Avatar.Image size={50} source={{ uri: avatar_url }} />
                    </View>
                    <View style={ styles.imageOverly }></View>
                </ImageBackground>

                <View style={styles.content}>
                    <View style={{ ...styles.textView }}>
                        <Text style={styles.itemTitle}> {item.title} </Text>
                        <Text style={styles.itemDescription}> { item.address } </Text>
                        {/* <Text style={styles.itemDescription}> {item.excerpt.rendered.replace(/<|p>/g, '').replace('/', '').substring(0, 50)} </Text> */}
                        {/* <Text style={styles.itemDescription}> {item.excerpt.rendered.split('.')[0].replace('<p>', '')} </Text> */}

                    </View>

                    <View style={{ ...styles.textView, flexDirection: 'row', marginTop: 5, justifyContent: 'space-around' }}>
                        <FontAwesome name='bed' size={20} />
                        <Text>{ item.bedrooms }</Text>
                        <FontAwesome name='shower' size={20} />
                        <Text>{ item.baths }</Text>
                        <FontAwesome name='user' size={20} />
                        <Text>{ item.guests }</Text>
                    </View>

                    <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
                        
                        <RatingStars stars={ Number( item.total_rating ) } />
                        
                        <View>
                            <FontAwesome name='ellipsis-v' size={24} onPress={() => {  }} />
                           
                        </View>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        //flex: 1,
        width: width - 20,
        height: height / 1.8,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    backgoundImage: {
        width: width - 20,
        height: height / 3,
        padding: 10,
        justifyContent: 'flex-end'
    },

    imageOverly: { 
        width: width - 20,
        height: height / 3,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 10,
        zIndex: 1,
    },
    content: {
        position: 'relative',
        margin: 10,
    },
    textView: {
        //position: 'relative',
        margin: 10,
        bottom: 10,
        //left: 5,
    },
    textPrice: {
        alignSelf: 'flex-end',
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold'
    },
    image: {
        width: width - 20,
        height: height / 3,
        borderRadius: 10
    },
    itemTitle: {
        color: 'grey',
        fontSize: 18,
        shadowColor: 'lightgrey',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'grey',
        fontSize: 12,
        shadowColor: 'lightgrey',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    },
})

export default CarouselItem