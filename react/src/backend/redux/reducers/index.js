import { combineReducers } from 'redux';
import text from './text';
import types from './types';
import currentPage from './currentPage';
import language from './language';
import auth from './auth';

const reducer = combineReducers({
    text : text,
    types : types,
    currentPage : currentPage,
    language : language,
    auth : auth
});

export default reducer;