// import Head from 'next/head';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import HeaderUI from '../comps/Header';
import HomeFoodTimerUI from '../comps/HomeFoodTimer';
import AddItem from '../comps/HomeFoodTimerAdd';
import NavBar from '../comps/NavBar/index.js';
import FunFactWindow from '../comps/FunFactWindow';
import Congratulations from '../comps/congratulations-comp';
import {useRouter} from 'next/router';

var CongratsClicked = null;

export default function Homepage() {
// --- STATE CHANGE FOR THE CONGRATULATIONS WINDOW --------------
    const [okayState, setOkayState] = useState(false);

    var okaybutton = "336px"
    if (okayState) {
        var okaybutton = "0px"
    }

    // const HandleClick = () => {
    //     setOkayState(!okayState)
    // }
    
// --- STATE CHANGE FOR THE ADD NEW ITEM BUTTON -----------------
    const [addNew, setAddNew] = useState(false);

    var newBoxShadow = "0px 4px 5px -2px";
    if(addNew){
        var newBoxShadow = "inset 0px 0px 5px -1px"
    }

    const HandleAddNewClick = () => {
        setAddNew(!addNew);
        setTimeout(NextPage, 150)
    }

    const router = useRouter();
    const NextPage = () => {
        const routeTo = "/pantry-pick-category";
        router.push(routeTo);
    }

// --- CHECK IF CONGRATULATIONS WAS PASSED ALREADY --------------
    const HandleClickOkay = (okay) => {
        // setOkayState(false);
        CongratsClicked = okay;
        sessionStorage.setItem("CongratsClicked", CongratsClicked);
    }

    // const [congrats, setCongrats] = useState(null);

    useEffect(()=>{
        if(process.browser){
            const seen = sessionStorage.getItem("CongratsClicked");
            
            if(seen === "CongratsSeen"){
                setOkayState(true);
            }
        }
    })

// --- PAGE -----------------------------------------------------
    return <MainCont>
    <Main>
    
        <HeaderCont>
            <HeaderUI onClickA={()=>router.push("/homepage")}></HeaderUI>
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
            <HomeFoodTimerUI DAYS="2 DAYS" ITEM="ONION" bgcolordark="#FFC32E" bgcolorlight="#FFE4A3" barwidth="164px" darkWidth="164px"
            />
        </FoodTimer>

        <FoodTimer>
            <HomeFoodTimerUI DAYS="12 DAYS" ITEM="CARROT" bgcolordark="#6FC3B2" bgcolorlight="#D4E9E5" barwidth="235px" darkWidth="235px"
            />
        </FoodTimer>

        <FoodTimer>
            <HomeFoodTimerUI DAYS="18 DAYS" ITEM="POTATO" bgcolordark="#6FC3B2" bgcolorlight="#D4E9E5" barwidth="292px" darkWidth="292px"
            />
        </FoodTimer>

        <FoodTimer>
            <AddItem onClickA={HandleAddNewClick} boxShadow={newBoxShadow}></AddItem>
        </FoodTimer>
        </FoodCont>

        <FunFact>
            <FunFactWindow
            />
        </FunFact>


        <NavBar></NavBar>

    </Main>

        <Popup>
            <Congratulations okay={()=>{
                HandleClickOkay("CongratsSeen");
                setOkayState(true);
            }} width={okaybutton}
            /> 
        </Popup>

    </MainCont>
}

const Main = styled.div`
    background-color: #E7F2F0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const HeaderCont = styled.div`

`;

const SemiCircle = styled.div`
    width: 100vw;
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
    display: flex;
    flex-direction: column;
// justify-content: space-evenly;
    align-items: center;
    flex: 2;
    margin-top: 75px;
// margin-bottom: 100px;

// position: relative;
// left: 20px;

`;

const FunFact = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

//   position:relative;
//   left: 35px;
//   bottom: 50px;

`;

const MainCont = styled.div`
height: 100vh;
width: 100vw;

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