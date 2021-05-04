import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const NavBarCont = styled.div`
    display: flex;
    flex-direction: column;

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

`;

const MenuItems = styled.div`
    height: 600px;
    width: 375px;
    background-color: #59A091;
    border-radius: 50px 50px 0px 0px; 
    max-width: ${props=>props.width}px;
    max-height: ${props=>props.height}px;
    overflow: hidden;
`;

const NImage = styled.img`
    width: 50px;
    height: 40px;
    z-index: 10;
`;

const NavBarUI = ({
    image1 = "/burger1.png",

}) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    var width = 0, height = 0;

    if(open){
        width=100;
        height=100;
    }

    return <NavBarCont>
            <HamburgCont>
                <NImage src={image1}></NImage>
            </HamburgCont>

            <MenuItems>
            </MenuItems>
            
        <NavBar>
        </NavBar>
    </NavBarCont>
}
{/* <Img><img src={image1} width="50.2px" height="52px" alt="recipe book icon"/></Img>
<Img><img src={image2} width="50px" height="50px" alt="home icon"/></Img>
<Img><img src={image3} width="50px" height="50px" alt="clipboard icon"/></Img>
<Img><img src={image4} width="51px" height="45px" alt="info icon"/></Img> */}

export default NavBarUI;