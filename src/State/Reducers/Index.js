import {combineReducers} from 'redux';
import { categoryReducer } from './CategoryReducer';

const reducers = combineReducers({
    categories : categoryReducer,
})

export default reducers;