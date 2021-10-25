import React, { Component, useContext } from 'react';
import  { useState } from 'react';
import { BoxContainer, FormContainer, SubmitButton , Input, BoldLink } from '../common';
import { AccountContext } from './accountContext';
import '../../../node_modules/font-awesome/css/font-awesome.css';
export function RegisterForm(props) {
    const [state , setState] = useState({
        email : "",
        username : "",
        password : ""
     })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        //sendDataToServer()    
        
    }
    const {switchToLogin} = useContext(AccountContext);
    return (
        <BoxContainer>
            <FormContainer>
                <Input id="email" value={state.email} onChange={handleChange} className="fa" type="Email" placeholder="&#xf0e0; Email"/>
                <Input id="username" value={state.username} onChange={handleChange} className="fa" type="text" placeholder="&#xf007; Username"/>
                <Input id="password"  value={state.password} onChange={handleChange} className="fa" type="password" placeholder="&#xf084; Password"/>
                <SubmitButton onClick={handleSubmitClick} type="submit">Register</SubmitButton>
                <BoldLink onClick={switchToLogin}>Login if you have an account</BoldLink>
            </FormContainer>
        </BoxContainer>
    );
}
 
export default RegisterForm;