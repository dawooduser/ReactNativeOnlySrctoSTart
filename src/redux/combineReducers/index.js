import { combineReducers } from 'redux'
import spinner from '../reducers/spinner'
import user from '../reducers/user'
import favData from '../reducers/addFav'

const rootReducer = combineReducers({ 
    spinner, user, favData,
 });

export default rootReducer