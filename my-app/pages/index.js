
import React, {useState} from 'react';
import styled from 'styled-components';
import HeaderUI from '../comps/Header';
import PlaceholderUI from '../comps/icon-placeholder/Placeholder.js';
import GenerateRecipeButton from '../comps/GenerateRecipeButton';
import NavBarUI from '../comps/NavBar';

export default function PickIngredientsPage({
    title = "PICK YOUR INGREDIENTS",
}){
    // var boxshadow1 = "0px 4px 5px #494948";
    // if(clickState === true){
    //     boxshadow = "inset 0 0 10px 5px #C4C4C4";
    // }
    // const HandleClick = () => {
    //     setClickState(true);
    // }


    return <PageContainer>
<HeaderContainer>
    <HeaderUI></HeaderUI>
</HeaderContainer>

        <TextContainer>
            <TutPageTitle>{title}</TutPageTitle>
        </TextContainer>

        <FoodButtonContainer>
       <PlaceholderUI> </PlaceholderUI>
        </FoodButtonContainer>

        <GenerateRecipeButton> </GenerateRecipeButton>

        <NavBarContainer>
        <NavBarUI></NavBarUI>
        </NavBarContainer>
    </PageContainer>
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #E7F2F0;
    width: 375px;
    max-width: 375px;
    height: 963px;
    max-height: 963px;
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
    flex-direction: row;
    flex-grow: 3;
`;


const TutPageTitle = styled.h1`
position: absolute;
width: 276px;
height: 33px;
left: 51px;
top: 135px;

font-family: Manrope;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 33px;
`;

const Placeholder = styled.div`
display:flex;
`;

const GenerateRecipeButton1 = styled.h2`
position:relative;
height: 40px;
width: 228px;
justify-content: center;
align-item: center;
top: 801px;
`;

const NavBarContainer =styled.div`
height: 84px;
width: 377px;
left: 0px;
top: 879px;
border-radius: 0px;
`;

// import React from 'react';
// import styled from 'styled-components';
// import FoodButton from '../comps/FoodButtonUI';
// import ProgressBar from '../comps/ProgressBar';
// import FoodButton from '../comps/FoodButtonUI';
// import ProgressBar from '../comps/ProgressBar';
// import Heading from '../comps/Header';



