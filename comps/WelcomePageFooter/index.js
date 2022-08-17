import React from 'react';
import styled from 'styled-components';

const WelcomePageFooter = styled.div `
background-color: #59A091;
width: 433px;
height: 64px; 
border-top-left-radius: 1000px; 
border-top-right-radius: 1000px;

font-size: 14px;
color: white;
text-align: center;
font-family:manrope;

padding-top:20px;
`;


const WelcomePageFooterUI = () => {

    return <div>
        <WelcomePageFooter>
            created by: <br></br>Jessica, Arielle, Michael, and Alicia.
        </WelcomePageFooter>
    </div>
}

export default WelcomePageFooterUI; 