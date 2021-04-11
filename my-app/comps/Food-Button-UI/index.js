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
`;

const FoodButtonPart1 = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;

`;

const FoodButtonPart2 = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;

`;

const FoodButtonBottom = styled.div`
    display: flex;
    background-color: #6FC3B2;
    width: 145px;
    height: 30px;
    border-radius: 0px 0px 20px 20px;
    text-align: center;
    &>p {
        display: flex;
        z-index: 1;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-family: Manrope;
    }
`;

const FoodButtonImage = styled.img(props => {
    props.foodimage;
})`
    img {
        width: 110px;
        height: 110px;
    }
`;

const FoodButtonUI = ({
    foodname="name",
    foodimage = src = "/chicken_drumstick.png"
}) => {
    return <FoodButtonContainer>
        <FoodButtonPart1>
            <FoodButtonImage>
                {foodimage}
            </FoodButtonImage>
        </FoodButtonPart1>
        <FoodButtonPart2>
            <FoodButtonBottom>
                {foodname}
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