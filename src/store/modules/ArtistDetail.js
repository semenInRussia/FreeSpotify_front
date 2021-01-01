import axios from "axios";

const base_artist_detail_url = "http://127.0.0.1:8000/api/artists/detail/"

export default {
    state: {
        artist_info: {},
        is_loading_artist_info: false,
    },
    getters: {
        artist(state) {
            return state.artist_info
        },
        loadingArtistInfo(state) {
            return state.is_loading_artist_info
        }
    },
    actions: {
        fetchArtistInfo(ctx, artist_name) {
            const artist_detail_url = base_artist_detail_url + artist_name
            ctx.commit("toggleIsLoadingArtistInfo")
            let artist_info;

            axios.get(artist_detail_url)
                .then((res) => {
                        artist_info = res.data;
                        ctx.commit("toggleIsLoadingArtistInfo")
                        ctx.commit("setArtistInfo", artist_info)
                    }
                )

        }
    },
    mutations: {
        setArtistInfo(state, artist_info) {
            state.artist_info = artist_info
        },
        toggleIsLoadingArtistInfo(state) {
            state.is_loading_artist_info = !state.is_loading_artist_info
        }
    }
}