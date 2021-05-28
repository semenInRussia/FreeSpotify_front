import {Artist} from "./types/entities";

export const getPathToArtist = (artist: Artist): string => (
    `/artists/${artist.name}`
)