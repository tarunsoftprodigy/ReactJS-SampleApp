import {createStore , applyMiddleware} from 'redux'
import reducers from './Reducers/Index'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './Saga/RootSaga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(
    reducers,
    {} ,
    applyMiddleware(...middleware)
)

sagaMiddleware.run(watcherSaga)

export default store;