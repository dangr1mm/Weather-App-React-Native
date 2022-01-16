import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WeatherData} from '../../types';

/*
  A redux toolkit slice for storing the weather data provided by the api.
*/

const initialState: WeatherData = {
  base: '',
  clouds: {
    all: 0,
  },
  cod: 0,
  coord: {
    lat: 0,
    lon: 0,
  },
  dt: 0,
  id: 0,
  main: {
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  name: '',
  sys: {
    country: '',
    id: 0,
    sunrise: 0,
    sunset: 0,
    type: 0,
  },
  timezone: 0,
  visibility: 0,
  weather: [
    {
      description: '',
      icon: '',
      id: 0,
      main: '',
    },
  ],
  wind: {
    deg: 0,
    gust: 0,
    speed: 0,
  },
};

export const weatherDataSlice = createSlice({
  name: 'weatherData',
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<WeatherData>) => {
      state.base = action.payload.base;
      state.clouds = action.payload.clouds;
      state.cod = action.payload.cod;
      state.coord = action.payload.coord;
      state.dt = action.payload.dt;
      state.id = action.payload.id;
      state.main = action.payload.main;
      state.name = action.payload.name;
      state.sys = action.payload.sys;
      state.timezone = action.payload.timezone;
      state.visibility = action.payload.visibility;
      state.weather = action.payload.weather;
      state.wind = action.payload.wind;
    },
  },
});

export const {setWeatherData} = weatherDataSlice.actions;
export default weatherDataSlice.reducer;
