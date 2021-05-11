import React from 'react';
import Head from 'next/head'; 
import styled from 'styled-components';

import Header from '../../comps/Header';
import NavBar from '../../comps/NavBarCongrats'

const iconTutorial = styled.div`
.MainDivTutPage {
    background-color: red,
    height: 812px,
    width: 375px,
}

.prompt {
    color: red;
}

.NavBarTutPage{
    width: 300px;
    height: 100px;
}
`;

export default function iconTutorialPage() {
    return <div className="MainDivTutPage">

    <div className="HeaderTutPage">
        <Header></Header>
    </div>
      
    <div className="prompt">ICONS YOU NEED TO KNOW</div>

    <div className="NavBarTutPage">
        <NavBar></NavBar>
    </div>

    </div>
}