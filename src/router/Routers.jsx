import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from "../home/Home";
import Login from "../login/Login";

export default function Routers() {
    return (
        <Router>
            <div>   
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
