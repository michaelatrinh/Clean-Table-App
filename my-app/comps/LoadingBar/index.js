import React from 'react';
import styled from 'styled-components';

const LoadingBarBack = styled.div`
position: relative;
background: #EFEFEF;
height: 29px;
width: 209px;
left: 0px;
top: 0px;
border-radius: 30px;

`;

const LoadingBarFront = styled.div`
position: relative;
height: 29px;
width: 145px;
left: 0px;
top: 0px;
border-radius: 30px;
background: #59A091;
`;

const LoadingBarUI = () => {

    return <div>
    <LoadingBarBack>
<LoadingBarFront>

</LoadingBarFront>
    </LoadingBarBack>
    </div>

}

export default LoadingBarUI; 
