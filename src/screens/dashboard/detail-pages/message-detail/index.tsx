import React from "react";
import { StyleSheet, ScrollView, Text, Dimensions, FlatList,ActivityIndicator,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MessageBody from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";
import Chats from "../../../../data/Chats";
import moment from "moment";
import axios from "axios";
import Api from "../../../../ApiUrl";
import { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';
 
const MessageDetail = (props) => {
    const thread_id= props.route.params.thread_id;
    const thread_detail= props.route.params;
    const [isLoaded, setIsLoaded] = useState(false);
    const [msitems, setmsItems] = useState([]);
    const [mymessages, setMessages] = useState([]);
    const [user, setUser] = useState([]);
    const [mythread, setMythread] = useState();
    const isFocused = useIsFocused();
    useEffect(() => { 
        axios.get((Api.api_url)+"wp-json/jwt-auth/v1/messages/message_detail?user_id="+global.userid+"&thread_id="+thread_id )
            .then(res => {
                //console.log(res);
                setIsLoaded(true);
                setmsItems(res.data);
                setMessages(res.data.messages);
                setUser(res.data.users);
        
            })
            .catch(err => {console.log(err)}); 
    }, [isFocused]); 
    const handleCallback = (childData:any) =>{
        setMythread(childData);
        console.log(childData);
        axios.get((Api.api_url)+"wp-json/jwt-auth/v1/messages/message_detail?user_id="+global.userid+"&thread_id="+childData )
            .then(res => {
                //console.log(res.data.messages);
                setIsLoaded(true);
                setmsItems(res.data);
                setMessages(res.data.messages);
                setUser(res.data.users);
        
            })
            .catch(err => {console.log(err)});
    }   
    
    mymessages.sort(function (a, b) {
        return Number(moment(a.createdAt).unix()) - Number(moment(b.createdAt).unix());
    });
   //console.log( moment( msitems.messages[1].createdAt ).unix() )
   if(mymessages.length !=0){
    return(
        <SafeAreaView style={styles.container}>
            <Header user={user} />
            <FlatList 
                data={msitems.messages}
                keyExtractor={(item) => 'key' + item.id}
                renderItem={ ({item}) => <MessageBody message={item} />}
                initialScrollIndex={mymessages.length - 1}
            /> 
            <Footer msgData={thread_detail}  parentCallback = {handleCallback}   />
            <View style={[ styles.container]}>
              
            </View>
        </SafeAreaView>
    );
}else{
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
    
    loader: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: Dimensions.get('window').width,
  },
});

export default MessageDetail;