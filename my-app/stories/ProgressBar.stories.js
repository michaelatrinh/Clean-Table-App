import React from 'react';
import ProgressBarUI from '../comps/ProgressBar';

export default{
    title:"Michael's Components/Page Progress Bar",
    component: <ProgressBarUI/>
}

export const FirstPageProgressBar = () => <ProgressBarUI colour="#59A091" colour2="#B8E0D8" colour3="#B8E0D8"/>

export const SecondPageProgressBar = () => <ProgressBarUI colour="#B8E0D8" colour2="#59A091" colour3="#B8E0D8"/>

export const ThirdPageProgressBar = () => <ProgressBarUI colour="#B8E0D8" colour2="#B8E0D8" colour3="#59A091"/>