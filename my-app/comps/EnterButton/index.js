import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const EnterButtonCSS = styled.button`
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

const EnterButtonUI = (
    fontsize = "18px",
    height = "34px",
    width = "178px",
    text = "enter"
) => {
    const router = useRouter();

    return <EnterButtonCSS onClick={()=>router.push("/Page2")} fontsize={fontsize} height={height} width={width}>{text}</EnterButtonCSS>
}

export default EnterButtonUI;
