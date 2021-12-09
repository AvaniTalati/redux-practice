// import { useReducer } from 'react';
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';
import  reducer from '../User/userReducer'

const store = createStore(reducer,applyMiddleware(thunk))
store.subscribe(()=>console.log(store.getState()));
export default store;