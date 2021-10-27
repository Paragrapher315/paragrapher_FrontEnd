import React, {useState,Modal} from 'react';
import { AppContainer } from "./components/common";
import PopupAccountBox from './components/AccountBox/PopupAccountBox';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegisterationForm from './components/RegisterationForm/RegisterationForm';
import Header from './components/Header/Header.js';
import RegistrationForm from './components/RegisterationForm/RegisterationForm';
import AccountBox from './components/AccountBox/AccountBox';
function App() {
  const [accountBoxTrigger, setAccountBoxTrigger] = useState(false);
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="" exact={true}>
              <AppContainer>
                <button className="btn btn-danger" onClick={() => setAccountBoxTrigger(true)}>Login/Register</button> 
                <PopupAccountBox trigger={accountBoxTrigger} setTrigger={setAccountBoxTrigger}/>
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