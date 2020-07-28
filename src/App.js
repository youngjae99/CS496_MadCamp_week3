import React, {component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import FoodPage from './routes/FoodPage';
import Detail from "./routes/Detail";
import {HashRouter, Route} from "react-router-dom";




function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/food/:name" component={Home}/>
      <Route path="/mobile" component={Detail}/>
    </HashRouter>
  );
}

export default App;
