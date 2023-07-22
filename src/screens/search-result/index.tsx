import React,{useEffect,useState} from 'react';
import Carousel from '../../helper/Carousel';
import ListItem from './components/ListItem';
import axios from "axios";
import Api from "../../ApiUrl";
import SearchBox from './components/Search'
import { SafeAreaView, ScrollView,View,StyleSheet,ActivityIndicator,Dimensions,Text } from 'react-native'
//------Data
import { dummyData } from '../../data/Data'
 
//----Header
import Header from './components/Header';
import { useRoute,useIsFocused } from '@react-navigation/native';

import * as Location from 'expo-location'; 
import MapView,{PROVIDER_GOOGLE,Marker} from 'react-native-maps';

export default function SearchResult({ navigation, route }) {
   
    const [isLoaded, setIsLoaded] = useState(false);
    const routes = route.params.listings;
    const [headerShow, setHeaderShow] = useState(true);
    const [items, setItems] = useState([]);
    const [spiner, setSpiner] = useState(true);
    const isFocused = useIsFocused();
    var mcheck=routes.check_act;
    useEffect(() => {
        const post_data = {
            keyword: routes.keyword,
            arrive: routes.arrive,
            depart: routes.depart,
            guest: routes.guest,
            pets: '',
            bedrooms: '',rooms: '',start_hour: '',end_hour: '', room_size: '',search_country: '',search_city: '',
            search_area: '', listing_type:routes.listing_type?routes.listing_type: '',search_lat: '',search_lng:'',radius: '',paged: '', sort_by: '',
            layout:'',num_posts: '',country: '', state: routes.state?routes.state: '', city: routes.city?routes.city: '',area: '',booking_type: ''
        };
        
        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/search/homey_half_map", post_data )
            .then(res => {
                setItems(res.data);
                setSpiner(false);
                setIsLoaded(true);
            })
            .catch(err => {console.log(err);setSpiner(false);}); 
        
    }, [items]);


    
   
   useEffect(() => {
    getLocationAsync();
  }, []); 
  // import SearchBox from './Search';
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const getLocationAsync = async () => { 
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }
 
    const currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  };
//console.log(navigation);
  if (!location) {
    return null; // Render a loading spinner or placeholder
  }
    //console.log(items);
    if(spiner){
        return ( 
            <SafeAreaView style={styles.container}>
                <View style={styles.loader}>
                     <ActivityIndicator size="large" color="#0c9" />
                </View>
            </SafeAreaView>
        );
    } else{
        if(items){
            var markers = [];

            // Check if items is available and update the markers array
            // if (items && items.lat && items.long) {
            //   const latitude = parseFloat(items.lat);
            //   const longitude = parseFloat(items.long);
            //   markers.push({
            //     latitude: latitude,
            //     longitude: longitude,
            //     title: items.title,
            //     subtitle: items.address
            //   });
            // }
           // console.log(items.listing_type);
                  const initialRegion = items.length > 0 ? {
                    latitude:  parseFloat(items[0].lat),
                    longitude:  parseFloat(items[0].long),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  } : null;
            
            return (
                <>
                
            <SafeAreaView>
                <View style={{ height: 20 }} />
                <SearchBox navigation={navigation} />

                <View style={{ height: 10 }} />
               
                
               
                {/* <MapView style={styles.map} provider={PROVIDER_GOOGLE}  initialRegion={initialRegion}>
     {items.map((marker, index) => (
       <Marker
         key={index}
         coordinate={{ latitude:parseFloat(marker.lat) , longitude:parseFloat(marker.long)  }}
         title={marker.title}
         description={marker.address}
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
   </MapView> */}
   
   
   
            <Carousel
                data={items}
                HeaderComponent={Header}
                component={ListItem}
                customStyle={{
                    container: {
                        backgroundColor: '#eee'
                    }
                }}
    
            />
            </SafeAreaView>
            </>
        );}
        else {return (
            <SafeAreaView style={styles.container}>
                 <View style={{ height: 20 }} />
                <SearchBox navigation={navigation} />
                
                     <Text style={{fontSize:16,color:'red'}}>No result found</Text>
               
            </SafeAreaView>);
        }
    
}

}
const styles = StyleSheet.create({
    mapcontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 10
    },
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

