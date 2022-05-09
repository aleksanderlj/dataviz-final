import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill"
import TriggerScrollProvider from "./context/TriggerScrollContext";
import AudioProvider from "./context/AudioContext";

smoothscroll.polyfill()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <TriggerScrollProvider value={false}>
            <AudioProvider>
                <HashRouter>
                    <App />
                </HashRouter>
            </AudioProvider>
        </TriggerScrollProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
