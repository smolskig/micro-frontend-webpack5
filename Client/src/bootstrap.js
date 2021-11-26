import React from "react";
import ReactDOM from "react-dom";
import Router from './routes'
const App = () => {
  return <Router></Router>;
};

ReactDOM.render(<App/>, document.getElementById('app'))
