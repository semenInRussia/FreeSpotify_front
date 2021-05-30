import axios from "axios";

import {ActionTypes, FetchSomethingAction} from "../../types/redux/actions";
import {hideLoader, showLoader} from "./loader";
import {ForFetchState, RootState} from "../../types/redux/states";


export function dispatchGetFetchAction(
    url: string,
    actionType: ActionTypes,
    dispatch: any
) {
    dispatch(showLoader({}))

    axios.get(url)
        .then((res) => {
            dispatch({
                type: actionType,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: actionType,
                payload: err
            })
        })
        .finally(() => dispatch(hideLoader({})))
}

function fetchSomethingCreatorAction<O>(
    state: RootState,
    action: FetchSomethingAction<O>,
    objectName: string
): RootState {

    const somethingOrError: O | Error = action.payload

    let somethingState: ForFetchState<O>;

    if (somethingOrError instanceof Error) {
        somethingState = {
            error: {
                isCaught: true,
                name: somethingOrError.name,
                message: somethingOrError.message
            }
        }
    } else {
        somethingState = {
            object: somethingOrError,
            error: {
                isCaught: false
            }
        }
    }

    return {
        ...state,
        [objectName]: somethingState
    }
}

export function createFetchSomethingCreatorAction<O>(objectName: string) {
    return (state: RootState, action: FetchSomethingAction<O>) => (
        fetchSomethingCreatorAction<O>(
            state,
            action,
            objectName
        )
    )
}
