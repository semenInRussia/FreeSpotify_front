import {Album} from "../../types/entities";
import {ActionTypes, FetchAlbumAction} from "../../types/redux/actions";
import {dispatchGetFetchAction} from "./_utils";
import {API_URL} from "../../constants";
import {Dispatch} from "react";

const albumDetailUrl = (album: Album) => (
    `${API_URL}/albums/detail/${album.artist?.name}/${album.artist?.name}`
)


export const fetchAlbum = (album: Album) => (dispatch: Dispatch<FetchAlbumAction>) => {
    dispatchGetFetchAction(
        albumDetailUrl(album),
        ActionTypes.FETCH_ALBUM,
        dispatch
    )
}

