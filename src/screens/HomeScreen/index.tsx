import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import GetLocation from 'react-native-get-location';
import {useDispatch, useSelector} from 'react-redux';
import {setDeviceLocation} from '../../redux/slices/deviceLocationSlice';
import UpdateWeather from '../../components/UpdateWeather';
import WeatherInfoView from '../../components/WeatherInfoView';
import {AppDispatch, RootState} from '../../redux/store';
import {Background, SafeArea, ViewContainer} from './styles';
import WelcomeView from '../../components/WelcomeView';

const backgroundImage = require('../../../assets/img/day-background.png');

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const dt = useSelector((state: RootState) => state.weatherData.dt);

  // the app accesses the native interface and requests access to the device location in the HomeScreen first render
  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then(gpsLocation => {
        dispatch(setDeviceLocation(gpsLocation));
      })
      .catch(ex => {
        const {code, message} = ex;
        console.warn(code, message);
        if (code === 'CANCELLED') {
          Alert.alert('Location cancelled by user or by another request');
        }
        if (code === 'UNAVAILABLE') {
          Alert.alert('Location service is disabled or unavailable');
        }
        if (code === 'TIMEOUT') {
          Alert.alert('Location request timed out');
        }
        if (code === 'UNAUTHORIZED') {
          Alert.alert('Authorization denied');
        }
      });
  }, []);

  return (
    <Background resizeMode="cover" source={backgroundImage}>
      <SafeArea>
        <ViewContainer>
          {dt !== 0 ? <WeatherInfoView /> : <WelcomeView />}
          <UpdateWeather />
        </ViewContainer>
      </SafeArea>
    </Background>
  );
};

export default HomeScreen;
