import React from 'react';
import styled from 'styled-components';
import FoodButtonUIStyle from '../../styles/Food-Button-UI.module.css';

const FoodButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 145px;
    background-color: #FFFFFF;
    border-radius: 20px;
`;

const FoodButtonPart1 = styled.div`
    display: flex;
    flex-grow: 99;
    justify-content: center;
    align-items: center;
`;

const FoodButtonPart2 = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

const FoodButtonBottom = styled.div`
    display: flex;
    background-color: #6FC3B2;
    width: 145px;
    min-height: 30px;
    border-radius: 0px 0px 20px 20px;
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

const FoodButtonUI = ({
    foodname = "name",
    foodimage = "/chicken_drumstick.png",
    imagewidth = "110px",
    imageheight = "110px"
}) => {
    return <FoodButtonContainer>
        <FoodButtonPart1>
            <FoodButtonImage src={foodimage} width={imagewidth} height={imageheight}>
            </FoodButtonImage>
        </FoodButtonPart1>
        <FoodButtonPart2>
            <FoodButtonBottom>
                <p>{foodname}</p>
            </FoodButtonBottom>
        </FoodButtonPart2>
    </FoodButtonContainer>
}

/*const FoodButtonUI = () => {
    return <div className={FoodButtonUIStyle.container}>
        <div className={FoodButtonUIStyle.background}>
            <div className={FoodButtonUIStyle.part1}>
                <img className={FoodButtonUIStyle.image1} src='chicken_drumstick.png'></img>
            </div>
            <div className={FoodButtonUIStyle.part2}>
                <p className={FoodButtonUIStyle.p1}>CHICKEN</p>
                <div className={FoodButtonUIStyle.greenBottom}></div>
            </div>
        </div>
    </div>
}*/

export default FoodButtonUI;