import React from 'react';
import styled from 'styled-components';

const RecipeInstructions = ({
    instructions = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}) => {
    return <RecipeContainer>
        <RecipePart1>
            <h2>Instructions</h2>
        </RecipePart1>
        <RecipePart2>
            <p>{instructions}</p>
        </RecipePart2>
    </RecipeContainer>
}

const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 276px;
    background-color: #FFFFFF;
    border: 1px solid black;
    border-radius: 20px;
`;

const RecipePart1 = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 13pt;
    font-family: "Manrope", sans-serif;
    margin-bottom: 0;
`;

const RecipePart2 = styled.p`
    display: flex;
    justify-content: center;
    width: 227px;

    font-size: 13pt;
    font-family: "Quicksand", sans-serif;

    margin-top: 0;
`;



export default RecipeInstructions;