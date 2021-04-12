import React from 'react';
import StartTutorialButton from '../comps/StartTutorialButton';
import NavBarUI from '../comps/NavBar';
import WelcomePageFooterUI from '../comps/WelcomePageFooter';

export default {
    title: "Alicia's Components",
    component: <StartButtonsUI/>,
    component: <EnterbuttonUI/>,
    component: <GenerateRecipeButtonUI/>,
    component: <NavBarUI/>,
    component: <WelcomePageFooterUI/>,
}

export const StartButtonsUI = () => (<StartTutorialButton text="start tutorial"/>);
export const EnterbuttonUI = () => (<EnterbuttonUI text="enter"/>)
export const GenerateRecipeButtonUI = () => (<GenerateRecipeButtonUI text="generate recipe"/>)

export const MyNavBar = () => <NavBarUI/>
export const WelcomePageFooter = () => <WelcomePageFooterUI/>


