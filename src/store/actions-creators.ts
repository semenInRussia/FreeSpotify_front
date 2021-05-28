import axios from "axios";
import {ActionTypes} from "../types/redux/actions";

const API_URL = 'http://localhost:8000/api'


function dispatchGetFetchAction(url: string, actionType: ActionTypes, dispatch: any) {
    axios.get(url)
        .then((res) => (
            dispatch({
                type: actionType,
                payload: res.data
            })
        ))
        .catch((e) => console.log(url, actionType, e))
}

const artistDetailUrl = (artistName: string): string => (`${API_URL}/artists/detail/${artistName}`)

export const fetchArtist = (artistName: string) => (dispatch: any) => {
    dispatchGetFetchAction(
        artistDetailUrl(artistName),
        ActionTypes.FETCH_ARTIST,
        dispatch
    )
}

const albumDetailUrl = (artistName: string, albumName: string) => (
    `${API_URL}/albums/detail/${artistName}/${albumName}`
)

export const fetchAlbum = (artistName: string, albumName: string) => (dispatch: any) => {
    dispatchGetFetchAction(
        albumDetailUrl(artistName, albumName),
        ActionTypes.FETCH_ALBUM,
        dispatch
    )
}

const trackDetailUrl = (artistName: string, albumName: string, trackName: string) => (
    `${API_URL}/albums/track/${artistName}/${albumName}/${trackName}`
)

export const fetchTrack = (artistName: string, albumName: string, trackName: string) => (dispatch: any) => {
    dispatchGetFetchAction(
        trackDetailUrl(artistName, albumName, trackName),
        ActionTypes.FETCH_TRACK,
        dispatch
    )
}
