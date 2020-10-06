import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './screens/home';
import About from './screens/about';
function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
    <Route exact path='/' component={Home}/>      
    <Route path='/home' component={Home}/>      
    {/* <Route path='/about' component={About}/>       */}
    </div>
    </BrowserRouter>
  );
}

export default App;
