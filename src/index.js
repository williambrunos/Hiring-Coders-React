import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function renderTimeComponentsEverySecond() {
  ReactDOM.render(
    <React.StrictMode>
      <App title='Hello Gama Academy!'/>
    </React.StrictMode>,
    document.getElementById('root')
  ); 
}

setInterval(renderTimeComponentsEverySecond, 1000);