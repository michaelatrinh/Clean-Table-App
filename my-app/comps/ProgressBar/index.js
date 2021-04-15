import React from 'react';
import styled from 'styled-components';

const ProgressBar = ({
    colour = "#59A091",
    colour2 = "#B8E0D8",
    colour3 = "#B8E0D8"
}) => {
    return <ProgressBarContainer>
        <ProgressBarDot dotcolour={colour}></ProgressBarDot>
        <ProgressBarDot dotcolour={colour2}></ProgressBarDot>
        <ProgressBarDot dotcolour={colour3}></ProgressBarDot>
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

const ProgressBarDot = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${props=>props.dotcolour};
    border-radius: 90px;
`;

export default ProgressBar;