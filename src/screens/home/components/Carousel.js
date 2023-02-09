import React, { useRef } from 'react'
import { View, Text, StyleSheet, FlatList, Animated, useWindowDimensions } from 'react-native'

import CarouselItem from './Carouselitem'
import FromOurBlogItem from './FromOurBlogItem'
import TrendingItem from './TrendingItem'
import TestimonialItem from './TestimonialItem'
import OurPartnerItem from './OurPartnerItem'

let flatList
 

const Carousel = ({ data, title = '', disc = '', featured = false, dotView = false, horizontal = false, whiteSpace = false, component = 'default', customStyle = {} }) => {
//console.log(data);
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();

    if ( featured ) {
        data = data.filter( function(item) { 
            if ( typeof item != 'undefined' ) {
                return item.featured == 1;
            } 
        } )
    }

    if (data && data.length) {
        return (
            <View style={{ marginBottom: 50, ...customStyle.container }}>
                <View style={{ ...styles.textView, ...customStyle.textView }}>
                    <Text style={{ ...styles.heading, ...customStyle.title }}>{title}</Text>
                    <Text style={{ ...styles.text, ...customStyle.text }}>{disc}</Text>
                </View>

                <FlatList data={data}
                    //ref={(flatList) => { this.flatList = flatList }}
                    keyExtractor={(item) => 'key' + item.id}
                    horizontal={horizontal}
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        switch (component) { 
                            case 'TrendingItem':
                                return <TrendingItem item={item} />
                            case 'FromOurBlogItem':
                                return <FromOurBlogItem item={item} />
                            case 'TestimonialItem':
                                return <TestimonialItem item={item} />
                            case 'OurPartnerItem':
                                return <OurPartnerItem item={item} />
                            default:
                                return <CarouselItem item={item} />

                        }
                    }}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX
                                }
                            }
                        }
                    ],
                        {
                            useNativeDriver: false
                        }
                    )}
                />

                {dotView ? (<View style={styles.indicatorContainer}>
                    {data.map((image, imageIndex) => {
                        const width = scrollX.interpolate({
                            inputRange: [
                                windowWidth * (imageIndex - 1),
                                windowWidth * imageIndex,
                                windowWidth * (imageIndex + 1)
                            ],
                            outputRange: [8, 16, 8],
                            extrapolate: "clamp"
                        });
                        return (
                            <Animated.View
                                key={imageIndex}
                                style={[styles.normalDot, { width }]}
                            />
                        );
                    })}
                </View>) : whiteSpace ? <View style={{ width: windowWidth, height: 100, backgroundColor: 'white', ...customStyle.whiteSpace }} /> : null}
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}




const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        marginBottom: 4
    },
    text: {
        fontSize: 12
    },
    textView: {
        margin: 10
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
    },
    dotView: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})




export default Carousel