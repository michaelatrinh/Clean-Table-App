import React, {useState} from 'react';
import styled from 'styled-components';
import Header from '../comps/Header/index.js';
import Menu from '../comps/NavBar/index2.js';
import Placeholder from '../comps/icon-placeholder/Placeholder.js';
import GenerateRecipeButton from '../comps/GenerateRecipeButton/index.js';
import {useRouter} from 'next/router';

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
    label3 = "ONION",
    label4 = "RICE",
    label5 = "PASTA",
    label6 = "POTATOES",
    recipebutton= "generate recipe",

}) {
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

    if(clickStateA1){
        newBoxShadowA1 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)";
        newBoxShadowB1 = "0px 4px 5px rgba(0, 0, 0, 0.3)";
    } else if(clickStateA2){
        newBoxShadowA2 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)"
    } else if(clickStateA3){
        newBoxShadowA3 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)"
    }    

    if(clickStateB1){
        newBoxShadowB1 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)"
    } else if(clickStateB2){
        newBoxShadowB2 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)"
    } else if(clickStateB3){
        newBoxShadowB3 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)"
    }    

    if(clickStateC1){
        newBoxShadowC1 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)"
    } else if(clickStateC2){
        newBoxShadowC2 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)"
    } else if(clickStateC3){
        newBoxShadowC3 = "inset 0px 0px 5px rgba(0, 0, 0, 0.6)"
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
            {/* <h1>Recipe Generator</h1> */}
            <h2>PICK YOUR PROTEIN</h2>

            <Placeholder onClickA={()=>setClickStateA1(!clickStateA1)} onClickB={()=>setClickStateB1(!clickStateB1)} onClickC={()=>setClickStateC1(!clickStateC1)} subtitle="PROTEINS" bgcolor1={bgcolor1} bgcolor2={bgcolor3} bgcolor3={bgcolor3} image1={image1} image2={image2} image3={image3} label1={label1} label2={label2} label3={label3} title="PROTEINS" boxshadow1={newBoxShadowA1} boxshadow2={newBoxShadowB1} boxshadow3={newBoxShadowC1} widthA="65px" widthB="65px" widthC="79px" height="150px"></Placeholder>

            <h2>PICK YOUR CARBOHYDRATES</h2>

            <Placeholder onClickA={()=>setClickStateA2(!clickStateA2)} onClickB={()=>setClickStateB2(!clickStateB2)} onClickC={()=>setClickStateC2(!clickStateC2)} subtitle="CARBOHYDRATES" bgcolor1={bgcolor3} bgcolor2={bgcolor1} bgcolor3={bgcolor3} image1={image4} image2={image5} image3={image6} label1={label4} label2={label5} label3={label6} title="CARBOHYDRATES" boxshadow1={newBoxShadowA2} boxshadow2={newBoxShadowB2} boxshadow3={newBoxShadowC2} widthA="65px" widthB="66px" widthC="67px" height="150px"></Placeholder>

            <h2>PICK YOUR VEGETABLES</h2>

            <Placeholder onClickA={()=>setClickStateA3(!clickStateA3)} onClickB={()=>setClickStateB3(!clickStateB3)} onClickC={()=>setClickStateC3(!clickStateC3)} boxshadow1={newBoxShadowA3} boxshadow2={newBoxShadowB3} boxshadow3={newBoxShadowC3} bgcolor1={bgcolor3} bgcolor2={bgcolor2} bgcolor3={bgcolor3} widthA="68px" widthB="55px" widthC="56px" height="150px"></Placeholder>
        </FoodButtonContainer>

        <GenerateContainer>
            <GenerateRecipeButton text={recipebutton}></GenerateRecipeButton>
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