import {Link, useLocation} from "react-router-dom";
import React from "react";
import {fetchAlbum} from "../redux/actions";

const NavLink = ({routing}) => {
    let location = useLocation();

    const isCurrentUrl = (url) => (url === location.pathname)

    const getClassNameForNavLink = (routing) => (
        isCurrentUrl(routing.url)
            ? "active-nav-link"
            : undefined
    )

    return (
        <li>
            <Link
                to={routing.url}
                className={getClassNameForNavLink(routing)}
            >
                {routing.name}
            </Link>
        </li>
    )
}

export default NavLink;