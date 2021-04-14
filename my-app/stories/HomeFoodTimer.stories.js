import React from 'react';
import HomeFoodTimerUI from '../comps/HomeFoodTimer';

export default {
    title:"Jessica's Components/HomeFoodTimer",
    component:<HomeFoodTimerUI/>
}

export const HomeFoodTimerSalmonUI = () => <HomeFoodTimerUI/>
export const HomeFoodTimerMangoUI = () => (<HomeFoodTimerUI DAYS="2 DAYS" ITEM="ONION" bgcolor="#FFC32E" bgcolor1="#FFE4A3"/>);
export const HomeFoodTimerSeaweedUI = () => (<HomeFoodTimerUI DAYS="12 DAYS" ITEM="CARROT" bgcolor="#6FC3B2" bgcolor1="#D4E9E5"/>);
