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
// === BOX SHADOW STATE CHANGE SETUP ============================
    const [clickStateP, setClickStateP] = useState(false);
    const [clickStateC, setClickStateC] = useState(false);
    const [clickStateV, setClickStateV] = useState(false);
    var ShadowToggleP = "0px 4px 5px #494948";
    var ShadowToggleC = "0px 4px 5px #494948";
    var ShadowToggleV = "0px 4px 5px #494948";

    if(clickStateP){
        ShadowToggleP = "inset 0 0 10px 5px #5C5C5C";
    } else if(clickStateC){
        ShadowToggleC = "inset 0 0 10px 5px #5C5C5C";
    } else if(clickStateV){
        ShadowToggleV = "inset 0 0 10px 5px #5C5C5C";
    }

// === BOX SHADOW STATE CHANGE AND ROUTING ======================
    const HandleClickP = () => {
        setClickStateP(!clickStateP);
        setTimeout(NextPageP, 150);
    }    
    const HandleClickC = () => {
        setClickStateC(!clickStateC);
        setTimeout(NextPageC, 150);
    }    
    const HandleClickV = () => {
        setClickStateV(!clickStateV);
        setTimeout(NextPageV, 150);
    }

    const router = useRouter();

    const NextPageP = () => {
        var routeToProteins = "/pantry-add-protein";
        // var routeToCarbs = "/pantry-add-carbohydrate";
        // var routeToVeges = "/pantry-add-vegetable";
        router.push(routeToProteins);
    }    
    const NextPageC = () => {
        // var routeTo = "/pantry-add-protein";
        var routeToCarbs = "/pantry-add-carbohydrate";
        // var routeToVeges = "/pantry-add-vegetable";
        router.push(routeToCarbs);
    }    
    const NextPageV = () => {
        // var routeTo = "/pantry-add-protein";
        // var routeToCarbs = "/pantry-add-carbohydrate";
        var routeToVeges = "/pantry-add-vegetable";
        router.push(routeToVeges);
    }

// === PAGE DISPLAY =============================================
    return <PageContainer>
        <HeaderContainer>
            <Heading></Heading>
        </HeaderContainer>

        <TextContainer>
            <PageTitle>{title}</PageTitle>
            <PageDescriptor>{description}</PageDescriptor>
        </TextContainer>

        <CategoryContainer>
            <CategoryButtonP onClick={HandleClickP} shadowP={ShadowToggleP}>
                <h2>PROTEINS</h2>
            </CategoryButtonP>

            <CategoryButtonC onClick={HandleClickC} shadowC={ShadowToggleC}>
                <h2>CARBOHYDRATES</h2>
            </CategoryButtonC>

            <CategoryButtonV onClick={HandleClickV} shadowV={ShadowToggleV}>
                <h2>VEGETABLES</h2>
            </CategoryButtonV>
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

const CategoryButtonP = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #59A091;
    box-shadow: ${props=>props.shadowP};
    width: 237px;
    height: 74px;
    &>h2 {
        font-family: "Manrope", sans-serif;
        font-size: 24px;
        color: #FFFFFF;
    }
`;

const CategoryButtonC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #59A091;
    box-shadow: ${props=>props.shadowC};
    width: 237px;
    height: 74px;
    &>h2 {
        font-family: "Manrope", sans-serif;
        font-size: 24px;
        color: #FFFFFF;
    }
`;

const CategoryButtonV = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #59A091;
    box-shadow: ${props=>props.shadowV};
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