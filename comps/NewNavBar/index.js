import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const NNavCont = styled.div`
    height: 600px;
    width: 375px;
    background-color: #59A091;
    border-radius: 50px 50px 0px 0px; 
`;

const LinkCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    position: relative;
    top: 10%;

    a{
        color: white;
        font-size: 36px;
        font-family: Manrope;
        font-weight: bold;

        padding: 0px 50px 15px;
    }
`;


const NewNavUI = ({


}) => {
    const router = useRouter();
    return <NNavCont>
        <LinkCont>
            <a onClick={()=>router.push("/homepage")}>HOME</a>
            <a onClick={()=>router.push("/pantry")}>MY PANTRY</a>
            <a onClick={()=>router.push("/ingredient-picker")}>RECIPE GENERATOR</a>
            <a onClick={()=>router.push()}>MORE INFO</a>

        </LinkCont>
        
    </NNavCont>


}


export default NewNavUI;