import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from "styled-components";
import App from './components/App';
import './index.css';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

ReactDOM.render(
    <>
        <Global/>
        <App/>
    </>,
    document.getElementById('root')
);

