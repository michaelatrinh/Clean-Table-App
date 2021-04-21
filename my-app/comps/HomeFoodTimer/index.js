import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 342px;
    height: 52px;
`;

const HomeFoodTimerBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 52px;
    width: 342px;
    border-radius: 10px;
    background-color: ${props=>props.bgcolorlight};
`;

const SecondContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
`;

const ThirdContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 2;
`;

const HomeFoodTimerItem = styled.h1`
    font-family: "Manrope", sans-serif;
    font-size: 24px;
    font-weight: 300;
`;

const HomeFoodTimerDate = styled.h1`
    font-family: "Manrope", sans-serif;
    font-size: 24px;
    font-weight: 300;
    z-index:2;
`;

const HomeFoodTimerDarkBar= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${props=>props.bgcolordark};
    height: 52px;
    width: 126px;
    border-radius: 10px;
    z-index: 1;
`;

const HomeFoodTimerUI = ({
    DAYS="1 DAYS",
    ITEM="CHICKEN",

    bgcolordark="#F16D6D",
    bgcolorlight="#FCD8D8",
}) => {

    return <Container>
        <HomeFoodTimerBar bgcolorlight={bgcolorlight}>
            <SecondContainer>
                <HomeFoodTimerDarkBar bgcolordark={bgcolordark}>
                    <HomeFoodTimerDate>{DAYS}</HomeFoodTimerDate>
                </HomeFoodTimerDarkBar>
            </SecondContainer>

            <ThirdContainer>
                <HomeFoodTimerItem>{ITEM}</HomeFoodTimerItem>
            </ThirdContainer>
        </HomeFoodTimerBar>
    </Container>
}
    {/* bgcolor="#F16D6D",


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
} */}

export default HomeFoodTimerUI;

