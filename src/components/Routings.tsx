import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navigation from "./Navigation";
import {Routing} from "../types/routing";

interface RoutingsProps {
    routings: Routing[]
}

const Routings: React.FC<RoutingsProps> = (props) => {
    return (
        <Router>
            <Navigation routings={props.routings}/>

            <Switch>
                {props.routings.map((routing, index) => (
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

export default Routings;
