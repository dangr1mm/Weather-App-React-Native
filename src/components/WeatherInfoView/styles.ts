import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const LocationText = styled.Text`
  font-size: 32px;
  font-family: 'Lato-Regular';
  line-height: 40px;
  margin-bottom: 4px;
`;

export const WeatherCondition = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WeatherText = styled.Text`
  font-size: 16px;
  font-family: 'Lato-Regular';
`;

export const WeatherIcon = styled.Image`
  width: 48px;
  height: 48px;
`;

export const TempText = styled.Text`
  font-size: 48px;
  font-family: 'Lato-Bold';
  margin-bottom: 4px;
`;

export const MinMaxTemp = styled.View`
  flex-direction: row;
`;

export const AdditionalInfoText = styled.Text`
  font-size: 16px;
  font-family: 'Lato-Regular';
  margin-top: 4px;
`;

export const HorizontalSpacer = styled.View`
  width: 16px;
`;

export const CenterCard = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: rgba(201, 222, 255, 0.5);
  border-radius: 16px;
  padding: 24px;
  justify-content: space-between;
  margin-top: 48px;
`;

export const InfoColumns = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
`;

export const VerticalDivision = styled.View`
  border-right-width: 1px;
  border-color: #a9bfff;
  height: 48px;
`;
