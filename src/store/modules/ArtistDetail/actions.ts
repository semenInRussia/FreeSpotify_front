import {ActionTree} from "vuex";
import {State} from "../../types";
import {ArtistState} from "./types";
import axios from "axios";


const base_artist_detail_url = "http://127.0.0.1:8000/api/artists/detail/"


const actions: ActionTree<ArtistState, State> = {
    fetchArtistInfo(ctx, artist_name: string) {
        const artist_detail_url = base_artist_detail_url + artist_name

        ctx.commit("toggleIsLoadingArtistInfo")

        axios.get(artist_detail_url)
            .then((res) => {
                ctx.commit("setArtistInfo", res.data)
            })
            .catch(console.log)
            .finally(() => {
                    ctx.commit("toggleIsLoadingArtistInfo")
                }
            )

    }
}
export default actions;
