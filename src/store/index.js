import Vue from "vue";
import Vuex from "vuex";
import Top from "./modules/Top";
import ArtistDetail from "@/store/modules/ArtistDetail";

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        Top,
        ArtistDetail
    }
});

