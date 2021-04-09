import React from 'react';
import HeaderUI from '../comps/Header';
import LoadingBarUI from '../comps/LoadingBar';
import EmptyBoxUI from '../comps/EmptyBox';
export default {
    title:"Jessica's Components",
    component:<HeaderUI/>,
    component:<LoadingBarUI/>,
    component:<EmptyBoxUI/>
}

export const MyHeaderUI = () => <HeaderUI/>
export const MyLoadingBarUI = () => <LoadingBarUI/>
export const MyEmptyBoxUI = () => <EmptyBoxUI/>

