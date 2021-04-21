import React from 'react';
import styled from 'styled-components';

const RecipeContainer = styled.div`
    width: 300px;
    height: 50px;

    background-color: #59A091;
    font-family: sans-serif;
    font-weight: bold;
    color: white;

    display: flex;
    justify-content: center;
    
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(68, 68, 68, 0.3);

    p{
        text-align: center;
    }
`;

const RecipeButtonUI = () => {

    return <RecipeContainer>
        <p>Get the Recipe!</p>
    </RecipeContainer>

}

export default RecipeButtonUI