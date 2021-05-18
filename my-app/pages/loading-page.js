import React, {useState} from 'react';
import animationStyle from '../styles/loading.module.css';
import HeaderUI from '../comps/Header';
import styled from 'styled-components';

export default function LoadingPage({    image ="/my-app/public/donut.png",
}){

    return <PageContainer>
        <HeaderContainer>
        <HeaderUI></HeaderUI>
    </HeaderContainer>

    <Animation>  <div className={animationStyle.main}>
        <div className={animationStyle.animation}>
        <div className={animationStyle.donut}>
        <div className={animationStyle.bar}>

        <div className={animationStyle.progress}>
            <div className={animationStyle.outer}>
                <div className={animationStyle.inner}></div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>

    </Animation>
    </PageContainer>
}

const PageContainer = styled.div`
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
 
const HeaderContainer =styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
 
 `;

 const Animation =styled.div`
 display:flex;

 `;