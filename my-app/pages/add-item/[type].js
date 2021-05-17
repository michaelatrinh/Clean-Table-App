import React, {useState} from 'react';
import styled from 'styled-components';
import FoodButton from '../../comps/FoodButtonUI';
import ProgressBar from '../../comps/ProgressBar';
import Heading from '../../comps/Header';
import EmptyBox from '../../comps/EmptyBox';
import FoodIcon from '../../comps/FoodButtonPantryUI';
import NavBar from '../../comps/NavBar/index2.js';
import FunFact from '../../comps/FunFactWindow';
import ConfirmWindow from '../../comps/ConfirmationWindow';
import ProteinCol from '../../comps/FoodButtonProtein';
import CarbCol from '../../comps/FoodButtonCarbs';
import VegeCol from '../../comps/FoodButtonVege';
import BlankCol from '../../comps/FoodButtonColBlank';
import {useRouter} from 'next/router';

// --- FOOD BUTTON PROP DYNAMIC OPTION ROUTING ------------------
var item = null;
var options = {
    protein:null,
    carbohydrate:null,
    vegetable:null
};
var col = {
    option1:"",
    option2:"",
    option3:""
};
var pageTitle = {
    option1:""
};
var pageDesc = {
    option1:""
};
var foodName = {
    option1:"",
    option2:"",
    option3:""
};
var foodImage = {
    option1:"",
    option2:"",
    option3:""
}
var imgWidth = {
    option1:"",
    option2:"",
    option3:""
}
var imgHeight = {
    option1:"",
    option2:"",
    option3:""
}

