import React from 'react';
import BackgroundRecUI from '../comps/BackgroundRec';

export default {
    title:"Jessica's Components/BackgroundRec",
    component:<BackgroundRecUI/>
}

export const PROTEIN = () => <BackgroundRecUI/>
export const CARBOHYDRATES = () => (<BackgroundRecUI ITEM="CARBOHYDRATES"/>);
export const VEGETABLES = () => (<BackgroundRecUI ITEM="VEGETABLES"/>);



