import { combineReducers } from 'redux';
import pokeReducer from './pokeReducer';
import pokeDetailReducer from './pokeDetailReducer';

export default combineReducers({
    pokeReducer,
    pokeDetailReducer
})