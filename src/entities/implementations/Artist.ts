import {BaseEntity, BaseObject} from "../base"
import {Dictionary} from "vue-router/types/router";
import {Track} from "./Track";

export class Artist implements BaseObject, ArtistModel {
    constructor(private object: ArtistModel) {
    }

    get $entity(): BaseEntity {
        return new ArtistEntity(this.object)
    }

    get name(): string {
        return this.object.name
    }

    get top(): Track[] {
        let top = this.object.top!

        return top.map((trackModel) => {
            trackModel.artist = this.object
            trackModel.album.artist = this.object

            return new Track(trackModel)
        })
    }

    get link() {
        return this.object.link
    }

    get link_on_img() {
        return this.object.link_on_img
    }

}

export class ArtistEntity extends BaseEntity {
    url_name: string = "artist_detail";
    object: ArtistModel;


    constructor(object: ArtistModel) {
        super();

        this.object = object;
    }

    get_params(): Dictionary<string> {
        return {
            "artist_name": this.object.name,
        }
    }
}