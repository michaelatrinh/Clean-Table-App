import React from 'react';
import styled from 'styled-components';

const StartTutorialButton = styled.button`
font-size: 18px;
color: white;
background-color: #59A091;
border-radius:5px;
height: 55px;
width: 228px;
border: none;
letter-spacing:5px;

`;

const StartButtonUI = () => {

    return <div>
        <StartTutorialButton>
            start tutorial
        </StartTutorialButton>
    </div>
}

export default StartButtonUI;