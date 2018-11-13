import axios from 'axios';
import * as Api from '../../constants/api';
import * as Types from './actionTypes';

export const login = (form) => {
	return (dispatch) => {
		var data = {
			email : form.email,
			password : form.password
		};

		var strJson = JSON.stringify(data);

		axios({
			method: 'POST',
			url : Api.API_LOGIN,
			headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json; charset=utf-8',
			},
			data : strJson
		})
		.then(res => {
			var responseJson = res.data;
			if(responseJson.code === 200) {
				dispatch(loginSucceed(responseJson.data));
			} else {
				dispatch(loginFailed())
			}
		})
		.catch((error) =>{
			alert(error);
		});
	}
}

export const register = (form) => {
	return (dispatch) => {
		var data = {
			name : form.name,
			email : form.email,
			password: form.password,
			role_id : 2
		};

		var strJson = JSON.stringify(data);

		axios({
			method: 'POST',
			url : Api.API_REGISTER,
			headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json; charset=utf-8',
			},
			data : strJson
		})
		.then(res => {
			var responseJson = res.data;
			console.log(responseJson);
			if(responseJson.code === 200) {
				dispatch(registerSucceed(responseJson.data));
			} else {
				dispatch(registerFailed());
			}
		})
		.catch((error) =>{
			alert(error);
		});
	}
}

export const loadTextFromApi = () => {
    return (dispatch) => {
        axios({
			method: 'GET',
			url : Api.API_LOAD_TEXT
		})
		.then(res => {
			var responseJson = res.data;
			if(responseJson.code === 200) {
				dispatch(saveTextToProps(responseJson.data));
			}
		})
		.catch((error) =>{
			console.log(error);
		});
    }
}

export const loadTypesFromApi = () => {
	return (dispatch) => {
		axios({
			method: 'GET',
			url : Api.API_LOAD_TYPES
		})
		.then(res => {
			var responseJson = res.data;
			if(responseJson.code === 200) {
				dispatch(loadTypesSucceed(responseJson.data));
			} else {
				dispatch(loadTypesFailed());
			}
		})
		.catch((error) =>{
			console.log(error);
		});
	}
}

export const loadLocationsFromApi = () => {
	return (dispatch) => {
		axios({
			method: 'GET',
			url : Api.API_LOAD_LOCATIONS
		})
		.then(res => {
			var responseJson = res.data;
			if(responseJson.code === 200) {
				dispatch(loadLocationsSucceed(responseJson.data));
			} else {
				dispatch(loadLocationsFailed());
			}
		})
		.catch((error) =>{
			console.log(error);
		});
	}
}

export const loadActionsFromApi = () => {
	return (dispatch) => {
		axios({
			method: 'GET',
			url : Api.API_LOAD_ACTIONS
		})
		.then(res => {
			var responseJson = res.data;
			if(responseJson.code === 200) {
				dispatch(loadActionsSucceed(responseJson.data));
			} else {
				dispatch(loadActionsFailed());
			}
		})
		.catch((error) =>{
			console.log(error);
		});
	}
}

export const search = (conditions) => {
	return conditions;
}

// Save to props
export const loadTypesSucceed = (data) => {
    return {
        type : Types.LOAD_TYPES_SUCCEED,
        data : data
    }
}

export const loadTypesFailed = () => {
    return {
        type : Types.LOAD_TYPES_FAILED
    }
}

export const loadActionsSucceed = (data) => {
    return {
        type : Types.LOAD_ACTIONS_SUCCEED,
        data : data
    }
}

export const loadActionsFailed = (data) => {
    return {
        type : Types.LOAD_ACTIONS_FAILED
    }
}

export const loadLocationsSucceed = (data) => {
    return {
        type : Types.LOAD_LOCATIONS_SUCCEED,
        data : data
    }
}

export const loadLocationsFailed = () => {
    return {
        type : Types.LOAD_LOCATIONS_FAILED
    }
}

export const paging = (params) => {
	return params
}

export const saveTextToProps = (data) => {
    return {
        type : Types.SAVE_TEXT,
        data : data
    }
}

export const saveCurrentPage = (data) => {
	return {
		type : Types.SAVE_CURRENT_PAGE,
		currentPage : data
	}
}

export const loginSucceed = (data) => {
	return {
		type : Types.LOGIN_SUCCEED,
		userInfo : data
	}
}

export const loginFailed = () => {
	return {
		type : Types.LOGIN_FAILED
	}
}

export const registerSucceed = (data) => {
	return {
		type : Types.REGISTER_SUCCEED,
		userInfo : data
	}
}

export const registerFailed = () => {
	return {
		type : Types.REGISTER_FAILED
	}
}

export const signout = () => {
	return {
		type : Types.SIGN_OUT
	}
}