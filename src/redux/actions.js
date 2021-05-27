import {FETCH_ALBUM, FETCH_ARTIST, FETCH_TRACK} from "./types";
import axios from "axios";

const API_URL = 'http://localhost:8000/api'


const dispatchGetFetchAction = (url, actionType, dispatch) => {
    axios.get(url)
        .then((res) => (
            dispatch({
                type: actionType,
                payload: res.data
            })
        ))
        .catch((e) => console.log(url, actionType, e))
}

export const artistDetailUrl = (artistName) => (`${API_URL}/artists/detail/${artistName}`)

export const fetchArtist = (artistName) => (dispatch) => {
    dispatchGetFetchAction(
        artistDetailUrl(artistName),
        FETCH_ARTIST,
        dispatch
    )
}

export const albumDetailUrl = (artistName, albumName) => (`${API_URL}/albums/detail/${artistName}/${albumName}`)

export const fetchAlbum = (artistName, albumName) => (dispatch) => {
    dispatchGetFetchAction(
        albumDetailUrl(artistName, albumName),
        FETCH_ALBUM,
        dispatch
    )
}

export const trackDetailUrl = (artistName, albumName, trackName) => (
    `${API_URL}/albums/track/${artistName}/${albumName}/${trackName}`
)

export const fetchTrack = (artistName, albumName, trackName) => (dispatch) => {
    dispatchGetFetchAction(
        trackDetailUrl(artistName, albumName, trackName),
        FETCH_TRACK,
        dispatch
    )
}
