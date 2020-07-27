import React, {component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import Mobile from './routes/Mobile';
import Menu from './routes/Menu';
import Detail from "./routes/Detail";
import Navigation from './components/Navigation';
import {HashRouter, Route} from "react-router-dom";




function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/menu" component={Detail}/>
      <Route path="/mobile" component={Mobile}/>
    </HashRouter>
  );
}

export default App;
