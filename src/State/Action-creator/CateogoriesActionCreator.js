import {GET_CATEGORY, GET_CATEGORY_RESULTS} from '../Actions/Actions';

export const getCategories = (dispatch) => {
    return dispatch({
            type: GET_CATEGORY,
        })
    }

export const getCategoriesResults = (dispatch , payload) => {
        return dispatch({
                type: GET_CATEGORY_RESULTS,
                payload
            })
        }
    

