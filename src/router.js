import Vue from "vue";
import VueRouter from "vue-router";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "index",
            meta: {},
            component: () => import("./components/pages/index.vue")
        },
        {
            path: "/artists/search/",
            name: "artist_search",
            meta: {},
            component: () => import("./components/pages/ArtistSearch.vue")
        },
        {
            path: "/artists/:artist_name",
            name: "artist_detail",
            meta: {},
            component: () => import("./components/pages/ArtistDetail.vue")
        },
        {
            path: "/albums/:artist_name/:album_name",
            name: "album_detail",
            meta: {},
            component: () => import("./components/pages/AlbumDetail.vue")
        },
        {

            path: "*",
            name: "page404",
            meta: {},
            component: () => import("./components/pages/page404")
        },
    ],
});

export default router;

Vue.use(VueRouter);
