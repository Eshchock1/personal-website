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
    <div className="mobileMenu" data-aos-anchor="#name" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="1000">
        <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={this.state.width <= 768 ? 0.075 * this.state.width : this.state.width <= 991 ? 0.05 * this.state.width : this.state.width <= 1366 ? 0.05 * this.state.width : 0}
            height={this.state.width <= 991 ? 0.04 * this.state.width : this.state.width <= 1366 ? 0.04 * this.state.width : 0}
            strokeWidth={this.state.width <= 768 ? 0.006 * this.state.width : this.state.width <= 991 ? 0.004 * this.state.width : this.state.width <= 1366 ? 0.005 * this.state.width : 0}
            rotate={0}
            color="white"
            borderRadius={5}
            animationDuration={0.5}
        />
    </div>
    <div className={this.state.menuClassList}>
        <ul>
            <li>
                {/* <Link to="/">HOME</Link> */}
            </li>
            <li>
                {/* <Link>ABOUT</Link> */}
            </li>
            <li>
                <a onClick={() => this.setState({ ContactContainerClassList: "ContactContainer ContactContainerActive", menuClassList: "menu", open: !this.state.open })}>CONTACT</a>
            </li>
            <li>
                {/* <Link to="/work">PORTFOLIO</Link> */}
            </li>
        </ul>
    </div>

    <div className={this.state.ContactContainerClassList}>
        <div className="contactInner">
            <div className="contactMenu">
                <HamburgerMenu
                    isOpen={true}
                    menuClicked={() => this.setState({ ContactContainerClassList: "ContactContainer" })}
                    width={this.state.width <= 768 ? 0.075 * this.state.width : this.state.width <= 991 ? 0.05 * this.state.width : this.state.width <= 1366 ? 0.05 * this.state.width : 0.02 * this.state.width}
                    height={this.state.width <= 991 ? 0.04 * this.state.width : this.state.width <= 1366 ? 0.04 * this.state.width : 0.02 * this.state.width}
                    strokeWidth={this.state.width <= 768 ? 0.006 * this.state.width : this.state.width <= 991 ? 0.004 * this.state.width : this.state.width <= 1366 ? 0.005 * this.state.width : 0.0015 * this.state.width}
                    rotate={0}
                    color="black"
                    borderRadius={5}
                    animationDuration={0.5}
                />
            </div>
            <div className="diagonalBackground"></div>
            <h3>Contact me</h3>
            <h1>
                <a href="mailto:eshchock1@gmail.com">
                    eshchock
                    <span className="noFont" style={{ marginLeft: "-0.7vw", marginRight: "0.3vw" }}>
                        1@
                    </span>
                    gmail
                    <span className="noFont" style={{ marginRight: "0.2vw" }}>
                        .
                    </span>
                    com
                </a>
            </h1>
            <div className="contactSocials">
                <h2 id="social1" onMouseEnter={() => this.setState({ currentSocial: "Linkedin" })}>
                    <a href="https://www.linkedin.com/in/eshwar-chockalingam-b07bb11b2/">
                        <FaLinkedinIn />
                    </a>
                </h2>
                <h2 id="social2" onMouseEnter={() => this.setState({ currentSocial: "Github" })}>
                    {" "}
                    <a href="http://github.com/Eshchock1">
                        <FaGithub />
                    </a>
                </h2>
                <h2 id="social3" onMouseEnter={() => this.setState({ currentSocial: "Instagram" })}>
                    <a href="https://www.instagram.com/eshwar_chockalingam/">
                        <FaInstagram />
                    </a>
                </h2>
                <div className="break"></div>
                <h3 id="currentSocial">{this.state.currentSocial}</h3>
            </div>
        </div>
    </div>
</div>
    );
  }
}

