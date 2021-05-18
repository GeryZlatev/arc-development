import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './ul/'
import Header from '../components/ui/Header';

function App() {
  return (
    <ThemeProvider>
      <Header />

    </ThemeProvider>
  );
}

export default App;
