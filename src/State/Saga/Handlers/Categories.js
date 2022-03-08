import {call, put} from 'redux-saga/effects'
import { SET_CATEGORY } from '../../Actions/Actions'
import requestCategories from '../Requests/Categories'

export function* categoryHandler () {
    try{
        const response = yield call(requestCategories)
        const {data} = response
        yield put({type:SET_CATEGORY, payload: data})
    }catch (error){
        console.log(error)
    }
}