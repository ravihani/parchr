import {createStore, combineReducers, compose, applyMiddleware } from 'redux'
import UserReducer from './UserRdx/UserReducer'

import remotedev from 'redux-remotedev';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(),
  // other store enhancers if any
);
export const AppStore = createStore(UserReducer, enhancer
     // {
    //  remotedev({
    // sendTo: 'http://localhost:3000',
    // sender: (data, sendTo) => {
    //     console.log(data);
    //   fetch(sendTo, {
    //     method: 'POST',
    //     headers: {
    //       'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   })
    // }} )}
    
  );
