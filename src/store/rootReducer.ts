import { combineReducers } from '@reduxjs/toolkit';
import { stocksReducer } from '.';

export const rootReducer = combineReducers({
    'stocksReducer' : stocksReducer.reducer,
})