
import Head from 'next/head'; 
import styled from 'styled-components';
import Header from '../comps/Header/index.js';
import Menu from '../comps/NavBar/index.js';
import Placeholder from '../comps/icon-placeholder/Placeholder.js';
import FunFactWindow from '../comps/FunFactWindow/index.js';
import RecipeButton from '../comps/Recipe-Button/index.js';

const RecipeContainer = styled.div`
    width: 375px;
    height: 1000px;
    background-color: #E7F2F0;
    margin: 100px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 5px 1px 30px 5px rgba(0, 0, 0, 0.5);
`;

const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        font-size: 22px;
        text-align:center;
    }
    img{
        position: absolute;
        width: 300px;
    
        border: 4px solid #59A091;
        margin-top: 60px;
    }

`;

const Mid1 = styled.div`
    margin-top: 140px;
`;

const Mid2 = styled.div`
    margin-top: -70px;
`;

const Mid3 = styled.div`
    margin-top: -30px;
`;

const EndSection = styled.div`
    position: absolute;
    margin-top: 800px;
`;

const MenuContainer = styled.div`
    margin-top: 950px;
    height: 900px;
    position: absolute;
    overflow: hidden;
`;

export default function RecipePage({
    recipeimage = "/alfredobroc.png",
    recipetitle = "Chicken and Broccoli Alfredo",

    image1 = "/chicken_drumstick.png",
    image2 = "/pasta_dish.png",
    image3 = "/broccoli.png",

    image4 ="/saltnpepper.png",
    image5 ="/cheese.png",
    image6 ="/parsley.png",

    label1 = "CHICKEN",
    label2 = "RICE",
    label3 = "CARROT",
    label4 = "SALT N PEPPER",
    label5 = "CHEESE",
    label6 = "PARSLEY",

    title = "Main Ingredients",
    title2 = "Optional",
    
}) {


      return <RecipeContainer>
        <Header></Header>

        <TopSection>
            <h3>{recipetitle}</h3>
            <img src={recipeimage}></img>
        </TopSection>

        <Mid1>
            <Placeholder image1={image1} image2={image2} image3={image3} label1={label1} label2={label2} label3={label3} title={title}></Placeholder>
        </Mid1>
        <Mid2>
            <Placeholder image1={image4} image2={image5} image3={image6} title={title2} label1={label4} label2={label5} label3={label6}></Placeholder>
        </Mid2>
        <Mid3>
            <RecipeButton Link href="https://tasty.co/recipe/one-pan-garlic-parmesan-chicken-and-vegetable-bake"></RecipeButton>
        </Mid3>

        <EndSection>
            <FunFactWindow></FunFactWindow>
        </EndSection>

        <MenuContainer>
            <Menu></Menu>
        </MenuContainer>
    </RecipeContainer>  
}