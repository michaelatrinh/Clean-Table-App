import React, {useState} from 'react';
import styled from 'styled-components';
import FoodButton from '../comps/FoodButtonUI';
import ProgressBar from '../comps/ProgressBar';
import CarbColumn from '../comps/FoodButtonCarbs';
import Heading from '../comps/Header';
import {useRouter} from 'next/router';

export default function tutorialPage({
    title = "CARBOHYDRATES",
    description = "Add a CARBOHYRDATE to your pantry!"
}){
    // Lines 13 - 49 are state changes and routing after pressing a food button
    const [clickState1, setClickState1] = useState(false);
    const [clickState2, setClickState2] = useState(false);
    const [clickState3, setClickState3] = useState(false);
    var newDarken1 = "0px 4px 5px #494948";
    var newDarken2 = "0px 4px 5px #494948";
    var newDarken3 = "0px 4px 5px #494948";

    if(clickState1){
        newDarken1 = "inset 0 0 10px 5px #C4C4C4";
    } else if(clickState2){
        newDarken2 = "inset 0 0 10px 5px #C4C4C4";
    } else if(clickState3){
        newDarken3 = "inset 0 0 10px 5px #C4C4C4";
    }

    const HandleClick1 = () => {
        setClickState1(!clickState1);
        setTimeout(NextPage, 150);
    }    
    
    const HandleClick2 = () => {
        setClickState2(!clickState2);
        setTimeout(NextPage, 150);
    }
    
    const HandleClick3 = () => {
        setClickState3(!clickState3);
        setTimeout(NextPage, 150);
    }
    
    const router = useRouter();
    
    const NextPage = () => {
        var routeTo = "/add-vegetable";
        router.push(routeTo);
    }

    // Lines 51 - 65 are to navigate between pages using the dots at the bottom of the screen
    const Page1 = () => {
        var routeToPage1 = "/add-protein";
        router.push(routeToPage1);
    }

    const Page2 = () => {
        var routeToPage2 = "/add-carbohydrate";
        router.push(routeToPage2);
    }

    const Page3 = () => {
        var routeToPage3 = "/add-vegetable";
        router.push(routeToPage3);
    }

    return <TutPageContainer>
        <HeaderContainer>
            <Heading></Heading>
        </HeaderContainer>

        <TextContainer>
            <TutPageTitle>{title}</TutPageTitle>
            <TutPageDescriptor>{description}</TutPageDescriptor>
        </TextContainer>

        <FoodButtonContainer>
            <CarbColumn onClickA={HandleClick1} onClickB={HandleClick2} onClickC={HandleClick3} darken1={newDarken1} darken2={newDarken2} darken3={newDarken3}></CarbColumn>

            {/* <FoodButton onClickA={HandleClick1} foodname="RICE" foodimage="/rice_bowl.png" imageheight="78px" imagewidth="107px" bgcolour="#6FC3B2" darken={newDarken}></FoodButton>

            <FoodButton onClickA={HandleClick} foodname="PASTA" foodimage="/pasta_dish.png" imageheight="90px" imagewidth="112px" bgcolour="#6FC3B2" darken={newDarken}></FoodButton>
            
            <FoodButton onClickA={HandleClick} foodname="POTATOES" foodimage="/potatoes.png" imageheight="106px" imagewidth="118px" bgcolour="#6FC3B2" darken={newDarken}></FoodButton> */}
        </FoodButtonContainer>

        <ProgressBarContainer>
            <ProgressBar onClick1={Page1} onClick3={Page3} colour="#B8E0D8" colour2="#59A091" colour3="#B8E0D8"></ProgressBar>  
        </ProgressBarContainer>
    </TutPageContainer>
}

const TutPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #E7F2F0;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
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

    margin-top: -100px;
`;

const TutPageTitle = styled.h1`
    font-family: "Manrope", sans-serif;
    font-size: 30px;
    font-weight: 300;
    margin-top: 0;
`;

const TutPageDescriptor = styled.h2`
    font-family: "Quicksand", sans-serif;
    font-size: 25px;
    font-weight: 300;
    margin: 0;
`;

const ProgressBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;