import React, {Fragment} from "react";
import NavLink from "./NavLink";
import {Routing} from "../types/routing";

interface NavigationProps {
    routings: Routing[]
}

const Navigation: React.FC<NavigationProps> = (props) => {
    console.log(props.routings.filter(routing => !routing.notViewInNavbar))

    return (
        <Fragment>
            <ul className="navigation">
                {props.routings
                    .filter(routing => !routing.notViewInNavbar)
                    .map((routing, index) => (
                        <NavLink key={index.toString()} routing={routing}/>
                    ))}
            </ul>

            <hr/>
        </Fragment>
    );
}

export default Navigation;
