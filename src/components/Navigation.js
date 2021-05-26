import React, {Fragment} from "react";
import {
    Link,
    useLocation
} from "react-router-dom";

const Navigation = (props) => {
    let location = useLocation();

    const isCurrentUrl = (url) => (url === location.pathname)

    const getClassNameForNavLink = (routing) => (
        isCurrentUrl(routing.url)
            ? "active-nav-link"
            : undefined
    )


    return (
        <Fragment>
            <ul className="navigation">
                {props.routings.map((routing, index) => (
                    <li key={index.toString()}>

                        <Link
                            to={routing.url}
                            className={getClassNameForNavLink(routing)}
                        >
                            {routing.name}
                        </Link>

                    </li>
                ))}
            </ul>

            <hr/>
        </Fragment>
    )
}

export default Navigation;
