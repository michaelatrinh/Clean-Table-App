import React from 'react';
import ProteinButtons from '../comps/FoodButtonProtein';

export default{
    title:"Michael's Components/Food Button Arrays",
    component: <ProteinButtons/>
}

export const Protein = () => <ProteinButtons foodname="CHICKEN" foodimage="/chicken_drumstick.png" imageheight="100px" imagewidth="100px" bgcolour="#6FC3B2"/>