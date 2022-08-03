import { useReducer } from 'react'
import {combineReducers,applyMiddleware} from 'redux'
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import LaptopReducer from './reducer/LaptopReducer'
import mobileReducer from './reducer/MobileReducer'

const rootReducer = combineReducers(LaptopReducer,mobileReducer,useReducer)
const store = createStore(rootReducer,applyMiddleware(thunk,logger))
export default store;
