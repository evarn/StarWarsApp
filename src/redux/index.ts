import {combineReducers} from '@reduxjs/toolkit';
import characterSlice from './store/characterSlice';

const rootReducer = combineReducers({
  character: characterSlice,
});

export default rootReducer;
