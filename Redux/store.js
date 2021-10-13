import { createStore ,applyMiddleware} from 'redux';

import {composeWithDevtools} from 'redux-devtools-extension';

var middleware = [];

var store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default  store;