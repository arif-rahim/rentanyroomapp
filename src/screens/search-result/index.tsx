import React,{useEffect,useState} from 'react';
import Carousel from '../../helper/Carousel';
import ListItem from './components/ListItem';
import axios from "axios";
import Api from "../../ApiUrl";
//------Data
import { dummyData } from '../../data/Data'
 
//----Header
import Header from './components/Header';
import { useRoute } from '@react-navigation/native';

export default function SearchResult( props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const route = props.route.params.listings;
   
    const [items, setItems] = useState();
    useEffect(() => {
        const keyword = {
            route
        };

        axios.post((Api.api_url)+"wp-json/jwt-auth/v1/search/homey_half_map", keyword )
            .then(res => {
               setItems(res.data);
               
                setIsLoaded(true);

            })
            .catch(err => {console.log(err)}); 
    }, []);
    return (
        <Carousel
            data={items}
            HeaderComponent={Header}
            component={ListItem}
            customStyle={{
                container: {
                    backgroundColor: '#eee'
                }
            }}
        />
    );
}

