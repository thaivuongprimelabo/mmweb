import * as Types from '../actions/actionTypes';
import * as Constants from '../../constants/commons';

var initialState = {
    data : [],
    data_search: [],
    data_paging : [],
    loadStatus : Types.LOAD_ACTIONS_INPROGRESS,
    conditions : {}
};

var doSearch = (data_search, conditions) => {
    var data_paging = [];
    var load_status = Types.NO_DATA_FOUND;
    if(conditions.name_search) {
        data_search = data_search.filter((record) => {
            return record.name.indexOf(conditions.name_search) !== -1;
        });
    }

    if(conditions.type_search) {
        var type_id_search = parseInt(conditions.type_search);
        data_search = data_search.filter((record) => {
            return record.type_id === type_id_search;
        });
    }

    if(conditions.location_search) {
        var location_id_search = parseInt(conditions.location_search);
        data_search = data_search.filter((record) => {
            return record.location_id === location_id_search;
        });
    }

    if(conditions.date_from_search) {
        var date_from = new Date(conditions.date_from_search).getTime();
        
        data_search = data_search.filter((record) => {
            var created_at = new Date(record.created_at).getTime();
            return created_at >= date_from;
        });
    }

    if(conditions.date_to_search) {
        var date_to = new Date(conditions.date_to_search).getTime();
        
        data_search = data_search.filter((record) => {
            var created_at = new Date(record.created_at).getTime();
            return created_at <= date_to;
        });
    }

    if(conditions.from && conditions.to) {
        data_paging = data_search.slice(conditions.from, conditions.to);
    }

    if(data_paging.length === 0) {
        data_paging = data_search.slice(0, Constants.PAGE_LIMIT);
    } else {
        load_status = Types.LOAD_ACTIONS_SUCCEED;
    }

    return { data_search, data_paging, load_status };
}

var myReducer = (state = initialState, action) => {

	switch(action.type) {
        case Types.LOAD_ACTIONS_SUCCEED:
            
            state.data = action.data;

            var search = doSearch(state.data, state.conditions);
            state.data_search = search.data_search
            state.data_paging = search.data_paging;
            state.loadStatus = search.load_status;
            return {
                ...state
            }
        case Types.LOAD_ACTIONS_FAILED:
            state.loadStatus = action.type;
            return {
                ...state
            }
        case Types.PAGING_ACTIONS:
            var from = ((action.currentPage * Constants.PAGE_LIMIT) - Constants.PAGE_LIMIT);
            var to = (action.currentPage * Constants.PAGE_LIMIT);
            state.conditions['from'] = from;
            state.conditions['to'] = to;

            var search = doSearch(state.data, state.conditions);
            state.data_search = search.data_search
            state.data_paging = search.data_paging;
            state.loadStatus = search.load_status;
            
            return {
                ...state
            }
        case Types.SEARCH_ACTIONS:
            state.conditions = action;
            var search = doSearch(state.data, state.conditions);
            state.data_search = search.data_search
            state.data_paging = search.data_paging;
            state.loadStatus = search.load_status;

            return {
                ...state
            }
		default:
			return state;
    }
}

export default myReducer;