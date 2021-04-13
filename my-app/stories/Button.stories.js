import React from 'react';
import StartTutorialButton from '../comps/StartTutorialButton';
import NavBarUI from '../comps/NavBar';
import WelcomePageFooterUI from '../comps/WelcomePageFooter';

export default {
    title: "Alicia's Components/Buttons",
    component: <StartTutorialButton/>,
    component: <NavBarUI/>,
    component: <WelcomePageFooterUI/>,
}

export const StartButtonsUI = () => <StartTutorialButton text="start tutorial"/>;

export const MyNavBar = () => <NavBarUI/>

export const WelcomePageFooter = () => <WelcomePageFooterUI/>


