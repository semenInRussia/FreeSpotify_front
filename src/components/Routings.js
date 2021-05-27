import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navigation from "./Navigation";

export default function Routings({routings}) {
    return (
        <Router>
            <Navigation routings={routings}/>

            <Switch>
                {routings.map((routing, index) => (
                    <Route
                        path={routing.url}
                        key={index.toString()}
                        exact
                    >
                        <div className="current-app">
                            {routing.component}
                        </div>
                    </Route>

                ))}
            </Switch>
        </Router>
    );
}
