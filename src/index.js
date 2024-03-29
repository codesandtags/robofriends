import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
// import { createLogger } from 'redux-logger/src'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import './index.css'
import App from './containers/App'

import * as serviceWorker from './serviceWorker'
import { requestRobots, searchRobots } from './store/reducers'

// const logger = createLogger()
const store = createStore(
    combineReducers({ searchRobots, requestRobots }),
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
