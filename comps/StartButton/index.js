import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const StartButtonUI = ({
    text="Start",
    // onClickA = "/infographic/page2"
}) => {
    const router = useRouter();
    return <div>
        <Back onClick={()=>router.push("/infographic/page2")}>
        {text}
        </Back>
    </div>
}


export default StartButtonUI;

const Back = styled.div`
    background-color:#59A091;

    width:241px;
    height:64px;
    top:629px;
    left:66px;
    border-radius:20px;
    color: white;

    display:flex;
    align-items:center;
    justify-content: center;

    font-family: sans-serif;
    font-weight: bold;
    font-size: 36px;

    line-height: 42px;
    text-align: center;

    div:hover{
        background-color: #FBAD81;
    }
`;
// function StartButtonUI(text="Start") {
//     return `<div class="back" style="
//     background-color:#FE9179;
//     Width:241px;
//     Height:64px;
//     Top:629px;
//     Left:66px;
//     Border-radius:20px;
//     color: white;

//     display:flex;
//     align-items:center;
//     justify-content: center;
//     font-family: sans-serif;
//     font-family: Roboto;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 36px;


//     display:flex;
//     align-items:center;
//     justify-content: center;

//     font-family: sans-serif;
//     font-weight: bold;
//     font-size: 36px;


//     line-height: 42px;
//     text-align: center;
//     ">${text}



//     </div>


//     `
// }

// //export const StartButton = StartButtonUI();


//export const StartButton = StartButtonUI();

