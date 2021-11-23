import React, {useState,Modal} from 'react';
import { AppContainer } from "./components/common";
import PopupAccountBox from './components/AccountBox/PopupAccountBox';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import AccountBox from './components/AccountBox/AccountBox';
import { Drawer,List,ListItem,ListItemIcon,ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import Profile from './components/Profile/Profile';
import MainPage from './components/MainPage/MainPage';
import LandingPage2 from './components/MainPage/LandingPage2';
import Footer from './components/Footer/Footer';
import { CssBaseline } from '@material-ui/core';
import {cookie} from "./Utils/Common.js";
import ParagraphEditor from "./components/Paragraph/ParagraphEditor";
import {theme,useStyles} from "./components/theme";
import { jssPreset, StylesProvider } from '@material-ui/styles';
import rtl from "jss-rtl";
import { create } from 'jss';

function App() {
  const [drawerAnchor, setDrawerAnchor] = useState(false);
  const [accountBoxTrigger, setAccountBoxTrigger] = useState(false);
  const [isLoggedIn,setLoggedIn] = useState(cookie.get("x-access-token") !== undefined ? true : false);
  const classes = useStyles(theme);
  const [p_id,setP_id] = useState(0);
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  function getData(val){
    console.log(val);
    setP_id(val);
    console.log("dadash resid");
    console.log("ine : " + p_id);
    window.location.replace("/paragraph-editor");
  }
  return (
    <Router>
      <StylesProvider jss={jss}>
      <div className="App">
        < Header isLoggedIn={isLoggedIn} style={{ position: "sticky", top: 0 }}/>
        <div>
          <Switch>
            <Route path="/" exact={true}>
            {isLoggedIn ?  <MainPage sendData={getData}/>  : <LandingPage2 />}
            </Route>
            <Route path="/profile" exact={true}>
              <Profile/>
            </Route>
            <Route path="/paragraph-editor" exact={true}>
              <div className={classes.paragraphDiv} style={{ minHeight: "86.3vh" }} >
                <ParagraphEditor classes={classes} p_id={p_id} />
              </div>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
      </StylesProvider>
    </Router>
  )  
}
export default App;