import React, {useState} from 'react';
import styled from 'styled-components';
import Test from '../comps/Testing';

export default function something(){
    const [colourChange, setColourChange] = useState(false);
    var height = "500";
    var colour2 = "green";
    if(colourChange){
        height = "300";
        colour2 = "pink";
    }

    return <Container>
        <Test height={height}>
            
        </Test>
        <Something1 colour2={colour2}></Something1>
        <Button onClick={()=>{setColourChange(!colourChange)}}></Button>
    </Container> 

}

const Something1 = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${props=>props.colour2};
`;

const Button = styled.div`
width: 100px;
height: 100px;
background-color: grey;
`;

const Container = styled.div`
    display: flex;
`;