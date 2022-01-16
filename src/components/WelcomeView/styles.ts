import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const verticalPadding = 0.08 * height < 44 ? 0.08 * height : 44;

export const Container = styled.View`
  padding-top: ${verticalPadding}px;
  padding-bottom: ${verticalPadding}px;
  padding-left: 44px;
  padding-right: 44px;
  background-color: rgba(201, 222, 255, 0.5);
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

export const Title = styled.Text`
  font-family: 'Lato-Bold';
  font-size: 32px;
  line-height: 38px;
  color: #000;
  text-align: center;
  margin-top: 24px;
`;

export const Subtitle = styled.Text`
  font-family: 'Lato-Regular';
  font-size: 24px;
  line-height: 28px;
  color: #000;
  text-align: center;
  margin-top: 8px;
`;
