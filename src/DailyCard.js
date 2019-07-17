import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from 'react-player';

import Data from './Data';

function DailyCard(props) {

    console.log('props', props.info);
    return (
        <>
            <p>{props.info.date}</p>
            <h1>{props.info.title}</h1>
            <ReactPlayer url={props.info.url} playing />
            <p>{props.info.explanation}</p>        
        </>
    )
}

export default DailyCard;