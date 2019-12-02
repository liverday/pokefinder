import { FETCH_POKE_BY_ID_REQUEST ,FETCH_POKE_BY_ID_SUCCESS, FETCH_POKE_BY_ID_ERROR } from 'actions/types';

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

export const fetchPokeById = (id) => {
    return (dispatch) => {
        dispatch(requestPokeById(id));

        //API CALLS
    }
}