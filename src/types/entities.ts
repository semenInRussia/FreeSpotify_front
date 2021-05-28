export type Artist = {
    name: string,

    top?: Track[],
    albums?: Album[],

    link?: string,
    link_on_img?: string
}

export type Album = {
    name: string,

    artist?: Artist,
    tracks?: Track[],

    link?: string,
    link_on_img?: string
}

export type Track = {
    name: string,

    artist?: Artist,
    album?: Album,

    link?: string
}
