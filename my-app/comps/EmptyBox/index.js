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
    routeTo = "/pantry-pick-ingredient-category"
}) => {
    const router = useRouter();
    return <EmptyBox onClick={()=>router.push(routeTo)}>
        <EmptyImage src={foodimage}></EmptyImage>
    </EmptyBox>
}

export default EmptyBoxUI;

