import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const NavBarCont = styled.div`
    display: flex;

`;

const NavBar = styled.div`
    width: 375px;
    height: 84px;
    background-color: #59A091;
    border-radius: 50px 50px 0px 0px; 
    width: 150px;
`;

const HamburgCont = styled.div`
    height: 78px;
    width: 150px;
    backround-color: #59A091;

    margin-top: 20px;
    margin-left: -120px;
    position: relative;

`;

const NImage = styled.img`
    width: 50px;
    height: 40px;
    z-index: 10;
`;

const NavBarUI = ({
    image1 = "/burger1.png",

}) => {
    const router = useRouter();

    return <NavBarCont>
            <HamburgCont>
                <NImage src={image1}></NImage>
            </HamburgCont>
            
        <NavBar>
        </NavBar>
    </NavBarCont>
}
{/* <Img><img src={image1} width="50.2px" height="52px" alt="recipe book icon"/></Img>
<Img><img src={image2} width="50px" height="50px" alt="home icon"/></Img>
<Img><img src={image3} width="50px" height="50px" alt="clipboard icon"/></Img>
<Img><img src={image4} width="51px" height="45px" alt="info icon"/></Img> */}

export default NavBarUI;