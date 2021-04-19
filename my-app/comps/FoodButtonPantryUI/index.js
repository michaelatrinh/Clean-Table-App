import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const FoodButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: #FFFFFF;
    border-radius: 20px;
`;

const FoodButtonBiggerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 144px;
    &>h1 {
        display: flex;
        z-index: 1;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        font-family: "Manrope", sans-serif;
        color: #302B40;
    }
    &>p {
        display: flex;
        z-index: 1;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 11px;
        font-weight: light;
        font-family: "Quicksand", sans-serif;
        color: #302B40;
    }
`;

const FoodButtonPart1 = styled.div`
    display: flex;
    flex-grow: 99;
    justify-content: center;
    align-items: center;
`;

const FoodButtonPart2 = styled.div`
    display: flex;
    flex-grow: 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

const FoodButtonBottom = styled.div`
    display: flex;
    background-color: ${props=>props.bgcolour};
    width: 100px;
    min-height: 20px;
    border-radius: 0px 0px 15px 15px;
    text-align: center;
    justify-content: center;
    align-items: center;
    &>p {
        display: flex;
        z-index: 1;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 14px;
        font-weight: light;
        font-family: "Manrope", sans-serif;
    }
`;

const FoodButtonImage = styled.img`
    width: ${props=>props.width};
    height: ${props=>props.height};
`;

const FoodButtonPantry = ({
    days = "1 DAY",
    foodimage = "/chicken_drumstick.png",
    imagewidth = "58px",
    imageheight = "58px",
    bgcolour = "#F16D6D",
    foodname = "CHICKEN",
    expirydate = "expires on: \n February, 1, 2021",
    routeTo = "/pantry"
}) => {
    return <FoodButtonBiggerContainer>
            <h1>{foodname}</h1>
                <FoodButtonContainer>
                    <FoodButtonPart1>
                        <FoodButtonImage src={foodimage} width={imagewidth} height={imageheight}>
                        </FoodButtonImage>
                    </FoodButtonPart1>
                    <FoodButtonPart2>
                        <FoodButtonBottom bgcolour={bgcolour}>
                            <p>{days}</p>
                        </FoodButtonBottom>
                    </FoodButtonPart2>
                </FoodButtonContainer>
            <p>{expirydate}</p>
        </FoodButtonBiggerContainer>
}

export default FoodButtonPantry;