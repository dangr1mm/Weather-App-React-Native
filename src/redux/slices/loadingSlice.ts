import {createSlice} from '@reduxjs/toolkit';

/*
  A redux toolkit slice made exclusively to handle the service loading state
*/

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    toggleLoading: state => {
      return !state;
    },
  },
});

export const {toggleLoading} = loadingSlice.actions;
export default loadingSlice.reducer;
