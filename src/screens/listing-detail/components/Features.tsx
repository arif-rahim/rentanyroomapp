import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

 
const Features = (item) => {
    const amenities = item.data.amenities;
    const facilities = item.data.facilities;
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.bold]}>Features</Text>
            <View style={styles.features}>
                <Text style={[styles.title, styles.bold]}>Amenities</Text>
                {item.data.amenities ? amenities.map(getAmenities) : '' }
            </View>

            <View style={styles.features}>
                <Text style={[styles.title, styles.bold]}>Facilities</Text>
                {item.data.facilities ? facilities.map(getFacilities) : '' }
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginTop: 30
    },
    text: {
        color: 'grey'
    },
    title: {
        fontSize: 16,
        marginBottom: 10
    },
    bold: {
        fontWeight: 'bold',
        color: 'black'
    },
    box: {
        flex: 1,
        alignItems: 'flex-start'
    },
    features: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginTop: 10
    }
});


export default Features;

function getAmenities(item: any, index: any): React.ReactNode {
    return (
        <View style={{ flexDirection: 'row' }} key={index}>
        <View style={styles.box}>
            <Text style={styles.text}>
                <FontAwesome name="angle-right" size={16} color="lightgrey" />  {item.name}
            </Text>
        </View>
    </View>
    );
}
function getFacilities(item: any, index: any): React.ReactNode {
    return (
        <View style={{ flexDirection: 'row' }} key={index}>
        <View style={styles.box}>
            <Text style={styles.text}>
                <FontAwesome name="angle-right" size={16} color="lightgrey" />  {item.name}
            </Text>
        </View>
    </View>
    );
}