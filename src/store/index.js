import {createStore,applyMiddleware} from 'redux';
import RootReducer from '../reducers/index';
import ReduxPromise from 'redux-promise';

// const crateStoreWithMiddleware=applyMiddleware(ReduxPromise)(createStore);
const middleware=applyMiddleware(ReduxPromise);
const Store =createStore(RootReducer,middleware);

export default Store;