import React from "react";
import ReactPlayer from 'react-player';
import { Border, Paragraph, Photo, } from './Styles';

//import dropdown js pass it props

function DailyCard(props) {

    return (
        <Border>
            <p>{props.info.date}</p>
            <h1>{props.info.title}</h1>
            {
                props.media.includes('jpg') 
                ? <Photo src={props.media} alt="daily" />
                : <ReactPlayer url={props.media} playing />
            } 
            <Paragraph>{props.info.explanation}</Paragraph>    
        </Border>
    )
}

export default DailyCard;