import React from 'react';
import styled from 'styled-components';


const Circle = styled.div`
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0px 3px 10px #C0C0C0;

  margin: 50px;
`;

const x = styled.span`
  color: #696259;
  font-family: sans-serif;
  font-size: 1em;
  text-align: center;

  margin-left: 7px;
  margin-top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 5px;

`;

const ExitButtonUI = () => {

  return <Circle>
    <x>X</x>
  </Circle>

}

export default ExitButtonUI
/*function ExitButton() {
  return (
    <div className={styles.circle}>
      <span className={styles.x}>X</span>
    </div>
  )
}

export default ExitButton;

export{ExitButton}*/
