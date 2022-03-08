import {takeLatest} from 'redux-saga/effects';
import { GET_CATEGORY } from '../Actions/Actions';
import { categoryHandler } from './Handlers/Categories';

export function* watcherSaga() {
    yield takeLatest(GET_CATEGORY , categoryHandler)
}