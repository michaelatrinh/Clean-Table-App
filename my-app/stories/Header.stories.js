import React from 'react';
import HeaderUI from '../comps/Header';
import LoadingBarUI from '../comps/LoadingBar';
export default {
    title:"Jessica's Components",
    component:<HeaderUI/>,
    component:<LoadingBarUI/>
}

export const MyHeaderUI = () => <HeaderUI/>
export const MyLoadingBarUI = () => <LoadingBarUI/>

