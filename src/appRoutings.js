import React from "react";

import Artists from "./pages/Artists";
import Home from "./pages/Home";


export const routings = [
    {url: "/", name: "My Home", component: (<Home/>)},
    {url: "/artists", name: "Artists", component: (<Artists/>)}
]
