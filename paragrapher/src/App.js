import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { useHistory } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import LandingPage2 from './components/MainPage/LandingPage2';
import Footer from './components/Footer/Footer';
import {cookie} from "./Utils/Common.js";
import ParagraphEditor from "./components/Paragraph/ParagraphEditor";
import ParagraphCreator from "./components/Paragraph/ParagraphCreator";
import {theme,useStyles} from "./components/theme";
import { jssPreset, StylesProvider } from '@material-ui/styles';
import rtl from "jss-rtl";
import { create } from 'jss';
import CommunityMainPage from './components/CommunityMainPage';
import CreateCommunity from './components/CreateCommunity/CreateCommunity.jsx'
import BuyCredit from './components/BuyCredits/BuyCredit';
function App(props) {
  const [drawerAnchor] = useState(false);
  const [accountBoxTrigger, setAccountBoxTrigger] = useState(false);
  const [isLoggedIn,setLoggedIn] = useState(cookie.get("x-access-token") !== undefined ? true : false);
  const classes = useStyles(theme);
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const history = useHistory();
  function getData(val,val2){
    // window.history.pushState(null,"/other-page", { p_id: p_id });
    history.push('/paragraph/edit/' + val2 + '/' + val );
  }
  function openCreator(){
    history.push("/paragraph/create")
  }
  function getDataComment(val,val2){
    // window.history.pushState(null,"/other-page", { p_id: p_id });
    history.push('/paragraph/comment/' + val2 + '/' + val);
  }
  return (
      <Router>
      <StylesProvider jss={jss}>
      <div className="App">
        < Header isLoggedIn={isLoggedIn} style={{ position: "sticky", top: 0 }}/>
        <div>
          <Switch>
            <Route path="/" exact={true}>
            {isLoggedIn ?  <MainPage sendData={getData} sendDataComment={getDataComment} openCreator={openCreator}/>  : <LandingPage2 />}
            </Route>
            <Route path="/profile" exact={true}>
              <Profile/>
            </Route>
            <Route path="/paragraph/edit/:handle">
                <ParagraphEditor classes={classes} />
            </Route>
            <Route path="/paragraph/create">
                <ParagraphCreator classes={classes} />
            </Route>
            {/* <Route path="/paragraph/comment/:handle">
                <ParagraphCommentor classes={classes} />
            </Route> */}
            <Route path="/community/:handle" exact={true}>
              <CommunityMainPage/>
            </Route>
            <Route path="/CreateCommunity" exact={true}>
              <CreateCommunity/>
            </Route>
            <Route path="/BuyCredits" exact>
              <BuyCredit classes={classes} theme={theme}/>
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