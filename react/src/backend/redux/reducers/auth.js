import * as Types from '../actions/actionTypes';
import * as Constants from '../../constants/commons';

var initialState = {};

var myReducer = (state = initialState, action) => {
	switch(action.type) {
        case Types.SAVE_USER_INFO:
            state = action.userInfo;
            return {...state}
		default:
			return state;
    }
}

export default myReducer;