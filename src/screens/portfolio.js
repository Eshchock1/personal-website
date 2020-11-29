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
  this.state = {width: 0, height: 0, open:false, menuClassList:'menu', currentSocial:'', ContactContainerClassList:'ContactContainer', activeWork:0, rotation:360, workContent:<div><h2>Revolutionary Dental Health</h2><p>We helped design and developed a platform that would provide visitors with greater clarity, and understanding of how digital media works. Using a simple mechanic that could be invoked at any visitors were offered a summarised version of content that helped succinctly distil the content. Ultimately, proving why Journey Further is a media company that understands clarity at speed.</p><a>Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Mobile Engineer</h6></div><div><h4>SKILLS</h4><h6>UX/UI<br/>React Native<br/>Figma<br/>Dialogflow</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div>,};
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

handleWorkClick(number){
    this.setState({activeWork:number})
    const content = [
        <div><div><h2>Revolutionary Dental Health</h2><p>We helped design and developed a platform that would provide visitors with greater clarity, and understanding of how digital media works. Using a simple mechanic that could be invoked at any visitors were offered a summarised version of content that helped succinctly distil the content. Ultimately, proving why Journey Further is a media company that understands clarity at speed.</p><a>Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Mobile Engineer</h6></div><div><h4>SKILLS</h4><h6>UX/UI<br/>React Native<br/>Figma<br/>Dialogflow</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div></div>,
        <div><div><h2>Learning Just Got Easier</h2><p>We helped design and developed a platform that would provide visitors with greater clarity, and understanding of how digital media works. Using a simple mechanic that could be invoked at any visitors were offered a summarised version of content that helped succinctly distil the content. Ultimately, proving why Journey Further is a media company that understands clarity at speed.</p><a>Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Co-Founder</h6></div><div><h4>SKILLS</h4><h6>UX/UI<br/>Vue.js<br/>HTML<br/>CSS</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div></div>,
        <div><div><h2>Geared For Success</h2><p>We helped design and developed a platform that would provide visitors with greater clarity, and understanding of how digital media works. Using a simple mechanic that could be invoked at any visitors were offered a summarised version of content that helped succinctly distil the content. Ultimately, proving why Journey Further is a media company that understands clarity at speed.</p><a>Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Software Engineer</h6></div><div><h4>SKILLS</h4><h6>C++<br/>PROS<br/>Web Development<br/>Visual Design</h6></div><div><h4>YEAR</h4><h6>2019</h6></div></div></div></div>,
        <div><div><h2>Revolutionized Glucose Tracking</h2><p>We helped design and developed a platform that would provide visitors with greater clarity, and understanding of how digital media works. Using a simple mechanic that could be invoked at any visitors were offered a summarised version of content that helped succinctly distil the content.</p><a>Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Founder</h6></div><div><h4>SKILLS</h4><h6>UX/UI<br/>React Native<br/>ML/AI<br/>Dialogflow</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div></div>,
        <div><div><h2>The Fight Till Extinction</h2><p>We helped design and developed a platform that would provide visitors with greater clarity, and understanding of how digital media works. Using a simple mechanic that could be invoked at any visitors were offered a summarised version of content that helped succinctly distil the content. Ultimately, proving why Journey Further is a media company that understands clarity at speed.</p><a>Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Creator Developer</h6></div><div><h4>SKILLS</h4><h6>Javascript<br/>HTML<br/>Animation<br/>Canvas</h6></div><div><h4>YEAR</h4><h6>2018</h6></div></div></div></div>,
        <div><div><h2>A Path To Sustainability</h2><p>We helped design and developed a platform that would provide visitors with greater clarity, and understanding of how digital media works. Using a simple mechanic that could be invoked at any visitors were offered a summarised version of content that helped succinctly distil the content. Ultimately, proving why Journey Further is a media company that understands clarity at speed.</p><a>Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Creator</h6></div><div><h4>SKILLS</h4><h6>UX/UI<br/>React Native<br/>ML/AI<br/>Visual Design</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div></div>
    ]
    document.getElementById("black-board").style.transform = 'rotateY(' + this.state.rotation + 'deg)';
    // document.getElementById("black-board").style.transition = "2s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    this.setState({rotation:this.state.rotation+360})
    const timer1 = setTimeout(() => {
        this.setState({workContent:content[number]})
      }, 1200);
      const timer2 = setTimeout(() => {
        // document.getElementById("black-board").style.transition = "0s"
      }, 2000);
      return()=> clearTimeout(timer1, timer2);
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
    <div className="appContainer" id="work" style={{justifyContent:'flex-start'}}>
    {/* <span id="cursor"></span> */}

    
    
    <div className="flexContainer1">
    <div className="works" style={{textAlign:'left'}} data-aos-anchor="#name" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="0">
        <h1 data-id="0" onClick={()=>this.handleWorkClick(0)}>SnapSmile</h1>
        <h1 data-id="1" onClick={()=>this.handleWorkClick(1)}>Quento</h1>
        <h1 data-id="2" onClick={()=>this.handleWorkClick(2)}><span className="noFont">2381</span> Robotics</h1>
        <h1 data-id="3" onClick={()=>this.handleWorkClick(3)}>Dulcis</h1>
        <h1 data-id="4" onClick={()=>this.handleWorkClick(4)}>Dinos of Fury</h1>
        <h1 data-id="5" onClick={()=>this.handleWorkClick(5)}>Supplant</h1>
    </div> 
    </div>
    <div className="flexContainer2">
    <div className="description" style={{textAlign:'left',}} data-aos-anchor="#name" data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="0">
        <Tilt className="Tilt" glareEnable={true} glareColor="rgba(61, 61, 61,0.4)" scale={1.05} perspective={2000} tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2000} trackOnWindow={true}>
        <div id="black-board">
            <div id="textContainer">
            {this.state.workContent}
        </div>
        </div>
        </Tilt>
    </div> 
    </div>
</div>
    );
  }
}

