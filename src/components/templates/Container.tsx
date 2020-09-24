import React, {ReactElement} from 'react';
import styled from 'styled-components/native';
import theme from '../../theme/light';

export type VisibleElement = {
  children: Element;
};

export default ({children}: VisibleElement): ReactElement => (
  <Container>{children}</Container>
);
const Container = styled.SafeAreaView`
  background-color: ${theme.colors.primary[500]};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
