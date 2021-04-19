import React from 'react';
import styled from 'styled-components';
//import { GenerateRecipeButtonUI } from '../../stories/Button.stories';

const StartTutorialButtonUI = styled.button`
font-size: ${props=>props.fontsize};
color: white;
background-color: #59A091;
border-radius:5px;
height: ${props=>props.height};
width: 228px;
border: none;
letter-spacing:5px;
`;

const StartButtonUI = ({
    text = "start tutorial",
    height = "55px"
}) => {

    return <div>
        <StartTutorialButton height={height}>
            {text}
        </StartTutorialButton>
    </div>
}

export default ButtonsUI;