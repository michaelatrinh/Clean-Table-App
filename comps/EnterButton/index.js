import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const EnterButtonUI = ({ fontsize = "18px", text = "enter" }) => {
  const router = useRouter();

  return (
    <EnterButtonCont>
      <div>
        <EnterButtonCSS onClick={() => router.push("/page2")} fontsize={fontsize}>
          {text}
        </EnterButtonCSS>
      </div>
    </EnterButtonCont>
  );
};

export default EnterButtonUI;

const EnterButtonCSS = styled.button`
  font-size: ${(props) => props.fontsize};
  color: white;
  background-color: #59a091;
  border-radius: 5px;
  height: 50px;
  width: 200px;
  border: none;
  letter-spacing: 5px;

  margin: 20px;
`;

const EnterButtonCont = styled.div`
    div:hover {
    transform: scale(0.8);
    transition-duration: 0.5s;
 
`;
