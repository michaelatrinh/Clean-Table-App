import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const HeaderUI = ({
    text = "THE COST OF FOOD WASTE"
}) => {
    return <First>
        <Second>
            {text}
        </Second>
    </First>
}

const First = styled.div`
background-color: #59A091; 
height:133px;
width:375px;

display: flex;
justify-content:center;
align-items:center;
`;

const Second = styled.div`
font-size:30px;
font-weight: bold;

color: #FFFFFF;
text-shadow: 0px 3px 0px #70614F;
font-family: sans-serif;

display: flex;
justify-content:center;
align-items:center;

padding: 50px;
text-align:center;
`;

export default HeaderUI;