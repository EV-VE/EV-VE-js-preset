import React from 'react';
import ReactDOM from 'react-dom';
import { useTheme, ThemeProvider, withTheme } from '@emotion/react'
import theme from '@rebass/preset'
import App from "./App"
import "./assets/sass/style.sass"


ReactDOM.render(
  <ThemeProvider theme={theme}>
   <React.StrictMode><App /></React.StrictMode>
  </ThemeProvider>,
    document.getElementById('react-root')
  );

console.log("React is ready!")