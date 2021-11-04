import styled from "styled-components";
import { motion } from "framer-motion";
import "./AccountBox/font.css";
export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LoginBoxContainer = styled.div`
  width: 400px;
  min-height: 565px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #7cc2c8;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.3);
  position: relative;
  overflow: hidden;
`;
export const LoginBackDrop = styled(motion.div)`
  width: 100%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  /* border-radius: 50%; */
  transform: rotate(55deg);
  background-color: #4f7ac8;
  top: -300px;
  left: -200px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 2;
`;
export const LoginBackDropRight = styled(motion.div)`
  width: 100%;
  height: 600px;
  position: absolute;
  display: flex;
  flex-direction: column;
  /* border-radius: 50%; */
  transform: rotate(305deg);
  background-color: #fdae38;
  top: -450px;
  left: 150px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const LoginTopContainer = styled.div`
  width: 100%;
  height: 265px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1em;
  padding-bottom: 1em;
`;
export const LoginHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
`;
export const LoginHeaderText = styled(motion.h2)`
  font-size: 30px;
  font-weight: 600;
  font-family: "BYekan";
  text-align: right;
  direction: rtl;
  line-height: 1.2;
  color: black;
  z-index: 10;
  margin: 0;
  // margin-left: 3em;
`;
export const LoginImage = styled(motion.img)`
  z-index: 10;
  width: 90%;
  margin: 0;
  margin-left: 2em;
`;
export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;
export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const BoldLink = styled.a`
  font-size: 14px;
  font-family: "BYekan";
  font-weight: bold;
  color: #4f7ac8;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  margin: 0;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  direction: rtl;
  text-align: right;
`;
export const Input = styled.input`
  outline: none;
  height: 45px;
  width: 100%;
  border: 2px solid #b1375c;
  text-align: right;
  direction: rtl;
  padding: 0px 10px;
  margin: 0.3rem 0;
  /* border-bottom: 1.4px solid transparent; */
  border-radius: 50px;
  transition: all 250ms ease-in-out;
  &::placeholder {
    color: #b1375c;
  }
  &:focus {
    outline: none;
    border: 2px solid #4f7ac8;
  }
`;
export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 40%;
  margin: 0.3rem 0;
  color: white;
  background-color: #b1375c;
  font-size: 15px;
  font-weight: 600;
  font-family: "BYekan";
  border: none;
  direction: rtl;
  border-radius: 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  &:hover {
    filter: brightness(1.1);
    background-color: #4f7ac8;
  }
`;
export const CloseButton = styled.button`
  background: #b1375cc1;
  color: white;

  padding: 5px;
  text-align: center;
  width: 30px;
  height: 30px;
  border: transparent;
  position: relative;
  left: -3%;
  top: 12px;
  z-index: 15;
  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
    background-color: #b1375c;
  }
`;
export const LoginInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
`;
