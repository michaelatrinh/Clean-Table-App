import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const EmptyBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    border-radius: 20px;
    background: #FFFFFF;
    box-shadow: ${props=>props.shadow};
`;

const EmptyImage = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54px;
    width: 60px;
`;

const EmptyBoxUI = ({
    foodimage = "/plus.png",
    routeTo = "/pantry-pick-category",
    onClickBox = ()=>{},
    boxshadow = ""
}) => {
    const router = useRouter();
    return <EmptyBox onClick={onClickBox} shadow={boxshadow}>
        <EmptyImage src={foodimage}></EmptyImage>
    </EmptyBox>
}

export default EmptyBoxUI;

