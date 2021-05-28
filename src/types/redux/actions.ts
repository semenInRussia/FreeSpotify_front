import {Album, Artist, Track} from "../entities";


export type RootAction = FetchArtistAction | FetchAlbumAction | FetchTrackAction

type BaseAction = {
    type: ActionTypes
}

export type FetchArtistAction = {
    payload: Artist
} & BaseAction


export type FetchAlbumAction = {
    payload: Album
} & BaseAction


export type FetchTrackAction = {
    payload: Track
} & BaseAction

export enum ActionTypes {
    FETCH_ARTIST = 'FETCH_ARTIST',
    FETCH_ALBUM = 'FETCH_ALBUM',
    FETCH_TRACK = 'FETCH_TRACK'
}
