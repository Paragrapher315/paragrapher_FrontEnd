import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Header from './components/Header/Header';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/user/register" exact={true}>
              <RegistrationForm />
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