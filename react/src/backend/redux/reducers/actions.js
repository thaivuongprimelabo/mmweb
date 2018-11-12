import * as Types from '../actions/actionTypes';

var initialState = {
    data : [],
    loadStatus : null
};

var myReducer = (state = initialState, action) => {
	switch(action.type) {
        case Types.LOAD_ACTIONS_SUCCEED:
            state.data = action.data;
            state.loadStatus = action.type;
            return {
                ...state
            }
        case Types.LOAD_ACTIONS_FAILED:
            state.loadStatus = action.type;
            return {
                ...state
            }
		default:
			return state;
    }
}

export default myReducer;