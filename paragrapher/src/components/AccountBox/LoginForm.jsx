import React, { Component, useContext, useState } from 'react';
import { BoxContainer, FormContainer, SubmitButton , Input, BoldLink } from '../common';
import { AccountContext } from './accountContext';
import { setUserSession } from '../../Utils/Common';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
axios.defaults.withCredentials = true
export function LoginForm(props) {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const {switchToRegister} = useContext(AccountContext);
    const handleLogin = () => {
        setError(null);
        setLoading(true);
        axios.post('http://localhost:5000/login', { username: username.value, password: password.value }).then(response => {
            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            console.log("888","login Ok\n",response.data)
            if(response.data.token!==undefined){
                const cookies = new Cookies();
                cookies.set('x-access-token', response.data.token, { path: '/' });
                console.log(cookies.get('x-access-token'));
            }
            
            //props.history.push('/dashboard');
        }).catch(error => {
            console.log(error.response)
            setLoading(false);
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
        });
        
    }
    return (
        <BoxContainer>
            <FormContainer>
                <Input className="fa" type="username" placeholder="&#xf0e0; username" {...username}/>
                <Input className="fa" type="password" placeholder="&#xf084; Password" {...password}/>
                <SubmitButton type="button" onClick={handleLogin} disabled={loading}>{loading ? 'Loading...' : 'Login'}</SubmitButton>
                <BoldLink onClick={switchToRegister}>Register if you not having an account</BoldLink>
                
            </FormContainer>
        </BoxContainer>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default LoginForm;