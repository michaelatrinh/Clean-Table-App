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

const StartButton = styled.button`
`;

const StartButtonUI =({
routeTo="/tutorial-pages"
}) =>{
    return <div>
        <StartButton onClick={()=>router.push(routeTo)}>
        <StartTutorialButton>start tutorial</StartTutorialButton>
        </StartButton>
    </div>
}

export default StartButtonUI;