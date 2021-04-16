import React, {useState} from 'react';
import styled from 'styled-components';
import FoodButton from '../comps/FoodButtonUI';
import ProgressBar from '../comps/ProgressBar';
import Heading from '../comps/Header';
import {useRouter} from 'next/router';

export default function tutorialPage({
    title = "PROTEINS",
    description = "Add a PROTEIN to your pantry!"
}){
    // var boxshadow1 = "0px 4px 5px #494948";
    // if(clickState === true){
    //     boxshadow = "inset 0 0 10px 5px #C4C4C4";
    // }
    // const HandleClick = () => {
    //     setClickState(true);
    // }

    return <TutPageContainer>
        <HeaderContainer>
            <Heading></Heading>
        </HeaderContainer>

        <TextContainer>
            <TutPageTitle>{title}</TutPageTitle>
            <TutPageDescriptor>{description}</TutPageDescriptor>
        </TextContainer>

        <FoodButtonContainer>
            <FoodButton routeTo="/add-vegetable" foodname="RICE" foodimage="/rice_bowl.png" imageheight="78px" imagewidth="107px" bgcolour="#6FC3B2"></FoodButton>

            <FoodButton routeTo="/add-vegetable" foodname="PASTA" foodimage="/pasta_dish.png" imageheight="90px" imagewidth="112px" bgcolour="#6FC3B2"></FoodButton>
            
            <FoodButton routeTo="/add-vegetable" foodname="POTATOES" foodimage="/potatoes.png" imageheight="106px" imagewidth="118px" bgcolour="#6FC3B2"></FoodButton>
        </FoodButtonContainer>

        <ProgressBarContainer>
            <ProgressBar colour="#59A091" colour2="#B8E0D8" colour3="#B8E0D8"></ProgressBar>  
        </ProgressBarContainer>
    </TutPageContainer>
}

const TutPageContainer = styled.div`
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

const FoodButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    flex-grow: 3;
`;

const TutPageTitle = styled.h1`
    font-family: "Manrope", sans-serif;
    font-size: 24px;
    font-weight: 300;
    margin-top: 0;
`;

const TutPageDescriptor = styled.h2`
    font-family: "Quicksand", sans-serif;
    font-size: 18px;
    font-weight: 300;
    margin: 0;
`;

const ProgressBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;