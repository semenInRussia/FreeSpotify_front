import Vue from "vue";
import Vuex from "vuex";
import ArtistDetail from "@/store/modules/ArtistDetail";
import AlbumDetail from "@/store/modules/AlbumDetail";

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        ArtistDetail,
        AlbumDetail
    }
});

