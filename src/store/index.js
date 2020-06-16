// import { createStore, applyMiddleware, compose } from 'redux';
// import root from 'reducers/index';
// import thunk from 'redux-thunk';
// /* eslint-disable no-underscore-dangle */
// const store = createStore(
//   notesApp,
//   /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunk)
// );
// /* eslint-enable */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
/* eslint-enable */

export default store;
