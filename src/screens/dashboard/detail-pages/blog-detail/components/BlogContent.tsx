import React from "react";
import { StyleSheet, View, Text,Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../../../constants/Colors';
const { width, height } = Dimensions.get('window');

const BlogContent = (item ) => {
    
    return (
        <View style={styles.container}>
       
       <View style={styles.card} key={item.data.id }>

           <View style={styles.overview}>
               <Text style={styles.title}>{item.data.title }</Text>
               <View style={styles.bookmark}>
                   <FontAwesome name='bookmark-o' size={24} />
                   <Text style={styles.bookmarkText}>{item.data.cat_name }</Text>
               </View>
               <Text style={styles.description}>{item.data.description }</Text>
               <View style={styles.blogMeta}>
                   <View style={styles.timeDetail}>
                       <FontAwesome name='calendar-o' size={24} />
                       <Text>  {item.data.get_time }</Text>
                   </View>
                   <View style={styles.userDetail}>
                       <FontAwesome name='user-o' size={24} />
                       <Text>  By 
                           <Text style={{ color: '#f15e75' }}> {item.data.author }</Text>
                       </Text>
                   </View>
               </View>
           </View>
       </View>
   </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        width: width - 20,
        height: 'auto',
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10,
        elevation: 5
    },
    blogImage: {
        width: width - 20,
        height: (height / 1.2) / 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    overview: {
        padding: 10
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        margin: 8
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 1,
        margin: 8
    },
    bookmark: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8
    },
    bookmarkText: {
        color: Colors.light.buttonColor,
        marginLeft: 10,
    },
    blogMeta: {
        flexDirection: 'row',
    },
    timeDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8
    },
    userDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8
    }
});


export default BlogContent