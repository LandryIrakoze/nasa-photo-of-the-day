import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DailyCard from './DailyCard'

function Data() {

    const [cardData, setCardData] = useState([]);
    const [date, setDate] = useState(new Date());
    const [url, setUrl] = useState('');
    console.log('mydate', date.toISOString().slice(0, 10));

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=dSjMDd4DM9DLug2UninDmgJbhFple9neUfiGdLiv&date=${date.toISOString().slice(0, 10)}`)
            .then(response => {
                const data = response.data;
                const resUrl = response.data.url;
                setCardData(data);
                setUrl(resUrl);
                
            })
            .catch(response => {
                console.log('something is broken, please try again', response)
            })
    }, []);

    console.log('card data', cardData);
    console.log('url', url);

    return (
        <DailyCard info={cardData} media={url}/>
    )
}

export default Data;