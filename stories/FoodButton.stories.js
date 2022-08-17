import React from 'react';
import FoodButtonUI from '../comps/FoodButtonUI';

export default{
    title:"Michael's Components/Food Buttons",
    component: <FoodButtonUI/>
}

export const ChickenButton = () => <FoodButtonUI foodname="CHICKEN" foodimage="/chicken_drumstick.png" imageheight="100px" imagewidth="100px" bgcolour="#6FC3B2"/>

export const BeefButton = () => <FoodButtonUI foodname="BEEF" foodimage="/shaved_beef.png" imageheight="90px" imagewidth="110px" bgcolour="#6FC3B2"/>

export const TofuButton = () => <FoodButtonUI foodname="TOFU" foodimage="/tofu_squares.png" imageheight="99px" imagewidth="126px" bgcolour="#6FC3B2"/>

export const RiceButton = () => <FoodButtonUI foodname="RICE" foodimage="/rice_bowl.png" imageheight="78px" imagewidth="107px" bgcolour="#6FC3B2"/>

export const PastaButton = () => <FoodButtonUI foodname="PASTA" foodimage="/pasta_dish.png" imageheight="90px" imagewidth="112px" bgcolour="#6FC3B2"/>

export const PotatoesButton = () => <FoodButtonUI foodname="POTATOES" foodimage="/potatoes.png" imageheight="106px" imagewidth="118px" bgcolour="#6FC3B2"/>

export const BroccoliButton = () => <FoodButtonUI foodname="BROCCOLI" foodimage="/broccoli.png" imageheight="99px" imagewidth="107px" bgcolour="#6FC3B2"/>

export const OnionButton = () => <FoodButtonUI foodname="ONION" foodimage="/onion.png" imageheight="91px" imagewidth="93px" bgcolour="#6FC3B2"/>

export const CarrotButton = () => <FoodButtonUI foodname="CARROT" foodimage="/carrot.png" imageheight="89px" imagewidth="86px" bgcolour="#6FC3B2"/>

export const ChickenButtonRed = () => <FoodButtonUI foodname="CHICKEN" foodimage="/chicken_drumstick.png" imageheight="100px" imagewidth="100px" bgcolour="#F16D6D"/>

export const ChickenButtonYellow = () => <FoodButtonUI foodname="CHICKEN" foodimage="/chicken_drumstick.png" imageheight="100px" imagewidth="100px" bgcolour="#FFC32E"/>
