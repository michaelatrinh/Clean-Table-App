import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';

import HeaderUI from '../comps/Header';
import HomeFoodTimerUI from '../comps/HomeFoodTimer';
import NavBar from '../comps/NavBar';
import FunFactWindow from '../comps/FunFactWindow';
import Congratulations from '../comps/congratulations-comp';

const Main = styled.div`
    background-color: #E7F2F0;
    height:876px;
    width: 375px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const HeaderCont = styled.div`

`;

const SemiCircle = styled.div`
    width: 375px;
    height: 100px;
    background-color: #59A091;
    border-top-left-radius: 500px; 
    border-top-right-radius: 500px; 
    border-bottom: 0;
    transform: rotate(180deg);
`;

const Txt = styled.div`
    transform: rotate(180deg);
    text-align:center;
    font-size: 18px;
    color: white;

    position: relative;
    top: 40px;
`;

const FoodTimer = styled.div`
margin-bottom: 15px;
align-items:center;
`;

const headerWelcome = styled.div`
`;

const FoodCont = styled.div`
margin-top: 40px;
margin-bottom: 100px;

position: relative;
left: 20px;

`;

const FunFact = styled.div`
  position:relative;
  left: 35px;
  bottom: 50px;

`;

const MainCont = styled.div`
max-height: 876px;
max-width: 375px;

display:flex;
justify-content: center;
align-items: center;
`;

const Popup= styled.div`
position: absolute;
justify-content: center;
// left: 465px;
// top:100px;
z-index: 1;
`;

    
export default function Homepage() {

    const [okayState, setOkayState] = useState(false);

    var okaybutton = "336px"
    if (okayState) {
        var okaybutton = "0px"
    }

    /*function handleClick() {

        setOkayState(!okayState) 

    }*/

    const HandleClick = () => {
        setOkayState(!okayState)
    }
    
    return <MainCont>
    <Main>
    
    <HeaderCont>
        <HeaderUI></HeaderUI>
    </HeaderCont>

    <SemiCircle>
        <Txt>
        WELCOME BACK! <br></br> HEY! JUST A REMINDER THAT<br></br> YOUR GROCERIES WILL EXPIRE IN:
        </Txt>
    </SemiCircle>

    <headerWelcome></headerWelcome>


    <FoodCont>
    <FoodTimer>
        <HomeFoodTimerUI 
        DAYS="1 DAYS"
        ITEM="CHICKEN"
        bgcolor="#F16D6D"
        bgcolor1="#FCD8D8"/>
    </FoodTimer>

    <FoodTimer>
        <HomeFoodTimerUI DAYS="1 DAYS" ITEM="PASTA" 
        />
    </FoodTimer>

    <FoodTimer>
        <HomeFoodTimerUI DAYS="2 DAYS" ITEM="ONION" bgcolordark="#FFC32E" bgcolorlight="#FFE4A3" barwidth="164px"
        />
    </FoodTimer>

    <FoodTimer>
        <HomeFoodTimerUI DAYS="12 DAYS" ITEM="CARROT" bgcolordark="#6FC3B2" bgcolorlight="#D4E9E5" barwidth="235px"
        />
   </FoodTimer>

   <FoodTimer>
        <HomeFoodTimerUI DAYS="18 DAYS" ITEM="POTATO" bgcolordark="#6FC3B2" bgcolorlight="#D4E9E5" barwidth="292px"
        />
    </FoodTimer>
    </FoodCont>

    <FunFact>
        <FunFactWindow
        />
    </FunFact>


    <div className="navbar">
        <NavBar></NavBar>
    </div>
    </Main>

    <Popup>
        <Congratulations okay={HandleClick} width={okaybutton}
        /> 
    </Popup>

    </MainCont>
}




/*import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

import HeaderUI from '../comps/Header';
import HomeFoodTimerUI from '../comps/HomeFoodTimer';
import NavBar from '../comps/NavBar'

const Main = styled.div`
    background-color: "#E7F2F0";
    height:876px;
    width: 375px;
`;

const HeaderCont = styled.div`

`;

const SemiCircle = styled.div`
    width: 375px;
    height: 100px;
    background-color: #59A091;
    border-top-left-radius: 500px; 
    border-top-right-radius: 500px; 
    border-bottom: 0;
    transform: rotate(180deg);
`;

const Txt = styled.div`
    transform: rotate(180deg);
    text-align:center;
    font-size: 18px;
    color: white;

    position: relative;
    top: 40px;
`;

const FoodTimer = styled.div`
margin-bottom: 15px;
align-items:center;
`;

const headerWelcome = styled.div`
`;

const FoodCont = styled.div`
margin-top: 40px;
margin-bottom: 100px;

position: relative;
left: 20px;

`;

export default function Homepage() {
    
    return <Main>
    
    <HeaderCont>
        <HeaderUI></HeaderUI>
    </HeaderCont>

    <SemiCircle>
        <Txt>
        WELCOME BACK! <br></br> HEY! JUST A REMINDER THAT<br></br> YOUR GROCERIES WILL EXPIRE IN:
        </Txt>
    </SemiCircle>

    <headerWelcome></headerWelcome>


    <FoodCont>
    <FoodTimer>
        <HomeFoodTimerUI 
        DAYS="1 DAY"
        ITEM="CHICKEN"
        bgcolordark="#F16D6D"
        bgcolorlight="#FCD8D8"
        />
    </FoodTimer>

    <FoodTimer>
        <HomeFoodTimerUI
         DAYS="1 DAY"
        ITEM="PASTA"
        bgcolordark="#F16D6D"
        bgcolorlight="#FCD8D8"
        />
    </FoodTimer>

    <FoodTimer>
        <HomeFoodTimerUI
         DAYS="2 DAYS"
         ITEM="ONION"
         bgcolordark="#FFC32E"
         bgcolorlight="#FFE4A3"
        />
    </FoodTimer>

    <FoodTimer>
        <HomeFoodTimerUI
         DAYS="12 DAYS"
         ITEM="CARROT"
         bgcolordark="#6FC3B2"
         bgcolorlight="#D4E9E5"
        />
   </FoodTimer>

   <FoodTimer>
        <HomeFoodTimerUI
         DAYS="18 DAYS"
         ITEM="POTATOES"
         bgcolordark="#6FC3B2"
         bgcolorlight="#D4E9E5"
        />
    </FoodTimer>
    </FoodCont>


    <div className="navbar">
        <NavBar></NavBar>
    </div>

    </Main>
}
*/