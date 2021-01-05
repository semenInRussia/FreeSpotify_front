import {Module} from "vuex";
import {State} from "../../types";
import {ArtistState} from "./types";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";


const Index: Module<ArtistState, State> = {
    state: {
        artist: undefined,
        is_loading_artist_info: false,
    },
    getters,
    actions,
    mutations,
}
export default Index;
