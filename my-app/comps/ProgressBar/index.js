import React from 'react';
import styled from 'styled-components';

const ProgressBar = () => {
    return <ProgressBarContainer>
        <ProgressBarOnDot></ProgressBarOnDot>
        <ProgressBarOffDot></ProgressBarOffDot>
        <ProgressBarOffDot></ProgressBarOffDot>
    </ProgressBarContainer>
}

const ProgressBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 118px;
    height: 26px;
`;

const ProgressBarOnDot = styled.div`
    width: 26px;
    height: 26px;
    background-color: #59A091;
    border-radius: 90px;
`;

const ProgressBarOffDot = styled.div`
    width: 26px;
    height: 26px;
    background-color: #B8E0D8;
    border-radius: 90px;
`;

export default ProgressBar;