import { FETCH_POKES_REQUEST, FETCH_POKES_ERROR, FETCH_POKES_SUCCESS } from 'actions/types'

const initialState = {
    isFetching: false,
    pokesContext: {
        next: null,
        previous: null,
        count: 0,
        pokes: []
    },
    hasFailed: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKES_REQUEST:
            return {
                ...state,
                isFetching: action.isFetching,
                hasFailed: false,
            }
        case FETCH_POKES_ERROR:
            return {
                ...state,
                isFetching: false,
                hasFailed: action.hasFailed
            }
        case FETCH_POKES_SUCCESS:
            return {
                ...state,
                pokesContext: { ...action.pokesContext },
                isFetching: false,
                hasFailed: false
            }
        default:
            return state;
    }
}