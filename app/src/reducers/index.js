import {combineReducers} from 'redux'
import homeReducer from './home_reducer'

const rootReducer = combineReducers({
	home: homeReducer
})

export default rootReducer