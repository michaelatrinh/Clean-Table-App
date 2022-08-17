import React, {useState} from 'react';
import animationStyle from '../styles/animation.module.css';
import HeaderUI from '../comps/Header/index.js';
import StartTutorialButtonUI from '../comps/StartTutorialButton/index.js';
import NavBar from '../comps/NavBarCongrats';
import styled from 'styled-components';

export default function IconTutorial(){
    return <PageContainer>
        <HeaderContainer>
            <HeaderUI></HeaderUI>
        </HeaderContainer>

        <TextContainer>
            <h1>ICONS YOU NEED TO KNOW</h1>
            <h2>The navigation icons may not be universally known so we want to make sure you know what they are, and where they take you!</h2>
        </TextContainer>

        <AnotherContainer>
            <TextAndNav1>
                <TextTop1>
                    <h3>1. HOME</h3>
                </TextTop1>

                <TextTop2>
                    <h3>3. MORE INFO</h3>
                </TextTop2>
            </TextAndNav1>            
        </AnotherContainer>

        <DownArrow1 src="/downarrow.png"></DownArrow1>
        
        <NavBarContainer>
            <img src="/NEWnavBar.png" width="290px" height="65px"></img>
        </NavBarContainer>

        <TextAndNav2>

        </TextAndNav2>

        <MoreInfo>

        </MoreInfo>

        <ProgressBarContainerIcon>

        </ProgressBarContainerIcon>
    </PageContainer>
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-color: #E7F2F0;
`;

const HeaderContainer = styled.div`

`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;

    // width: 66vw;
    text-align: center;

    flex: 1;
    // font-family: 'Manrope', sans-serif;
    &>h1 {
        font-family: 'Manrope', sans-serif;
        font-size: 30px;
        font-weight: 300;
    }
    
    &>h2 {
        font-family: 'Quicksand', sans-serif;
        font-size: 25px;
        font-weight: 300;
        width: 50vw;
        margin-top: 0;
    }
`;

const TextAndNav1 = styled.div`
    display: flex;
    // flex-direction: column;
    // align-items: center;
    justify-content: center;

    // width: 290px;
    flex: 1;
`;

const TextTop1 = styled.div`
    // position: relative;
    left: 51.80rem;
    // bottom: 15px;
    &>h3 {
        font-family: 'Manrope', sans-serif;
        font-size: 21px;
        font-weight: 400;
    }
`;

const TextTop2 = styled.div`
    // position: relative;
    left: 100px;
    // bottom: 15px;
    &>h3 {
        font-family: 'Manrope', sans-serif;
        font-size: 21px;
        font-weight: 400;
    }
`;

const DownArrow1 = styled.img`
    position: relative;
    left: 85px;
    bottom: 30px;

    width: 33px;
    height: 40px;
`;

const NavBarContainer = styled.div`
    display: flex;
    // align-items: center;
    justify-content: center;
    flex: 1;
`;

const TextAndNav2 = styled.div`
    display: flex;
    flex: 1;
`;

const UpArrow1 = styled.div`

`;

const TextBot1 = styled.div`

`;

const MoreInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`;

const ProgressBarContainerIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

const AnotherContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`;