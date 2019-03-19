// @flow

import { combineReducers } from 'redux'
import posts from './posts'

const entityReducers = combineReducers({
  posts
})

const errorsReducers = combineReducers({
})

const sessionsReducer = combineReducers({
})

const rootReducer = combineReducers({
  entities: entityReducers
})

export default rootReducer