import type {PropsWithChildren} from 'react';

import {ThemeProvider as RNEThemeProvider, createTheme} from '@rneui/themed';
import React from 'react';

type Props = PropsWithChildren<{
  _fallback?: JSX.Element;
}>;

export const ThemeProvider = ({children}: Props) => {
  const theme = createTheme({
    mode: 'light',
  });

  return <RNEThemeProvider theme={theme}>{children}</RNEThemeProvider>;
};

export default ThemeProvider;
