import {FETCH_ALBUM, FETCH_ARTIST, FETCH_TRACK} from "./types";

const fetchArtist = (state: any, payload: any) => ({
    ...state,
    artist: payload
})

const fetchAlbum = (state: any, payload: any) => ({
    ...state,
    album: payload
})

const fetchTrack = (state: any, payload: any) => ({
    ...state,
    track: payload
})

const dispatchTypes = {
    [FETCH_ARTIST]: fetchArtist,
    [FETCH_ALBUM]: fetchAlbum,
    [FETCH_TRACK]: fetchTrack
}

const rootReducer = (state: any, action: any) => {
    const actionCallback = dispatchTypes[action.type] || ((state: any) => state);

    return actionCallback(state, action.payload)
}

export default rootReducer;
