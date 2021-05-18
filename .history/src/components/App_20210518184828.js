import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from '../components/ui/Header';

function App() {
  return (
    <ThemeProvider>
      <Header />

    </ThemeProvider>
  );
}

export default App;
