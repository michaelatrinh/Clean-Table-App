import React from 'react';
import ExitButtonUI from '../comps/exit-button';
import Congrats from '../comps/congratulations-comp';
import FunFactUI from '../comps/FunFactWindow'
import PlaceholderUI from '../comps/icon-placeholder/Placeholder';
import NotifUI from '../comps/notification-component';
import RecipeUI from '../comps/Recipe-Button';


export default {
    title: "Arielle's Components",
    component: <exitButton/>,
    component: <Congrats/>,
    component: <PlaceholderUI/>,
    component: <FunFactUI/>,
    component: <NotifUI/>,
    component: <RecipeUI/>
}

export const myhappycomp= () => <Congrats/>
export const mysadcomp= () => <ExitButtonUI/>
export const myokaycomp = () => <PlaceholderUI/>
export const myalrightcomp = () => <FunFactUI/>
export const myprettycomp = () => <NotifUI/>
export const myrecipebutton = () => <RecipeUI/>