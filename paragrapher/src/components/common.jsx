import styled from "styled-components";
import { motion } from "framer-motion";
import "./AccountBox/font.css";

import { alpha, createTheme, makeStyles } from "@material-ui/core";

// export const Input = styled.input`
//   width: 100%;
//   height: 42px;
//   outline: none;
//   border: 1px solid rgba(200, 200, 200, 0.3);
//   padding: 0px 10px;
//   border-bottom: 1.4px solid transparent;
//   border-radius: 30px;
//   transition: all 150ms ease-in-out;
//   font-size: 12px;
//   &::placeholder {
//     color: rgba(200, 200, 200, 1);
//   }
//   &:not(:last-of-type) {
//     border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
//   }
//   &:focus {
//     outline: none;
//     border-bottom: 2px solid rgb(177,55,92);
//   }
// `;

// export const SubmitButton = styled.button`
//   width: 100%;
//   padding: 11px 40%;
//   color: #fff;
//   font-size: 15px;
//   font-weight: 600;
//   border: none;
//   border-radius: 100px 100px 100px 100px;
//   cursor: pointer;
//   transition: all, 240ms ease-in-out;
//   background: rgb(177,55,92);
//   background: linear-gradient(90deg, rgba(177,55,92,1) 0%, rgba(171,53,89,1) 100%);

//   &:hover {
//     filter: brightness(1.1);
//   }

// `;
// export const Line = styled.line`
//   border-left: 3px solid rgba(36, 9, 9, 0.4);
//   height: 50%;
//   position: absolute;
//   left: 58%;
//   margin-left: 0px;
//   top: 20%;

// `;
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

export const theme = createTheme({
  palette: {
    primary: { main: "#606C38", textColor: "#283618" },
    secondary: { main: "#DDA15E" },
  },
});

export const useStyles = makeStyles((theme) => ({
  profileTotalGrid: {
    paddingTop:"20px",
    backgroundColor: "#606C38",
    //height:"70vh"
  },
  profileTotalGrid1: {
    paddingTop:"20px",
    backgroundColor: "#e9edde",
    //height:"70vh"
  },
  profileAvatar:{
    alignContent: 'center',
    paddingTop: '50'
  },
  profileTotalContainer: {
    marginTop:"20px",
    borderRadius:"20px",
    overflow:"hidden"
  },
  typography: {
    fontFamily: '"BYekan"',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    alignItems: "center",
    display: "inline-block",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "30%",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(6),
      marginLeft: theme.spacing(0),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0.9, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    justifyContent: "center",
  },
  inputRoot: {
    fontFamily: '"BYekan"',
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 5, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
