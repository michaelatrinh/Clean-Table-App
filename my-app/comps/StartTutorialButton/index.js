import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const StartTutorialButton = styled.button`
font-size: 18px;
color: white;
background-color: #59A091;
border-radius:5px;

height: ${props=>props.height};
width: 228px;
border: none;
letter-spacing:5px;
`;


/*const StartButtonUI = ({
    text = "start tutorial",
    height = "55px"
}) => {

    return <div>
        <StartTutorialButton height={height}>
            {text}
        </StartTutorialButton>
*/
;


// const StartButtonUI = ({
//     text = "start tutorial",
//     height = "55px"
// }) => {

//     return <div>
//         <StartTutorialButton height={height}>
//             {text}
//         </StartTutorialButton>

// height: 55px;
// width: 228px;
// border: none;
// letter-spacing:5px;
// box-shadow: 0px 4px 10px 0px #221D1D80;

// `;


const StartButton = styled.button`

`;


const StartButtonUI =({
    onClick = ()=>{},
    routeTo = "/add-protein"
}) => {
    // const [clickState, setClickState] = useState(false);

    const router = useRouter();
    return <div>
        <StartButton onClick={()=>router.push(routeTo)}>
        <StartTutorialButton>start tutorial</StartTutorialButton>
        </StartButton>

    </div>
}

export default StartButtonUI; 