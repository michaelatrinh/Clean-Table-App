import React from 'react';
import styled from 'styled-components';
//import HeaderImg from '../../public/HeaderPic.png';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 375px;
    height: 103px;
    background-color: #59A091;
`;

const HeaderImage = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 765px;
    height: 52.35px;

    position: relative;
    top: 5px;
    z-index: 1;
`;

const HeaderUI = ({
    foodimage = "/HeaderPic.png"
}) => {
    return <HeaderContainer>
        <HeaderImage src={foodimage}></HeaderImage>
    </HeaderContainer>
}

export default HeaderUI;

/*
const Header = styled.div`
width: 375px;
height: 103px;

background: #59A091;
`;

const HeaderImage = styled.img`
height: 50px;
width: 765px;
z-index: 1;

`;

const HeaderUI = (
    HeaderImg = "/clipboard.svg"
) => {
    return <Header>
            <HeaderImage src={HeaderImg}></HeaderImage>
        </Header>
}


export default HeaderUI;*/



