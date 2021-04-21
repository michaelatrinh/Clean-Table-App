import Head from 'next/head'; 
import styled from 'styled-components';
import Header from '../comps/Header/index.js';
import Menu from '../comps/NavBar/index.js';
import Placeholder from '../comps/icon-placeholder/Placeholder.js';
import GenerateRecipeButton from '../comps/GenerateRecipeButton/index.js';


const RecipeContainer = styled.div`
// position: relative;
width: 375px;
height: 963px;
    background-color: #E7F2F0;

    display: flex;
    flex-direction: column;
    justify-content: center;
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
`;

const Mid1 = styled.div`
margin-top: 0px;
`; 

const Mid2 = styled.div`
margin-top: -50px;
`; 

const Mid3 = styled.div`
margin-top: -50px;
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

//const PlaceHolderContainer =styled.div`
//display:flex;
//`;

export default function IngredientPickerPage({
    title = "PICK YOUR PROTEINS",

    image1 = "/chicken_drumstick.png",
    image2 = "/shaved_beef.png",
    image3 = "/onion.png",

    image4 ="/rice_bowl.png",
    image5 ="/pasta_dish.png",
    image6 ="/potatoes.png",

    label1 = "CHICKEN",
    label2 = "BEEF",
    label3 = "ONION",
    label4 = "RICE",
    label5 = "PASTA",
    label6 = "POTATOES",
    recipebutton= "generate recipe",

}) {
      return <RecipeContainer>
          <HeaderContainer>
            <Header></Header>
          </HeaderContainer>

        <TextContainer>
            <TutPageTitle>{title}</TutPageTitle>
        </TextContainer>
        
        <FoodButtonContainer>
            <Placeholder image1={image1} image2={image2} image3={image3} label1={label1} label2={label2} label3={label3} ></Placeholder>

            <Placeholder image1={image4} image2={image5} image3={image6} label1={label4} label2={label5} label3={label6}></Placeholder>

            <Placeholder></Placeholder>
        </FoodButtonContainer>

        {/*<PlaceHolderContainer>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        </PlaceHolderContainer>*/}

        <GenerateContainer>
            <GenerateRecipeButton text={recipebutton}></GenerateRecipeButton>
        </GenerateContainer>


        <NavBarContainer>
            <Menu></Menu>
        </NavBarContainer>
    </RecipeContainer>  
}