import React, {Fragment} from "react";
import NavLink from "./NavLink";

const Navigation = (props) => (
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
