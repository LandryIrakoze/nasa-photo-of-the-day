import React from "react";
import styled from 'styled-components';

export const Palette = {
    red: '#DB022C',
    yellow: '#EDDD3F',
    lightYellow: '#ECDB89',
    grey: '#83807E',
    blue: '#050951',
}

export const Background = styled.div`
    background-image: url("https://66.media.tumblr.com/dda7b295067f347bd3a183de6e45a6f3/tumblr_piitf2Ae7h1s57y11o1_1280.pnj");
    background-size: cover;
    background-repeat: repeat;
    text-align: center;
`;

export const Border = styled.button`
    max-width: 800px;
    border: 2px solid ${Palette.blue};
    border-radius: 3px;
    box-shadow: 10px 10px ${Palette.blue};
    background-color: lightYellow;
`;

export const Paragraph = styled.p`
    font-size: 16px;
    padding: 10px 70px;
    text-align: left;
`;

export const Photo = styled.img`
    max-width: 500px;
    height: auto;
`;