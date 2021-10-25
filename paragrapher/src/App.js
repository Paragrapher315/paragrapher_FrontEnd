import React, {useState} from 'react';
import {AccountBox} from './components/accountBox';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegisterationForm from './components/RegisterationForm/RegisterationForm';
import Header from './components/Header/Header';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/user/register" exact={true}>
              <AccountBox />
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