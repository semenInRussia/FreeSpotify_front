import {Artist} from "./Artist";
import {Album} from "./Album";
import {BaseEntity, BaseObject} from "../base";

export class Track implements TrackModel, BaseObject {
    constructor(private object: TrackModel) {
    }

    get $entity(): BaseEntity {
        return this.album.$entity
    }

    get album(): Album {
        return new Album(this.object.album)
    }

    get artist(): ArtistModel {
        return new Artist(this.object.artist)
    }

    get name(): string {
        return this.object.name
    }
}