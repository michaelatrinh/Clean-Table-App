import React from 'react';
import HomeFoodTimerUI from '../comps/HomeFoodTimer';

export default {
    title:"Jessica's Components/HomeFoodTimer",
    component:<HomeFoodTimerUI/>
}

export const OneDaysChicken = () => <HomeFoodTimerUI/>
export const TwoDaysPasta = () => (<HomeFoodTimerUI DAYS="1 DAYS" ITEM="PASTA"/>);
export const TwoDaysOnion = () => (<HomeFoodTimerUI DAYS="2 DAYS" ITEM="ONION" bgcolor="#FFC32E" bgcolor1="#FFE4A3"/>);
export const TwelveDaysCarrot = () => (<HomeFoodTimerUI DAYS="12 DAYS" ITEM="CARROT" bgcolor="#6FC3B2" bgcolor1="#D4E9E5"/>);
export const EighteenDaysPotato = () => (<HomeFoodTimerUI DAYS="18 DAYS" ITEM="POTATO" bgcolor="#6FC3B2" bgcolor1="#D4E9E5"/>);
