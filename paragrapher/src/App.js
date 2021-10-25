import React, {useState} from 'react';
import { AppContainer } from "./components/common";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegisterationForm from './components/RegisterationForm/RegisterationForm';
import Header from './components/Header/Header';
import RegistrationForm from './components/RegisterationForm/RegisterationForm';
import AccountBox from './components/AccountBox/AccountBox';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/user/register" exact={true}>
              <AppContainer>
                <AccountBox />
              </AppContainer>
              <p>
                
              </p>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )  
}
export default App;