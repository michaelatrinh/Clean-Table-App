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
    // Lines 13 - 29 are state changes and routing after pressing a food button
    const [clickState, setClickState] = useState(false);
    var newDarken = "0px 4px 5px #494948";
    if(clickState){
        newDarken = "inset 0 0 10px 5px #C4C4C4";
    }
    
    const HandleClick = () => {
        setClickState(!clickState);
        setTimeout(NextPage, 150);
    }
    
    const router = useRouter();
    
    const NextPage = () => {
        var routeTo = "/homepage";
        router.push(routeTo);
    }

    // Lines 31 - 45 are to navigate between pages using the dots at the bottom of the screen
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
            <FoodButton onClickA={HandleClick} foodname="BROCCOLI" foodimage="/broccoli.png" imageheight="99px" imagewidth="107px" bgcolour="#6FC3B2" darken={newDarken}></FoodButton>

            <FoodButton onClickA={HandleClick} foodname="ONION" foodimage="/onion.png" imageheight="91px" imagewidth="93px" bgcolour="#6FC3B2" darken={newDarken}></FoodButton>
            
            <FoodButton onClickA={HandleClick} foodname="CARROT" foodimage="/carrot.png" imageheight="89px" imagewidth="86px" bgcolour="#6FC3B2" darken={newDarken}></FoodButton>
        </FoodButtonContainer>

        <ProgressBarContainer>
            <ProgressBar onClick1={Page1} onClick2={Page2} colour="#B8E0D8" colour2="#B8E0D8" colour3="#59A091"></ProgressBar>  
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