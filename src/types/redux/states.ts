import {Album, Artist, Track} from "../entities";

export type RootState =  {
    artist?: Artist,
    album?: Album,
    track?: Track
}
