import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from '../../comps/Header/index.js';
import Menu from '../../comps/NavBar/index2.js';
import Placeholder from '../../comps/icon-placeholder/Placeholder.js';
import FunFactWindow from '../../comps/FunFactWindow/index.js';
import RecipeButton from '../../comps/Recipe-Button/index.js';



export default function RecipePage({
    recipeimage = "/beefpastaonion.png",
    recipetitle = "Beef and Onion Pasta",

    image1 = "/shaved_beef.png",
    image2 = "/pasta_dish.png",
    image3 = "/onion.png",

    image4 ="/saltnpepper.png",
    image5 ="/cheese.png",
    image6 ="/parsley.png",

    label1 = "BEEF",
    label2 = "PASTA",
    label3 = "ONION",
    label4 = "SALT N PEPPER",
    label5 = "CHEESE",
    label6 = "PARSLEY",

    subtitle = "Main Ingredients",
    htext = "DID YOU KNOW?",
    ptext = "Shopping while hungry can lead to impulse buying, which ends up leaving you with more food than you need." 
    
}) {


      return <RecipeContainer>
          <HeaderContainer>
            <Header></Header>
          </HeaderContainer>

        <TopSection>
            <h3>{recipetitle}</h3>
            <img src={recipeimage}></img>
        </TopSection>

        <MiddleContainer>
            <Mid1>
            <Placeholder height="150px" bgcolor1 = "#59A091" bgcolor2 = "#59A091" image1={image1} image2={image2} image3={image3} label1={label1} label2={label2} label3={label3} subtitle={"Main Ingredients"} widthA="60px" widthB="65px" widthC="50px"></Placeholder>
            </Mid1>
            <Mid2>
                <Placeholder height="150px" bgcolor1 = "#59A091" bgcolor2 = "#59A091" image1={image4} image2={image5} image3={image6} subtitle={"Optionals"} label1={label4} label2={label5} label3={label6}></Placeholder>
            </Mid2>
           
        </MiddleContainer>
        
            <ButtonContainer>
                <RecipeButton onClick={()=>window.open("https://www.cookinwithmima.com/cheesy-ground-beef-pasta/")}></RecipeButton>
            </ButtonContainer>

        <EndSection>                


            <FunFactWindow ptext = {"Shopping while hungry can lead to impulse buying, which ends up leaving you with more food than you need."} ></FunFactWindow>
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

const HeaderContainer = styled.div`
    display: flex;
    flex-grow: 0;
`;

const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    h3{
        font-size: 22px;
    }
    img{
        width: 281px;
        height:165px;

        border: 4px solid #59A091;
        // margin-top: 80px;
    }
`;

const MiddleContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    flex-grow: 3;
`;

const Mid1 = styled.div`
    // margin-top: 160px;
`;

const Mid2 = styled.div`
    // margin-top: -70px;
`;

const Mid3 = styled.div`
    // margin-top: -30px;
`;

const EndSection = styled.div`
    // position: absolute;
    // margin-top: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-grow: 2;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

const MenuContainer = styled.div`
    // margin-top: 950px;
    // height: 900px;
    // position: absolute;
    // overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
`;

