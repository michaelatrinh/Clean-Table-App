import React from 'react';
import styled from 'styled-components';

const HomeFoodTimerBar = styled.div`
height: 52px;
width: 342px;
left: 0px;
top: 0px;
border-radius: 10px;

background-color: ${props=>props.bgcolorlight};

letter-spacing:5px;
`;

const HomeFoodTimerItem = styled.div`
font-size: 24px;
line-height: 33px;
margin-top: -40px;
margin-left:160px;
width: 153px;
left: 162px;
top: 9px;
`;

const HomeFoodTimerDate = styled.div`
font-size: 24px;
line-height: 33px;
position:relative;
margin-top: -40px;
margin-left:23px;
z-index:2;
`;

const HomeFoodTimerDarkBar= styled.div`
background-color:${props=>props.bgcolordark};
position:relative;
height: 52px;
width: 126px;
margin-top: -45px;
border-radius: 10px;
z-index: 1;
`;



//props

const HomeFoodTimerUI = ({
    DAYS="1 DAYS",
    ITEM="CHICKEN",

    bgcolordark="red",
    bgcolorlight="#FCD8D8",
}) => {

    return <div>
        <HomeFoodTimerBar bgcolorlight={bgcolorlight}></HomeFoodTimerBar>
        <HomeFoodTimerItem>{ITEM}</HomeFoodTimerItem>
        <HomeFoodTimerDarkBar bgcolordark={bgcolordark}></HomeFoodTimerDarkBar>

    bgcolor="#F16D6D",
    bgcolor1="#FCD8D8",
}) => {

    return <div>
        <HomeFoodTimerBar bgcolor={bgcolor1}></HomeFoodTimerBar>
    <HomeFoodTimerItem>{ITEM}</HomeFoodTimerItem>
    <HomeFoodTimerDarkBar bgcolor={bgcolor}></HomeFoodTimerDarkBar>

        <HomeFoodTimerDate>{DAYS}</HomeFoodTimerDate>
    </div>
}

export default HomeFoodTimerUI;

