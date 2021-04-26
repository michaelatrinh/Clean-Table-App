import React, {useState} from 'react';
import styled from 'styled-components';

const Test = ({
    height="300"
}) => {
    return <Something height={height}>
        <Text></Text>
    </Something>
}

export default Test;

const Something = styled.div`
    display: flex;
    background-color: black;
    width: 300px;
    height: ${props=>props.height}px;
`;

const Text = styled.h1`
    font-family: "Manrope", sans-serif;
`;