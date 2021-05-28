import {RootState} from "../types/redux/states";
import {RootAction, ActionTypes, FetchAlbumAction, FetchArtistAction, FetchTrackAction} from "../types/redux/actions";
import {Reducer} from "redux";


const defaultState = {
    artist: undefined,
    album: undefined,
    track: undefined
}


const fetchArtist = (state: RootState, action: FetchArtistAction): RootState => ({
    ...state,
    artist: action.payload
})

const fetchAlbum = (state: RootState, action: FetchAlbumAction): RootState => ({
    ...state,
    album: action.payload
})

const fetchTrack = (state: RootState, action: FetchTrackAction): RootState => ({
    ...state,
    track: action.payload
})

const dispatchTypes = {
    [ActionTypes.FETCH_ARTIST]: fetchArtist,
    [ActionTypes.FETCH_ALBUM]: fetchAlbum,
    [ActionTypes.FETCH_TRACK]: fetchTrack
}

const rootReducer: Reducer<RootState, RootAction> = (state?: RootState, action?: RootAction): RootState => {
    type ActionCallback = (state: RootState, action: RootAction) => RootState

    if (action && action.type && action.payload && state) {
        const defaultActionCallback: ActionCallback = (state: RootState) => state;
        const possibleActionCallback: ActionCallback | undefined = dispatchTypes[action.type]

        const actionCallback: ActionCallback = possibleActionCallback || defaultActionCallback


        return actionCallback(state, action)
    }

    else {
        return state || defaultState
    }
}

export default rootReducer;
