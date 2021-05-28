import {Album, Artist, Track} from "../entities";


export enum ActionTypes {
    FETCH_ARTIST = 'FETCH_ARTIST',
    FETCH_ALBUM = 'FETCH_ALBUM',
    FETCH_TRACK = 'FETCH_TRACK',

    SHOW_LOADER = 'SHOW_LOADER',
    HIDE_LOADER = 'HIDE_LOADER',
}

export type FetchArtistAction = {
    payload: Artist,
    type: ActionTypes.FETCH_ARTIST
}

export type FetchAlbumAction = {
    payload: Album,
    type: ActionTypes.FETCH_ALBUM
}

export type FetchTrackAction = {
    payload: Track,
    type: ActionTypes.FETCH_TRACK
}

export type ShowLoaderAction = {
    payload: {},
    type: ActionTypes.SHOW_LOADER
}

export type HideLoaderAction = {
    payload: {},
    type: ActionTypes.HIDE_LOADER
}

export type RootAction =
    FetchArtistAction
    | FetchAlbumAction
    | FetchTrackAction
    | ShowLoaderAction
    | HideLoaderAction

