import React, { useEffect, useState } from "react";
import axios from "axios";
import { dummyData } from "../data/Data";

function listing_data() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        // fetch("https://staging.webpebter.com/wp-json/wp/v2/listings")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             setIsLoaded(true);
        //             setItems(result);
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             setIsLoaded(true);
        //             setError(error);
        //         }
        //     )
    }, [])

   
   return dummyData;
    // if (error) {
    //     return <div>Error: { error.message } </div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
    //     return (
    //         <ul>
    //         {
    //             items.map(item => (
    //                 <li key= { item.id } >
    //                 { item.name } { item.price }
    //             < /li>
    //             ))
    //         }
    //         </ul>
    //     );
    // }
}

export default listing_data;