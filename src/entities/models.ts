interface BaseModel {
    name: string;

    link?: string;
    link_on_img?: string;
}

interface ArtistModel extends BaseModel{
    top?: TrackModel[];
}

interface AlbumModel extends BaseModel {
    artist: ArtistModel;
    tracks?: TrackModel[];

    release_date?: string;
}

interface TrackModel {
    name: string;

    artist: ArtistModel;
    album: AlbumModel;
}