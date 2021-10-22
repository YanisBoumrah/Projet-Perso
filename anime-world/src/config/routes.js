import { BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import React from 'react';
import Home from "../screens/home";
import About from "../screens/about";
import GlobalStyle from "./globalStyle";
import { ThemeProvider } from "styled-components";
const Routes = () => {
    return (
        
            
        <Router> <GlobalStyle/>
            <Switch>
                <Route exact path ='/' component={Home}/>
                <Route exact path ='/about' component={About}/>
                <Redirect to='/' />
            </Switch>
        </Router>
        
    );
};

export default Routes;