import {ActionTypes, HideLoaderAction, ShowLoaderAction} from "../../types/redux/actions";
import {Dispatch} from "react";

export const showLoader = (_: {}) => (dispatch: Dispatch<ShowLoaderAction>) => {
    dispatch({
        type: ActionTypes.SHOW_LOADER,
        payload: {}
    })
}

export const hideLoader = (_: {}) => (dispatch: Dispatch<HideLoaderAction>) => {
    dispatch({
        type: ActionTypes.HIDE_LOADER,
        payload: {}
    })
}
