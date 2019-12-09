import { combineReducers } from 'redux';
import pokeReducer from './pokeReducer';
import pokeDataReducer from './pokeDataReducer';

export default combineReducers({
    pokeReducer,
    pokeDataReducer,
})