import Head from 'next/head'; 
import styled from 'styled-components';
import Button from '../comps/EnterButton';
import Login from '../comps/Login';
import Footer from '../comps/WelcomePageFooter';


const FirstPageContainer = styled.div`
    width: 375px;
    height: 812px;
    margin: 100px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 5px 1px 30px 5px rgba(0, 0, 0, 0.5);

    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
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

    .headertext{
        font-size: 36px;
        font-weight: bold;
        color: #302B40;
    }
`;
 
const Img = styled.img`
    margin-top: 200px;
    width: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

`;

const ButtonContainer = styled.div`
    margin-top: 10px;
    position: relative;
`;

const Circle = styled.div`
    background-color: #59A091;
    height: 160px;
    width: 375px;

    border-top-right-radius: 50%;
    border-top-left-radius: 50%;

    position: relative;
    margin-top: 80px;
    overflow: hidden;

    color: white;
    text-align: center;

    p{
        margin-top: 60px;
    }
`;

export default function FirstPage({
    logoimage = "/logo.png",
    text = "enter"

}) {

/*const HomepageUI = ({
    logoimage = "/logo.png",

}) => {*/
      return <FirstPageContainer>
        <Img src={logoimage}></Img>
        <p className="headertext">W E L C O M E </p>
        <Login></Login>
        <ButtonContainer>
            <Button text={text} height="34px"></Button>
        </ButtonContainer>
        
        <Circle>
            <p>created by: <br></br>
Jessica, Arielle, Michael, & Alicia</p>
        </Circle>
    </FirstPageContainer>  
}