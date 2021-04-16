import React from 'react';
import styled from 'styled-components';

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
    foodimage = "/plus.png"
}) => {
    return <EmptyBox>
        <EmptyImage src={foodimage}></EmptyImage>
    </EmptyBox>
}

export default EmptyBoxUI;

