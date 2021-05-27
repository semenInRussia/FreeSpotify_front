import React from "react";

import Home from "./pages/Home";
import Artists from "./pages/Artists";


export const routings = [
    {url: "/", name: "My Home", component: (<Home/>)},
    {url: "/artists", name: "Artists", component: (<Artists/>)}
]
