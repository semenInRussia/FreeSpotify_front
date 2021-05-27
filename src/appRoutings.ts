interface RoutingType {
    url: string,
    name: string,
    component: any
}

export const routings: RoutingType[] = [
    {url: "/", name: "My Home", component: '<Home/>'},
    {url: "/artists", name: "Artists", component: '<Artists/>'}
]
