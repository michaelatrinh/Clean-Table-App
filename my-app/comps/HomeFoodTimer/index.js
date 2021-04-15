import React from 'react';
import styled from 'styled-components';

const HomeFoodTimerBar = styled.div`
height: 52px;
width: 342px;
left: 0px;
top: 0px;
border-radius: 10px;
background: ${props=>props.bgcolor};
letter-spacing:5px;
`;


const HomeFoodTimerDarkBar= styled.div`
background-color:${props=>props.bgcolor};
position:relative;
height: 52px;
width: ${props=>props.width};
margin-top: -45px;
border-radius: 10px;
z-index:1;
`;

const HomeFoodTimerDate = styled.div`
font-size: 24px;
line-height: 33px;
position:relative;
margin-top: -40px;
margin-left:23px;
z-index:2;
font-family: manrope;
`;


const HomeFoodTimerItem = styled.div`
font-size: 24px;
line-height: 33px;
position:relative;
margin-top: -40px;
margin-left:160px;
z-index:2;
font-family: manrope;
`;


//props

const HomeFoodTimerUI = ({
    DAYS="1 DAYS",
    ITEM="CHICKEN",
    bgcolor="#F16D6D",
    bgcolor1="#FCD8D8",
    barwidth= "126px",
}) => {

    return <div>
        <HomeFoodTimerBar bgcolor={bgcolor1} ></HomeFoodTimerBar>
    <HomeFoodTimerItem>{ITEM}</HomeFoodTimerItem>
    <HomeFoodTimerDarkBar bgcolor={bgcolor} width={barwidth}></HomeFoodTimerDarkBar>
        <HomeFoodTimerDate>{DAYS}</HomeFoodTimerDate>
    </div>
}

export default HomeFoodTimerUI;

