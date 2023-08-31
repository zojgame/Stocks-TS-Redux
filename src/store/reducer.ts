import { StoreType } from '../types';
import {createSlice} from '@reduxjs/toolkit';

const initialState : StoreType = {
    stockCards: []
}

const stocksReducer = createSlice({
    name: 'stocksReducer',
    initialState,
    reducers: {
        setStockCards: (state, action) => {
            state.stockCards = action.payload
        }
    }
})

export const { setStockCards } = stocksReducer.actions;
export { stocksReducer }