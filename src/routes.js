import React from "react"
import { Switch, Route } from " react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import Header from "./components/Header/Header"
import Product from "./components/Product/Product"

export default (
    <Switch>
        <Route component ={Header} exact path="/"/>
        <Route component ={Dashboard} path="/Dashboard"/>
        <Route component ={Product} path="/Product"/>
    </Switch>    
)