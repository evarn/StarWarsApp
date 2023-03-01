import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICard, IPeopleCard} from './types';

const initialState: ICard = {
  people: [],
  isLoading: false,
  total: 0,
};

export const candidatesSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setPeople: (state, action: PayloadAction<IPeopleCard[]>) => {
      state.people = [...state.people, ...action.payload];
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const {setPeople, setIsLoading, setTotal} = candidatesSlice.actions;
export default candidatesSlice.reducer;
