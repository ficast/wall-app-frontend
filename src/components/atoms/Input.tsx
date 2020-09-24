import React, { ReactElement, useState } from 'react';
import { Button, ButtonProps } from 'react-native-elements';

export default ({ title, style }: ButtonProps): ReactElement => (
  <>
    <Button title={title} style={style} />
  </>
);
