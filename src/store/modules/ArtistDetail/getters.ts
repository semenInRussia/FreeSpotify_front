import {GetterTree} from "vuex";
import {ArtistState} from "./types";
import {State} from "../../types";

const getters: GetterTree<ArtistState, State> = {
    artist(state: any) {
        return state.artist
    },
    loadingArtistInfo(state: any) {
        return state.is_loading_artist_info
    }
}

export default getters