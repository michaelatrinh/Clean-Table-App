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
    const [clickState, setClickState] = useState(false);
    var ShadowToggle = "0px 4px 5px #494948";
    if(clickState){
        ShadowToggle = "inset 0 0 10px 5px #5C5C5C";
    }

    const HandleClick = () => {
        setClickState(!clickState);
        setTimeout(NextPage, 150);
    }

    const router = useRouter();

    const NextPage = () => {
        var routeTo = "/pantry-add-protein";
        // var routeToCarbs = "/pantry-add-carbohydrate";
        // var routeToVeges = "/pantry-add-vegetable";
        router.push(routeTo);
    }

    return <PageContainer>
        <HeaderContainer>
            <Heading></Heading>
        </HeaderContainer>

        <TextContainer>
            <PageTitle>{title}</PageTitle>
            <PageDescriptor>{description}</PageDescriptor>
        </TextContainer>

        <CategoryContainer>
            <CategoryButton onClick={HandleClick} shadow={ShadowToggle}>
                <h2>PROTEINS</h2>
            </CategoryButton>
            <CategoryButton onClick={HandleClick} shadow={ShadowToggle}>
                <h2>CARBOHYDRATES</h2>
            </CategoryButton>
            <CategoryButton onClick={HandleClick} shadow={ShadowToggle}>
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
    width: 350px;
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
    box-shadow: ${props=>props.shadow};
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