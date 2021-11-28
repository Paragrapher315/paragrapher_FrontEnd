import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./AppWrapper.css"


function AppWrapper() {
    return ( 
   <BrowserRouter><App /></BrowserRouter>
     );
}

export default AppWrapper;