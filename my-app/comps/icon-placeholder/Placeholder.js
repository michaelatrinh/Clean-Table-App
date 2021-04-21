import React from 'react';
import styled from 'styled-components'; 


const PContainer = styled.div`
    // margin: 50px;
    // padding: 20px;
    height: ${props=>props.height};
    width: 335px;

    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #B8E0D8;

    border-radius: 20px;
    box-shadow: 0px 5px 10px #C0C0C0;

    // overflow: hidden;
`;

const PToprow = styled.div`
    display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 3;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

//   position: absolute;
//   margin-top: -45px;

  color: #696259;
  font-size: 16px;
  font-weight: 500;
  font-family: "Manrope", sans-serif;

//   height: 86px;
//   width: 340px;
`;

const Image = styled.img`
//   padding: 10px;
`;

const PMiddlerow = styled.div`
    display: flex;
  justify-content: space-evenly;
//   align-items: center;
  flex-grow: 3;
  
  width: 300px;
  font-size: 16px;

//   text-align: center;
  color: #696259;

//   margin-top: 10px;
`;

const FoodIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
  width: 90px;
  height: 88px;
  background-color: white;
  border-radius: 15px; 

  box-shadow: ${props=>props.shadow};
//   box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);

//   margin-top: 5px;
`;

const Label = styled.div`
display: flex;
justify-content: center;
align-items: center;

  width: 90px;
  min-height: 20px;
  background-color: #6FC3B2;
  color: #000000;
  font-family: "Manrope",sans-serif;
//   padding:1px;
  font-size: 12px;
  text-align: center;
  
//   margin-top: 70px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
`;

const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 99;
`;

const BottomDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
`;

const Img = styled.img`
    width: ${props=>props.width};
    height: auto;
//   margin-top: 10px;
//   margin-left: -25px;
//   position: absolute;
`;

const PlaceholderUI = ({
  image1 = "/broccoli.png",
  image2 = "/onion.png",
  image3 = "/carrot.png",

  label1 = "BROCCOLI",
  label2 = "ONION",
  label3 = "CARROT",


  subtitle = "VEGETABLES",

  title = "VEGETABLES",

  boxshadow = "0px 4px 5px rgba(0, 0, 0, 0.3)",

  widthA = "50px",
  widthB = "50px",
  widthC = "50px",

  height = "180px",

  onClickA = ()=>{}

}) => {

  return <PContainer height={height}>
    <PToprow> {subtitle}</PToprow>

    <PMiddlerow>
        <FoodIcon onClick={onClickA} shadow={boxshadow}>
            <ImageDiv>
                <Img src={image1} width={widthA} alt="image1"></Img>                
            </ImageDiv>
            
            <BottomDiv>
                <Label>{label1}</Label>                
            </BottomDiv>

        </FoodIcon>

        <FoodIcon shadow={boxshadow}>
            <ImageDiv>
                <Img src={image2} width={widthB} alt="image2"></Img>                
            </ImageDiv>

            <BottomDiv>
                <Label>{label2}</Label>                
            </BottomDiv>
        </FoodIcon>

        <FoodIcon shadow={boxshadow}>
            <ImageDiv>
                <Img src={image3} width={widthC} height="60px" alt="image3"></Img>                
            </ImageDiv>

            <BottomDiv>
                <Label>{label3}</Label>                
            </BottomDiv>
        </FoodIcon>
    </PMiddlerow>

  </PContainer>
}

export default PlaceholderUI;

/*</PContainer>*function Window() {
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