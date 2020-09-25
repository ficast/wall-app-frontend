import React, { ReactElement } from 'react';
import styled from 'styled-components/native';
import theme from '../../theme/nice';

export type VisibleElement = {
  children: ReactElement | boolean;
};

export default ({ children }: VisibleElement): ReactElement => (
  <Container>{children}</Container>
);

const Container = styled.SafeAreaView`
  background-color: ${theme.colors.primary[500]};
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
