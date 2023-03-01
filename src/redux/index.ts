import {combineReducers} from '@reduxjs/toolkit';
import cardSlice from './store/cardSlice';

const rootReducer = combineReducers({
  card: cardSlice,
});

export default rootReducer;
