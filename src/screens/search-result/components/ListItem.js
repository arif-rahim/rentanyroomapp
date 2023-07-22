import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons'
import RatingStars from '../../../components/RatingStars'
const { width, height } = Dimensions.get('window')
 
const ListItem = ({ item, navigation }) => {
 
   // return <View></View>;
    let image_url = 'https://via.placeholder.com/300/FF0000/FFFFFF?text=Image+Not+Availabe';
    let avatar_url = 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Image+Not+Availabe';
    let source_url =item.thumbnail
    image_url = source_url !== '' ? source_url : "https://via.placeholder.com/300/FF0000/FFFFFF?text=Image+Not+Availabe";

   avatar_url = item.avatar ? item.avatar : "https://via.placeholder.com/300/FF0000/FFFFFF?text=Image+Not+Availabe";
   


   if(item){
    return (
      
         
        <View key={item.id} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
            <View style={styles.cardView}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ListingDetailPage', {
                        listing_id: item.id,
                        title: item.title,
                        avatar: image_url,
                        price: item.price,
                        featured: item.price,
                        // url: item.url,
                        // description: item.description,
                        // testimonial: item.testimonial
                    });
                }}>
                    <ImageBackground style={{ ...styles.backgoundImage }} source={{ uri: image_url }} borderRadius={10}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ ...styles.textPrice }}> {item.price} </Text>
                            <Avatar.Image size={50} source={{ uri: avatar_url }} />
                        </View>
                    </ImageBackground>
                </TouchableOpacity>

                <View style={styles.content}>
                    <TouchableOpacity>
                        <View style={{ ...styles.textView }}>
                            <Text style={styles.itemTitle}>{ item.title }</Text>
                            <Text style={styles.itemDescription}>{ item.address }</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ ...styles.textView, flexDirection: 'row', marginTop: 5, justifyContent: 'space-between' }}>
                        <FontAwesome name='bed' size={20} />
                        <Text>{ item.bedrooms}</Text>
                        <FontAwesome name='shower' size={20} />
                        <Text>{ item.baths }</Text>
                        <FontAwesome name='user' size={20} />
                        <Text>{ item.guests }</Text>
                        <Text>{ item.listing_type }</Text>
                    </View>


                    <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>

                        {/* <RatingStars stars={ Number( item.meta.total_rating ) } /> */}
                        
                        <View>
                            <FontAwesome name='ellipsis-v' size={24} onPress={() => { console.log("Pressed"); }} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
      
    )}
    else{
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0c9" />
            </View>
        </SafeAreaView>
    );}
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: 450,//Dimensions.get('window').height,
    },
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

export default ListItem