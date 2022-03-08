import {SET_CATEGORY } from "../Actions/Actions";

export const categoryReducer = (state = {productCategories : {}} , action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state, productCategories : action.payload}
        default:
            return state;
    }

}