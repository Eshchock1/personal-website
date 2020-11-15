import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './screens/home';
import About from './screens/about';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolio from './screens/portfolio';
class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render() {
  return (
    <BrowserRouter>
    <div className="App"> 
    <Route exact path='/' component={Home}/>      
    <Route path='/home' component={Home}/>      
    <Route path='/about' component={About}/>      
    <Route path='/work' component={Portfolio}/>      
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
