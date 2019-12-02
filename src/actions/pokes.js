import { FETCH_POKES_REQUEST, FETCH_POKES_ERROR, FETCH_POKES_SUCCESS } from 'actions/types'

const requestPokes = (isFetching = true) => ({
    type: FETCH_POKES_REQUEST,
    isFetching
});

const receivePokes = (pokes) => ({
    type: FETCH_POKES_SUCCESS,
    pokes
});

const invalidateFetchPokes = (hasFailed = false) => ({
    type: FETCH_POKES_ERROR,
    hasFailed
});

export const fetchPokes = () => {
    return async (dispatch) => {
        dispatch(requestPokes());

        //API CALL and resolve data
    }
}