
import React from 'react';
import styled from 'styled-components'; 


const PContainer = styled.div`
    margin: 50px;
    padding: 20px;
    height: 105px;
    width: 305px;

    display: flex; 
    flex-direction: column;
    align-items: center;
    background-color: #B8E0D8;

    border-radius: 20px;
    box-shadow: 0px 5px 10px #C0C0C0;
`;

const PToprow = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  position: absolute;
  margin-top: -45px;

  color: #696259;
  font-size: 16px;
  font-weight: 500;
  font-family: sans-serif;

  height: 86px;
  width: 340px;

  display: flex;
  justify-content: center;
  align-items: center;

`;

const Image = styled.image`
  padding: 10px;
`;

const PMiddlerow = styled.div`
  width: 300px;
  font-size: 16px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  color: #696259;

  margin-top: 10px;
`;

const FoodIcon = styled.div`
  width: 90px;
  height: 88px;
  background-color: white;
  border-radius: 15px; 

  box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.3);
  margin-top: 5px;
`;

const Label = styled.div`
  width: 90px;
  height: 20px;
  background-color: #6FC3B2;
  color: #000000;
  font-family: sans-serif;
  padding:1px;
  font-size: 12px;
  text-align: center;
  
  margin-top: 70px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const Img = styled.img`
  margin-top: 10px;
  margin-left: -25px;
  position: absolute;
`;

const PlaceholderUI = ({
  image1 = "/broccoli.png",
  image2 = "/onion.png",
  image3 = "/carrot.png",

  label1 = "BROCCOLI",
  label2 = "ONION",
  label3 = "CARROT",

  title = "VEGETABLES"
}) => {

  return <PContainer>
    <PToprow>{title}</PToprow>

    <PMiddlerow>
        <FoodIcon>
        <Img src={image1} width="60px" height="60px" alt="image1"></Img>
        <Label>{label1}</Label>
        </FoodIcon>

        <FoodIcon>
        <Img src={image2} width="50px" height="50px" alt="image2"></Img>
        <Label>{label2}</Label>
        </FoodIcon>

        <FoodIcon>
        <Img src={image3} width="60px" height="60px" alt="image3"></Img>
        <Label>{label3}</Label>
        </FoodIcon>
      
    </PMiddlerow>

  </PContainer>

}

export default PlaceholderUI;

/*function Window() {
  return (
    <div className={styles.container}>
    <div className={styles.toprow}>VEGETABLES</div>

    <div className={styles.middlerow}>
      <div className={styles.foodbutton1}>
        <div className={styles.foodlabel1}>Example</div>
      </div>

      <div className={styles.foodbutton2}>
        <div className={styles.foodlabel2}>Example</div>
      </div>

      <div className={styles.foodbutton3}>
        <div className={styles.foodlabel}>Example</div>
      </div>
    </div>
    </div>
  )
}

export default Window;

export{Window}*/