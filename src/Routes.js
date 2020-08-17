import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/profile" component={Profile}/>
    <Route exact path="/services" component={Services}/>
    <Route path="/services/:id" component={ServiceDetail}/>
    <Route path="/faq" component={Faq}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
  </Switch>
);


export default Routes;