import {Link, useLocation} from "react-router-dom";
import React from "react";
import {Routing} from "../types/routing";

interface RoutingProps {
    routing: Routing
}

const NavLink: React.FC<RoutingProps> = (props) => {
    let location = useLocation();

    const isCurrentUrl = (url: string) => (url === location.pathname)

    const getClassNameForNavLink = (routing: Routing) => (
        isCurrentUrl(routing.url)
            ? "active-nav-link"
            : undefined
    )

    return (
        <li>
            <Link
                to={props.routing.url}
                className={getClassNameForNavLink(props.routing)}
            >
                {props.routing.name}
            </Link>
        </li>
    )
}

export default NavLink;