import React, {useState} from 'react';
import animationStyle from '../../styles/animation.module.css';
import HeaderUI from '../../comps/Header/index.js';
import StartTutorialButtonUI from '../../comps/StartTutorialButton/index.js';
import NavBar from '../../comps/NavBarCongrats';
import styled from 'styled-components';

export default function NavBarTutPage({
    title ="ICONS YOU NEED TO KNOW",
    description ="The navigation icons may not be universally known so we want to make sure you know what they are, and where they take you!",
    
}){
 
    return <BigBoy>
    <HeaderCont>
        <HeaderUI></HeaderUI>
    </HeaderCont>

    <AllContent>
    
    <TextContain>
        <PageTitle>{title}</PageTitle>
        <PageText>{description}</PageText>
    </TextContain>

<TextandNav>
    <Texttop1>
        <div>1. HOME</div>
    </Texttop1>

    <Texttop2>
        <div>3. MORE <br></br> INFO</div>
    </Texttop2>

    <Downarrow1>
        <img width="30px" height="40px" src="/downarrow.png"></img>
    </Downarrow1>

    <Downarrow2>
        <img width="30px" height="40px" src="/downarrow.png"></img>
    </Downarrow2>

    <NavBarContainer>
     <img width="290px" height="65px" src="/NEWnavBar.png"></img>
   </NavBarContainer>

   <UpArrow1>
    <img width="30px" height="40px" src="/uparrow.png"></img>
    </UpArrow1>

    

    <Textbot1>
        <div>2. RECIPE <br></br> GENERATOR</div>
    </Textbot1>


    </TextandNav>

    <MoreInfo>
        <div>
            1. HOME: Click on this icon to bring you to the Homepage where you can see which items need to be used based on thier expiration date. This is where you can add items to your pantry too!
            
        </div>
        <br></br>
        <div>
            2. RECIPE GENERATOR: Click on this icon to navigate to the "Recipe Generator". This feature creates recipes using the items from your pantry that are about to expire so they don't go to waste!
        </div>
        <br></br>
        <div>
            3. MORE INFO: Want to learn more about food waste? Click on this icon to be navigated to a fun and interactive infographic all about food waste in Canada!
        </div>
    </MoreInfo>

    <Start>
        <div>Let's Get Started</div>
    </Start>

    </AllContent>

</BigBoy>

}

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
// position: relative;
// top: -155px;
`;

const Downarrow1 = styled.div`
position:relative;
left: 85px;
bottom: 30px;
`;

const Downarrow2 = styled.div`
position:relative;
left: 270px;
bottom: 73px;
`;

const Texttop1 = styled.div`
position:relative;
left: 70px;
bottom: 15px;
{
   -webkit-animation: PULSE 2.5s infinite; 
   
   -ms-animation: PULSE 2.5s infinite;
   
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
left: 99px;
bottom: 40px;
text-align:center;
{
    -webkit-animation: PULSE 2.25s infinite; 
    
    -ms-animation: PULSE 2.25s infinite;
    
    animation: PULSE 2.5s infinite; 
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
left:174px;
bottom: 45px;
`;

const UpArrow2 = styled.div`
position: relative;
left:274px;
bottom: 88px;
`;

const Textbot1 = styled.div`
position:relative;
left:-1px;
bottom: 30px;
text-align:center;
{
    -webkit-animation: PULSE 2.5s infinite; 
    
    -ms-animation: PULSE 2.5s infinite;
    
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
    -webkit-animation: PULSE 1.2s infinite; 
    
    -ms-animation: PULSE 1.2s infinite;
    
    animation: PULSE 1.25s infinite; 
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
top:20px;
margin-left: 40px;
margin-right:40px
`;

const Start = styled.button`
position:relative;
left: 95px;
top:70px;
font-size:18px;
color:white;
background-color:#59A091;
border:none;
border-radius:2px;
padding-left: 30px;
padding-right: 30px;
padding-top: 15px;
padding-bottom: 15px;
`;

const AllContent = styled.div`
display: flex;
flex-direction: column;


// position:relative;
// top:-60px;
`;

const BigBoy = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    background-color: #E7F2F0;
    width: 100vw;
    // max-width: 375px;
    height: 100vh;
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
