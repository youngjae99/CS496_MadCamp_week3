import React, {component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import Mobile from './routes/Mobile';
import Menu from './routes/FoodPage';
import Detail from "./routes/Detail";
import Navigation from './components/Navigation';
import {HashRouter, Route} from "react-router-dom";




function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/mobile" component={Detail}/>
      <Route path="/food" component={Menu}/>
    </HashRouter>
  );
}

export default App;
