import React, { Children, ReactElement, useState } from 'react';
import { ButtonGroup, ButtonGroupProps } from 'react-native-elements';

export default ({ buttons, onPress }: ButtonGroupProps): ReactElement => (
  <>
    <ButtonGroup buttons={buttons} onPress={onPress}>
      {Children}
    </ButtonGroup>

  </>
);
