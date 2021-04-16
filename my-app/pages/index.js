import React from 'react';
import '../styles/animation.module.css';
import HeaderUI from '../comps/Header';
import StartTutorialButtonUI from '../comps/StartTutorialButton';
import styled from 'styled-components';


export default function Page2({
    title ="HOW TO GET STARTED",
    description ="People want to know the best method when it comes to managing perishability.",
    descriptiontwo=" With this app you can now know how long food can actually last beyond best before date."
}){
    return <PageContainer>
<HeaderContainer>
    <HeaderUI></HeaderUI>
</HeaderContainer>

<TextContainer>
            <PageTitle>{title}</PageTitle>
            <PageText>{description}</PageText>
            <PageTextTwo>{descriptiontwo}</PageTextTwo>
        </TextContainer>

<Animation> <div class="main">
        <div class="shadow-wrapper">
            <div class="shadow"></div>
        </div>
        <div class="food">
            <div class="body"></div>
            <div class="eye left"></div>
            <div class="eye right"></div>
            <div class="blush left"></div>
            <div class="blush right"></div>
            <div class="mouth"></div>
        </div>
        <div class="hi-wrapper">
            <div class="hi"></div>
            </div>
            </div>
 </Animation>

<StartButton>
<StartTutorialButtonUI></StartTutorialButtonUI>
</StartButton>
    </PageContainer>
    
} 

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #E7F2F0;
    width: 375px;
    max-width: 375px;
    height: 812px;
    max-height: 812px;
`;

const HeaderContainer =styled.div`
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

const PageTitle = styled.h1`
    font-family: "Manrope", sans-serif;
    font-size: 24px;
    font-weight: 400;
    position:relative;
    top:-130px;
`;

const PageText = styled.h2`
font-family: "Quicksand", sans-serif;
    font-size: 20px;
    font-weight: 300;
    margin-right: 50px;
    margin-left: 50px;
    text-align:center;
    position:relative;
    top:-120px;
`;

const PageTextTwo = styled.h2`
font-family: "Quicksand", sans-serif;
    font-size: 20px;
    font-weight: 300;
    margin-right: 50px;
    margin-left: 50px;
    text-align:center;
    position:relative;
    top:-120px;
`;

const Animation = styled.div`
display: flex;
postion:relative;

z-index:5;
 `;


 const StartButton =styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 position:relative;
    bottom:50px;
 `;

