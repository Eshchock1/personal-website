import React, { Component } from "react";
import "../home.scss";
import "../work.scss";
import HamburgerMenu from 'react-hamburger-menu';
import { FaLinkedinIn,FaInstagram, FaGithub,FaArrowRight} from 'react-icons/fa';
import cursor from '../cursor'
import linkedin from "../linkedin.png";
import instagram from "../instagram.png";
import github from "../github.png";
import {Link} from 'react-router-dom';
// import Tilt from 'react-tilt'
import Tilt from 'react-parallax-tilt';


export default class Portfolio extends React.Component {    
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
  this.state = {width: 0, height: 0, open:false, menuClassList:'menu', currentSocial:'', ContactContainerClassList:'ContactContainer', activeWork:'', rotation:360, workContent:<div><h2>Revolutionary Dental Health</h2><p>We helped design and developed a platform that would provide visitors with greater clarity, and understanding of how digital media works. Using a simple mechanic that could be invoked at any visitors were offered a summarised version of content that helped succinctly distil the content. Ultimately, proving why Journey Further is a media company that understands clarity at speed.</p><a>Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Mobile Engineer</h6></div><div><h4>SKILLS</h4><h6>UX/UI<br/>React Native<br/>Figma<br/>Dialogflow</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div>,};
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

handleWorkClick(number){
    const content = [
        <div><div><h2>Revolutionary Dental Health</h2><p>We helped design and developed a platform that would provide visitors with greater clarity, and understanding of how digital media works. Using a simple mechanic that could be invoked at any visitors were offered a summarised version of content that helped succinctly distil the content. Ultimately, proving why Journey Further is a media company that understands clarity at speed.</p><a>Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Mobile Engineer</h6></div><div><h4>SKILLS</h4><h6>UX/UI<br/>React Native<br/>Figma<br/>Dialogflow</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div></div>,
        <div><div><h2>Learning Just Got Easier</h2><p>We helped design and developed a platform that would provide visitors with greater clarity, and understanding of how digital media works. Using a simple mechanic that could be invoked at any visitors were offered a summarised version of content that helped succinctly distil the content. Ultimately, proving why Journey Further is a media company that understands clarity at speed.</p><a>Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Co-Founder</h6></div><div><h4>SKILLS</h4><h6>UX/UI<br/>Vue.js<br/>HTML<br/>CSS</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div></div>,
        <div><div><h2>Geared For Success</h2><p>We helped design and developed a platform that would provide visitors with greater clarity, and understanding of how digital media works. Using a simple mechanic that could be invoked at any visitors were offered a summarised version of content that helped succinctly distil the content. Ultimately, proving why Journey Further is a media company that understands clarity at speed.</p><a>Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Software Engineer</h6></div><div><h4>SKILLS</h4><h6>C++<br/>PROS<br/>Web Development<br/>Visual Design</h6></div><div><h4>YEAR</h4><h6>2019</h6></div></div></div></div>,
        <div><div><h2>Revolutionized Glucose Tracking</h2><p>We helped design and developed a platform that would provide visitors with greater clarity, and understanding of how digital media works. Using a simple mechanic that could be invoked at any visitors were offered a summarised version of content that helped succinctly distil the content.</p><a>Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Founder</h6></div><div><h4>SKILLS</h4><h6>UX/UI<br/>React Native<br/>ML/AI<br/>Dialogflow</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div></div>,
        <div><div><h2>The Fight Till Extinction</h2><p>We helped design and developed a platform that would provide visitors with greater clarity, and understanding of how digital media works. Using a simple mechanic that could be invoked at any visitors were offered a summarised version of content that helped succinctly distil the content. Ultimately, proving why Journey Further is a media company that understands clarity at speed.</p><a>Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Creator Developer</h6></div><div><h4>SKILLS</h4><h6>Javascript<br/>HTML<br/>Animation<br/>Canvas</h6></div><div><h4>YEAR</h4><h6>2018</h6></div></div></div></div>,
        <div><div><h2>A Path To Sustainability</h2><p>We helped design and developed a platform that would provide visitors with greater clarity, and understanding of how digital media works. Using a simple mechanic that could be invoked at any visitors were offered a summarised version of content that helped succinctly distil the content. Ultimately, proving why Journey Further is a media company that understands clarity at speed.</p><a>Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Creator</h6></div><div><h4>SKILLS</h4><h6>UX/UI<br/>React Native<br/>ML/AI<br/>Visual Design</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div></div>
    ]
    document.getElementById("black-board").style.transform = 'rotateY(' + this.state.rotation + 'deg)';
    this.setState({rotation:this.state.rotation+360})
    const timer = setTimeout(() => {
        this.setState({workContent:content[number]})
      }, 1000);
      return()=> clearTimeout(timer);
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
    <div className="appContainer" style={{justifyContent:'flex-start'}}>
    <span id="cursor"></span>
    <div className="mobileMenu" data-aos-anchor="#name" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="0">
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
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/about">ABOUT</Link>
            </li>
            <li>
                <a onClick={() => this.setState({ ContactContainerClassList: "ContactContainer ContactContainerActive", menuClassList: "menu", open: !this.state.open })}>CONTACT</a>
            </li>
            <li>
                <Link>PORTFOLIO</Link>
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
    <div class="socials" data-aos-anchor="#name" data-aos='fade-right' data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="0">
                <ul>
                <li>
                        <a href="https://www.linkedin.com/in/eshwar-chockalingam-b07bb11b2/"><img src={linkedin} className="social" alt="logo" /></a>
                    </li>
                    <li>
                        <a href="http://github.com/Eshchock1"><img src={github} className="social" alt="logo" /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/eshwar_chockalingam/"><img src={instagram} className="social" alt="logo" /></a>
                    </li>
                </ul>
            </div>
    
    {/* content */}
    
    
    <div className="works" style={{textAlign:'left'}} data-aos-anchor="#name" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="0">
        <h1 onClick={()=>this.handleWorkClick(0)}>SnapSmile</h1>
        <h1 onClick={()=>this.handleWorkClick(1)}>Quento</h1>
        <h1 onClick={()=>this.handleWorkClick(2)}><span className="noFont">2381</span> Robotics</h1>
        <h1 onClick={()=>this.handleWorkClick(3)}>Dulcis</h1>
        <h1 onClick={()=>this.handleWorkClick(4)}>Dinos of Fury</h1>
        <h1 onClick={()=>this.handleWorkClick(5)}>Supplant</h1>
    </div> 

    <div className="description" style={{textAlign:'left',}} data-aos-anchor="#name" data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="0">
        {/* <hr/> */}
        <Tilt className="Tilt" glareEnable={true} glareColor="rgba(61, 61, 61,0.4)" scale={1.05} perspective={2000} tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2000}>
        <div id="black-board">
            <div id="textContainer">
            {this.state.workContent}
        </div>
        </div>
        </Tilt>
    </div> 
    
    
    
    
    <div class="links" data-aos-anchor="#name" data-aos='fade-down' data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="0">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <a onClick={() => this.setState({ ContactContainerClassList: "ContactContainer ContactContainerActive" })}>CONTACT</a>
        <Link>PORTFOLIO</Link>
    </div>
</div>
    );
  }
}

