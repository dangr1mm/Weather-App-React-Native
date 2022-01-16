import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setWeatherData} from '../../redux/slices/weatherDataSlice';
import {AppDispatch, RootState} from '../../redux/store';
import {fetchWeather} from '../../services/weatherService';
import {ButtonText, Wrapper} from './styles';

/*
  A button component in charge of calling the fetch weather service using the device location
*/

const UpdateWeather: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch<AppDispatch>();
  // reads the device location info stored in the redux toolkit
  const deviceLocation = useSelector(
    (state: RootState) => state.deviceLocation,
  );

  const onPressHandle = () => {
    fetchWeather(deviceLocation.latitude, deviceLocation.longitude).then(data =>
      dispatch(setWeatherData(data)),
    );
  };

  return (
    <Wrapper onPress={onPressHandle} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <ButtonText>Update Weather</ButtonText>
      )}
    </Wrapper>
  );
};

export default UpdateWeather;
