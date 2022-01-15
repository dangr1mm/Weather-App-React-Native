import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {
  AdditionalInfoText,
  CenterCard,
  HorizontalSpacer,
  InfoColumns,
  LocationText,
  MinMaxTemp,
  TempText,
  VerticalDivision,
  WeatherCondition,
  WeatherIcon,
  WeatherText,
  Wrapper,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import timeFormat from '../../utils/timeFormat';

const WeatherInfoView: React.FC = () => {
  const weatherData = useSelector((state: RootState) => state.weatherData);

  return (
    <Wrapper>
      <LocationText>
        {weatherData.name}, {weatherData.sys.country}
      </LocationText>
      <TempText>{Math.trunc(weatherData.main.temp)}°C</TempText>
      <WeatherCondition>
        <WeatherText>{weatherData.weather[0].main}</WeatherText>
        <WeatherIcon
          source={{
            uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
          }}
        />
      </WeatherCondition>
      <MinMaxTemp>
        <AdditionalInfoText>
          H: {Math.trunc(weatherData.main.temp_max)}°C
        </AdditionalInfoText>
        <HorizontalSpacer />
        <AdditionalInfoText>
          L: {Math.trunc(weatherData.main.temp_min)}°C
        </AdditionalInfoText>
      </MinMaxTemp>
      <CenterCard>
        <InfoColumns>
          <Icon name="sunrise" size={24} color="#000" />
          <AdditionalInfoText>
            {timeFormat(weatherData.sys.sunrise)}
          </AdditionalInfoText>
        </InfoColumns>

        <VerticalDivision />

        <InfoColumns>
          <Icon name="sunset" size={24} color="#000" />
          <AdditionalInfoText>
            {timeFormat(weatherData.sys.sunset)}
          </AdditionalInfoText>
        </InfoColumns>

        <VerticalDivision />

        <InfoColumns>
          <Icon name="wind" size={24} color="#000" />
          <AdditionalInfoText>
            {(weatherData.wind.speed * 3.6).toFixed(2)} km/h
          </AdditionalInfoText>
        </InfoColumns>
      </CenterCard>
    </Wrapper>
  );
};

export default WeatherInfoView;
