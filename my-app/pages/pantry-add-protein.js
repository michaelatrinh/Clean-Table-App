import React, {useState} from 'react';
import styled from 'styled-components';
import FoodButton from '../comps/FoodButtonUI';
import ProgressBar from '../comps/ProgressBar';
import Heading from '../comps/Header';
import EmptyBox from '../comps/EmptyBox';
import FoodIcon from '../comps/FoodButtonPantryUI';
import NavBar from '../comps/NavBar';
import FunFact from '../comps/FunFactWindow'
import ConfirmWindow from '../comps/notification-component'
import {useRouter} from 'next/router';

export default function PantryAddProtein({
    title = "PROTEINS",
    description = "Add a PROTEIN to your pantry!"
}){
    const [confirmState, setConfirmState] = useState(false);

    return <PageContainer>
        <SecondPageContainer>

        </SecondPageContainer>
        <HeaderContainer>
            <Heading></Heading>
        </HeaderContainer>

        <TextContainer>
            <PageTitle>{title}</PageTitle>
            <PageDescriptor>{description}</PageDescriptor>
        </TextContainer>

        <FoodButtonContainer>
            <FoodButton foodname="CHICKEN" foodimage="/chicken_drumstick.png" imageheight="100px" imagewidth="100px" bgcolour="#6FC3B2"></FoodButton>

            <FoodButton foodname="BEEF" foodimage="/shaved_beef.png" imageheight="90px" imagewidth="110px" bgcolour="#6FC3B2"></FoodButton>

            <FoodButton foodname="TOFU" foodimage="/tofu_squares.png" imageheight="99px" imagewidth="126px" bgcolour="#6FC3B2"></FoodButton>
        </FoodButtonContainer>

        <AddButtonContainer>
            <AddButton>
                <h2>ADD TO PANTRY</h2>
            </AddButton>
        </AddButtonContainer>

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

const SecondPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #C2C2C2;
    width: ${props=>props.width};
    max-width: 375px;
    height: ${props=>props.height};
    max-height: 910px;
    overflow: hidden;
    z-index: 10;
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
    flex-grow: 2;
    // margin-top: -2.5rem;
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

const FoodButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    flex-grow: 3;
`;

const AddButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 3;
`;

const AddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #59A091;
    width: 126px;
    height: 42px;
    &>h2 {
        font-family: "Manrope", sans-serif;
        font-size: 13px;
        color: #FFFFFF;
    }
`;

const NavBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
`;