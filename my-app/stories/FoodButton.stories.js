import React from 'react';
import FoodButtonUI from '../comps/FoodButtonUI';

export default{
    title:"Michael's Components/Food Buttons",
    component: <FoodButtonUI/>
}

export const ChickenButton = () => <FoodButtonUI foodname="CHICKEN" foodimage="/chicken_drumstick.png" imageheight="100px" imagewidth="100px"/>

export const BeefButton = () => <FoodButtonUI foodname="BEEF" foodimage="/shaved_beef.png" imageheight="90px" imagewidth="110px"/>

export const TofuButton = () => <FoodButtonUI foodname="TOFU" foodimage="/tofu_squares.png" imageheight="99px" imagewidth="126px"/>

export const RiceButton = () => <FoodButtonUI foodname="RICE" foodimage="/rice_bowl.png" imageheight="78px" imagewidth="107px"/>

export const PastaButton = () => <FoodButtonUI foodname="PASTA" foodimage="/pasta_dish.png" imageheight="90px" imagewidth="112px"/>

export const PotatoesButton = () => <FoodButtonUI foodname="POTATOES" foodimage="/potatoes.png" imageheight="106px" imagewidth="118px"/>

export const BroccoliButton = () => <FoodButtonUI foodname="BROCCOLI" foodimage="/broccoli.png" imageheight="99px" imagewidth="107px"/>

export const OnionButton = () => <FoodButtonUI foodname="ONION" foodimage="/onion.png" imageheight="91px" imagewidth="93px"/>

export const CarrotButton = () => <FoodButtonUI foodname="CARROT" foodimage="/carrot.png" imageheight="89px" imagewidth="86px"/>