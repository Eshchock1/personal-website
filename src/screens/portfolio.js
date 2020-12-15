import React from "react";
import "../home.scss";
import "../work.scss";
import {FaArrowRight,FaChevronLeft} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';


export default class Portfolio extends React.Component {    
constructor(props) {
  super(props);
  this.state = {activeWork:0, rotation:360, mobileWorkMenuClassList:"mobileWorkMenu", workClassList:'works', workContent:<div><h2>Revolutionary Dental Health</h2><p>We helped design and developed a platform that would provide visitors with greater clarity, and understanding of how digital media works. Using a simple mechanic that could be invoked at any visitors were offered a summarised version of content that helped succinctly distil the content. Ultimately, proving why Journey Further is a media company that understands clarity at speed.</p><a>Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Mobile Engineer</h6></div><div><h4>SKILLS</h4><h6>UX/UI<br/>React Native<br/>Figma<br/>Dialogflow</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div>,};
}

handleWorkClick(number){
    document.getElementById("work" + this.state.activeWork).classList.remove('currentWorkActive');
    this.setState({activeWork:number, workClassList:"works worksActives", mobileWorkMenuClassList:'mobileWorkMenu mobileWorkMenuActive'})
    document.getElementById("work" + number).classList.add('currentWorkActive');
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
    if (this.state.width < 1366) {
      this.setState({workContent:content[number]})
    }
    else {
    const timer1 = setTimeout(() => {
        this.setState({workContent:content[number]})
      }, 1200);
      const timer2 = setTimeout(() => {
      }, 2000);
      return()=> clearTimeout(timer1, timer2);

    }
      
}
  render() {
  
  return (
    <div className="appContainer" id="work" style={{justifyContent:'flex-start'}}>
    {/* <span id="cursor"></span> */}
    <div className={this.state.mobileWorkMenuClassList}>
<div className="mobileWorkMenuInner" onClick={()=> this.setState({mobileWorkMenuClassList:'mobileWorkMenu'})}>
<FaChevronLeft />
</div>
<div className="mobileWorkMenuContent">
{this.state.workContent}
</div>
</div>

    
    
    <div className="flexContainer1">
    <div className={this.state.workClassList} style={{textAlign:'left'}}>
        <h1 id="work0" onClick={()=>this.handleWorkClick(0)}>SnapSmile</h1>
        <h1 id="work1" onClick={()=>this.handleWorkClick(1)}>Quento</h1>
        <h1 id="work2" onClick={()=>this.handleWorkClick(2)}><span className="noFont">2381</span> Robotics</h1>
        <h1 id="work3" onClick={()=>this.handleWorkClick(3)}>Dulcis</h1>
        <h1 id="work4" onClick={()=>this.handleWorkClick(4)}>Dinos of Fury</h1>
        <h1 id="work5" onClick={()=>this.handleWorkClick(5)}>Supplant</h1>
    </div> 
    </div>
    <div className="flexContainer2">
    <div className="description" style={{textAlign:'left',}}>
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

