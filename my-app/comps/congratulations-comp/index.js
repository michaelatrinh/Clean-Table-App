import React from 'react';
import styled from 'styled-components';
// import Trophy from '../../public/image_9.png';

const CongratsContainer = styled.div`
    // margin: 50px;
    // padding: 20px;
    height: 647px;
    width: ${props=>props.width};
    overflow:hidden;

    display: flex; 
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    background-color: white;

    border-radius: 20px;
    box-shadow: 0px 5px 10px #C0C0C0;
    font-family: 'Manrope', sans-serif;
`;

const TopRow = styled.div`
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

    //   position: absolute;
    //   margin-top: -20px;

      background-color: #59A091;
      color: white;
      font-size: 20px;
      font-weight: 500;
      text-shadow: 2px 2px #6FC3B2;

      height: 86px;
      width: 336px;

      display: flex;
      justify-content: center;
      align-items: center;
`;

const MiddleRow = styled.div`
    width: 336px;
    height: 561px;
    font-size: 18px;
    font-family: 'Manrope', sans-serif;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // margin-top: 200px;

    &>p {
        width: 309px;
    }
`;

const ConfirmButton = styled.button`
  width: 120px;
  height: 30px;

  background-color: #59A091;
  color: white;
  border: none;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);

//   position: absolute;
//   margin-top: 350px;

`;

 const CongratsText = styled.p`
    display: flex;
    text-align: center;
    font-size: 18px;
 `;


 const Img = styled.img`
    display: flex;
//   margin-top: -200px;
//   position: absolute;
`;

const Congrats = ({
    stylestext="You’ve just entered in your grocery list into “MyPantry!” Now you can keep track of the food in your household.The Home page will show you the items that are about to expire. Use our Recipe Generator feature to create delicious meals before they expire! Happy Saving!" , 
    headertext="CONGRATULATIONS", 
    image = "/image_9.png",
    okay = ()=>{},
    width = "336px",
  }) => {

    return <CongratsContainer width={width}>
              <TopRow>CONGRATULATIONS</TopRow>
              <MiddleRow>
              <Img src={image} width="120px" height="110px" alt="broccoli"></Img>

              <p>
      You’ve just entered in your grocery list into “MyPantry!” Now you can keep track of the food in your household. <br></br><br></br>
      The “Home” page will show you the items that are about to expire. <br></br><br></br>
      Use our “Recipe Generator” feature to create delicious meals before they expire!<br></br><br></br>
      Happy Saving!
      </p>

      <ConfirmButton onClick={okay}>OKAY</ConfirmButton>
              </MiddleRow>
      </CongratsContainer>

  }

  export default Congrats; 

/*function Congratulations() {
  return (
    <div className={styles.container}>
    <div className={styles.toprow}>CONGRATULATIONS</div>
    <div className={styles.image}>
        <img src="/trophy.png" alt="trophy"/>
    </div>
    <div className={styles.middlerow}>
      <p className={styles.text}>
      You’ve just entered in your grocery list into “MyPantry!” Now you can keep track of the food in your household. <br></br><br></br>
      The “Home” page will show you the items that are about to expire. <br></br><br></br>
      Use our “Recipe Generator” feature to create delicious meals before they expire!<br></br><br></br>
      Happy Saving!
      </p>
    </div>

    <div><button className={styles.button}>OKAY</button></div>
    </div>
  )
}

export default Congratulations;

export{Congratulations}*/