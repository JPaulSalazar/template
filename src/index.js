import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals'
import {theme} from './resources/theme/index'


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);

reportWebVitals();