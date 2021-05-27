import {FETCH_ALBUM, FETCH_ARTIST, FETCH_TRACK} from "./types";

const fetchArtist = (state, payload) => ({
    ...state,
    artist: payload
})

const fetchAlbum = (state, payload) => ({
    ...state,
    album: payload
})

const fetchTrack = (state, payload) => ({
    ...state,
    track: payload
})

const dispatchTypes = {
    [FETCH_ARTIST]: fetchArtist,
    [FETCH_ALBUM]: fetchAlbum,
    [FETCH_TRACK]: fetchTrack
}

const rootReducer = (state, action) => {
    const actionCallback = dispatchTypes[action.type] || (state => state);

    return actionCallback(state, action.payload)
}

export default rootReducer;
