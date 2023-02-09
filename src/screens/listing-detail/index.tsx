import React, {useState,useEffect} from "react";
import { StyleSheet, View, Text, SafeAreaView, Dimensions, ScrollView,ActivityIndicator } from "react-native";
import MapView from "react-native-maps";
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
import { useRoute } from "@react-navigation/native";
import axios from 'axios'
import Api from "../../ApiUrl";

 
const ListingDetail = (props) => {
    const route = useRoute().params;
    //console.log(props.route.params.listing_id);
    const list_id=props.route.params.listing_id;
    const [isLoading, setLoading] = useState(false);
    const [items, setItems] = useState();
    const [accomodation, setAccomodation] = useState();
    useEffect(() => {
    axios.get((Api.api_url)+"wp-json/jwt-auth/v1/listing/list_detail?list_id="+list_id )
    .then(res => {
        setItems(res.data);
        //console.log(res.data);
        setAccomodation(res.data.accomodation);
    })
    .catch(err => {console.log(err)}); 
}, []);
    if(items){
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
                <MapView style={styles.map} key="10" />
                <EmbedVideo data={items} key="11" />
                <Terms data={items} key="12" />
                <AdditionalRules data={items} key="13" />
                <Availability data={items} key="14" />
                {/* <Request data={items} key="19"/>  */}
                <View style={{ height: 20, backgroundColor: 'lightgrey', marginTop: 10 }} />
                <HostedBy data={items} key="15" />
                <ReviewSection />
                <BookingModuleFooter />
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
                <Text style={{fontSize:16,color:'red'}}>Loading ...</Text>
            </View>
        </SafeAreaView>
    );}
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