import React from 'react';
import Head from 'next/head'; 
import styled from 'styled-components';
import Header from '../../comps/Header';
import LoadingBar from '../../comps/LoadingBar/index.js';

export default function LoadingUI({
    logoimage = "/logo.png",
    text = "enter"

}) {

    // window.onload

/*const HomepageUI = ({
    logoimage = "/logo.png",

}) => {*/
      return <LoadingContainer>
          <Header></Header>
          
          <LMidSection>
              <LoadingBar></LoadingBar>
          </LMidSection>
          
    </LoadingContainer>  
}

const LoadingContainer = styled.div`
    width: 375px;
    height: 812px;
    background-color: #E7F2F0;
    margin: 100px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 5px 1px 30px 5px rgba(0, 0, 0, 0.4);

    .headertext{
        font-size: 36px;
        font-weight: bold;
        color: #302B40;
    }
`;
 
const LMidSection = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 300px;
`;

