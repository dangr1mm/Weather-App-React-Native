import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {deviceLocationSlice} from './slices/deviceLocationSlice';
import {loadingSlice} from './slices/loadingSlice';
import {weatherDataSlice} from './slices/weatherDataSlice';

const reducer = combineReducers({
  weatherData: weatherDataSlice.reducer,
  deviceLocation: deviceLocationSlice.reducer,
  loading: loadingSlice.reducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
