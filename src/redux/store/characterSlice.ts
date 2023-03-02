import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICard, IPeopleCard} from './types';

const initialState: ICard = {
  people: [],
  isLoading: false,
  count: 0,
  next: 'https://swapi.dev/api/people/?page=1',
  previous: '',
};

export const characterSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setPeople: (state, action: PayloadAction<IPeopleCard[]>) => {
      state.people = [...state.people, ...action.payload];
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setNext: (state, action: PayloadAction<string>) => {
      state.next = action.payload;
    },
    setPrevious: (state, action: PayloadAction<string>) => {
      state.previous = action.payload;
    },
  },
});

export const {setPeople, setIsLoading, setCount, setNext, setPrevious} =
  characterSlice.actions;
export default characterSlice.reducer;
