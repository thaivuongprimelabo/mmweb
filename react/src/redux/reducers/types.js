import * as Types from '../actions/actionTypes';

var initialState = [];

var myReducer = (state = initialState, action) => {
	switch(action.type) {
        case Types.SAVE_TYPES:
            state = action.data;
            return state;
		default:
			return state;
    }
}

export default myReducer;