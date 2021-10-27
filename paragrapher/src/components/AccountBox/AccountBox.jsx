import React, { Component, useState } from 'react';
import styled from 'styled-components';
import PeopleDiscussion from '../../assets/PeopleDiscussion.png';
import { LoginBackDrop, LoginBackDropRight, LoginBoxContainer, LoginHeaderContainer, LoginHeaderText, LoginImage, LoginInnerContainer, LoginTopContainer, CloseButton } from '../common';
import LoginForm from './LoginForm';
import {motion} from "framer-motion";
import RegisterForm from './RegisterForm';
import '../../../node_modules/font-awesome/css/font-awesome.css';
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
const rightBackdropReference = {
    expanded: {
        width: "233%",
        height: "1750px", 
        borderRadius: "20%", 
        transform: "rotate(300deg)",
        zIndex: "1"
    }, 
    collapsed: {
        width: "100%",
        height: "550px",
        transform: "rotate(305deg)"
        
    }

}
const imgReference = {
    expanded: {
        opacity: 0
    }, 
    collapsed: {
        opacity: 1
    }

}

const expandingAnimation = {
    type: "spring", 
    duration: 2, 
    stifness: 30
}
const expandingAnimationImage = { 
    duration: 2, 
    stifness: 30
}



export function AccountBox(props) {
    const[isExpanded, setExpanded] = useState(false);
    const[isExpanded2, setExpanded2] = useState(false);
    const[isExpanded3, setExpanded3] = useState(false);
    const[active, setActive] = useState("Login");
    const playExpandingAnimation = () => {
        setExpanded(true);
        setExpanded3(true);
        setTimeout(() => {
            setExpanded(false)
        }, expandingAnimation.duration * 1000 - 1000);
    }
    const playRightExpandingAnimation = () => {
        setExpanded2(true);
        setExpanded3(true);
        setTimeout(() => {
            setExpanded2(false)
        }, expandingAnimation.duration * 1000 - 1000);
    }
    const switchToRegister = () => {
        playRightExpandingAnimation();
        setTimeout(() => {
            setActive("Register");
        }, 400);
        setTimeout(() => {
            setExpanded3(false);
        }, 2500);
    }
    const switchToLogin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("Login");
        }, 400);
        setTimeout(() => {
            setExpanded3(false);
        }, 2500);
        
        
    }
    const contextValue = { switchToRegister, switchToLogin };
    return(
        <AccountContext.Provider value={contextValue}>
            <LoginBoxContainer>
                <LoginTopContainer>
                    <LoginBackDrop transition={expandingAnimation} initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backdropReference}/>
                    <LoginBackDropRight transition={expandingAnimation} initial={false} animate={isExpanded2 ? "expanded" : "collapsed"} variants={rightBackdropReference} />
                    <LoginHeaderContainer>
                        <LoginImage initial={false} animate={isExpanded3 ? "expanded" : "collapsed"} variants={imgReference} src={PeopleDiscussion}/>
                        
                        {active === "Login" && <LoginHeaderText initial={false} animate={isExpanded3 ? "expanded" : "collapsed"} variants={imgReference}>Hello! <br/> Welcome Back</LoginHeaderText>}
                        {active === "Register" && <LoginHeaderText initial={false} animate={isExpanded3 ? "expanded" : "collapsed"} variants={imgReference}>Welcome <br /> to Paragrapher</LoginHeaderText>}
                    </LoginHeaderContainer>
                </LoginTopContainer>
                <LoginInnerContainer>
                    {active === "Login" && <LoginForm />}
                    {active === "Register" && <RegisterForm />}
                    <CloseButton onClick = {() => props.setInnerTrigger(false)} >C</CloseButton>
                </LoginInnerContainer>
            </LoginBoxContainer>
        </AccountContext.Provider>
    );
}
 
export default AccountBox;