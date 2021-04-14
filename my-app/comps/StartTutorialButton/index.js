import React from 'react';
import styled from 'styled-components';
//import { GenerateRecipeButtonUI } from '../../stories/Button.stories';

const StartTutorialButtonUI = styled.button`
font-size: ${props=>props.fontsize};
color: white;
background-color: #59A091;
border-radius:5px;
height: ${props=>props.height};
width: ${props=>props.width};
border: none;
letter-spacing:5px;
`;



const ButtonsUI = ({
    height="55px",
    text="Start Tutorial",
    width="200px",
    fontsize="18px"
}) => {

    return <StartTutorialButtonUI width={width} height={height} fontsize={fontsize}>{text}</StartTutorialButtonUI> 
}

export default ButtonsUI;