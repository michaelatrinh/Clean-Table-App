import React from 'react';
import styled from 'styled-components'; 

const FunContainer = styled.div`
//   margin: 50px;
//   padding: 20px;
  min-height: 80px;
  width: 305px;

  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #B8E0D8;
 
  border-radius: 20px;
  box-shadow: 0px 5px 10px #C0C0C0;
`;

const FunTopRow = styled.h1`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

//   position: absolute;
//   margin-top: 35px;

  color: #696259;
  font-size: 16px;
  font-weight: bold;
  font-family: "Manrope", sans-serif;
  
  margin-top: 0.85rem;
  margin-bottom: 0.33rem;

//   height: 86px;
//   width: 305px;

//   display: flex;
//   justify-content: center;
//   align-items: center;
`;

const FunMidRow = styled.div`
  width: 267px;
  font-size: 14px;
  font-family: "Manrope",sans-serif;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  color: #696259;

//   margin-top: 10px;
    margin-bottom: 0.85rem;
`;

const FunFactUI = ({
    htext = "DID YOU KNOW?",
    ptext = "Most foods can be frozen to be used at a later date to keep them from spoiling & ending up in the landfill."
}) => {

  return <FunContainer>
    <FunTopRow>{htext}</FunTopRow>

    <FunMidRow>{ptext}</FunMidRow>
  </FunContainer>

}

export default FunFactUI;


/*function FunFact() {

import styles from '../styles/funfactwindow'


function FunFact() {

  return (
    <div className={styles.container}>
    <div className={styles.toprow}>VEGETABLES</div>

    <div className={styles.middlerow}>
      <p>You can save your vegetable scraps and peels to make home-made veggie stock!</p>
    </div>
    </div>
  )
}

export default FunFact;


export{FunFact}*/

// export{FunFact}




