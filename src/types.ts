export interface Location {
  latitude: number;
  longitude: number;
  altitude?: number;
  accuracy: number;
  speed?: number;
  time: number;
  bearing?: number;
  provider?: any;
  verticalAccuracy?: any;
  course?: any;
  status?: GeolocationStatus;
}

export interface GeolocationStatus {
  cancelled: 'CANCELLED';
  unavailable: 'UNAVAILABLE';
  timeout: 'TIMEOUT';
  unauthorized: 'UNAUTHORIZED';
}

export interface WeatherData {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface Wind {
  deg: number;
  gust: number;
  speed: number;
}
