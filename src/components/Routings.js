import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navigation from "./Navigation";

const routings = [
    {url: "/", name: "My Home", component: Home},
    {url: "/about", name: "About", component: About},
    {url: "/feed", name: "Cool Feedback", component: Feed},
]

export default function Routings() {
    return (
        <Router>
            <Navigation routings={routings}/>

            <Switch>
                {routings.map((routing, index) => (
                    (index === 0)
                        ? <Route
                            path={routing.url}
                            key={index.toString()}
                            component={routing.component}
                            exact
                        />

                        : <Route
                            path={routing.url}
                            key={index.toString()}
                            component={routing.component}
                        />
                    ))}
            </Switch>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Feed() {
    return <h3>Cool Feed Back by semenInRussia!</h3>;
}
