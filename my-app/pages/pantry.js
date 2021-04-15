import React, {useState} from 'react';
import styled from 'styled-components';
import FoodButton from '../comps/FoodButtonUI';
import ProgressBar from '../comps/ProgressBar';
import Heading from '../comps/Header';
import EmptyBox from '../comps/EmptyBox';
import FoodIcon from '../comps/FoodButtonPantryUI';
import NavBar from '../comps/NavBar';
import {useRouter} from 'next/router';

export default function pantry({
    title = "MY PANTRY",
    description = "Click on the empty boxes to add more items to your pantry."
}){
    return <PantryPageContainer>
        <HeaderContainer>
            <Heading></Heading>
        </HeaderContainer>

        <TextContainer>
            <PantryPageTitle>{title}</PantryPageTitle>
            <PantryPageDescriptor>{description}</PantryPageDescriptor>
        </TextContainer>

        <FoodIconColContainer>
            <FoodIconRowContainer>
                <FoodIcon days="1 DAY" foodimage="/chicken_drumstick.png" imageheight="58px" imagewidth="58px" bgcolour="#F16D6D" foodname="CHICKEN" expirydate="expires on: February 1, 2021"></FoodIcon>
                
                <FoodIcon days="1 DAY" foodimage="/pasta_dish.png" imageheight="53px" imagewidth="66px" bgcolour="#F16D6D" foodname="PASTA" expirydate="expires on: February 1, 2021"></FoodIcon>
                
                <FoodIcon days="2 DAYS" foodimage="/onion.png" imageheight="54px" imagewidth="55px" bgcolour="#FFC32E" foodname="ONION" expirydate="expires on: February 2, 2021"></FoodIcon>
            </FoodIconRowContainer>        
            
            <FoodIconRowContainer>
                <FoodIcon days="12 DAYS" foodimage="/carrot.png" imageheight="55px" imagewidth="56px" bgcolour="#59A091" foodname="CARROT" expirydate="expires on: February 14, 2021"></FoodIcon>
                
                <FoodIcon days="18 DAY" foodimage="/potatoes.png" imageheight="60px" imagewidth="67px" bgcolour="#59A091" foodname="POTATOES" expirydate="expires on: February 20, 2021"></FoodIcon>
                
                <EmptyBox></EmptyBox>
            </FoodIconRowContainer>

            <FoodIconRowContainer>
                <EmptyBox></EmptyBox>

                <EmptyBox></EmptyBox>

                <EmptyBox></EmptyBox>
            </FoodIconRowContainer>
        </FoodIconColContainer>

        <TipContainer>

        </TipContainer>

        <NavBarContainer>
            <NavBar></NavBar>
        </NavBarContainer>
    </PantryPageContainer>
}

const PantryPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #E7F2F0;
    width: 375px;
    max-width: 375px;
    height: 812px;
    max-height: 812px;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`;

const PantryPageTitle = styled.h1`
    font-family: "Manrope", sans-serif;
    font-size: 24px;
    font-weight: 300;
    margin-top: 0;
`;

const PantryPageDescriptor = styled.h2`
    font-family: "Quicksand", sans-serif;
    font-size: 18px;
    font-weight: 300;
    margin: 0;
`;

const FoodIconColContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-grow: 3;
`;

const FoodIconRowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const TipContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

const NavBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;