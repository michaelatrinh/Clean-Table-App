import React from 'react';
import styled from 'styled-components';

const WelcomeBack = styled.div`
background-color: #59A091;
width: 409px;
height: 302px;

border-top-left-radius: 1000px; 
border-top-right-radius: 1000px;

font-size: 14px;
color: white;
text-align: center;
font-family:manrope;

padding-top:20px;
`;



const WelcomeBackUI = () => {

    return <div>
        <WelcomeBack>WELCOME BACK</WelcomeBack>
    </div>
}

export default WelcomeBackUI;
