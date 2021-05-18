import React, {useState} from 'react';
import styled from 'styled-components';
import Header from '../../comps/Header/index.js';
import Menu from '../../comps/NavBar/index.js';
import Placeholder from '../../comps/icon-placeholder/Placeholder.js';
import GenerateRecipeButton from '../../comps/GenerateRecipeButton/index.js';
import {useRouter} from 'next/router';

var options = {
    protein:null,
    carb:null,
    vege:null
};

export default function IngredientPickerPage({
    title = "PICK YOUR PROTEINS",

    image1 = "/chicken_drumstick.png",
    image2 = "/shaved_beef.png",
    image3 = "/tofu_squares.png",

    image4 ="/rice_bowl.png",
    image5 ="/pasta_dish.png",
    image6 ="/potatoes.png",

    bgcolor1 = "#F16D6D",
    bgcolor2 = "#FFC32E",
    bgcolor3 = "#59A091",

    label1 = "CHICKEN",
    label2 = "BEEF",
    label3 = "TOFU",
    label4 = "RICE",
    label5 = "PASTA",
    label6 = "POTATOES",
    recipebutton= "generate recipe",

}) {
// --- CLICK STATES TO SHOW VISUAL FEEDBACK OF BUTTON PRESS -----
// --- A = FIRST ITEM IN ROW, B = SECOND ITEM IN ROW, C = THIRD ITEM IN ROW
// --- 1 = REFERS TO THE FIRST ROW, 2 = REFERS TO THE SECOND ROW, 3 = REFERS TO THE THIRD ROW
// --- EXAMPLE: A1 = FIRST ITEM IN THE FIRST ROW, A3 = FIRST ITEM IN THE LAST ROW
    const [clickStateA1, setClickStateA1] = useState(false);
    const [clickStateA2, setClickStateA2] = useState(false);
    const [clickStateA3, setClickStateA3] = useState(false);

    const [clickStateB1, setClickStateB1] = useState(false);
    const [clickStateB2, setClickStateB2] = useState(false);
    const [clickStateB3, setClickStateB3] = useState(false);

    const [clickStateC1, setClickStateC1] = useState(false);
    const [clickStateC2, setClickStateC2] = useState(false);
    const [clickStateC3, setClickStateC3] = useState(false);

    var newBoxShadowA1 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    var newBoxShadowA2 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    var newBoxShadowA3 = "0px 4px 5px rgba(0, 0, 0, 0.3)";

    var newBoxShadowB1 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    var newBoxShadowB2 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    var newBoxShadowB3 = "0px 4px 5px rgba(0, 0, 0, 0.3)";

    var newBoxShadowC1 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    var newBoxShadowC2 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    var newBoxShadowC3 = "0px 4px 5px rgba(0, 0, 0, 0.3)";

    const HandleClickProtein = (foodP) => {
        options.protein = foodP;
        // sessionStorage.setItem("Protein", options.protein);
    }

    const HandleClickCarb = (foodC) => {
        options.carb = foodC;
        // sessionStorage.setItem("Carb", options.carb);
    }

    const HandleClickVege = (foodV) => {
        options.vege = foodV;
        // sessionStorage.setItem("Vege", options.vege)
    }

    const HandleClickGenerate = () => {
        // console.log(options);
        sessionStorage.setItem("Options", JSON.stringify(options));
        router.push("/generate/recipe")
    }

// --- THIS ALLOWS FOR SITUATION WHERE USER PRESSES A NEW BUTTON WITHIN THE SAME ROW, IT WILL RESET THE SHADOWS OF THE PREVIOUSLY CLICKED BUTTON AND CREATE THE VISUAL FEEDBACK BUTTON PRESS ON THE NEW BUTTON BEING PRESSED INSTEAD
    if(clickStateA1){
        newBoxShadowA1 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)";
        newBoxShadowB1 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
        newBoxShadowC1 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    } 
    if(clickStateA2){
        newBoxShadowA2 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)";
        newBoxShadowB2 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
        newBoxShadowC2 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    } 
    if(clickStateA3){
        newBoxShadowA3 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)";
        newBoxShadowB3 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
        newBoxShadowC3 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    }    

    if(clickStateB1){
        newBoxShadowB1 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)";
        newBoxShadowA1 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
        newBoxShadowC1 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    } 
    if(clickStateB2){
        newBoxShadowB2 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)";
        newBoxShadowA2 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
        newBoxShadowC2 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    } 
    if(clickStateB3){
        newBoxShadowB3 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)";
        newBoxShadowA3 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
        newBoxShadowC3 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    }    

    if(clickStateC1){
        newBoxShadowC1 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)";
        newBoxShadowA1 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
        newBoxShadowB1 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    } 
    if(clickStateC2){
        newBoxShadowC2 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)";
        newBoxShadowA2 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
        newBoxShadowB2 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    } 
    if(clickStateC3){
        newBoxShadowC3 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)";
        newBoxShadowA3 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
        newBoxShadowB3 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    }

    const router = useRouter();

    return <RecipeContainer>
        <HeaderContainer>
            <Header onClickA={()=>router.push("/homepage2")}></Header>
        </HeaderContainer>

        {/*<TextContainer>
        <TutPageTitle>{title}</TutPageTitle>
        </TextContainer>*/}

        <FoodButtonContainer>
            <h1>Recipe Generator</h1>
            <h2>PICK YOUR PROTEIN</h2>

            <Placeholder onClickA={()=>{
                HandleClickProtein("Chicken");
                setClickStateA1(true);
                setClickStateB1(false);
                setClickStateC1(false);
            }} onClickB={()=>{
                HandleClickProtein("Beef");
                setClickStateA1(false);
                setClickStateB1(true);
                setClickStateC1(false);
            }} onClickC={()=>{
                HandleClickProtein("Tofu");
                setClickStateA1(false);
                setClickStateB1(false);
                setClickStateC1(true);
            }} subtitle="PROTEINS" bgcolor1={bgcolor1} bgcolor2={bgcolor3} bgcolor3={bgcolor3} image1={image1} image2={image2} image3={image3} label1={label1} label2={label2} label3={label3} title="PROTEINS" boxshadow1={newBoxShadowA1} boxshadow2={newBoxShadowB1} boxshadow3={newBoxShadowC1} widthA="65px" widthB="65px" widthC="79px" height="150px"></Placeholder>

            <h2>PICK YOUR CARBOHYDRATES</h2>

            <Placeholder onClickA={()=>{
                HandleClickCarb("Rice");
                setClickStateA2(true);
                setClickStateB2(false);
                setClickStateC2(false);
            }} onClickB={()=>{
                HandleClickCarb("Pasta");
                setClickStateA2(false);
                setClickStateB2(true);
                setClickStateC2(false);
            }} onClickC={()=>{
                HandleClickCarb("Potatoes");
                setClickStateA2(false);
                setClickStateB2(false);
                setClickStateC2(true);
            }} subtitle="CARBOHYDRATES" bgcolor1={bgcolor3} bgcolor2={bgcolor1} bgcolor3={bgcolor3} image1={image4} image2={image5} image3={image6} label1={label4} label2={label5} label3={label6} title="CARBOHYDRATES" boxshadow1={newBoxShadowA2} boxshadow2={newBoxShadowB2} boxshadow3={newBoxShadowC2} widthA="65px" widthB="66px" widthC="67px" height="150px"></Placeholder>

            <h2>PICK YOUR VEGETABLES</h2>

            <Placeholder onClickA={()=>{
                HandleClickVege("Broccoli");
                setClickStateA3(true);
                setClickStateB3(false);
                setClickStateC3(false);
            }} onClickB={()=>{
                HandleClickVege("Onion");
                setClickStateA3(false);
                setClickStateB3(true);
                setClickStateC3(false);
            }} onClickC={()=>{
                HandleClickVege("Carrot");
                setClickStateA3(false);
                setClickStateB3(false);
                setClickStateC3(true);
            }} boxshadow1={newBoxShadowA3} boxshadow2={newBoxShadowB3} boxshadow3={newBoxShadowC3} bgcolor1={bgcolor3} bgcolor2={bgcolor2} bgcolor3={bgcolor3} widthA="68px" widthB="55px" widthC="56px" height="150px"></Placeholder>
        </FoodButtonContainer>

        <GenerateContainer>
            <GenerateRecipeButton onClickGenerate={HandleClickGenerate} text={recipebutton}></GenerateRecipeButton>
        </GenerateContainer>

        <NavBarContainer>
            <Menu></Menu>
        </NavBarContainer>
    </RecipeContainer>
}

const RecipeContainer = styled.div`
    // position: relative;
    // margin-top: 10px;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #E7F2F0;
    align-items: center;
    
    box-shadow: 5px 1px 30px 5px rgba(0, 0, 0, 0.5);
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

const TutPageTitle = styled.h1`
    font-family: "Manrope", sans-serif;
    font-size: 24px;
    font-weight: 400;
// margin-top: 0;
// position: absolute;
// width: 276px;
// height: 33px;
// left: 70px;
// top: 135px;
// font-family: Manrope;
// font-style: normal;
// font-weight: 500;
// font-size: 24px;
// line-height: 33px;
// /* identical to box height */
// color: #696259;
`;

const FoodButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    flex-grow: 4;
    color: #484848;
    &>h1
    {
        font-family: 'Manrope', sans-serif;
        font-weight: 300;
        margin-bottom: 0;
    }
    &>h2
    {
        font-family: 'Quicksand', sans-serif;
        font-weight: 400;
    }
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position:relative;
    margin:-30px;
    flex-grow: 1;
`;

const GenerateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

const NavBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
`;