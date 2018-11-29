import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'

const configureStore = () => {
    const middlewares = [thunk];
    const enhancer = applyMiddleware(...middlewares);
    return createStore(reducers, enhancer)
}

export default configureStore;