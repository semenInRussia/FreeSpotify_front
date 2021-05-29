import {Artist} from "../../types/entities";
import {ActionTypes} from "../../types/redux/actions";
import {API_URL} from "../../constants";
import {dispatchGetFetchAction} from "./_utils";

const artistDetailUrl = (artist: Artist): string => (`${API_URL}/artists/detail/${artist.name}`)

export const fetchArtist = (artist: Artist) => (dispatch: any) => {
    dispatchGetFetchAction(
        artistDetailUrl(artist),
        ActionTypes.FETCH_ARTIST,
        dispatch
    )
}

