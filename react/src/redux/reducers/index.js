import { combineReducers } from 'redux';
import text from './text';
import types from './types';
import currentPage from './currentPage';

const reducer = combineReducers({
    text : text,
    types : types,
    currentPage : currentPage
});

export default reducer;