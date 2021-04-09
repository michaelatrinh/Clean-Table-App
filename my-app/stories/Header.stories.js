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
export const MyHomeFoodTimerUI = () => <HomeFoodTimerUI/>
