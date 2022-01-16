import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Location} from '../../types';

/*
  A redux toolkit slice made for storing the device location data from the third party library used
*/

const initialState: Location = {
  latitude: 0,
  longitude: 0,
  altitude: undefined,
  accuracy: 0,
  speed: 0,
  time: 0,
  bearing: 0,
  provider: null,
  verticalAccuracy: null,
  course: null,
};

export const deviceLocationSlice = createSlice({
  name: 'deviceLocation',
  initialState,
  reducers: {
    setDeviceLocation: (state, action: PayloadAction<Location>) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.altitude = action.payload.altitude;
      state.accuracy = action.payload.accuracy;
      state.speed = action.payload.speed;
      state.time = action.payload.time;
      state.bearing = action.payload.bearing;
      state.provider = action.payload.provider;
      state.verticalAccuracy = action.payload.verticalAccuracy;
      state.course = action.payload.course;
    },
  },
});

export const {setDeviceLocation} = deviceLocationSlice.actions;
export default deviceLocationSlice.reducer;
