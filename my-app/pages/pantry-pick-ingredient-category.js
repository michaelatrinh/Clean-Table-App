import React, {useState} from 'react';
import styled from 'styled-components';
import FoodButton from '../comps/FoodButtonUI';
import ProgressBar from '../comps/ProgressBar';
import Heading from '../comps/Header';
import EmptyBox from '../comps/EmptyBox';
import FoodIcon from '../comps/FoodButtonPantryUI';
import NavBar from '../comps/NavBar';
import FunFact from '../comps/FunFactWindow'
import {useRouter} from 'next/router';

export default function PantryCategory({
    title = "Just finished grocery shopping?",
    description = "Choose a category to add more items to your pantry list!",
    routeTo = "/pantry-add-protein"
}){
    const router = useRouter();
    return <PageContainer>
        <HeaderContainer>
            <Heading></Heading>
        </HeaderContainer>

        <TextContainer>
            <PageTitle>{title}</PageTitle>
            <PageDescriptor>{description}</PageDescriptor>
        </TextContainer>

        <CategoryContainer>
            <CategoryButton onClick={()=>router.push(routeTo)}>
                <h2>PROTEINS</h2>
            </CategoryButton>
            <CategoryButton onClick={()=>router.push("/pantry-add-carbohydrate")}>
                <h2>CARBOHYDRATES</h2>
            </CategoryButton>
            <CategoryButton onClick={()=>router.push("/pantry-add-vegetable")}>
                <h2>VEGETABLES</h2>
            </CategoryButton>
        </CategoryContainer>

        <NavBarContainer>
            <NavBar></NavBar>
        </NavBarContainer>
    </PageContainer>
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #E7F2F0;
    width: 375px;
    max-width: 375px;
    height: 910px;
    max-height: 910px;
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
    margin-top: -2.5rem;
`;

const PageTitle = styled.h1`
    font-family: "Manrope", sans-serif;
    font-size: 24px;
    font-weight: 300;
    margin-top: 0;
    text-align: center;
`;

const PageDescriptor = styled.h2`
    font-family: "Quicksand", sans-serif;
    font-size: 18px;
    font-weight: 300;
    margin: 0;
    text-align: center;
`;

const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    flex-grow: 3;
    margin-top: -5rem;
`;

const CategoryButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #59A091;
    width: 237px;
    height: 74px;
    &>h2 {
        font-family: "Manrope", sans-serif;
        font-size: 24px;
        color: #FFFFFF;
    }
`;

const NavBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
`;