import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const GenerateRecipeButton = ({
    height="40px",
    text="start tutorial",
    width="228px",
    fontsize="18px",
    onClickGenerate = ""
}) => {
    const router = useRouter();

    return <GenerateRecipeButton1 onClick={onClickGenerate} height={height} width={width} fontsize={fontsize}>{text}</GenerateRecipeButton1> 
}

export default GenerateRecipeButton;

const GenerateRecipeButton1 = styled.button`
font-size: ${props=>props.fontsize};
color: white;
background-color: #59A091;
border-radius:5px;
height: ${props=>props.height};
width: ${props=>props.width};
border: none;
letter-spacing:5px;

margin: 20px;
`;

