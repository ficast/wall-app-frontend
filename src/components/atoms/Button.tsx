import React, { ReactElement, useState } from 'react';
import { Input, InputProps } from 'react-native-elements';

export default ({ placeholder, style }: InputProps): ReactElement => (
  <>
    <Input placeholder={placeholder} style={style} />
  </>
);
