import React, { Component, useState } from 'react';
import styled from 'styled-components';
import PeopleDiscussion from '../../assets/PeopleDiscussion.png';
import { LoginBackDrop, LoginBackDropRight, LoginBoxContainer, LoginHeaderContainer, LoginHeaderText, LoginImage, LoginInnerContainer, LoginTopContainer } from '../common';
import LoginForm from './LoginForm';
import {motion} from "framer-motion";
import RegisterForm from './RegisterForm';
import {AccountContext} from './accountContext';
const backdropReference = {
    expanded: {
        width: "233%",
        height: "1050px", 
        borderRadius: "20%", 
        transform: "rotate(60deg)",
        zIndex: "11"
    }, 
    collapsed: {
        width: "100%",
        height: "550px",
        transform: "rotate(55deg)"
    }

}
const expandingAnimation = {
    type: "spring", 
    duration: 2.3, 
    stifness: 30
}
export function AccountBox(props) {
    const[isExpanded, setExpanded] = useState(false);
    const[active, setActive] = useState("Login");
    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false)
        }, expandingAnimation.duration * 1000 - 1000);
    }
    const switchToRegister = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("Register");
        }, 400);
        
    }
    const switchToLogin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("Login");
        }, 400);
        
    }
    const contextValue = { switchToRegister, switchToLogin };
    return(
        <AccountContext.Provider value={contextValue}>
            <LoginBoxContainer>
                <LoginTopContainer>
                    <LoginBackDrop transition={expandingAnimation} initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backdropReference}/>
                    <LoginBackDropRight />
                    <LoginHeaderContainer>
                        <LoginImage src={PeopleDiscussion}/>
                        
                        {active === "Login" && <LoginHeaderText>Hello! <br/> Welcome Back</LoginHeaderText>}
                        {active === "Register" && <LoginHeaderText>Welcome <br /> to Paragrapher</LoginHeaderText>}
                    </LoginHeaderContainer>
                </LoginTopContainer>
                <LoginInnerContainer>
                    {active === "Login" && <LoginForm />}
                    {active === "Register" && <RegisterForm />}
                </LoginInnerContainer>
            </LoginBoxContainer>
        </AccountContext.Provider>
    );
}
 
export default AccountBox;