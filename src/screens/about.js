import React, { Component } from "react";
import "../home.scss";
import HamburgerMenu from 'react-hamburger-menu';
import { FaLinkedinIn,FaInstagram, FaGithub} from 'react-icons/fa';
import cursor from '../cursor'
import {Link} from 'react-router-dom';


export default class About extends React.Component {    
  handleClick() {
    this.setState({
        open: !this.state.open
    });
    if (this.state.menuClassList == "menu") {
      this.setState({
        menuClassList: "menu menuActive"
    });
    }
    else {
      this.setState({
        menuClassList: "menu"
    });
    }
}
constructor(props) {
  super(props);
  this.state = { width: 0, height: 0, open:false, menuClassList:'menu', currentSocial:'', ContactContainerClassList:'ContactContainer'};
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}
  render() {
  
  return (
    <div className="appContainer">
   
</div>
    );
  }
}

