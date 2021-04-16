import React from 'react';
import styled from 'styled-components';
import {CgCloseO} from 'react-icons/cg';
import {IconContext} from 'react-icons';

const WindowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 336px;
    height: 262px;
    background-color: #FFFFFF;
    border-radius: 20px;
`;

const FirstContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 336px;
    height: 76px;
    background-color: #59A091;
    border-radius: 20px 20px 0px 0px;
    &>h2 {
        font-family: "Manrope", sans-serif;
        font-size: 24px;
        font-weight: medium;
        color: #FFFFFF;
    }
`;

const InContainerOne = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 336px;
    &>h2 {
        font-family: "Manrope", sans-serif;
        font-size: 24px;
        font-weight: medium;
        color: #FFFFFF;
    }
`;

const InContainerTwo = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
`;

const Heading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SecondContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    flex-grow: 1;
    &>h2 {
        font-family: "Quicksand", sans-serif;
        font-size: 24px;
        font-weight: 300;
        color: #000000;
        text-align: center;
    }
`;

const ThirdContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 336px;
    flex-grow: 2;
    margin-top: -2rem;
`;

const YesButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 89px;
    height: 32px;
    background-color: #59A091;
    &>p {
        font-family: "Manrope", sans-serif;
        color: #FFFFFF;
        font-weight: 500;
    }
`;

const NoButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 89px;
    height: 32px;
    background-color: #6FC3B2;
    &>p {
        font-family: "Manrope", sans-serif;
        color: #FFFFFF;
        font-weight: 500;
    }
`;

const ConfirmationWindowUI = ({
    text = "Do you want to add this item to your pantry?",
    iconContainer = {position: "absolute"}
}) => {
    return <WindowContainer>
        <FirstContainer>
            <h2>WAIT!</h2>
            
            <InContainerTwo>
                <IconContext.Provider value={{color: "#FFFFFF", size: "1.5rem"}} iconContainer={{iconContainer}}>
                    <CgCloseO></CgCloseO>
                </IconContext.Provider>
            </InContainerTwo>
        </FirstContainer>

        <SecondContainer>
            <h2>{text}</h2>
        </SecondContainer>

        <ThirdContainer>
            <YesButton>
                <p>Yes</p>
            </YesButton>
            <NoButton>
                <p>No</p>
            </NoButton>
        </ThirdContainer>
    </WindowContainer>
}

export default ConfirmationWindowUI;