import React, {useState} from 'react';
import styled from 'styled-components';
import FoodButton from '../comps/FoodButtonUI';
import ProgressBar from '../comps/ProgressBar';
import Heading from '../comps/Header';
import {useRouter} from 'next/router';

export default function pantry({
    title = "MY PANTRY",
    description = "Click on the empty boxes to add more items to your pantry."
}){
    return <PantryPageContainer>
        <HeaderContainer>
            <Heading></Heading>
        </HeaderContainer>

        <TextContainer>
            <PantryPageTitle>{title}</PantryPageTitle>
            <PantryPageDescriptor>{description}</PantryPageDescriptor>
        </TextContainer>
    </PantryPageContainer>
}

const PantryPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #E7F2F0;
    width: 375px;
    max-width: 375px;
    height: 812px;
    max-height: 812px;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`;

const PantryPageTitle = styled.h1`
    font-family: "Manrope", sans-serif;
    font-size: 24px;
    font-weight: 300;
    margin-top: 0;
`;

const PantryPageDescriptor = styled.h2`
    font-family: "Quicksand", sans-serif;
    font-size: 18px;
    font-weight: 300;
    margin: 0;
`;