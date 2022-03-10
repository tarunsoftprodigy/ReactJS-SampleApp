import {call, put} from 'redux-saga/effects'
import { SET_CATEGORY_RESULTS } from '../../Actions/Actions'
import RequestCategoriesResult from '../Requests/CategoryResult'

export function* CategoryResultHandler (action) {
    try{
        const response = yield call(RequestCategoriesResult , action.payload)
        const {data} = response
        yield put({type:SET_CATEGORY_RESULTS, payload: data})
    }catch (error){
        console.log(error)
    }
}