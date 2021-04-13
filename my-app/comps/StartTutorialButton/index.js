import React from 'react';
import styled from 'styled-components';
import { GenerateRecipeButtonUI } from '../../stories/Button.stories';

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


const GenerateRecipeButton = styled.button`
font-size: 18px;
color: white;
background-color: #59A091;
border-radius:5px;
height: 40px;
width: 228px;
border: none;
letter-spacing:5px;

margin: 20px;
`;

const EnterButtonUI = styled.button`
font-size: 18px;
color: white;
background-color: #59A091;
border-radius:5px;
height: 34px;
width: 178px;
border: none;
letter-spacing:5px;

margin: 20px;
`;

const ButtonsUI = ({
    height="55px",
    
    width="200px",
    fontsize="18px"
}) => {

    return <div>
        <StartTutorialButtonUI width={width} height={height} fontsize={fontsize}>{text}</StartTutorialButtonUI>
        <GenerateRecipeButton height={height} width={width} fontsize={fontsize}>{text}</GenerateRecipeButton>
        <EnterButtonUI height={height} width={width} fontsize={fontsize}>{text}</EnterButtonUI>
        
    </div>
}



export default ButtonsUI;