export default function PantryAddProtein({
    title = "PROTEINS",
    description = "Add a PROTEIN to your pantry!"
}){
// --- DYNAMIC ROUTING OPTIONS ----------------------------------
    const router = useRouter();
    const {type} = router.query;

    if(type === "protein"){
        pageTitle.option1 = "PROTEINS";
        pageDesc.option1 = "Add a PROTEIN to your pantry!";
        foodImage.option1 = "/chicken_drumstick.png";
        foodImage.option2 = "/shaved_beef.png";
        foodImage.option3 = "/tofu_squares.png";
        foodName.option1 = "CHICKEN";
        foodName.option2 = "BEEF";
        foodName.option3 = "TOFU";
        imgWidth.option1 = "100px";
        imgWidth.option2 = "110px";
        imgWidth.option3 = "126px";
        imgHeight.option1 = "100px";
        imgHeight.option2 = "90px";
        imgHeight.option3 = "99px";
        col.option1 = "Chicken";
        col.option2 = "Beef";
        col.option3 = "Tofu";
    }    
    
    if(type === "carbohydrate"){
        pageTitle.option1 = "CARBOHYDRATES";
        pageDesc.option1 = "Add a CARBOHYDRATE to your pantry!";
        foodImage.option1 = "/rice_bowl.png";
        foodImage.option2 = "/pasta_dish.png";
        foodImage.option3 = "/potatoes.png";
        foodName.option1 = "RICE";
        foodName.option2 = "PASTA";
        foodName.option3 = "POTATOES";
        imgWidth.option1 = "107px";
        imgWidth.option2 = "112px";
        imgWidth.option3 = "118px";
        imgHeight.option1 = "78px";
        imgHeight.option2 = "90px";
        imgHeight.option3 = "106px";
        col.option1 = "Rice";
        col.option2 = "Pasta";
        col.option3 = "Potatoes";
    }    
    
    if(type === "vegetable"){
        pageTitle.option1 = "VEGETABLES";
        pageDesc.option1 = "Add a VEGETABLE to your pantry!";
        foodImage.option1 = "/broccoli.png";
        foodImage.option2 = "/onion.png";
        foodImage.option3 = "/carrot.png";
        foodName.option1 = "BROCCOLI";
        foodName.option2 = "ONION";
        foodName.option3 = "CARROT";
        imgWidth.option1 = "107px";
        imgWidth.option2 = "93px";
        imgWidth.option3 = "86px";
        imgHeight.option1 = "99px";
        imgHeight.option2 = "91px";
        imgHeight.option3 = "89px";
        col.option1 = "Broccoli";
        col.option2 = "Onion";
        col.option3 = "Carrot";
    }

// === POP UP CONFIRMATION WINDOW STATE CHANGE ==================
    const [greyState, setGreyState] = useState(false);
    var width = 0;
    var height = 0;
    var newWidth = 0;
    var newHeight = 0;
    if(greyState){
        width = 100;
        height = 100;
        newWidth = 336;
        newHeight = 262;
    }

// === FOOD BUTTON STATE CHANGE WHEN CLICKED ====================
    const [clickState1, setClickState1] = useState(false);
    const [clickState2, setClickState2] = useState(false);
    const [clickState3, setClickState3] = useState(false);
    var newDarken1 = "0px 4px 5px #494948";
    var newDarken2 = "0px 4px 5px #494948";
    var newDarken3 = "0px 4px 5px #494948";

    if(clickState1){
        newDarken1 = "inset 0 0 10px 5px #C4C4C4";
    } else if(clickState2){
        newDarken2 = "inset 0 0 10px 5px #C4C4C4";
    } else if(clickState3){
        newDarken3 = "inset 0 0 10px 5px #C4C4C4";
    }

    const HandleClick1 = (option) => {
        setClickState1(!clickState1);
        setTimeout(NextStep, 150);
        item = option;
        sessionStorage.setItem("Item", item);
    }    
    
    const HandleClick2 = (option) => {
        setClickState2(!clickState2);
        setTimeout(NextStep, 150);
        item = option;
        sessionStorage.setItem("Item", item);
    }
    
    const HandleClick3 = (option) => {
        setClickState3(!clickState3);
        setTimeout(NextStep, 10);
        item = option;
        sessionStorage.setItem("Item", item);
    }
    
    
    
    const NextStep = () => {
        setGreyState(true);
        // var routeTo = "/add-carbohydrate";
        // router.push(routeTo);
    }


// === YES AND NO BUTTONS STATE CHANGE AND YES BUTTON ROUTE =====
    const [yesState, setYesState] = useState(false);
    const [noState, setNoState] = useState(false);
    var newYesShadow = "";
    var newNoShadow = "";
    if(yesState){
        var newYesShadow = "inset 0 0 10px 0px #5C5C5C";
    }
    if(noState){
        var newNoShadow = "inset 0 0 10px 0px #5C5C5C";
    }

    // const router = useRouter();
    
    const NextPage = () => {
        var routeTo = "/homepage2";
        router.push(routeTo);
    }

    const HandleNo = () => {
        setNoState(true);
        setTimeout(HandleNo2, 150);
    }
    const HandleNo2 = () => {
        setGreyState(!greyState);
        setClickState1(false);
        setClickState2(false);
        setClickState3(false);
        setNoState(false);
    }

    const HandleYes = () => {
        setYesState(true);
        setTimeout(NextPage, 150);
    }

// === FOOD BUTTON STATE CHANGE WHEN CLICKED ====================
    // const [clickState, setClickState] = useState(false);
    // var newDarken = "0px 4px 5px #494948";
    // if(clickState){
    //     newDarken = "inset 0 0 10px 5px #C4C4C4";
    // }

    // const HandleClick = () => {
    //     setClickState(!clickState);
    // }

// === PAGE RETURN ==============================================
    return <PageContainer>

        <PopUpBg width={width} height={height}></PopUpBg>
        
        <ConfirmWindow cWidth={newWidth} cHeight={newHeight} onClickX={HandleNo2} onClickN={HandleNo} onClickY={HandleYes} Yshadow={newYesShadow} Nshadow={newNoShadow}></ConfirmWindow>

        <SecondPageContainer>
            <HeaderContainer>
                <Heading onClickA={()=>router.push("/homepage2")}></Heading>
            </HeaderContainer>

            <TextContainer>
                <PageTitle>{pageTitle.option1}</PageTitle>
                <PageDescriptor>{pageDesc.option1}</PageDescriptor>
            </TextContainer>

            <FoodButtonContainer>
                <BlankCol onClickA={()=>HandleClick1(col.option1)} onClickB={()=>HandleClick2(col.option2)} onClickC={()=>HandleClick3(col.option3)} darken1={newDarken1} darken2={newDarken2} darken3={newDarken3} foodimage1={foodImage.option1} foodimage2={foodImage.option2} foodimage3={foodImage.option3} foodname1={foodName.option1} foodname2={foodName.option2} foodname3={foodName.option3} imagewidth1={imgWidth.option1} imagewidth2={imgWidth.option2} imagewidth3={imgWidth.option3} imageheight1={imgHeight.option1} imageheight2={imgHeight.option2} imageheight3={imgHeight.option3}></BlankCol>

                {/* <ProteinCol onClickA={()=>HandleClick1(col.option1)} onClickB={()=>HandleClick2(col.option2)} onClickC={()=>HandleClick3(col.option3)} darken1={newDarken1} darken2={newDarken2} darken3={newDarken3}></ProteinCol> */}

                {/* <FoodButton onClickA={HandleClick} foodname="CHICKEN" foodimage="/chicken_drumstick.png" imageheight="100px" imagewidth="100px" bgcolour="#6FC3B2" darken={newDarken}></FoodButton>

                <FoodButton onClickA={HandleClick} foodname="BEEF" foodimage="/shaved_beef.png" imageheight="90px" imagewidth="110px" bgcolour="#6FC3B2" darken={newDarken}></FoodButton>

                <FoodButton onClickA={HandleClick} foodname="TOFU" foodimage="/tofu_squares.png" imageheight="99px" imagewidth="126px" bgcolour="#6FC3B2" darken={newDarken}></FoodButton> */}
            </FoodButtonContainer>

            {/* <AddButtonContainer>
                <AddButton onClick={()=>setGreyState(true)}>
                    <h2>ADD TO PANTRY</h2>
                </AddButton>
            </AddButtonContainer> */}

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
    width: 100vw;
    // max-width: 375px;
    height: 100vh;
    // max-height: 910px;
`;

const SecondPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #E7F2F0;
    width: 100vw;
    // max-width: 375px;
    height: 100vh;
    // max-height: 910px;
`;

const PopUpBg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #C2C2C2;
    width: ${props=>props.width}vw;
    // max-width: 375px;
    height: ${props=>props.height}vh;
    // max-height: 910px;

    position: absolute;

    // overflow: hidden;
    opacity: 0.5;
    z-index: 5;

    transition: width 0.05s, height 0.05s;
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 2;
    margin-top: -2rem;
`;

const PageTitle = styled.h1`
    font-family: "Manrope", sans-serif;
    font-size: 30px;
    font-weight: 300;
    margin-top: 0;
    text-align: center;
`;

const PageDescriptor = styled.h2`
    font-family: "Quicksand", sans-serif;
    font-size: 25px;
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
    margin-top: -4rem;
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