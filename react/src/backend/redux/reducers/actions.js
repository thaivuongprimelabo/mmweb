import * as Types from '../actions/actionTypes';
import * as Constants from '../../constants/commons';

var initialState = {
    data : [],
    data_search: [],
    data_paging : [],
    loadStatus : null
};

var doSearch = (data_search, conditions) => {
    console.log(conditions);
    var data_paging = [];
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
    }

    return { data_search, data_paging };
}

var myReducer = (state = initialState, action) => {
    var conditions = action;

	switch(action.type) {
        case Types.LOAD_ACTIONS_SUCCEED:
            state.loadStatus = action.type;
            state.data = action.data;

            var search = doSearch(state.data, conditions);
            state.data_search = search.data_search
            state.data_paging = search.data_paging;
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
            conditions['from'] = from;
            conditions['to'] = to;

            var search = doSearch(state.data, conditions);
            state.data_search = search.data_search
            state.data_paging = search.data_paging;
            
            return {
                ...state
            }
        case Types.SEARCH_ACTIONS:
            
            var search = doSearch(state.data, conditions);
            state.data_search = search.data_search
            state.data_paging = search.data_paging;

            return {
                ...state
            }
		default:
			return state;
    }
}

export default myReducer;