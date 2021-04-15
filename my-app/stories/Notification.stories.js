import React from 'react';
import ExitButtonUI from '../comps/exit-button';
import Congrats from '../comps/congratulations-comp';
import FunFactUI from '../comps/FunFactWindow'
import PlaceholderUI from '../comps/icon-placeholder/Placeholder';


export default {
    title: "Arielle's Components",
    component: <exitButton/>,
    component: <Congrats/>,
    component: <PlaceholderUI/>,
    component: <FunFactUI/>

}

export const myhappycomp= () => <Congrats/>
export const mysadcomp= () => <ExitButtonUI/>
export const myokaycomp = () => <PlaceholderUI/>
export const myalrightcomp = () => <FunFactUI/>