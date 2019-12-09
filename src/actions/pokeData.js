import { FETCH_POKE_BY_ID_REQUEST, FETCH_POKE_BY_ID_SUCCESS, FETCH_POKE_BY_ID_ERROR } from 'actions/types';
import StorageService from 'services/storage';

const requestPokeById = (id) => ({
    type: FETCH_POKE_BY_ID_REQUEST,
    isFetching: true,
    id
});

const receivePokeById = (id, pokeData) => ({
    type: FETCH_POKE_BY_ID_SUCCESS,
    id,
    pokeData
})

const invalidatePokeById = (id) => ({
    type: FETCH_POKE_BY_ID_ERROR,
    id
})

export const fetchPokeByID = (id) => {
    return async (dispatch) => {
        try {
            dispatch(requestPokeById(id));

            const data = await StorageService.getInstance().fetchPokeByID(id);
            
            setTimeout(() => {
                dispatch(receivePokeById(id, data))
            }, 300);
        } catch (e) {
            dispatch(invalidatePokeById(id))
        }
    }
}