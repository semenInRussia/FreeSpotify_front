import {Album, Artist, Track} from "../entities";

export type RootState =  {
    artist?: Artist,
    album?: Album,
    track?: Track,

    loading: boolean,
}

export type ErrorState = {
    isCaught: boolean,
    name?: string,
    message?: string,
    error?: Error
}
