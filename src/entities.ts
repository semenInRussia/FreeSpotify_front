import {Artist} from "./types/entities";

export const getPathToArtist = (artist: Artist): string => (
    `/artists/${artist.name}`
)

export const getMessageForArtist = (artist: Artist): string => (
    {
        'ac/dc': 'AC/DC is cool group!\n' +
            'I am advice you to listen "Flick Of The Switch - Rising Power", cool track of AC/DC',

        'nirvana': '"The sun is gone, but I have a light" - Kurt Cobain, I am not translate this quote...'

    }[artist.name.toLowerCase()] || `${artist.name} - No comments... Good Luck!`
)