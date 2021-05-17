import React, {useState} from 'react';
import styled from 'styled-components';
import FoodButton from '../comps/FoodButtonUI';
import ProgressBar from '../comps/ProgressBar';
import VegeColumn from '../comps/FoodButtonVege';
import Heading from '../comps/Header';
import {useRouter} from 'next/router';

export default function tutorialPage({
    title = "VEGETABLES",
    description = "Add a VEGETABLE to your pantry!"
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
        var routeTo = "/homepage";
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
            <VegeColumn onClickA={HandleClick1} onClickB={HandleClick2} onClickC={HandleClick3} darken1={newDarken1} darken2={newDarken2} darken3={newDarken3}></VegeColumn>

            {/* <FoodButton onClickA={HandleClick} foodname="BROCCOLI" foodimage="/broccoli.png" imageheight="99px" imagewidth="107px" bgcolour="#6FC3B2" darken={newDarken}></FoodButton>

            <FoodButton onClickA={HandleClick} foodname="ONION" foodimage="/onion.png" imageheight="91px" imagewidth="93px" bgcolour="#6FC3B2" darken={newDarken}></FoodButton>
            
            <FoodButton onClickA={HandleClick} foodname="CARROT" foodimage="/carrot.png" imageheight="89px" imagewidth="86px" bgcolour="#6FC3B2" darken={newDarken}></FoodButton> */}
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

    margin-top: -15px;
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