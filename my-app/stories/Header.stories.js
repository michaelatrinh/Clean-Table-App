import React from 'react';
import HeaderUI from '../comps/Header';
import LoadingBarUI from '../comps/LoadingBar';
import EmptyBoxUI from '../comps/EmptyBox';
import HomeFoodTimerUI from '../comps/HomeFoodTimer';

export default {
    title:"Jessica's Components",
    component:<HeaderUI/>,
    component:<LoadingBarUI/>,
    component:<EmptyBoxUI/>,
    component:<HomeFoodTimerUI/>
}

export const MyHeaderUI = () => <HeaderUI/>
export const MyLoadingBarUI = () => <LoadingBarUI/>
export const MyEmptyBoxUI = () => <EmptyBoxUI/>
export const HomeFoodTimerSalmonUI = () => <HomeFoodTimerUI/>
export const HomeFoodTimerMangoUI = () => (<HomeFoodTimerUI DAYS="2 DAYS" ITEM="ONION" bgcolor="#FFC32E" bgcolor1="#FFE4A3"/>);
export const HomeFoodTimerSeaweedUI = () => (<HomeFoodTimerUI DAYS="12 DAYS" ITEM="CARROT" bgcolor="#6FC3B2" bgcolor1="#D4E9E5"/>);
