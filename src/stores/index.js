import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// temporary shut down this
// import analyticsMiddleware from './middlewares/analyticsMiddleware';
import promiseMiddleware from './middlewares/promiseMiddleware';
import rootReducer from './reducers';


let middleware = [
  promiseMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
  }),
];

if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger];
}

const finalCreateStore = composeWithDevTools(applyMiddleware(...middleware))(createStore);

const store = finalCreateStore(rootReducer);

export default store;
