import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const StartTutorialButton = styled.button`
font-size: 18px;
color: white;
background-color: #59A091;
border-radius:5px;
letter-spacing:5px;

height: 50px;
width: 228px;

border: none;


`;


const StartButton = styled.button`
    div:hover {
    transform: scale(0.8);
    transition-duration: 0.5s;

    background: none;
}

`;


const StartButtonUI =({
    onClick = ()=>{},
    routeTo = "/add-protein",
}) => {
    // const [clickState, setClickState] = useState(false);

    const router = useRouter();
    return <div>
        <StartButton onClick={()=>router.push(routeTo)}>

         <div>   
        <StartTutorialButton><div>start tutorial</div></StartTutorialButton>
        </div>
        </StartButton>

    </div>
}

export default StartButtonUI; 