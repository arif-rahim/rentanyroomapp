import React, {useState,useEffect} from "react";
import { StyleSheet, View, Text, SafeAreaView, Dimensions, ScrollView,ActivityIndicator } from "react-native";

import AboutListing from "./components/AboutListing";
import Accomodation from "./components/Accomodation";
import AdditionalRules from "./components/AdditionalRules";
import Availability from "./components/Availability";
import BookingModuleFooter from "./components/BookingModuleFooter";
import ListingCalendar from "./components/Calendar";
import Request from "./components/RequestToBookModal";
import CustomPeriodPrice from "./components/CustomPeriodPrice";
import Detail from "./components/Detail";
import ExtraService from "./components/ExtraService";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HostedBy from "./components/HostedBy";
import ImageSlider from "./components/ImageSlider";
import Price from "./components/Price";
import ReviewSection from "./components/ReviewSection";
import SocialIcons from "./components/SocialIcons";
import Specification from "./components/Specification";
import Terms from "./components/Terms";
import EmbedVideo from "./components/Video";
import { RouteProp, useRoute } from "@react-navigation/native";
import axios from 'axios'
import Api from "../../ApiUrl";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from 'expo-location';
// Define the type for the route params
type ListingDetailRouteParams = {
    listing_id: string;
    // Add other parameters if needed
  };
  
  // Define the type for the props
  type ListingDetailProps = {
    route: RouteProp<Record<string, ListingDetailRouteParams>, string>;
    // Add other props if needed
  };
  
  const ListingDetail = (props: ListingDetailProps) => {
    const route = useRoute().params;
    const list_id=props.route.params.listing_id;
    const [isLoading, setLoading] = useState(false);
    const [spiner, setSpiner] = useState(false);
    const [items, setItems] = useState();
    const [accomodation, setAccomodation] = useState();
    useEffect(() => {
      
    axios.get((Api.api_url)+"wp-json/jwt-auth/v1/listing/list_detail?list_id="+list_id )
    .then(res => {
        setSpiner(false); 
        setItems(res.data);
       
        setAccomodation(res.data.accomodation);
    })
    .catch(err => { setSpiner(false); console.log(err) }); 
}, []);


useEffect(() => {
 getLocationAsync();
}, []);

const [location, setLocation] = useState<Location.LocationObject | null>(null);

const getLocationAsync = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission to access location was denied');
    return;
  } else {
    console.log('Permission to access location');
  }

  const currentLocation = await Location.getCurrentPositionAsync({});
  setLocation(currentLocation);
};

if (!location) {
  return  (
    <SafeAreaView style={styles.container}>
        <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0c9" />
        </View>
    </SafeAreaView>
); // Render a loading spinner or placeholder
} else {
    
     
   
    if(items){
      //console.log(items.lat);
     var markers = [];

// Check if items is available and update the markers array
if (items && items.lat && items.long) {
  const latitude = parseFloat(items.lat);
  const longitude = parseFloat(items.long);
  markers.push({
    latitude: latitude,
    longitude: longitude,
    title: items.title,
    subtitle: items.address
  });
}
      const initialRegion = markers.length > 0 ? {
        latitude: markers[0].latitude,
        longitude: markers[0].longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      } : null;
    return ( 
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ width: Dimensions.get('screen').width }}>
               
                <ImageSlider data={items} key="1"/> 
                <Header data={items} key="2" />
                <Specification data={items} key="3" />
                <AboutListing data={items} key="4" />
                <Detail data={items} key="5" />
                <Price data={items} key="6" />
                <CustomPeriodPrice data={items} key="7" />
                <Accomodation data={items} key="8" />
                <Features data={items} key="9" />
                <MapView style={styles.map} provider={PROVIDER_GOOGLE}  initialRegion={initialRegion}>
            {markers.map((marker, index) => (
              <Marker
                key={index}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                title={marker.title}
                description={marker.subtitle}
              />
            ))}
            {location && (
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                title="Your Location"
                pinColor="blue" // Optionally, you can customize the pin color
              />
            )}
          </MapView>
                {/* <MapView style={styles.map} key="10" annotations={markers} /> */}
                <EmbedVideo data={items} key="11" />
                <Terms data={items} key="12" />
                <AdditionalRules data={items} key="13" />
                <Availability data={items} key="14" />
                {/* <Request data={items} key="19"/>  */}
                <View style={{ height: 20, backgroundColor: 'lightgrey', marginTop: 10 }} />
                <HostedBy data={items} key="15" />
                {/* <ReviewSection /> */}
                <BookingModuleFooter data={items} />
                <SocialIcons />
                <View style={{ height: 100 }} />
            </ScrollView>
            <Footer data={items}  key="16"/>
        </SafeAreaView>
    );}
    else{
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loader}>
                 <ActivityIndicator size="large" color="#0c9" />
               {/* <Text style={{fontSize:16,color:'red'}}>Loading ...</Text> */}
                  
                  {spiner?"Network issue":""}
            </View>
        </SafeAreaView>
    );}
}
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    map: {
        width: Dimensions.get('window').width,
        height: 380,//Dimensions.get('window').height,
        marginTop: 30
    },
    
    loader: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: Dimensions.get('window').width,
  },
});


export default ListingDetail