import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Avatar } from "react-native-paper";


const ReviewSection = () => {
    return (
        <View style={ styles.container }>

            <Text style={[ styles.title, styles.bold ]}>1 Review</Text>

            <View style={ styles.notice }>
                <Text style={{  }}>
                    <FontAwesome name="check-circle-o" size={14} color="grey" />   Verified Reviews - All reviews are from verified guests.
                </Text>
            </View>

            <View style={ styles.review }>

                <Avatar.Image size={50} source={require('../../../assets/images/image-1440x960.png')} />

                <View style={{ left: 20, justifyContent: 'center', marginTop: 4 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[ styles.guestName, styles.bold ]}>Diana Cooper</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="star" size={16} color="#f8b42b" />
                            <FontAwesome name="star" size={16} color="#f8b42b" />
                            <FontAwesome name="star" size={16} color="#f8b42b" />
                            <FontAwesome name="star" size={16} color="#f8b42b" />
                            <FontAwesome name="star" size={16} color="#f8b42b" />
                        </View>
                        <View style={ styles.badge }>
                            <Text style={ styles.badgeText }>Excelent</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 6, justifyContent: 'space-between' }}>
                        <Text><FontAwesome name="calendar" size={14} color="black" /> October 22, 2008</Text>
                        <Text><FontAwesome name="clock-o" size={14} color="black" /> 5:15 pm</Text>
                    </View>

                    <Text style={ styles.text }>
                        Proin laoreet erat sed ornare molestie. 
                        Fusce vehicula ut nulla facilisis vulputate. 
                        Quisque vel purus ac lectus tempus viverra. 
                        Maecenas at sem at erat pellentesque hendrerit nec in massa. 
                        Vestibulum nec lacinia dui, a congue ex. 
                        Vivamus ac ultricies mauris. 
                        Suspendisse commodo tempus suscipit. 
                        Nunc malesuada eu tortor in hendrerit.
                    </Text>
                </View>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 25,
        paddingTop: 50,
        paddingBottom: 50,
        backgroundColor: '#eee'
    },
    bold: {
        fontWeight: 'bold'
    },
    title: {
        fontSize: 16,
        marginBottom: 10
    },
    text: {
        textAlign: 'left',
        marginTop: 10,
        lineHeight: 20
    },
    notice: {
        width: Dimensions.get('screen').width - 50,
        height: 80,
        backgroundColor: 'lightblue',
        borderColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 30,
        marginBottom: 30
    },
    guestName: {

    },
    review: {
        flexDirection: 'row',
        marginTop: 20,
        width: Dimensions.get('screen').width / 1.5
    },
    badge: {
        backgroundColor: '#85c341',
        borderRadius: 4,
        paddingLeft: 4,
        paddingRight: 4
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    }
});


export default ReviewSection