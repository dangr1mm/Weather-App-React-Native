# Weather-App-React-Native
An app that uses the device location to fetch the weather info using the Open Weather API and displays it on screen. The app is made with React Native, Styled-Components and Redux Toolkit.

## Description

### Geolocation:

The app uses the third party library react-native-get-location (https://www.npmjs.com/package/react-native-get-location) to get the device location and then stores it to the deviceLocationSlice.

![IMG_4526](https://user-images.githubusercontent.com/24511713/149682827-ca7a1b6f-1cb1-4190-9adc-bb794a9a7304.PNG)

### State Management

Redux-Toolkit is the most recent and less verbose version of the Redux library. It requires much less boilerplate code to configure the store and to write the slices.
Our store contains only 3 slices (features). It even contains a loading slice to determine when to display an activity indicator for letting the user know when the app is fetching data from the API.
It also disables the "Update Weather" button.

![IMG_4531](https://user-images.githubusercontent.com/24511713/149683240-ca58c320-fa62-4b05-a029-17abdabadd4f.PNG)

### Home Screen

The Home screen displays all the information presented by the app. In total, there are 2 view components and 1 button component that the screen should be able to know when to display.
It uses the timestamp fetched from the api call to determine if the weather data was stored to the redux object and when to show either the data or the welcome view.

![IMG_4525](https://user-images.githubusercontent.com/24511713/149682840-bc9326f2-d7ce-4be5-b83f-c12cedb751c0.PNG)

### API Call and Weather Data

The app makes a call to only one of OpenWeather's API endoints, the current weather endpoint (https://openweathermap.org/current).
It displays simple weather info like the current temperature, min and max temperatures that day, the sunrise and sunset times as well as wind speed. It also shows the current weather condition and an icon provided by Open Weather.

![IMG_4528](https://user-images.githubusercontent.com/24511713/149682846-661bdd44-0988-4dcf-8386-44147304ff37.PNG)

