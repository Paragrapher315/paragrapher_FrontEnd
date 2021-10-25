import React, { Component, useContext } from 'react';
import { BoxContainer, FormContainer, SubmitButton , Input, BoldLink } from '../common';
import { AccountContext } from './accountContext';
import '../../../node_modules/font-awesome/css/font-awesome.css';
export function LoginForm(props) {
    const {switchToRegister} = useContext(AccountContext);
    return (
        <BoxContainer>
            <FormContainer>
                <Input className="fa" type="email" placeholder="&#xf0e0; Email"/>
                <Input className="fa" type="password" placeholder="&#xf084; Password"/>
                <SubmitButton type="submit">Login</SubmitButton>
                <BoldLink onClick={switchToRegister}>Register if you not having an account</BoldLink>
                
            </FormContainer>
        </BoxContainer>
    );
}
 
export default LoginForm;