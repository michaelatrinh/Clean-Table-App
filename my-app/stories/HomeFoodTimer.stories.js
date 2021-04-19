import React from 'react';
import HomeFoodTimerUI from '../comps/HomeFoodTimer';

export default {
    title:"Jessica's Components/HomeFoodTimer",
    component:<HomeFoodTimerUI/>
}

export const OneDaysChicken = () => <HomeFoodTimerUI/>

export const TwoDaysPasta = () => (<HomeFoodTimerUI DAYS="1 DAYS" ITEM="PASTA" barwidth="164px"/>);
export const TwoDaysOnion = () => (<HomeFoodTimerUI DAYS="2 DAYS" ITEM="ONION" bgcolor="#FFC32E" bgcolor1="#FFE4A3" />);
export const TwelveDaysCarrot = () => (<HomeFoodTimerUI DAYS="12 DAYS" ITEM="CARROT" bgcolor="#6FC3B2" bgcolor1="#D4E9E5" barwidth="235px"/>);
export const EighteenDaysPotato = () => (<HomeFoodTimerUI DAYS="18 DAYS" ITEM="POTATO" bgcolor="#6FC3B2" bgcolor1="#D4E9E5" barwidth="292px"/>);



export const TwoDaysPasta = () => (<HomeFoodTimerUI DAYS="1 DAYS" ITEM="PASTA"/>);
export const TwoDaysOnion = () => (<HomeFoodTimerUI DAYS="2 DAYS" ITEM="ONION" bgcolordark="#FFC32E" bgcolorlight="#FFE4A3"/>);
export const TwelveDaysCarrot = () => (<HomeFoodTimerUI DAYS="12 DAYS" ITEM="CARROT" bgcolordark="#6FC3B2" bgcolorlight="#D4E9E5"/>);
export const EighteenDaysPotato = () => (<HomeFoodTimerUI DAYS="18 DAYS" ITEM="POTATO" bgcolordark="#6FC3B2" bgcolorlight="#D4E9E5"/>);

// export const TwoDaysPasta = () => (<HomeFoodTimerUI DAYS="1 DAYS" ITEM="PASTA" barwidth="164px"/>);
// export const TwoDaysOnion = () => (<HomeFoodTimerUI DAYS="2 DAYS" ITEM="ONION" bgcolor="#FFC32E" bgcolor1="#FFE4A3" />);
// export const TwelveDaysCarrot = () => (<HomeFoodTimerUI DAYS="12 DAYS" ITEM="CARROT" bgcolor="#6FC3B2" bgcolor1="#D4E9E5" barwidth="235px"/>);
// export const EighteenDaysPotato = () => (<HomeFoodTimerUI DAYS="18 DAYS" ITEM="POTATO" bgcolor="#6FC3B2" bgcolor1="#D4E9E5" barwidth="292px"/>);


// import Head from 'next/head';
// import React from 'react';
// import styled from 'styled-components';

// import HeaderUI from '../comps/Header';
// import HomeFoodTimerUI from '../comps/HomeFoodTimer';
// import NavBar from '../comps/NavBar'

// const Main = styled.div`
//     background-color: "#E7F2F0";
//     height:876px;
//     width: 375px;
// `;

// const HeaderCont = styled.div`

// `;

// const SemiCircle = styled.div`
//     width: 375px;
//     height: 100px;
//     background-color: #59A091;
//     border-top-left-radius: 500px; 
//     border-top-right-radius: 500px; 
//     border-bottom: 0;
//     transform: rotate(180deg);
// `;

// const Txt = styled.div`
//     transform: rotate(180deg);
//     text-align:center;
//     font-size: 18px;
//     color: white;

//     position: relative;
//     top: 40px;
// `;

// const FoodTimer = styled.div`
// margin-bottom: 15px;
// align-items:center;
// `;

// const headerWelcome = styled.div`
// `;

// const FoodCont = styled.div`
// margin-top: 40px;
// margin-bottom: 100px;

// position: relative;
// left: 20px;

// `;

