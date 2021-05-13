import React from 'react';
import styled from 'styled-components';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

import AddItem from '../comps/HomeFoodTimerAdd';
import HeaderUI from '../comps/Header';
import HomeFoodTimerUI from '../comps/HomeFoodTimer';
import NavBar from '../comps/NavBar/index2';
import FunFactWindow from '../comps/FunFactWindow';
import Congratulations from '../comps/congratulations-comp';

var foodName = {
    option1:""
};
var days = {
    option1:""
};
var darkColour = {
    option1:""
};
var lightColour = {
    option1:""
};
var newDarkWidth = {
    option1:""
};

export default function Homepage() {

    const [food, setFood] = useState(null);

    useEffect(()=>{
        if(process.browser){
            var item = sessionStorage.getItem("Item");
            setFood(item);
            
            if(item === "Chicken"){
                foodName.option1 = "CHICKEN";
                days.option1 = "2 DAYS";
                darkColour.option1 = "#FFC32E";
                lightColour.option1 = "#FFE4A3";
                newDarkWidth.option1 = "164px";
            } else if(item === "Beef"){
                foodName.option1 = "BEEF";
                days.option1 = "5 DAYS";
                darkColour.option1 = "#FFC32E";
                lightColour.option1 = "#FFE4A3";
                newDarkWidth.option1 = "200px";
            } else if(item === "Tofu"){
                foodName.option1 = "TOFU";
                days.option1 = "5 DAYS";
                darkColour.option1 = "#FFC32E";
                lightColour.option1 = "#FFE4A3";
                newDarkWidth.option1 = "200px";
            } else if(item === "Rice"){
                foodName.option1 = "RICE";
                days.option1 = "8 MONTHS";
                darkColour.option1 = "#6FC3B2";
                lightColour.option1 = "#D4E9E5";
                newDarkWidth.option1 = "342px";
            } else if(item === "Pasta"){
                foodName.option1 = "PASTA";
                days.option1 = "1 YEAR";
                darkColour.option1 = "#6FC3B2";
                lightColour.option1 = "#D4E9E5";
                newDarkWidth.option1 = "342px";
            } else if(item === "Potatoes"){
                foodName.option1 = "POTATOES";
                days.option1 = "1 MONTH";
                darkColour.option1 = "#6FC3B2";
                lightColour.option1 = "#D4E9E5";
                newDarkWidth.option1 = "342px";
            } else if(item === "Broccoli"){
                foodName.option1 = "BROCCOLI";
                days.option1 = "3 DAYS";
                darkColour.option1 = "#FFC32E";
                lightColour.option1 = "#FFE4A3";
                newDarkWidth.option1 = "184px";
            } else if(item === "Onion"){
                foodName.option1 = "ONION";
                days.option1 = "10 DAYS";
                darkColour.option1 = "#6FC3B2";
                lightColour.option1 = "#D4E9E5";
                newDarkWidth.option1 = "200px";
            } else if(item === "Carrot"){
                foodName.option1 = "CARROT";
                days.option1 = "3 WEEKS";
                darkColour.option1 = "#6FC3B2";
                lightColour.option1 = "#D4E9E5";
                newDarkWidth.option1 = "342px";
            }
        }
    }, []);

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

// --- PAGE -----------------------------------------------------
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
            <HomeFoodTimerUI DAYS={days.option1} ITEM={foodName.option1} bgcolordark={darkColour.option1} bgcolorlight={lightColour.option1} darkWidth={newDarkWidth.option1}></HomeFoodTimerUI>
        </FoodTimer>

        <FoodTimer>
            <AddItem onClickA={HandleAddNewClick} boxShadow={newBoxShadow}></AddItem>
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
// margin-bottom: 15px;
align-items:center;
`;

const headerWelcome = styled.div`
`;

const FoodCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex: 3;
    // margin-top: 75px;
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
    
