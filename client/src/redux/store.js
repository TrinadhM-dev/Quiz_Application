import {combineReducers, configureStore} from '@reduxjs/toolkit';

/** Call Reducer */
import  questionReducer from './question_reducer';
import  resultReducer  from './result_reducer';
const rootReducer = combineReducers({
    question:questionReducer,
    result :resultReducer
});


/** Create store with reducer */

export default configureStore({reducer:rootReducer});