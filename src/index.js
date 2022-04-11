import React from 'react';
import * as reactDOMClient from 'react-dom/client';
import App from './App';

const container = document.getElementById('root')

const root = reactDOMClient.createRoot(container)

root.render(<App/>)