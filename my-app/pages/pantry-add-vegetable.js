import React, {useState} from 'react';
import styled from 'styled-components';
import FoodButton from '../comps/FoodButtonUI';
import ProgressBar from '../comps/ProgressBar';
import Heading from '../comps/Header';
import EmptyBox from '../comps/EmptyBox';
import FoodIcon from '../comps/FoodButtonPantryUI';
import NavBar from '../comps/NavBar';
import FunFact from '../comps/FunFactWindow';
import ConfirmWindow from '../comps/ConfirmationWindow';
import {useRouter} from 'next/router';

export default function PantryAddProtein({
    title = "CARBOHYDRATES",
    description = "Add a CARBOHYDRATE to your pantry!"
}){
    // Lines 17 - 28 are state changes for the confirmation pop-up window
    const [greyState, setGreyState] = useState(false);
    var width = 0;
    var height = 0;
    var newWidth = 0;
    var newHeight = 0;
    if(greyState){
        width = 375;
        height = 910;
        newWidth = 336;
        newHeight = 262;
    }

    // Lines 30 - 47 are state changes after pressing a food button
    const [clickState, setClickState] = useState(false);
    var newDarken = "0px 4px 5px #494948";
    if(clickState){
        newDarken = "inset 0 0 10px 5px #C4C4C4";
    }

    const HandleClick = () => {
        setClickState(!clickState);
        // setTimeout(NextPage, 150);
    }
    
    const router = useRouter();
    
    // const NextPage = () => {
    //     var routeTo = "/add-carbohydrate";
    //     router.push(routeTo);
    // }

    return <PageContainer>

        <PopUpBg width={width} height={height}></PopUpBg>
        
        <ConfirmWindow cWidth={newWidth} cHeight={newHeight} onClickX={()=>setGreyState(false)} onClickN={()=>setGreyState(false)} onClickY={()=>router.push("/pantry")}></ConfirmWindow>

        <SecondPageContainer>
            <HeaderContainer>
                <Heading></Heading>
            </HeaderContainer>

            <TextContainer>
                <PageTitle>{title}</PageTitle>
                <PageDescriptor>{description}</PageDescriptor>
            </TextContainer>

            <FoodButtonContainer>
                <FoodButton onClickA={HandleClick} foodname="BROCCOLI" foodimage="/broccoli.png" imageheight="99px" imagewidth="107px" bgcolour="#6FC3B2" darken={newDarken}></FoodButton>

                <FoodButton onClickA={HandleClick} foodname="ONION" foodimage="/onion.png" imageheight="91px" imagewidth="93px" bgcolour="#6FC3B2" darken={newDarken}></FoodButton>

                <FoodButton onClickA={HandleClick} foodname="CARROT" foodimage="/carrot.png" imageheight="89px" imagewidth="86px" bgcolour="#6FC3B2" darken={newDarken}></FoodButton>
            </FoodButtonContainer>

            <AddButtonContainer>
                <AddButton onClick={()=>setGreyState(true)}>
                    <h2>ADD TO PANTRY</h2>
                </AddButton>
            </AddButtonContainer>

            <NavBarContainer>
                <NavBar></NavBar>
            </NavBarContainer>
        </SecondPageContainer>
    </PageContainer>
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

    background-color: #E7F2F0;
    width: 375px;
    max-width: 375px;
    height: 910px;
    max-height: 910px;
`;

const PopUpBg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #C2C2C2;
    width: ${props=>props.width}px;
    max-width: 375px;
    height: ${props=>props.height}px;
    max-height: 910px;

    position: absolute;

    // overflow: hidden;
    opacity: 0.5;
    z-index: 5;

    transition: width 0.05s, height 0.05s;
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