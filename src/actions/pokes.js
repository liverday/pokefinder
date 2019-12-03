import { FETCH_POKES_REQUEST, FETCH_POKES_ERROR, FETCH_POKES_SUCCESS } from 'actions/types'
import StorageService from '../services/storage';

const requestPokes = (isFetching = true) => ({
    type: FETCH_POKES_REQUEST,
    isFetching
});

const receivePokes = (pokesContext) => ({
    type: FETCH_POKES_SUCCESS,
    pokesContext
});

const invalidateFetchPokes = (hasFailed = false) => ({
    type: FETCH_POKES_ERROR,
    hasFailed
});

export const fetchPokes = () => {
    return async (dispatch) => {
        try {
            dispatch(requestPokes());

                    //API CALL and resolve data
            const pokesContext = await StorageService.getInstance().fetchPokes();
            dispatch(receivePokes(pokesContext))
        } catch (e) {
            dispatch(invalidateFetchPokes())
        }

    }
}