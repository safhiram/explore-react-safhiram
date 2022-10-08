import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import NavigateRoutes from './NavigateRoutes';
const App = () => (
  <ThemeProvider theme={theme}>
    <NavigateRoutes />
  </ThemeProvider>
);

export default App;
