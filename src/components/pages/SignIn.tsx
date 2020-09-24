import React, { ReactElement } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Container from '../templates/Container';
import theme from '../../theme/nice';

export default (): ReactElement => {
  const [showLoginBox, setShowLoginBox] = 
  return (
    <Container>
      <Title onPress={setShowLoginBox(true)}>Sign In</Title>
    </Container>
  );
};

const Title = styled.Text`
  color: ${theme.colors.secondary[100]};
  font-family: ${theme.font.family.bold};
  font-size: ${theme.sizes[400]};
`;
