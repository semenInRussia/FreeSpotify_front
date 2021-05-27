import React, {Fragment} from "react";
import NavLink from "./NavLink";
import {Routing} from "../types/routing";

interface NavigationProps {
    routings: Routing[]
}

const Navigation: React.FC<NavigationProps> = (props) => (
    <Fragment>
        <ul className="navigation">
            {props.routings.map((routing, index) => (
                <NavLink key={index.toString()} routing={routing} />
            ))}
        </ul>

        <hr/>
    </Fragment>
)

export default Navigation;
