import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseStateExample from './state/useStateExample'
import Main from './todo/Main';
import Effect from './effect';
import EffectExtn from './effect/effectExtn';
import Section from './context/Section';
import Contexts from './context/Contexts';
import PhotoApp from './context/example/PhotoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseStateExample /> 
    <Main /> */}
    {/* <Effect/> */}
    {/* <EffectExtn/> */}
    {/* <Contexts/> */}
    <PhotoApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
