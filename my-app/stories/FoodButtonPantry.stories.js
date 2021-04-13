import React from 'react';
import FoodButtonPantry from '../comps/FoodButtonPantryUI';

export default{
    title: "Michael's Components/Food Button Pantry",
    component: <FoodButtonPantry/>
}

export const ChickenPantryIcon = () => <FoodButtonPantry/>;

export const OnionPantryIcon = () => <FoodButtonPantry days="2 DAYS" foodimage="/onion.png" imageheight="54px" imagewidth="55px" bgcolour="#FFC32E" foodname="ONION" expirydate="expires on: February 2, 2021"/>

export const CarrotPantryIcon = () => <FoodButtonPantry days="12 DAYS" foodimage="/carrot.png" imageheight="55px" imagewidth="56px" bgcolour="#59A091" foodname="CARROT" expirydate="expires on: February 14, 2021"/>