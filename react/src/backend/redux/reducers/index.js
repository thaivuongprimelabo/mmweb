import { combineReducers } from 'redux';
import text from './text';
import types from './types';
import currentPage from './currentPage';
import language from './language';
import auth from './auth';
import actions from './actions';
import locations from './locations';

const reducer = combineReducers({
    text : text,
    types : types,
    currentPage : currentPage,
    language : language,
    auth : auth,
    actions : actions,
    locations : locations
});

export default reducer;