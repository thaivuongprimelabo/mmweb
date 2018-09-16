import axios from 'axios';
import * as Api from '../../constants/api';
import * as Types from '../actions/actionTypes';

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
				dispatch(saveTypesToProps(responseJson.data));
			}
		})
		.catch((error) =>{
			console.log(error);
		});
	}
}

// Save to props
export const saveTypesToProps = (data) => {
    return {
        type : Types.SAVE_TYPES,
        data : data
    }
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