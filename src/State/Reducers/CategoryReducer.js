import {SET_CATEGORY, SET_CATEGORY_RESULTS } from "../Actions/Actions";

export const categoryReducer = (state = {productCategories : {} , categoryResults : {} } , action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state, productCategories : action.payload}
        case SET_CATEGORY_RESULTS: {
            return {...state, categoryResults : action.payload}
        }
        default:
            return state;
    }

}