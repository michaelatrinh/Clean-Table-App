import Head from 'next/head'; 
import styled from 'styled-components';
import Header from '../comps/Header/index.js';
import Menu from '../comps/NavBar/index.js';
import Placeholder from '../comps/icon-placeholder/Placeholder.js';
import FunFactWindow from '../comps/FunFactWindow/index.js';
import RecipeButton from '../comps/Recipe-Button/index.js';


const RecipeContainer = styled.div`
    width: 375px;
    height: 1070px;
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
        text-align: center;
        margin:30px;
    }
    img{
        height:164px;
        width:281px;
        position: absolute;
        border: 4px solid #59A091;
        margin-top: 100px;
    }
`;

const Mid1 = styled.div`
    margin-top: 160px;
`;

const Mid2 = styled.div`
    margin-top: -70px;
`;

const Mid3 = styled.div`
    margin-top:-10px;
`;

const EndSection = styled.div`
    position: absolute;
    margin-top: 860px;
`;

const MenuContainer = styled.div`
    margin-top: 990px;
    height: 1200px;
    position: absolute;
    overflow: hidden;
`;


export default function RecipePage({
    recipeimage = "/sweet potato.jpg",
    recipetitle = "Sweet Potato Tofu Bowl ",

    image1 = "/tofu_squares.png",
    image2 = "/potatoes.png",
    image3 = "/broccoli.png",

    image4 ="/saltnpepper.png",
    image5 ="/cheese.png",
    image6 ="/parsley.png",

    label1 = "TOFU",
    label2 = "POTATO",
    label3 = "BROCCOLI",
    label4 = "SALT N PEPPER",
    label5 = "CHEESE",
    label6 = "PARSLEY",

    subtitle = "Main Ingredients:",

}) {
const HandleClick =() => { 

}
      return <RecipeContainer>
        <Header></Header>

        <TopSection>
            <h3>{recipetitle}</h3>
            <img src={recipeimage}></img>
        </TopSection>

        <Mid1>
            <Placeholder image1={image1} image2={image2} image3={image3} label1={label1} label2={label2} label3={label3} subtitle={"Main Ingredients:"}></Placeholder>
        </Mid1>
        <Mid2>
            <Placeholder image1={image4} image2={image5} image3={image6} label1={label4} label2={label5} label3={label6} subtitle={"Optional:"}></Placeholder>
        </Mid2>
        <Mid3>

        <RecipeButton onClick="https://runningonrealfood.com/vegan-sweet-potato-tofu-bowls/"></RecipeButton>
        </Mid3>

        <EndSection>
            <FunFactWindow></FunFactWindow>
        </EndSection>

        <MenuContainer>
            <Menu></Menu>
        </MenuContainer>
    </RecipeContainer>  
} 