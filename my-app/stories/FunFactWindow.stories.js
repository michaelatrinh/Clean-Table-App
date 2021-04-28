import React from 'react';
import FunFactUI from '../comps/FunFactWindow';

export default {
    title:"Jessica's Components/FunFactWindow",
    component:<FunFactUI/>,
}
export const MyFunFactWindowUI = () => <FunFactUI/>

export const FunFact2 = () => (<FunFactUI   ptext = "Preserve produce. Produce doesn’t have to be tossed just because it’s reaching the end of its peak. Soft fruit can be used in smoothies; wilting vegetables can be used in soups, etc."/>);
export const FunFact3 = () => (<FunFactUI   ptext = "Donate the gross stuff, too! Many farmers happily accept food scraps for feeding pigs or adding to a compost heap."/>);
export const FunFact4 = () => (<FunFactUI   ptext = "Donate what you won’t use. Never going to eat that can of beans? Donate it to a food kitchen before it expires so it can be consumed by someone who needs it."/>);
export const FunFact5 = () => (<FunFactUI   ptext = "By buying local produce, you support family farmers and small businesses in your community. You also help fight pollution by reducing delivery distances for trucks and other vehicles."/>);

