import {FETCH_ALBUM, FETCH_ARTIST, FETCH_TRACK} from "./types";
import axios from "axios";

const API_URL = 'http://localhost:8000/api'


const dispatchGetFetchAction = (url: string, actionType: string, dispatch: any) => {
    axios.get(url)
        .then((res) => (
            dispatch({
                type: actionType,
                payload: res.data
            })
        ))
        .catch((e) => console.log(url, actionType, e))
}

export const artistDetailUrl = (artistName: string) => (`${API_URL}/artists/detail/${artistName}`)

export const fetchArtist = (artistName: string) => (dispatch: any) => {
    dispatchGetFetchAction(
        artistDetailUrl(artistName),
        FETCH_ARTIST,
        dispatch
    )
}

export const albumDetailUrl = (artistName: string, albumName: string) => (
    `${API_URL}/albums/detail/${artistName}/${albumName}`
)

export const fetchAlbum = (artistName: string, albumName: string) => (dispatch: any) => {
    dispatchGetFetchAction(
        albumDetailUrl(artistName, albumName),
        FETCH_ALBUM,
        dispatch
    )
}

export const trackDetailUrl = (artistName: string, albumName: string, trackName: string) => (
    `${API_URL}/albums/track/${artistName}/${albumName}/${trackName}`
)

export const fetchTrack = (artistName: string, albumName: string, trackName: string) => (dispatch: any) => {
    dispatchGetFetchAction(
        trackDetailUrl(artistName, albumName, trackName),
        FETCH_TRACK,
        dispatch
    )
}
