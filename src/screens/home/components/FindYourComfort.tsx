import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import Colors from "../../../constants/Colors";
import axios from "axios";
import Api from "../../../ApiUrl";
const { width, height } = Dimensions.get('window');
const rectangle = width - 20;
const square = (width / 2) - 20;

const img1 = 'https://89239-660736-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/39-2-555x262.jpg';
const img2 = 'https://89239-660736-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/16-4-360x360.jpg';
const img3 = 'https://89239-660736-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/33-360x360.jpg';
const img4 = 'https://89239-660736-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/10-7-360x360.jpg';
const img5 = 'https://89239-660736-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/20-360x360.jpg';
const img6 = 'https://89239-660736-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/15-555x262.jpg';


const FindYourConfort = ({navigation}) => {
   
    const [Comfort_Place, setComfort_Place] = useState([]);
    const [Comfort_array, setComfort_array] = useState([]);
    useEffect(() => {
   axios.get((Api.api_url)+"wp-json/jwt-auth/v1/listing/comfort_place" )
  .then(res => {
       
       setComfort_array(res.data);
      

 })
   .catch(err => {console.log(err)});
   
    setComfort_Place(Comfort_array);
  }, []);

  let a=0;

  if(Comfort_array.length!= 0){
    return (
        <View style={{ flex: 1, marginTop: 50, marginBottom: 50 }}>
            <View style={ styles.textView }>
                <Text style={ styles.heading }>Find a Place That Fits Your Comfort</Text>
            </View>
            {Comfort_array.map((localState, index) => ( index ===0 ? 
            <TouchableOpacity onPress={() => {  navigation.navigate('SearchResultPage', { 
                listings: {keyword: '',
                    arrive: '',
                    depart: '',
                    guest: '',
                    listing_type: localState.name,},
            });}}>
            <Card style={ styles.rectangleCard } image={localState.url} text=  {localState.name} key={index} />
            </TouchableOpacity>:''
           ))}
           <View style={ styles.row }>
           {Comfort_array.map((localState, index) => ( index ===1 || index ===2 ?
            <TouchableOpacity onPress={() => {  navigation.navigate('SearchResultPage', { 
                listings: {keyword: '',
                    arrive: '',
                    depart: '',
                    guest: '',
                    listing_type: localState.name,},
            });}}>
                 <Card style={ styles.squareCard } image={localState.url} text= {localState.name}  gradientWidth={square}  key={index} /> 
                 </TouchableOpacity>:''
                ))}
            </View> 
            {Comfort_array.map((localState, index) => ( index ===3 ? 
             <TouchableOpacity onPress={() => {  navigation.navigate('SearchResultPage', { 
                listings: {keyword: '',
                    arrive: '',
                    depart: '',
                    guest: '',
                    listing_type: localState.name,},
            });}}>
            <Card style={ styles.rectangleCard } image={localState.url} text=  {localState.name} key={index} />
            </TouchableOpacity>: ''
            ))}
            {/* <View style={ styles.row }>
                <Card style={ styles.squareCard } image={img4} gradientWidth={square} text= 'House' />
                <Card style={ styles.squareCard } image={img5} gradientWidth={square} text= 'Loft' />
            </View>
            <Card style={ styles.rectangleCard } image={img6} text= 'Studio' /> 
            <TouchableOpacity style={[ styles.button ]} 
                            onPress={() => {
                                setModalVisible(!modalVisible); 
                                
                                navigation.navigate('SearchResultPage', { 
                                    listings: {keyword: togo,
                                        arrive: Moment(arrive).format('YYYY-MM-DD'),
                                        depart: Moment(depart).format('YYYY-MM-DD'),
                                        guest: guests,},
                                });
                           
                        }}>  
                            <Text style={[ styles.buttonText, { color: 'white' } ]}>Search</Text>
                        </TouchableOpacity>
            */}

            <TouchableOpacity style={ styles.button } onPress={() => {  navigation.navigate('SearchResultPage', { 
                listings: {keyword: '',
                    arrive: '',
                    depart: '',
                    guest: '',
                    listing_type: '',},
            });}}>
                <Text style={ styles.buttonText }>Find More Places To Rent</Text>
            </TouchableOpacity>
        </View>
    );
}
}

const Card = ({ style={}, radius = 10, image = '', text = '', gradientWidth = rectangle }, mkey = '',) => {
    return (
        <ImageBackground borderRadius={radius} style={ [ styles.imageBackground, style ] } source={{ uri: image }} key={mkey}>
                <LinearGradient colors={[ 'transparent', 'black' ]} style={{ ...styles.linearGradient, width: gradientWidth }} locations={[0, 0.8]} />
                <View style={ styles.imageTextView }>
                    <Text style={ styles.imageText }> { text } </Text>
                </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        width: width,
        height: height / 2,
    },
    imageText: {
        color: 'white',
        bottom: 20,
        fontSize: 16,
        fontWeight: 'bold'
    },
    imageTextView: {
        height: height / 4,
        alignSelf: 'center',
        justifyContent: 'flex-end',
    },
    textView: {
        margin: 20
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    rectangleCard: {
        width: rectangle,
        height: height / 4, 
        alignSelf: 'center',
        margin: 10
    },
    squareCard: {
        width: square,
        height: (height / 4), 
        alignSelf: 'center',
        
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    linearGradient: {
        position: 'absolute',
        height: height / 4,
        borderRadius: 10,
        opacity: .5
    },
    button: {
        backgroundColor: Colors.light.buttonColor,
        alignSelf: 'center',
        borderRadius: 10,
        width: width / 1.5,
        height: 50,
        marginTop: 80,
        marginBottom: 50,
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center', 
        textAlignVertical: 'center', 
        height: 50,
        fontSize: 16
    }
});



export default FindYourConfort;