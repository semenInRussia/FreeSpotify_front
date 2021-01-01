import axios from "axios";

const base_url = "http://127.0.0.1:8000/api/"

export default {
    state: {
        album: null
    },
    getters: {
        album(state) {
            return state.album
        }
    },
    actions: {
        fetchAlbum(ctx, album) {
            const path = "/albums/detail/" + album.artist_name + "/" + album.album_name;

            const url = base_url + path;

            axios.get(url).then(
                (response) => {
                    ctx.commit("setAlbum", response.data)
                }
            )
        }
    },
    mutations: {
        setAlbum(state, album) {
            state.album = album;
        }
    }
}