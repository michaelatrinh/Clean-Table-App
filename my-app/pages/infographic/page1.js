import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import StartbuttonUI from '../../comps/StartButton';

export default function Infographic(){
    return <Container>
        <Page1>
            <Content>
                <Cleantablelogo src="/info-pics/Logo 1.png"></Cleantablelogo>
                <Cleantable>Clean Table</Cleantable>
                <Presents>~ presents ~</Presents>
                <Theimpactof>THE IMPACT OF</Theimpactof>
                <Foodwastetitle>FOOD WASTE</Foodwastetitle>
                <Createdby>Created by: Michael Trinh, Arielle Castro, Jessica Wu, Alicia Yien</Createdby>
                <Startbutton>
                    <StartbuttonUI></StartbuttonUI>
                </Startbutton>
            </Content>
        </Page1>
    </Container>
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #D7F0EC;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Page1 = styled.div`
    width: 375px;
    height: 812px;
    background-color:#D7F0EC;
    display: flex;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
`;

const Cleantablelogo = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    position: relative;
    right: 15px;
`;

const Cleantable = styled.div`
    font-size: 30px;
    color: #302B40;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    font-weight: bold;
`;

const Presents = styled.div`
    font-size: 18px;
    color: #302B40;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    font-weight:regular;
`;

const Theimpactof = styled.div`
    font-size: 24px;
    color: #302B40;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    font-weight: light;
`;

const Foodwastetitle = styled.div`
    font-size: 30px;
    color: #302B40;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    font-weight: bold;
`;

const Createdby = styled.div`
    font-size: 14px;
    color: #302B40;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    font-weight: light;
    margin-top: 140px;
`;

const Startbutton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: lighter;
    position: relative;
    bottom: 150px;
`;