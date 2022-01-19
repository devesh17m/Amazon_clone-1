import React from "react";
import "./App.css";
import Headder from './Headder';
import Home from "./Home"
import  { BrowserRouter as Router,Switch, Route } from "react-router-dom";



function App(){
    return(

        <Router>
        <div className="app">
            
            <Switch>
                <Route path="/checkout">
                    <Headder />
                    <h1>This is a checkout page</h1>
                </Route>
                <Route path="/">
                    <Headder />
                    <Home />
                </Route>
            </Switch>
        </div>
        </Router>
    );
}

export default App;