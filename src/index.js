import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger/src';
import { composeWithDevTools} from 'redux-devtools-extension';

import './index.css';
import App from './containers/App';
import 'tachyons';

import * as serviceWorker from './serviceWorker';
import { searchRobots } from './store/reducers';

const logger = createLogger();
const store = createStore(
    searchRobots,
    composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
