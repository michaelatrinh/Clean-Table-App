import React from 'react';
import styled from 'styled-components';

const BackgroundRec = styled.div`
position: absolute;
height: 181.55543518066406px;
width: 332px;
left: 20px;
border-radius: 20px;
background: #E7F2F0;
`;

const SubHeading =styled.div`
display:flex
position:relative;
text-align:center;
margin-top 25px;


font-family: 'Manrope', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 20px;
/* identical to box height */

color: #737978;
`;
//props

const BackgroundRecUI = ({
   ITEM="PROTEIN",
}) => {


    return <div>
        <BackgroundRec>
        <SubHeading> {ITEM} </SubHeading>
        </BackgroundRec>
    </div>
}

export default BackgroundRecUI;

