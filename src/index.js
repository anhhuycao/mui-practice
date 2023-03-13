import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@material-ui/core';
import App from './App';
import theme from './theme';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);

reportWebVitals();
