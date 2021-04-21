import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
//import RecipeImage from '../../public/recipes.svg';
/*
import HomeImage from '../../public/home.svg';
import ClipboardImage from '../../public/clipboard.svg';
import InfoImage from '../../public/info.svg';


import HomeIcon from '../../public/home.svg';
import ClipboardIcon from '../../public/clipboard.svg';
import ImportIcon from '../../public/info.svg';
*/


const NavBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
width: 375px;
height: 84px;
background-color: #59A091;
// padding:10px;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;

// display: inline-block;
// margin-left: 0px;
// margin-right: 0px;
// width: 25%;

// position: relative;
// top: 11px;
// left:18px;

`;

const NavBarUI = ({
    image1 = "/recipes.svg",
    image2 = "/home.svg",
    image3 = "/clipboard.svg",
    image4 = "/info.svg"
}) => {
    const router = useRouter();

    return <NavBar>
        <Image src={image1} onClick={()=>router.push("/ingredient-picker")}></Image>
        <Image src={image2} onClick={()=>router.push("/homepage")}></Image>
        <Image src={image3} onClick={()=>router.push("/pantry")}></Image>
        <Image src={image4} onClick={()=>router.push()}></Image>
    </NavBar>
}
{/* <Img><img src={image1} width="50.2px" height="52px" alt="recipe book icon"/></Img>
<Img><img src={image2} width="50px" height="50px" alt="home icon"/></Img>
<Img><img src={image3} width="50px" height="50px" alt="clipboard icon"/></Img>
<Img><img src={image4} width="51px" height="45px" alt="info icon"/></Img> */}

export default NavBarUI;