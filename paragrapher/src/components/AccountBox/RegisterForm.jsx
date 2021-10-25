import React, { Component, useContext } from 'react';
import { BoxContainer, FormContainer, SubmitButton , Input, BoldLink } from '../common';
import { AccountContext } from './accountContext';
export function RegisterForm(props) {
    const {switchToLogin} = useContext(AccountContext);
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email"/>
                <Input type="text" placeholder="User"/>
                <Input type="password" placeholder="Password"/>
                <SubmitButton type="submit">Login</SubmitButton>
                <BoldLink onClick={switchToLogin}>Login if you have an account</BoldLink>
            </FormContainer>
        </BoxContainer>
    );
}
 
export default RegisterForm;