import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';


const RatingStars = (rating: {stars: number}) => {

    var stars = rating.stars;
    var output = <View></View>;

    if (stars >= 1 && stars < 1.5) {
        output = <View style={{ flexDirection: 'row' }}>
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <Text style={{ marginLeft: 15, color: 'grey' }}>Poor</Text>
        </View>

    } else if (stars >= 1.5 && stars < 2) {
        output = <View style={{ flexDirection: 'row' }}>
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star-half-empty' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <Text style={{ marginLeft: 15, color: 'grey' }}>Fair</Text>
        </View>

    } else if (stars >= 2 && stars < 2.5) {
        output = <View style={{ flexDirection: 'row' }}>
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <Text style={{ marginLeft: 15, color: 'grey' }}>Fair</Text>
        </View>

    } else if (stars >= 2.5 && stars < 3) {
        output = <View style={{ flexDirection: 'row' }}>
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star-half-empty' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <Text style={{ marginLeft: 15, color: 'grey' }}>Average</Text>
        </View>

    } else if (stars >= 3 && stars < 3.5) {
        output = <View style={{ flexDirection: 'row' }}>
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <Text style={{ marginLeft: 15, color: 'grey' }}>Average</Text>
        </View>

    } else if (stars >= 3.5 && stars < 4) {
        output = <View style={{ flexDirection: 'row' }}>
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star-half-empty' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <Text style={{ marginLeft: 15, color: 'grey' }}>Good</Text>
        </View>

    } else if (stars >= 4 && stars < 4.5) {
        output = <View style={{ flexDirection: 'row' }}>
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star-o' size={18} color='orange' />
            <Text style={{ marginLeft: 15, color: 'grey' }}>Good</Text>
        </View>

    } else if (stars >= 4.5 && stars < 5) {
        output = <View style={{ flexDirection: 'row' }}>
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star-half-empty' size={18} color='orange' />
            <Text style={{ marginLeft: 15, color: 'grey' }}>Excellent</Text>
        </View>

    } else if (stars >= 5) {
        output = <View style={{ flexDirection: 'row' }}>
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <FontAwesome name='star' size={18} color='orange' />
            <Text style={{ marginLeft: 15, color: 'grey' }}>Excellent</Text>
        </View>
    }

    return ( output );
}


const styles = StyleSheet.create({

});


export default RatingStars;