import * as Types from '../actions/actionTypes';

var initialState = {
    data : [],
    data_paging : [],
    loadStatus : null
};

var myReducer = (state = initialState, action) => {
	switch(action.type) {
        case Types.LOAD_LOCATIONS_SUCCEED:
            state.data = action.data;
            state.loadStatus = action.type;
            return { ...state };
        case Types.LOAD_LOCATIONS_FAILED:
            state.loadStatus = action.type;
            return { ...state };
		default:
			return state;
    }
}

export default myReducer;