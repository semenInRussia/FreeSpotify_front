import Vue from "vue";
import Vuex, {StoreOptions} from "vuex";
import Index from "./modules/ArtistDetail/index";
import AlbumDetail from "./modules/AlbumDetail";

import {State} from "./types"

Vue.use(Vuex)


const store: StoreOptions<State> = {
    modules: {
        ArtistDetail: Index,
        AlbumDetail
    }
};
export default new Vuex.Store<State>(store);

