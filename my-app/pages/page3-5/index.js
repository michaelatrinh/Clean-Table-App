import Head from 'next/head';
import styled from 'styled-components';
import React, {useState} from 'react';

import HeaderUI from '../comps/Header';
import FoodButtonUI from '../comps/FoodButtonUI';
import NavBar from '../comps/NavBar'
import ProgressBar from '../comps/ProgressBar';



const Page4 = styled.div`
 .MainPage4 {
   background-color: #E7F2F0,
   height: 812px,
   width: 375px,
 }

 .FoodButtonPage4 {
   align-items: center;
 }

 .ProgressBarPage4 {
   align-items: center;
 }
`;

export default function Page4() {
  return <div className="MainPage4">

    <div className="HeaderPage4">
    <HeaderUI></HeaderUI>
    </div>
    
    <div className="FoodButtonPage4">
    <FoodButtonUI></FoodButtonUI>
    <FoodButtonUI></FoodButtonUI>
    <FoodButtonUI></FoodButtonUI>
    </div>

    <div className="ProgressBarPage4">
      <ProgressBar></ProgressBar>
    </div>
    
    <div className="NavPage4">
    <NavBar></NavBar>
    </div>
    
  </div>
}






