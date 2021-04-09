import React from 'react';
import styled from 'styled-components';
import RecipeImage from '../../public/recipes.svg';
import HomeImage from '../../public/home.svg';
import ClipboardImage from '../../public/clipboard.svg';
import InfoImage from '../../public/info.svg';



const NavBar = styled.div`
width: 377px;
height: 84px;
background-color: #59A091;
padding:10px;
`;

const Img = styled.image`
display: inline-block;
margin-left: 0px;
margin-right: 0px;
width: 25%;

position: relative;
top: 13px;
left:18px;

`;

const NavBarUI = () => {

    return <div>
        <NavBar>
            <Img>
            <img src={RecipeImage} width="50.2px" height="52px" alt="recipe book icon"/>
            </Img>
            <Img>
            <img src={HomeImage} width="50px" height="50px" alt="home icon"/>
            </Img>
            <Img>
            <img src={ClipboardImage} width="50px" height="50px" alt="clipboard icon"/>
            </Img>
            <Img>
            <img src={InfoImage} width="51px" height="45px" alt="info icon"/>
            </Img>
        </NavBar>
        </div>
}
    

export default NavBarUI;