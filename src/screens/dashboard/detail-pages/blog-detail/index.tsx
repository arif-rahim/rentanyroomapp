import React, {useEffect,useState} from "react";
import { StyleSheet, ScrollView, View,ActivityIndicator,Text,Dimensions } from "react-native";
import ImageBanner from "./components/ImageBanner";
import BlogContent from "./components/BlogContent";
import { SafeAreaView } from "react-native-safe-area-context";

import axios from "axios";
import Api from "../../../../ApiUrl";
import * as SecureStore from 'expo-secure-store';
const BlofgDetailPage = (props) => {
    console.log(props.route.params.itemId);
    const post_id= props.route.params.itemId;
    
    const [blog, setBlog] = useState('');
    useEffect(() => {

        axios.get((Api.api_url)+"wp-json/jwt-auth/v1/blog/blog_detail?id="+post_id )
        .then(res => {
            setBlog(res.data);
           

     }) .catch(err => {console.log(err)});
    }, [ ]); 
    
    return (
        <SafeAreaView style={ styles.container }>
            <ScrollView>
                <ImageBanner  data={blog} />
                <BlogContent  data={blog} />
            </ScrollView>
        </SafeAreaView>
    );
   
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    
    loader: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: Dimensions.get('window').width,
  },
});


export default BlofgDetailPage;