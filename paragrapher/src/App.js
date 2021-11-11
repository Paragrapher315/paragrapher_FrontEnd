import React, {useState,Modal} from 'react';
import { AppContainer } from "./components/common";
import PopupAccountBox from './components/AccountBox/PopupAccountBox';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegisterationForm from './components/RegisterationForm/RegisterationForm';
import Header from './components/Header/Header';
import RegistrationForm from './components/RegisterationForm/RegisterationForm';
import AccountBox from './components/AccountBox/AccountBox';
import { Drawer,List,ListItem,ListItemIcon,ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import MainPage from './components/MainPage/MainPage';
import LandingPage from './components/MainPage/LandingPage';
import LandingPage2 from './components/MainPage/LandingPage2';
import Footer from './components/Footer/Footer';
import { CssBaseline } from '@material-ui/core';
function App() {
  const [drawerAnchor, setDrawerAnchor] = useState(false);
  const [accountBoxTrigger, setAccountBoxTrigger] = useState(false);
  return (
    <Router>
      <div className="App">
        < Header style={{ position: "sticky", top: 0 }}/>
        <div>
          <Switch>
            <Route path="" exact={true}>
            <LandingPage2 />
            </Route>
          </Switch>
        </div>
        {/* <Footer/> */}
      </div>
    </Router>
  )  
}
export default App;