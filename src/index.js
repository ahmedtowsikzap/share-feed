import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Context } from './context/Context';

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider>
      <App />
    </Context.Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


