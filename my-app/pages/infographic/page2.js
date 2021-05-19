import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import StartbuttonUI from '../../comps/StartButton';
import InfoHeader from '../../comps/InfographicHeader';

export default function Page2(){
    return <MainContainer>
        <InfoPage2>
            <Container>
                <InfoHeader></InfoHeader>
            </Container>
        </InfoPage2>
    </MainContainer>;
}

const MainContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: #D7F0EC;
display: flex;
justify-content: center;
align-items: center;
`;

const InfoPage2 = styled.div`
width: 375px;
height: 812px;
background-color: #D7F0EC; 
// display:none;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
