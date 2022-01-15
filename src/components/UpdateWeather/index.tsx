import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setWeatherData} from '../../redux/slices/weatherDataSlice';
import {AppDispatch, RootState} from '../../redux/store';
import {fetchWeather} from '../../services/weatherService';
import {ButtonText, Wrapper} from './styles';

const UpdateWeather: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch<AppDispatch>();
  const deviceLocation = useSelector(
    (state: RootState) => state.deviceLocation,
  );

  const requestLocation = () => {
    fetchWeather(deviceLocation.latitude, deviceLocation.longitude).then(data =>
      dispatch(setWeatherData(data)),
    );
  };

  return (
    <Wrapper onPress={requestLocation}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ButtonText>Update Weather</ButtonText>
      )}
    </Wrapper>
  );
};

export default UpdateWeather;
