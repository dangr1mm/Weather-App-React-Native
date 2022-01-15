import axios from 'axios';
import {openWeatherAPIKey} from '../../keys';
import {toggleLoading} from '../redux/slices/loadingSlice';
import store from '../redux/store';
import {WeatherData} from '../types';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (
  latitude: number,
  longitude: number,
): Promise<WeatherData> => {
  store.dispatch(toggleLoading());
  const url = `${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${openWeatherAPIKey}&units=metric`;
  const response = await axios.get<WeatherData>(url);
  store.dispatch(toggleLoading());
  return response.data;
};
