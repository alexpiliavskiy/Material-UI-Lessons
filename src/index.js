import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import {ThemeProvider, createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1e1e1e'
        },
        secondary: {
            main: "#e591d1"
        }
    }
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
