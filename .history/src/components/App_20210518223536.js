import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import {Bro}

import theme from './ui/Theme';
import Header from '../components/ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello
    </ThemeProvider>
  );
}

export default App;
