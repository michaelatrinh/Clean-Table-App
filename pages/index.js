import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Button from "../comps/EnterButton";

export default function FirstPage({ logoimage = "/logo.png", text = "enter" }) {
  return (
    <FirstPageContainer>
      <Img src={logoimage} />
      <p className="headertext">W E L C O M E </p>
      <ButtonContainer>
        <Button text={text} />
      </ButtonContainer>
    </FirstPageContainer>
  );
}

const FirstPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;

  background: linear-gradient(-45deg, #59a091, #d4f6f4, #ffffff);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .headertext {
    font-size: 36px;
    font-weight: bold;
    color: #302b40;
  }

  p {
    color: #302b40;
  }
`;

const Img = styled.img`
  margin-top: 350px;
  width: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  position: relative;
`;
