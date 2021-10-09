import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import "./assets/sass/style.sass"


ReactDOM.render(
   <React.StrictMode><App /></React.StrictMode>,
    document.getElementById('react-root')
  );

console.log("React is ready!")