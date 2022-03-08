import {GET_CATEGORY} from '../Actions/Actions';

export const getCategories = (dispatch) => {
    return dispatch({
            type: GET_CATEGORY,
        })
    }

