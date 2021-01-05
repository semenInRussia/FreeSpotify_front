import {BaseEntity, BaseObject} from "../base"
import {Dictionary} from "vue-router/types/router";
import {Artist} from "./Artist";


export class Album implements BaseObject, AlbumModel {
    constructor(private object: AlbumModel) {
    }

    get $entity(): BaseEntity {
        return new AlbumEntity(this.object)
    }

    get artist(): ArtistModel {
        return new Artist(this.object.artist)
    }

    get link(): string | undefined {
        return this.object.link
    }

    get link_on_img(): string | undefined {
        return this.object.link_on_img
    }

    get name(): string {
        return this.object.name
    }
    get release_date(): string  | undefined{
        return this.object.release_date
    }
    get tracks(): TrackModel[] | undefined {
        return this.object.tracks
    }
}

class AlbumEntity extends BaseEntity {
    url_name: string = "album_detail";
    object: AlbumModel;


    constructor(object: AlbumModel) {
        super();

        this.object = object;
    }

    get_params(): Dictionary<string> {
        return {
            "artist_name": this.object.artist.name,
            "album_name": this.object.name
        }
    }
}
