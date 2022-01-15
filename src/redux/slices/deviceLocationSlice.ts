import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Location} from '../../types';

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
  status: undefined,
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
    setLocationStatus: (state, action: PayloadAction<Location>) => {
      state.status = action.payload.status;
    },
  },
});

export const {setDeviceLocation, setLocationStatus} =
  deviceLocationSlice.actions;
export default deviceLocationSlice.reducer;
