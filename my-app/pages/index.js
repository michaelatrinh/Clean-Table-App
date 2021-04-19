
import React, {useState} from 'react';
import styled from 'styled-components';
import FoodButton from '../comps/FoodButtonUI';
import HeaderUI from '../comps/Header';
import GenerateRecipeButton from '../comps/GenerateRecipeButton';
import NavBar from '../comps/NavBar';

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

        <BackgroundRec1>
            <SubHeading1>PROTEIN</SubHeading1>
        <FoodButtonContainer>
            <FoodButton routeTo="/add-carbohydrate" foodname="CHICKEN" foodimage="/chicken_drumstick.png" imageheight="50px" imagewidth="50px" bgcolour="#6FC3B2" ></FoodButton>

            <FoodButton routeTo="/add-carbohydrate" foodname="BEEF" foodimage="/shaved_beef.png" imageheight="90px" imagewidth="110px" bgcolour="#6FC3B2"></FoodButton>
            
            <FoodButton routeTo="/add-carbohydrate" foodname="TOFU" foodimage="/tofu_squares.png" imageheight="99px" imagewidth="126px" bgcolour="#6FC3B2"></FoodButton>
        </FoodButtonContainer>
        </BackgroundRec1>

    <BackgroundRec2></BackgroundRec2>
    <SubHeading2>CARBOHYDRATES</SubHeading2>

    <BackgroundRec3></BackgroundRec3>
    <SubHeading3>VEGTABLE</SubHeading3>

        <GenerateRecipeButton1> </GenerateRecipeButton1>
        <NavBar1></NavBar1>
    </PageContainer>
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #FFFFFF;
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

const SubHeading1 =styled.div`
position: absolute;
width: 72px;
height: 25px;
left: 151px;
top: 201px;

font-family: Manrope;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 25px;
/* identical to box height */


color: #737978;
`;

const SubHeading2 =styled.div`
position: absolute;
width: 145px;
height: 25px;
left: 114px;
top: 412px;

font-family: Manrope;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 25px;
/* identical to box height */


color: #696259;
`;

const SubHeading3 =styled.div`
position: absolute;
width: 105px;
height: 25px;
left: 136px;
top: 619px;

font-family: Manrope;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 25px;
/* identical to box height */


color: #737978;
`;

const BackgroundRec1 =styled.div`
position: absolute;
height: 181.55543518066406px;
width: 332px;
left: 20px;
top: 185.5361328125px;
border-radius: 20px;
background: #E7F2F0;

`;
const BackgroundRec2 =styled.div`
position: absolute;
height: 181.5555419921875px;
width: 332px;
left: 23px;
top: 393px;
border-radius: 20px;
background: #E7F2F0;


`;

const BackgroundRec3 =styled.div`
position: absolute;
height: 165px;
width: 332px;
left: 23px;
top: 604px;
border-radius: 20px;
background: #E7F2F0;
`;

const GenerateRecipeButton1 = styled.h2`
height: 40px;
width: 228px;
left: 76px;
top: 801px;
border-radius: 0px;

`;

const NavBar1 =styled.div`
height: 84px;
width: 377px;
left: 0px;
top: 879px;
border-radius: 0px;

`;