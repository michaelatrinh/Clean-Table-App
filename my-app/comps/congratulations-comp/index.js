import React from 'react';
import styled from 'style-components';

const CongratsContainer = styled.div`
    margin: 50px;
    padding: 20px;
    height: 562px;
    width: 336px;

    display: flex; 
    flex-direction: column;
    align-items: center;
    background-color: white;

    border-radius: 20px;
    box-shadow: 0px 5px 10px #C0C0C0;
`;

const TopRow = styled.div`
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

      position: absolute;
      margin-top: -20px;

      background-color: #59A091;
      color: white;
      font-size: 20px;
      font-weight: 500;

      height: 86px;
      width: 340px;

      display: flex;
      justify-content: center;
      align-items: center;
`;

const MiddleRow = styled.div`
    width: 250px;
    font-size: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 50px;
`;

 const CongratsText = styled.p`
    display: flex;
    text-align: center;
    font-size: 18px;
 `;

  const Congrats = ({
    stylestext="You’ve just entered in your grocery list into “MyPantry!” Now you can keep track of the food in your household.The Home page will show you the items that are about to expire. Use our Recipe Generator feature to create delicious meals before they expire! Happy Saving!" , 
    headertext="CONGRATULATIONS", 

  }) =>{

    return <CongratsContainer>
              <TopRow></TopRow>
              <MiddleRow></MiddleRow>
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