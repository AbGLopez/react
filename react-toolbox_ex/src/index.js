import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from '../src/toolbox/theme.js';
import '../src/toolbox/theme.css'


ReactDOM.render(
    <ThemeProvider theme={ThemeProvider}>
        <App />
    </ThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();
