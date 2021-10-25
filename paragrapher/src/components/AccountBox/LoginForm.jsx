import React, { Component, useContext } from 'react';
import { BoxContainer, FormContainer, SubmitButton , Input, BoldLink } from '../common';
import { AccountContext } from './accountContext';
export function LoginForm(props) {
    const {switchToRegister} = useContext(AccountContext);
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <SubmitButton type="submit">Login</SubmitButton>
                <BoldLink onClick={switchToRegister}>Register if you not having an account</BoldLink>
            </FormContainer>
        </BoxContainer>
    );
}
 
export default LoginForm;