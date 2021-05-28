import {RootState} from "../types/redux/states";
import {
    RootAction,
    ActionTypes,
    FetchAlbumAction,
    FetchArtistAction,
    FetchTrackAction,
    ShowLoaderAction,
    HideLoaderAction,
} from "../types/redux/actions";
import {Reducer} from "redux";


const defaultState: RootState = {
    artist: undefined,
    album: undefined,
    track: undefined,
    loading: false
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

const showLoader = (state: RootState, _: ShowLoaderAction): RootState => ({
    ...state,
    loading: true
})

const hideLoader = (state: RootState, _: HideLoaderAction): RootState => ({
    ...state,
    loading: false
})

const dispatchTypes = {
    [ActionTypes.FETCH_ARTIST]: fetchArtist,
    [ActionTypes.FETCH_ALBUM]: fetchAlbum,
    [ActionTypes.FETCH_TRACK]: fetchTrack,

    [ActionTypes.SHOW_LOADER]: showLoader,
    [ActionTypes.HIDE_LOADER]: hideLoader,
}

const rootReducer: Reducer<RootState, RootAction> = (_state?: RootState, action?: RootAction): RootState => {
    type ActionCallback = (state: RootState, action: any) => RootState

    let state = _state || defaultState

    if (action) {
        const defaultActionCallback: ActionCallback = (state: RootState) => state;
        const possibleActionCallback: ActionCallback = dispatchTypes[action.type]

        const actionCallback: ActionCallback = possibleActionCallback || defaultActionCallback

        return actionCallback(state, action)
    }

    return state
}

export default rootReducer;
