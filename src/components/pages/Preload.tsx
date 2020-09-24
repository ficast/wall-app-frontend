import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import Container from '../templates/Container';
import theme from '../../theme/nice';
import { useNavigation } from '@react-navigation/native';

export default (): ReactElement => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    !loading && navigation.navigate('SignIn');
  }, [loading]);

  return <Container>{loading && <Loading>Loading...</Loading>}</Container>;
};

const Loading = styled.Text`
  color: ${theme.colors.secondary[100]};
  font-family: ${theme.font.family.bold};
  font-size: ${theme.sizes[400]};
`;
