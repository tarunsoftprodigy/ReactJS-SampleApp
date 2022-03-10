import {takeLatest} from 'redux-saga/effects';
import { GET_CATEGORY, GET_CATEGORY_RESULTS } from '../Actions/Actions';
import { categoryHandler } from './Handlers/Categories';
import { CategoryResultHandler } from './Handlers/CategoryResult';

export function* watcherSaga() {
    yield takeLatest(GET_CATEGORY , categoryHandler)
    yield takeLatest(GET_CATEGORY_RESULTS , CategoryResultHandler)
}