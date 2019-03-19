// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'
import logger from 'redux-logger'
import type { Store } from './types'

import App from './App'
import * as serviceWorker from './serviceWorker'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(logger, sagaMiddleware))
const store: Store = createStore(rootReducer, enhancer)

const element = document.getElementById('root')
if (!element) {
  throw new Error('couldn\'t find element with id root')
}

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , element
)
serviceWorker.unregister()
