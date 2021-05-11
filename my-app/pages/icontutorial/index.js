import React, {useState} from 'react';
import animationStyle from '../../styles/animation.module.css';
import HeaderUI from '../../comps/Header/index.js';
import StartTutorialButtonUI from '../../comps/StartTutorialButton/index.js';
import NavBar from '../../comps/NavBarCongrats';

import styled from 'styled-components';



const NavBarContainer = styled.div`
display: block;
margin-left: 45px;
margin-right: auto;

position: relative;
bottom: 60px;
`;

const TextContain = styled.div`
position: relative;
bottom: 10px;

text-align: center;
`;

const HeaderCont = styled.div `
position: relative;
top: -85px;
`;

const Downarrow1 = styled.div`
position:relative;
left: 70px;
bottom: 30px;
`;

const Downarrow2 = styled.div`
position:relative;
left: 205px;
bottom: 73px;
`;

const Texttop1 = styled.div`
position:relative;
left: 60px;
bottom: 20px;

{
   -webkit-animation: PULSE 2s infinite; 
   
   -ms-animation: PULSE 2s infinite;
   
   animation: PULSE 2.25s infinite; 
 }
 

 @-webkit-keyframes PULSE{
    0%{color:#59A091;}	
     110%{color: black;}
 }
 
 @-ms-keyframes PULSE{
   0%{color:#59A091;}	
     110%{color: black;}
 }
 
 @keyframes PULSE{
   0%{color:#59A091;}	
     110%{color: black;}
 }
 

`;

const Texttop2 = styled.div`
position:relative;
left: 180px;
bottom: 40px;

{
    -webkit-animation: PULSE 2s infinite; 
    
    -ms-animation: PULSE 2s infinite;
    
    animation: PULSE 2.25s infinite; 
  }
  

  @-webkit-keyframes PULSE{
     0%{color:#59A091;}	
      110%{color: black;}
  }
  
  @-ms-keyframes PULSE{
    0%{color:#59A091;}	
      110%{color: black;}
  }
  
  @keyframes PULSE{
    0%{color:#59A091;}	
      110%{color: black;}
  }
`;

const UpArrow1 = styled.div`
position:relative;
left:135px;
bottom: 45px;

`;

const UpArrow2 = styled.div`
position: relative;
left:274px;
bottom: 88px;
`;

const Textbot1 = styled.div`
position:relative;
left:-36px;
bottom: 80px;

text-align:center;

{
    -webkit-animation: PULSE 2s infinite; 
    
    -ms-animation: PULSE 2s infinite;
    
    animation: PULSE 2.25s infinite; 
  }
  

  @-webkit-keyframes PULSE{
     0%{color:#59A091;}	
      110%{color: black;}
  }
  
  @-ms-keyframes PULSE{
    0%{color:#59A091;}	
      110%{color: black;}
  }
  
  @keyframes PULSE{
    0%{color:#59A091;}	
      110%{color: black;}
  }
`;

const Textbot2 = styled.div`
position: relative;
left:103px;
bottom: 122px;

text-align:center;

{
    -webkit-animation: PULSE 2s infinite; 
    
    -ms-animation: PULSE 2s infinite;
    
    animation: PULSE 2.25s infinite; 
  }
  

  @-webkit-keyframes PULSE{
     0%{color:#59A091;}	
      110%{color: black;}
  }
  
  @-ms-keyframes PULSE{
    0%{color:#59A091;}	
      110%{color: black;}
  }
  
  @keyframes PULSE{
    0%{color:#59A091;}	
      110%{color: black;}
  }
`;

const TextandNav = styled.div`
position: relative;
top:10px;
`;

const MoreInfo = styled.div`
position: relative;
top:-30px;

margin-left: 40px;
margin-right:40px

`;

const Start = styled.div`
position:relative;
left: 130px;


`;

export default function NavBarTutPage({
    title ="ICONS YOU NEED TO KNOW",
    description ="The navigation icons may not be universally known so we want to make sure you know what they are, and where they take you!",
    
}){
 
    return <PageContainer>
    <HeaderCont>
        <HeaderUI></HeaderUI>
    </HeaderCont>
    
    <TextContain>
        <PageTitle>{title}</PageTitle>
        <PageText>{description}</PageText>
    </TextContain>

<TextandNav>
    <Texttop1>
        <div>1. HOME</div>
    </Texttop1>

    <Texttop2>
        <div>3. MY PANTRY</div>
    </Texttop2>

    <Downarrow1>
        <img width="30px" height="40px" src="/downarrow.png"></img>
    </Downarrow1>

    <Downarrow2>
        <img width="30px" height="40px" src="/downarrow.png"></img>
    </Downarrow2>

    <NavBarContainer>
     <img width="290px" height="65px" src="/Screen Shot 2021-05-10 at 10.09.28 PM.png"></img>
   </NavBarContainer>

   <UpArrow1>
    <img width="30px" height="40px" src="/uparrow.png"></img>
    </UpArrow1>

    <UpArrow2>
    <img width="30px" height="40px" src="/uparrow.png"></img>
    </UpArrow2>

    <Textbot1>
        <div>2. RECIPE <br></br> GENERATOR</div>
    </Textbot1>

    <Textbot2>
        <div>4. MORE<br></br>INFO</div>
    </Textbot2>

    </TextandNav>

    <MoreInfo>
        <div>
            1. HOME: Click on this icon to bring you to the Homepage where you can see which items need to be used based on thier expiration date.
            
        </div>
        <br></br>
        <div>
            2. RECIPE GENERATOR: Click on this icon to navigate to the "Recipe Generator". This feature creates recipes using the items from your pantry that are about to expire so they don't go to waste!
        </div>
        <br></br>
        <div>
            3. MY PANTRY: Click on this icon to see what you have in your pantry or add new items to your pantry! Remember to only purchase new produce when you've used up all the old produce!
        </div>
        <br></br>
        <div>
            4. MORE INFO: Want to learn more about food waste? Click on this icon to be navigated to a fun and interactive infographic all about food waste in Canada!
        </div>
    </MoreInfo>

    <Start>
        <button>Let's Get Started</button>
    </Start>

        </PageContainer>

   }
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #E7F2F0;
    width: 375px;
    max-width: 375px;
    height: 1300px;
    max-height: 1300px;
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

const Animation = styled.div`
display: flex: display;
position:relative;
top:-10px;
left:70px;

 `;


 const StartButton =styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 position:relative;
 bottom:35px;
 `;




