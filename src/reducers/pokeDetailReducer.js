import { FETCH_POKE_BY_ID_REQUEST ,FETCH_POKE_BY_ID_SUCCESS, FETCH_POKE_BY_ID_ERROR } from 'actions/types';

const initialState = {
    id: null,
    pokeData: { },
    isFetching: false,
    hasFailed: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKE_BY_ID_REQUEST:
            return {
                ...state,
                id: action.id,
                isFetching: action.isFetching
            }
        case FETCH_POKE_BY_ID_SUCCESS:
            return {
                ...state,
                id: action.id,
                pokeData: action.pokeData,
                isFetching: false,
                hasFailed: false,
            }
        case FETCH_POKE_BY_ID_ERROR:
            return {
                ...state,
                id: action.id,
                isFetching: false,
                hasFailed: true,
            }
        default:
            return state;
    }
}