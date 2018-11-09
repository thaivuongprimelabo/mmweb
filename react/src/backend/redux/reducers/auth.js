import * as Types from '../actions/actionTypes';
import * as Constants from '../../constants/commons';

var userInfo = localStorage.getItem('userInfo');
userInfo = userInfo !== null ? JSON.parse(userInfo) : {};
var initialState = {
    userInfo : userInfo,
    loginStatus : null
};

var myReducer = (state = initialState, action) => {
	switch(action.type) {
        case Types.LOGIN_SUCCEED:
            state.userInfo = action.userInfo;
            state.loginStatus = action.type;
            localStorage.setItem('userInfo', JSON.stringify(action.userInfo));
            return {
                ...state
            }
        case Types.LOGIN_FAILED:
            state.loginStatus = action.type;
            return {
                ...state
            }
        case Types.REGISTER_SUCCEED:
            state.userInfo = action.userInfo;
            state.loginStatus = action.type;
            localStorage.setItem('userInfo', JSON.stringify(action.userInfo));
            return {
                ...state
            }
        case Types.REGISTER_FAILED:
            state.loginStatus = action.type;
            return {
                ...state
            }
        case Types.SIGN_OUT:
            state.userInfo = {};
            state.loginStatus = action.type
            localStorage.removeItem('userInfo');
            return {
                ...state
            }
		default:
			return state;
    }
}

export default myReducer;