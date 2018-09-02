/**
 * Created by jagme on 9/2/2018.
 */
import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Skill from "./Skill";
import Contact from "./Contact"

class Main extends Component {
    render(){
        return(
            <HashRouter>
            <div>
                <h1>Hardeep's Single Page App Using React Router</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/skill">Skill</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/skill" component={Skill}/>
                <Route path="/contact" component={Contact}/>
            </div>

            </div>
            </HashRouter>
        );
    }
}
export default Main;