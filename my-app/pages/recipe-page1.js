import React from 'react';
import Head from 'next/head'; 
import styled from 'styled-components';
import Header from '../comps/Header';
import Menu from '../comps/NavBar';
import Placeholder from '../comps/icon-placeholder/Placeholder.js';
import FunFactWindow from '../comps/FunFactWindow';
import Instructions from '../comps/RecipeInstructions';

export default function RecipePage({
    recipeimage = "/dishimage.png",
    recipetitle = "Chicken, Onion pasta bake",

    image1 = "/chicken_drumstick.png",
    image2 = "/pasta_dish.png",
    image3 = "/onion.png",

    image4 ="/saltnpepper.png",
    image5 ="/cheese.png",
    image6 ="/parsley.png",

    label1 = "CHICKEN",
    label2 = "pasta",
    label3 = "ONION",
    label4 = "SALT N PEPPER",
    label5 = "CHEESE",
    label6 = "PARSLEY",

    subtitle = "Main Ingredients:",
    
}) {

      return <RecipeContainer>
        <Header></Header>

        <TopSection>
            <h3>{recipetitle}</h3>
            <img src={recipeimage}></img>
        </TopSection>

        <Mid1>
            <Placeholder image1={image1} image2={image2} image3={image3} label1={label1} label2={label2} label3={label3} subtitle={"Main Ingredients"}></Placeholder>
        </Mid1>
        <Mid2>
            <Placeholder image1={image4} image2={image5} image3={image6} subtitle={"Optionals"} label1={label4} label2={label5} label3={label6}></Placeholder>
        </Mid2>
        <Mid3>
            <Instructions></Instructions>
        </Mid3>
 
        <EndSection>
            <FunFactWindow></FunFactWindow>
        </EndSection>

        <MenuContainer>
            <Menu></Menu>
        </MenuContainer>
    </RecipeContainer>  
}

const RecipeContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: #E7F2F0;
width: 100vw;
max-width: 100vw;
height: 100vh;
max-height: 100vh;

`;

const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        font-size: 22px;
    }

    img{
        position: absolute;

        border: 4px solid #59A091;
        margin-top: 80px;
    }
`;

const Mid1 = styled.div`
    margin-top: 160px;
`;

const Mid2 = styled.div`
    margin-top: -70px;
`;

const Mid3 = styled.div`
    margin-top: -30px;
`;

const EndSection = styled.div`
    position: absolute;
    margin-top: 1350px;
`;

const MenuContainer = styled.div`
    margin-top: 1480px;
    height: 1500px;
    position: absolute;
    overflow: hidden;
`;


