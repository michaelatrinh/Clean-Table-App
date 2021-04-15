import React from 'react';

import HeaderUI from '../comps/Header';



export default {
    title:"Jessica's Components/Header",
    component:<HeaderUI/>,


}

export const MyHeaderUI = () => <HeaderUI/>



import HeaderGang from '../comps/Header';
import LoadingBarUI from '../comps/LoadingBar';
import EmptyBoxUI from '../comps/EmptyBox';
import HomeFoodTimerUI from '../comps/HomeFoodTimer';

export default {
    title:"Jessica's Components",
    component:<HeaderGang/>,
    component:<LoadingBarUI/>,
    component:<EmptyBoxUI/>,
    component:<HomeFoodTimerUI/>
}

export const MyHeaderUI = () => (<HeaderGang/>);
export const MyLoadingBarUI = () => <LoadingBarUI/>
export const MyEmptyBoxUI = () => <EmptyBoxUI/>
export const HomeFoodTimerSalmonUI = () => <HomeFoodTimerUI/>
export const HomeFoodTimerMangoUI = () => (<HomeFoodTimerUI DAYS="2 DAYS" ITEM="ONION" bgcolor="#FFC32E" />);
export const HomeFoodTimerSeaweedUI = () => (<HomeFoodTimerUI DAYS="12 DAYS" ITEM="CARROT" bgcolor="#6FC3B2"/>);

