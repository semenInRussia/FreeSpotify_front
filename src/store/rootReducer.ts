import {RootState} from "../types/redux/states";
import {
    RootAction,
    ActionTypes,
    ShowLoaderAction,
    HideLoaderAction,
} from "../types/redux/actions";
import {Reducer} from "redux";
import {Album, Artist, Track} from "../types/entities";
import {createFetchSomethingCreatorAction} from "./action-creators/_utils";


const defaultStateForFetch = {
    error: {
        isCaught: false
    }
}

const defaultState: RootState = {
    artist: defaultStateForFetch,
    album: defaultStateForFetch,
    track: defaultStateForFetch,
    loading: false
}

const fetchArtist = createFetchSomethingCreatorAction<Artist>("artist")

const fetchAlbum = createFetchSomethingCreatorAction<Album>("album")

const fetchTrack = createFetchSomethingCreatorAction<Track>("track")

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
