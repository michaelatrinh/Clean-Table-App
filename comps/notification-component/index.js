import React from 'react';
import styled from 'styled-components';


const NotifContainer = styled.div`
  margin: 50px;
  padding: 20px;
  height: 260px;
  width: 305px;

  display: flex; 
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;

  border-radius: 20px;
  box-shadow: 0px 5px 10px #C0C0C0;
`;

const NotifTopRow = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  position: absolute;
  margin-top: -20px;

  background-color: #59A091;
  color: white;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Manrope', sans-serif;
  text-shadow: 2px 2px #6FC3B2;

  height: 86px;
  width: 350px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotifMidRow = styled.div`
  width: 250px;
  font-size: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
`;

const NotifText = styled.p`
  display: flex;
  text-align: center;
  font-size: 24px;
  font-family: sans-serif;

  margin-top: 50px;

`;

const NotifUI = () => {

  return <NotifContainer>
    <NotifTopRow>TITLE OF NOTIF HERE</NotifTopRow>

    <NotifMidRow>
      <NotifText>To continue you must select one item from each category to generate a recipe.</NotifText>
    </NotifMidRow>
  </NotifContainer>
} 

export default NotifUI;

/*function Window() {
  return (
    <div className={styles.container}>
    <div className={styles.toprow}>TITLE TEXT HERE</div>
    <div className={styles.image}>
        <img src="/pictures/trophy.png" alt="trophy"/>
    </div>
    <div className={styles.middlerow}>
      <p className={styles.text}>
      To continue you must select one item from each category to generate a recipe.
      </p>
    </div>
    </div>
  )
}

export default Window;

export{Window}*/

