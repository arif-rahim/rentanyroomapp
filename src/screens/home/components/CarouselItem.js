import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image, Dimensions, ImageBackground } from 'react-native'
import { Avatar } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons'
import axios from 'axios'
import RatingStars from '../../../components/RatingStars'

const { width, height } = Dimensions.get('window')

const CarouselItem = ({ item }) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [media, setMedia] = useState({});
    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    const [area, setArea] = useState([]);
    const [user, setUser] = useState([]);
    // const [facilities, setFacilities] = useState([]);
    // const [amenities, setAmenities] = useState([]);

    // const fetchData = () => {
    //     const user_url = "https://staging.webpenter.com/wp-json/wp/v2/users/" + item.author
    //     const media_url = "https://staging.webpenter.com/wp-json/wp/v2/media/" + item.featured_media
    //     const country_url = "https://staging.webpenter.com/wp-json/wp/v2/listing_countries?post=" + item.id
    //     const state_url = "https://staging.webpenter.com/wp-json/wp/v2/listing_states?post=" + item.id
    //     const city_url = "https://staging.webpenter.com/wp-json/wp/v2/listing_cities?post=" + item.id
    //     const area_url = "https://staging.webpenter.com/wp-json/wp/v2/listing_areas?post=" + item.id
    //     // const facilities_url = "https://staging.webpenter.com/wp-json/wp/v2/facilities?post=" + item.id
    //     // const amenities_url = "https://staging.webpenter.com/wp-json/wp/v2/amenities?post=" + item.id
    //     const getUser = axios.get(user_url)
    //     const getMedia = axios.get(media_url)
    //     const getCountry = axios.get(country_url)
    //     const getState = axios.get(state_url)
    //     const getCity = axios.get(city_url)
    //     const getArea = axios.get(area_url)
    //     // const getFacilities = axios.get(facilities_url)
    //     // const getAmenities = axios.get(amenities_url)
    //     axios.all([getMedia, getCountry, getState, getCity, getArea, getUser])
    //         .then(
    //             axios.spread((...allData) => {

    //                 setIsLoaded(true)
                    
    //                 setMedia( allData[0].data );
    //                 setCountry( allData[1].data );
    //                 setState( allData[2].data );
    //                 setCity( allData[3].data );
    //                 setArea( allData[4].data );
    //                 setUser( allData[5].data );
    //                 // setFacilities( allData[6].data );
    //                 // setAmenities( allData[7].data );
    //             })
    //         )
    // }

    // useEffect(() => {
    //     // fetch("https://staging.webpenter.com/wp-json/wp/v2/media/" + item.featured_media)
    //     // .then(res => res.json())
    //     // .then(
    //     //     (result) => {
    //     //         setIsLoaded(true);
    //     //         setItems(result);
    //     //     },
    //     //     // Note: it's important to handle errors here
    //     //     // instead of a catch() block so that we don't swallow
    //     //     // exceptions from actual bugs in components.
    //     //     (error) => {
    //     //         setIsLoaded(true);
    //     //         setError(error);
    //     //     }
    //     // );

    //     // fetchData(); // no need to call further
    // },[]);

    // console.log(media.media_details.sizes.medium.source_url);
    // Object.keys(media.media_details).forEach(key => media.media_details[key] === undefined && delete media.media_details[key]);
    // console.log(facilities.length +'-'+ amenities.length);
    // return( 
    //     <View>
    //         <Text>{facilities.length +'-'+ amenities.length}</Text>
    //     </View>
    // );

    // check if media if undefined
    let image_url = 'https://via.placeholder.com/300/FF0000/FFFFFF?text=Image+Not+Availabe';
    let avatar_url = 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Image+Not+Availabe';
    if( typeof item._embedded['wp:featuredmedia'][0].media_details != 'undefined' ) {

        let source_url = item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
        // if( source_url !== '' || source_url !== null || typeof source_url !== 'undefined' ) {
        //     image_url = source_url;
        // }
        image_url = source_url !== '' ? source_url : "https://via.placeholder.com/300/FF0000/FFFFFF?text=Image+Not+Availabe";
    }

    avatar_url = typeof item._embedded['author'][0].avatar_urls != 'undefined' ? item._embedded['author'][0].avatar_urls['96'] : "https://via.placeholder.com/300/FF0000/FFFFFF?text=Image+Not+Availabe";

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.cardView}>
                <ImageBackground style={{ ...styles.backgoundImage }} source={{ uri: image_url }} borderRadius={10}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', zIndex: 2 }}>
                        <Text style={{ ...styles.textPrice }}> { item.meta.listing_price } </Text>
                        <Avatar.Image size={50} source={{ uri: avatar_url }} />
                    </View>
                    <View style={ styles.imageOverly }></View>
                </ImageBackground>

                <View style={styles.content}>
                    <View style={{ ...styles.textView }}>
                        <Text style={styles.itemTitle}> {item.title.rendered} </Text>
                        <Text style={styles.itemDescription}> { item.meta.address } </Text>
                        {/* <Text style={styles.itemDescription}> {item.excerpt.rendered.replace(/<|p>/g, '').replace('/', '').substring(0, 50)} </Text> */}
                        {/* <Text style={styles.itemDescription}> {item.excerpt.rendered.split('.')[0].replace('<p>', '')} </Text> */}

                    </View>

                    <View style={{ ...styles.textView, flexDirection: 'row', marginTop: 5, justifyContent: 'space-around' }}>
                        <FontAwesome name='bed' size={20} />
                        <Text>{ item.meta.bedrooms }</Text>
                        <FontAwesome name='shower' size={20} />
                        <Text>{ item.meta.baths }</Text>
                        <FontAwesome name='user' size={20} />
                        <Text>{ item.meta.guests }</Text>
                        <Text>{ item._embedded['wp:term'][0][0].name.replace(/&amp;/g, '&') }</Text>
                    </View>

                    <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
                        
                        <RatingStars stars={ Number( item.meta.total_rating ) } />
                        
                        <View>
                            <FontAwesome name='ellipsis-v' size={24} onPress={() => { console.log("Pressed"); }} />
                        </View>
                    </View>
                </View>
            </View>
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