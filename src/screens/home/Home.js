import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

//------Components
import CarouselItem from './components/Carouselitem'
import Carousel from './components/Carousel'
import SearchBox from './components/Search'
import Banner from './components/Banner'
import FindYourConfort from './components/FindYourComfort'
import axios from "axios";
import Api from "../../ApiUrl";
//------Data
import { dummyData } from '../../data/Data'
import { trendingData } from '../../data/TrendingData'

const Home = ({ navigation }) => {

    const [headerShow, setHeaderShow] = useState(true);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [Trenditems, setTrendItems] = useState([]);
    const [Testimonialitems, setTestimonialitems] = useState([]);
    const [Blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        const keyword = {
            keyword: '',
            sort_by: 'featured'
        };

        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/search/homey_half_map", keyword )
            .then(res => {
                //console.log(dummyData);
               // console.log(res);
                setIsLoaded(true);
                setItems(res.data);

            })
            .catch(err => {console.log(err)}); 

            axios.get((Api.api_url)+"wp-json/jwt-auth/v1/listing/get_trending" )
            .then(res => {
                //console.log(res);
                setIsLoaded(true);
                setTrendItems(res.data);
        
            })
            .catch(err => {console.log(err)});
            
            axios.get((Api.api_url)+"wp-json/jwt-auth/v1/token/user_host" )
            .then(res => {
                //console.log(res);
                setIsLoaded(true);
                setTestimonialitems(res.data);
        
            })
            .catch(err => {console.log(err)});

            axios.get((Api.api_url)+"wp-json/jwt-auth/v1/blogs/get_blogs" )
            .then(res => {
                //console.log(res);
                setIsLoaded(true);
                setBlogs(res.data);
        
            })
            .catch(err => {console.log(err)});
        navigation.setOptions({
            headerShown: headerShow,
        });
    }, [navigation]);
    return (
        <SafeAreaView>
            <ScrollView> 
                <SearchBox navigation={navigation} />
                
                <Carousel 
                    data={items} 
                    component={CarouselItem}
                    key={items.id}
                    navigation={navigation}
                    HeaderComponent={null}
                    pagingEnabled={false}
                    dotView={true} 
                    horizontal={true} 
                    
                    title="Our Featured Homes" 
                    disc="Hand-picked selection of quality places" 
                />
                
                <Carousel 
                    data={Trenditems} 
                    component='TrendingItem' 
                    key={Trenditems.id}
                    title='Trending Destinations'
                    disc='Explore our selection of the best places around the world'
                    whiteSpace={true}
                    customStyle={{
                        container: {
                            flex: 1,
                            backgroundColor: 'white',
                            marginBottom: 0
                        },
                        textView: {
                            marginTop: 20
                        }
                    }}
                />
                <Banner />
                <FindYourConfort />
                <Carousel 
                    data={Testimonialitems}
                    component='TestimonialItem'
                    key={Testimonialitems.id}
                    title='Hear From Our Hosts'
                    disc='The biggest reward is to satisfy our clients and share their experience with us'
                    whiteSpace='true'
                    customStyle={{
                        container: {
                            flex: 1,
                            backgroundColor: 'white'
                        },
                        textView: {
                            marginTop: 50,
                            marginBottom: 50,
                            alignItems: 'center',
                        },
                        text: {
                            marginTop: 10,
                            textAlign: 'center'
                        }
                    }}
                />
                <Carousel 
                    data={Blogs} 
                    component='FromOurBlogItem' 
                    key={Blogs.ID}
                    title='From Our Blog'
                    disc='Keep always update on latest topics.'
                    customStyle={{
                        textView: {
                            marginBottom: 20
                        }
                    }}
                />
                <Carousel 
                    data={dummyData}
                    component='OurPartnerItem'
                    key={dummyData.id}
                    title='Our Partners'
                    disc='We only work with the best companies around the globe'
                    horizontal={true}
                    dotView={true}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home