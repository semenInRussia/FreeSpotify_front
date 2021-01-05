import axios from "axios";
import {Album} from "../../entities/implementations/Album";
import {State} from "../types";
import {Module} from "vuex";


const base_url = "http://127.0.0.1:8000/api/"


interface AlbumState {
    album: Album | null;
}

const AlbumDetail: Module<AlbumState, State> = {
    state: {
        album: null
    },
    getters: {
        album(state): Album {
            return state.album!
        }
    },
    actions: {
        fetchAlbum(ctx: any, album: AlbumModel) {
            const path = `/albums/detail/${album.artist.name}/${album.name}`;

            const url = base_url + path;

            axios.get(url)
                .then(response => {
                    ctx.commit("setAlbum", response.data)
                })
                .catch(console.log)
        }
    },
    mutations: {
        setAlbum(state: any, album: AlbumModel) {
            state.album = new Album(album)
        }
    }
};

export default AlbumDetail;
