import React, { ReactElement, useState } from 'react';
import styled from 'styled-components/native';
import Container from '../templates/Container';
import LoginBox from '../organisms/LoginBox';
import theme from '../../theme/nice';

export default (): ReactElement => {
  const [showLoginBox, setShowLoginBox] = useState(false);
  return (
    <Container>
      <>
        <Title onPress={() => setShowLoginBox(true)}>Sign In</Title>
        {showLoginBox && <LoginBox />}
      </>
    </Container>
  );
};

const Title = styled.Text`
  color: ${theme.colors.secondary[100]};
  font-family: ${theme.font.family.bold};
  font-size: ${theme.sizes[400]};
`;
