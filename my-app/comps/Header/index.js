import React from 'react';
import styled from 'styled-components';
import HeaderImg from '../../public/HeaderPic.png';

const Header = styled.div`
position: absolute;
width: 375px;
height: 103px;
left: -1px;
top: 0px;

background: #59A091;
`;

const Img = styled.image`
position: relative;
height: 52.3529052734375px;
width: 765px;
left: -200px;
top: 30px;

`;

const HeaderUI = () => {

    return <div>
    <Header>
        <Img>
 <img src={HeaderImg} width="770px" height="50px" alt="header logo"/>
    </Img>
 </Header>
    </div>
}

export default HeaderUI;

