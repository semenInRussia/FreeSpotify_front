import {Track} from "../../types/entities";
import {ActionTypes} from "../../types/redux/actions";
import {dispatchGetFetchAction} from "./_utils";
import {API_URL} from "../../constants";

const trackDetailUrl = (track: Track) => (
    `${API_URL}/albums/track/${track.artist?.name}/${track.album?.name}/${track.name}`
)

export const fetchTrack = (track: Track) => (dispatch: any) => {
    dispatchGetFetchAction(
        trackDetailUrl(track),
        ActionTypes.FETCH_TRACK,
        dispatch
    )
}

