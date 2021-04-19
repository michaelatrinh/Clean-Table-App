import React from 'react';
import styled from 'styled-components';
import EmptyBoxImg from '../../public/plus.png';

const EmptyBox = styled.div`
position: absolute;
height: 100px;
width: 100px;
left: 0px;
top: 0px;
border-radius: 20px;
background: #EFEFEF;
`;

const Img = styled.image`
position: absolute;
height: 45px;
width: 50px;
left: 25px;
top: 25px;
border-radius: 0px;
`;

const EmptyBoxUI = () => {

    return <div>
    <EmptyBox>
        <Img>
 <img src={EmptyBoxImg} width="50px" height="45px" alt="header logo"/>
    </Img>
 </EmptyBox>
    </div>
}

export default EmptyBoxUI;

