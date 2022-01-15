import React from 'react';
import store from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </>
  );
};

export default App;
