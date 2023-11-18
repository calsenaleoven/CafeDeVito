import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'; // Receive history prop from BrowserRouter
import ChooseScreen from './screens/ChooseScreen';
import { Container, CssBaseline, Paper, ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme({
  typography: {
    h1: { fontWeight: 'bold' },
    h2: {
      fontSize: '2rem',
      color: 'black',
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: 'white',
    },
  },
  palette: {
    primary: { main: '#ff1744' },
    secondary: {
      main: '#118e16',
      contrastText: '#ffffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Container maxWidth="sm">
          <Paper>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/choose" component={ChooseScreen} />
          </Paper>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
