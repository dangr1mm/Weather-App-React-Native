import React from 'react';
import AlertIcon from '../../../assets/icons/AlertIcon';
import {Container, Subtitle, Title} from './styles';

/*
  A view for prompting the initial app information before first fetching the api
*/

const WelcomeView: React.FC = () => {
  return (
    <Container>
      <AlertIcon />
      <Title>Please, click the button below</Title>
      <Subtitle>So we can show you the weather in your city!</Subtitle>
    </Container>
  );
};

export default WelcomeView;
