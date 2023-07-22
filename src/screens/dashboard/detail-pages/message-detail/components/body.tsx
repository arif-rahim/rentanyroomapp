import React,{useEffect} from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { Message } from "../../../../../../types";
import moment from "moment";
import * as SecureStore from 'expo-secure-store';

export type ChatMessageProps = {
    message: Message;
}

const MessageBody = (props: ChatMessageProps) => {

    useEffect(() => {
        const bootstrapAsync = async () => {
          let fetchData: any;
          let fetchname: any;
          try {
              fetchData = await SecureStore.getItemAsync('userid');
              global.userid = fetchData;
              fetchname = await SecureStore.getItemAsync('username');
              global.username= fetchname;
          } catch (e) {
          }
    
    
      };
      bootstrapAsync();
    }, [ ]); 
    const { message } = props;
    if(message){
    const isMyMessage = () => {
        return message.user.id == global.userid;
    }
    return(
        <View style={styles.container}>
            <View style={[
                styles.messageBox,
                {
                  backgroundColor: isMyMessage() ? '#DCF8C5' : '#FFFFFF',
                  marginLeft:   isMyMessage() ? 50 : 0,
                  marginRight:  isMyMessage() ? 0 : 0, 
                   
                }          
            ]}> 
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    messageBox: {
        borderRadius: 5,
        padding: 10,
    },
    name: {
        color: 'lightgrey',
        fontWeight: "bold",
        marginBottom: 4,
    },
    message: {
        
    },
    time: {
        alignSelf: 'flex-end',
        color: 'grey',
    },
});

export default MessageBody;