import React, {useState} from 'react';
import animationStyle from '../styles/animation.module.css';
import HeaderUI from '../comps/Header';
import StartTutorialButtonUI from '../comps/StartTutorialButton';
import styled from 'styled-components';
 
export default function Page2({
    title ="HOW TO GET STARTED",
    description ="People want to know the best method when it comes to managing perishability of their foods.",
    descriptiontwo="With this app you can now add and keep track of your groceries expiration dates.",
    descriptionthree="Get started by following the tutorial on how you can add ingredients into your food list!"
}){
 
    return <PageContainer>
    <HeaderContainer>
        <HeaderUI></HeaderUI>
    </HeaderContainer>
    
    <TextContainer>
                <PageTitle>{title}</PageTitle>
                <PageText>{description}</PageText>
                <PageTextTwo>{descriptiontwo}</PageTextTwo>
                <PageTextThree>{descriptionthree}</PageTextThree>
            </TextContainer>
    
    <StartButton>
    <StartTutorialButtonUI routeTo = "/add-protein"></StartTutorialButtonUI>
    </StartButton>
 
    <Animation> <div className={animationStyle.main}>
            <div className={animationStyle.shadowwrapper}>
                <div className={animationStyle.shadow}></div>
            </div>
            <div className={animationStyle.food}>
                <div className={animationStyle.body}></div>
                <div className={animationStyle.eyeLeft}></div>
                <div className={animationStyle.eyeRight}></div>
                <div className={animationStyle.blushLeft}></div>
                <div className={animationStyle.blushRight}></div>
                <div className={animationStyle.mouth}></div>
            </div>
            <div className={animationStyle.hiwrapper}>
                <div className={animationStyle.hi}></div>
                </div>
                </div>
     </Animation>
</PageContainer>
   }

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
    background-color: #E7F2F0;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
`;
 
const HeaderContainer =styled.div`
display: flex;
justify-content: center;
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
 
const PageTitle = styled.h1`
    font-family: "Manrope", sans-serif;
    font-size: 24px;
    font-weight: 400;
    position:relative;
    top:-70px;
`;
 
const PageText = styled.h2`
font-family: "Quicksand", sans-serif;
    font-size: 20px;
    font-weight: 300;
    margin-right: 50px;
    margin-left: 50px;
    text-align:center;
    position:relative;
    top:-60px;
`;
 
const PageTextTwo = styled.h2`
font-family: "Quicksand", sans-serif;
    font-size: 20px;
    font-weight: 300;
    margin-right: 50px;
    margin-left: 50px;
    text-align:center;
    position:relative;
    top:-60px;
`;

const PageTextThree = styled.h2`
    font-family: "Quicksand", sans-serif;
    font-size: 20px;
    font-weight: 300;
    margin-right: 50px;
    margin-left: 50px;
    text-align:center;
    position:relative;
    top:-60px;
`;

const Animation = styled.div`
display: flex;
position:relative;
top:-10px;
 `;
 
 
 const StartButton =styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 position:relative;
 bottom:200px;
 `;

// import React, {useState} from 'react';
// import animationStyle from '../styles/animation.module.css';
// import HeaderUI from '../comps/Header';
// import StartTutorialButtonUI from '../comps/StartTutorialButton';
// import styled from 'styled-components';

// export default function Page2({
//     title ="HOW TO GET STARTED",
//     description ="People want to know the best method when it comes to managing perishability.",
//     descriptiontwo=" With this app you can now know how long food can actually last beyond best before date."
// }){
 
//     return <PageContainer>
//     <HeaderContainer>
//         <HeaderUI></HeaderUI>
//     </HeaderContainer>
    
//     <TextContainer>
//                 <PageTitle>{title}</PageTitle>
//                 <PageText>{description}</PageText>
//                 <PageTextTwo>{descriptiontwo}</PageTextTwo>
//             </TextContainer>
    
//     <Animation> <div className={animationStyle.main}>
//             <div className={animationStyle.shadowwrapper}>
//                 <div className={animationStyle.shadow}></div>
//             </div>
//             <div className={animationStyle.food}>
//                 <div className={animationStyle.body}></div>
//                 <div className={animationStyle.eyeLeft}></div>
//                 <div className={animationStyle.eyeRight}></div>
//                 <div className={animationStyle.blushLeft}></div>
//                 <div className={animationStyle.blushRight}></div>
//                 <div className={animationStyle.mouth}></div>
//             </div>
//             <div className={animationStyle.hiwrapper}>
//                 <div className={animationStyle.hi}></div>
//                 </div>
//                 </div>
//      </Animation>
    
//     <StartButton>
//     <StartTutorialButtonUI routeTo = "/add-protein"></StartTutorialButtonUI>
//     </StartButton>
//         </PageContainer>
        
//    }
// const PageContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;

//     background-color: #E7F2F0;
//     width: 100vw;
//     max-width: 100vw;
//     height: 100vh;
//     max-height: 100vh;
// `;

// const HeaderContainer =styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;

//  `;

//  const TextContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     flex-grow: 1;
// `;

// const PageTitle = styled.h1`
//     font-family: "Manrope", sans-serif;
//     font-size: 24px;
//     font-weight: 400;
//     position:relative;
//     top:-70px;
// `;

// const PageText = styled.h2`
// font-family: "Quicksand", sans-serif;
//     font-size: 20px;
//     font-weight: 300;
//     margin-right: 50px;
//     margin-left: 50px;
//     text-align:center;
//     position:relative;
//     top:-60px;
// `;

// const PageTextTwo = styled.h2`
// font-family: "Quicksand", sans-serif;
//     font-size: 20px;
//     font-weight: 300;
//     margin-right: 50px;
//     margin-left: 50px;
//     text-align:center;
//     position:relative;
//     top:-60px;
// `;

// const Animation = styled.div`
// display: flex: display;
// position:relative;
// top:-10px;
// left:70px;

//  `;


//  const StartButton =styled.div`
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  justify-content: center;
//  position:relative;
//     bottom:35px;
//  `;

