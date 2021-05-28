import axios from "axios";
import {ActionTypes} from "../types/redux/actions";
import {Album, Artist, Track} from "../types/entities";

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

const artistDetailUrl = (artist: Artist): string => (`${API_URL}/artists/detail/${artist.name}`)

export const fetchArtist = (artist: Artist) => (dispatch: any) => {
    dispatchGetFetchAction(
        artistDetailUrl(artist),
        ActionTypes.FETCH_ARTIST,
        dispatch
    )
}

const albumDetailUrl = (album: Album) => (
    `${API_URL}/albums/detail/${album.artist?.name}/${album.artist?.name}`
)

export const fetchAlbum = (album: Album) => (dispatch: any) => {
    dispatchGetFetchAction(
        albumDetailUrl(album),
        ActionTypes.FETCH_ALBUM,
        dispatch
    )
}

const trackDetailUrl = (track: Track) => (
    `${API_URL}/albums/track/${track.artist?.name}/${track.album?.name}/${track.name}`
)

export const fetchTrack = (track: Track) => (dispatch: any) => {
    dispatchGetFetchAction(
        trackDetailUrl(track),
        ActionTypes.FETCH_TRACK,
        dispatch
    )
}
