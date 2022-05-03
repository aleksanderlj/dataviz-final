import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";
import Main from "./pages/Main";

function App() {
  return (
      <div className="App">
        <Helmet>
          <title>{"Equality in American Universities"}</title>
        </Helmet>
        <Main />
      </div>
  );
}

export default App;
