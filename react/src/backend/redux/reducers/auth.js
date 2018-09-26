import * as Types from '../actions/actionTypes';
import * as Constants from '../../constants/commons';

var userInfo = localStorage.getItem('userInfo');
userInfo = userInfo !== null ? JSON.parse(userInfo) : {};
var initialState = {
    userInfo : userInfo
};

var myReducer = (state = initialState, action) => {
	switch(action.type) {
        case Types.LOGIN_SUCCEED:
            state.userInfo = action.userInfo;
            localStorage.setItem('userInfo', JSON.stringify(state));
            return {
                ...state
            }
        case Types.SIGN_OUT:
            state.userInfo = {};
            localStorage.removeItem('userInfo');
            return {
                ...state
            }
		default:
			return state;
    }
}

export default myReducer;