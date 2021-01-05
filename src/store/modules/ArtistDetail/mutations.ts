import {Artist} from "../../../entities/implementations/Artist";
import {MutationTree} from "vuex";
import {ArtistState} from "./types";


const mutations: MutationTree<ArtistState> = {
    setArtistInfo(state: any, artist: ArtistModel) {
        state.artist = new Artist(artist)
    },
    toggleIsLoadingArtistInfo(state: any) {
        state.is_loading_artist_info = !state.is_loading_artist_info
    }
}
export default mutations;
