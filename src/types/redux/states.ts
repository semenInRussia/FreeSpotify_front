import {Album, Artist, Track} from "../entities";

export type RootState = {
    artist?: ArtistState,
    album?: AlbumState,
    track?: TrackState,

    loading: boolean,
}

export type ErrorState = {
    name?: string,
    message?: string,
    isCaught: boolean
}

export type ForFetchState<T> = {
    object?: T,
    error: ErrorState
}

export type ArtistState = ForFetchState<Artist>

export type AlbumState = ForFetchState<Album>

export type TrackState = ForFetchState<Track>
