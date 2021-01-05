import {Artist} from "../../../entities/implementations/Artist";

export interface ArtistState {
    artist: Artist | undefined;
    is_loading_artist_info: boolean;
}