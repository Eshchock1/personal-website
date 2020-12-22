import React from "react";
import "../home.scss";
import "../work.scss";
import {FaArrowRight,FaChevronLeft} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';


export default class Portfolio extends React.Component {    
constructor(props) {
  super(props);
  this.state = {activeWork:0, rotation:360, mobileWorkMenuClassList:"mobileWorkMenu", workClassList:'works', workContent:<div><h2>Revolutionary Dental Health</h2><p>Helped design and develop a revolutionary mobile dental health platform which would provide users with a better telemedicine experience with their oral care. Played an integral role in the front-end development of the application with secure React Native code, designed UI and UX with Figma, and communicated with teams of engineers, analysts, and management to provide a product of clarity and simplicity.</p><a href="">Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Mobile Engineer</h6></div><div><h4>SKILLS</h4><h6>UX/UI<br/>React Native<br/>Figma<br/>Dialogflow</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div>,};
}

handleWorkClick(number){
    document.getElementById("work" + this.state.activeWork).classList.remove('currentWorkActive');
    this.setState({activeWork:number, workClassList:"works worksActives", mobileWorkMenuClassList:'mobileWorkMenu mobileWorkMenuActive'})
    document.getElementById("work" + number).classList.add('currentWorkActive');
    const content = [
        <div><div><h2>Revolutionary Dental Health</h2><p>Helped design and develop a revolutionary mobile dental health platform which would provide users with a better telemedicine experience with their oral care. Played an integral role in the front-end development of the application with secure React Native code, designed UI and UX with Figma, and communicated with teams of engineers, analysts, and management to provide a product of clarity and simplicity.</p><a href="https://www.snapsmile.io/">Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Mobile Engineer</h6></div><div><h4>SKILLS</h4><h6>UX/UI<br/>React Native<br/>Figma<br/>Dialogflow</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div></div>,
        <div><div><h2>Learning Just Got Easier</h2><p>Co-founded and led the development of a modernized educational platform to provide students with a streamlined learning experience. I built and managed the development process of a suite of multi-functional tools including forum, group, and note sharing platforms. Collaborated and led multidisciplinary teams to provide a unique educational platform with an outreach of over 150 students.</p><a href="https://quento.ca/">Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Co-Founder</h6></div><div><h4>SKILLS</h4><h6>Vue.js<br/>Firebase<br/>CSS<br/>UI/UX</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div></div>,
        <div><div><h2>Geared For Success</h2><p>I played an integral role as a lead programmer on the VEX Robotics team 2381Y through the development of software modules for autonomous tasks implementing RobotC, C++, and PROS. Collaborated in the construction of the robot and the implementation of a streamlined Github workspace, managing to qualify for the 2019 - 2020 World Championships. I also created the organization’s website with eye-catching designs, animations, and useful functionality.</p><a href="https://2381.ca/">Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Software Engineer</h6></div><div><h4>SKILLS</h4><h6>C++<br/>PROS<br/>Web Development<br/>Visual Design</h6></div><div><h4>YEAR</h4><h6>2019</h6></div></div></div></div>,
        <div><div><h2>Revolutionized Glucose Tracking</h2><p>Dulcis is an award-winning ML/AI-powered mobile application I created with React Native to revolutionize the way diabetics manage their condition. Combining the concepts of gamification and a virtual assistant, Dulcis is an efficient, effective, and eye-catching platform. Dulcis was created to compute the glycemic index of a meal given its image upon identifying its ingredients, while also providing the functionality to keep track of a user’s blood sugar and interact with a virtual assistant.</p><a href="https://devpost.com/software/dulcis-4kofpn">Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Founder</h6></div><div><h4>SKILLS</h4><h6>UX/UI<br/>Firebase<br/>ML/AI<br/>Dialogflow</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div></div>,
        <div><div><h2>The Fight Till Extinction</h2><p>Dinos of Fury is a fun 2D indie top-down shooter where you play as a dinosaur with special abilities and the goal of surviving waves of monsters for as long as possible. The game was created using HTML5 canvas functionality and Javascript, implementing animated sprites, polished animations, and an eye-catching pixelated art style.</p><a href="https://eshchock1.github.io/Dinos-of-Fury/">Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Creator</h6></div><div><h4>SKILLS</h4><h6>Javascript<br/>HTML<br/>Animation<br/>Canvas</h6></div><div><h4>YEAR</h4><h6>2018</h6></div></div></div></div>,
        <div><div><h2>A Path To Sustainability</h2><p>Supplant is an award-winning mobile application to bring consumer awareness to excessive carbon emissions. Implementing the concepts of digital food trends and gamification, I led the development of the application to create a platform that utilizes machine learning to compute the carbon emission of a meal given its image, supplemented by a clean and eye-catching UI.</p><a href="https://devpost.com/software/supplant">Launch Project &nbsp;<FaArrowRight/></a><div className="stats"><div><h4>ROLE</h4><h6>Founder</h6></div><div><h4>SKILLS</h4><h6>UX/UI<br/>React Native<br/>ML/AI<br/>Visual Design</h6></div><div><h4>YEAR</h4><h6>2020</h6></div></div></div></div>
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

