import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const FoodButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 145px;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: ${props=>props.boxshadow};
    transition: boxshadow 0.25s;
`; /*0px 4px 5px #494948*/

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
    width: 145px;
    min-height: 30px;
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
        font-size: 18px;
        font-weight: light;
        font-family: "Manrope", sans-serif;
    }
`;

const FoodButtonImage = styled.img`
    width: ${props=>props.width};
    height: ${props=>props.height};
`;
// 0px 4px 5px #494948
// inset 0 0 10px 5px #C4C4C4
const FoodButtonUI = ({
    foodname = "name",
    foodimage = "/chicken_drumstick.png",
    imagewidth = "110px",
    imageheight = "110px",
    bgcolour = "#6FC3B2",
    darken = "0px 4px 5px #494948",
    onClick = ()=>{},
    routeTo = "/add-protein",
    onClickA = ()=>{}

}) => {
    // const [clickState, setClickState] = useState(false);
    // onClick={()=>router.push(routeTo)

    return <FoodButtonContainer onClick={onClickA} boxshadow={darken}>
        <FoodButtonPart1>
            <FoodButtonImage src={foodimage} width={imagewidth} height={imageheight}>
            </FoodButtonImage>
        </FoodButtonPart1>
        <FoodButtonPart2>
            <FoodButtonBottom bgcolour={bgcolour}>
                <p>{foodname}</p>
            </FoodButtonBottom>
        </FoodButtonPart2>
    </FoodButtonContainer>
}

export default FoodButtonUI;