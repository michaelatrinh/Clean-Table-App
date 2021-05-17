import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const MainContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
`;

const FoodButtonUI = ({
    foodname1 = "CHICKEN",
    foodname2 = "BEEF",
    foodname3 = "TOFU",
    foodimage1 = "/chicken_drumstick.png",
    foodimage2 = "/shaved_beef.png",
    foodimage3 = "/tofu_squares.png",
    imagewidth1 = "100px",
    imagewidth2 = "110px",
    imagewidth3 = "126px",
    imageheight1 = "100px",
    imageheight2 = "90px",
    imageheight3 = "99px",
    bgcolour = "#6FC3B2",
    darken1 = "0px 4px 5px #494948",
    darken2 = "0px 4px 5px #494948",
    darken3 = "0px 4px 5px #494948",
    onClickA = ()=>{},
    onClickB = ()=>{},
    onClickC = ()=>{}
}) => {
    // const [clickState, setClickState] = useState(false);
    // onClick={()=>router.push(routeTo)

    return <MainContainer>
        <FoodButtonContainer onClick={onClickA} boxshadow={darken1}>
            <FoodButtonPart1>
                <FoodButtonImage src={foodimage1} width={imagewidth1} height={imageheight1}>
                </FoodButtonImage>
            </FoodButtonPart1>
            <FoodButtonPart2>
                <FoodButtonBottom bgcolour={bgcolour}>
                    <p>{foodname1}</p>
                </FoodButtonBottom>
            </FoodButtonPart2>
        </FoodButtonContainer>

        <FoodButtonContainer onClick={onClickB} boxshadow={darken2}>
            <FoodButtonPart1>
                <FoodButtonImage src={foodimage2} width={imagewidth2} height={imageheight2}>
                </FoodButtonImage>
            </FoodButtonPart1>
            <FoodButtonPart2>
                <FoodButtonBottom bgcolour={bgcolour}>
                    <p>{foodname2}</p>
                </FoodButtonBottom>
            </FoodButtonPart2>
        </FoodButtonContainer>

        <FoodButtonContainer onClick={onClickC} boxshadow={darken3}>
            <FoodButtonPart1>
                <FoodButtonImage src={foodimage3} width={imagewidth3} height={imageheight3}>
                </FoodButtonImage>
            </FoodButtonPart1>
            <FoodButtonPart2>
                <FoodButtonBottom bgcolour={bgcolour}>
                    <p>{foodname3}</p>
                </FoodButtonBottom>
            </FoodButtonPart2>
        </FoodButtonContainer>
    </MainContainer>
}
    
export default FoodButtonUI;

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
