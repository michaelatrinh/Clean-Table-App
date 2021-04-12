import React from 'react';
import styled from 'styled-components';

const Login = ({
    placeholder = "name"
}) => {
    return <LoginForm placeholder={placeholder}>
    </LoginForm>
}

const LoginForm = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 195px;
    height: 36px;
    border: 1px solid black;

    font-size: 18pt;
    font-family: "Quicksand", sans-serif;
    font-weight: light;
    text-align: center;
`;

export default Login;