import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './../theme';
import Login from "../login";
import Dash from "../dash/Dash";

export default function Routers() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/dash">
                        <Dash />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>

    );
}
