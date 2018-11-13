import * as Types from '../actions/actionTypes';
import * as Constants from '../../constants/commons';

var initialState = 1;

var myReducer = (state = initialState, action) => {
	switch(action.type) {
        case Types.SAVE_CURRENT_PAGE:
            state = action.currentPage;
            return state;
		default:
			return state;
    }
}

export default myReducer;