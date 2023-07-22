import React,{useEffect,useState} from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import * as Location from 'expo-location'; 
import MapView,{PROVIDER_GOOGLE,Marker} from 'react-native-maps';
const Header = ({data}) => {
    

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
//console.log(data);
  if (!location) {
    return null; // Render a loading spinner or placeholder
  }
  const initialRegion = data.length > 0 ? {
    latitude:  parseFloat(data[0].lat),
    longitude:  parseFloat(data[0].long),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  } : null;
    return (
        <View style={styles.container}>
            <MapView style={styles.map} provider={PROVIDER_GOOGLE}  initialRegion={initialRegion}>
     {data.map((marker, index) => (
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
   </MapView>
            <View style={{ height: 10 }} />
             {/* <SearchBox  navigation={navigation}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 10
    },
    map: {
        width: Dimensions.get('window').width,
        height: 450,//Dimensions.get('window').height,
    },
});

export default Header