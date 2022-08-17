import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ProgressBar = ({
    colour = "#59A091",
    colour2 = "#B8E0D8",
    colour3 = "#B8E0D8",
    onClick1 = ()=>{},
    onClick2 = ()=>{},
    onClick3 = ()=>{}
}) => {
    return <ProgressBarContainer>
        <ProgressBarDot onClick={onClick1} dotcolour={colour}></ProgressBarDot>
        <ProgressBarDot onClick={onClick2} dotcolour={colour2}></ProgressBarDot>
        <ProgressBarDot onClick={onClick3} dotcolour={colour3}></ProgressBarDot>
    </ProgressBarContainer>
}

const ProgressBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 118px;
    height: 26px;
`;

const ProgressBarDot = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${props=>props.dotcolour};
    border-radius: 90px;
`;

export default ProgressBar;