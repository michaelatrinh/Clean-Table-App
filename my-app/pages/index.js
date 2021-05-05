import React from 'react';
// import Head from 'next/head'; 
import styled from 'styled-components';

import Button from '../comps/EnterButton';
import Login from '../comps/Login';
import Footer from '../comps/WelcomePageFooter';


const FirstPageContainer = styled.div`
    width: 100vw;
    height: 100vh;

    // margin: 100px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: 5px 1px 30px 5px rgba(0, 0, 0, 0.5);

    background: linear-gradient(-45deg, #59a091, #d4f6f4, #ffffff);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .headertext{
        font-size: 36px;
        font-weight: bold;
        color: #302B40;
    }
`;
 
const Img = styled.img`
    margin-top: 200px;
    width: 200px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    h3{
        font-size: 22px;
    }
    img{
        width: 281px;
        height:165px;

        border: 4px solid #59A091;
        // margin-top: 80px;
    }
`;

const MiddleContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    flex-grow: 3;
`;

const Mid1 = styled.div`
    // margin-top: 160px;
`;

const Mid2 = styled.div`
    // margin-top: -70px;
`;

const Mid3 = styled.div`
    // margin-top: -30px;
`;

const EndSection = styled.div`
    // position: absolute;
    // margin-top: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-grow: 2;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

export default function FirstPage({
    logoimage = "/logo.png",
    text = "enter"

}) {

      return <FirstPageContainer>
        <Img src={logoimage}></Img>
        <p className="headertext">W E L C O M E </p>
        <Login></Login>
        <ButtonContainer>
            <Button text={text} height="34px"></Button>
        </ButtonContainer>
        
        <Circle>
            <p>created by: <br></br>
Jessica, Arielle, Michael, & Alicia</p>
        </Circle>
    </FirstPageContainer>  
}