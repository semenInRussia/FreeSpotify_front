import React from "react";

import Artists from "./pages/Artists";
import Home from "./pages/Home";
import ArtistDetail from "./pages/ArtistDetail";


export const routings = [
    {
        url: "/",
        name: "My Home",
        component: (<Home/>)
    },
    {
        url: "/search/artists",
        name: "Artists Search",
        component: (<Artists/>)
    },
    {
        url: "/artists/:name",
        name: "Artist Detail",
        component: (<ArtistDetail/>),
        notViewInNavbar: true
    }
]
