import React, { Component } from "react";
import "../home.scss";
import Icon from "../icon2.png";
import linkedin from "../linkedin.png";
import instagram from "../instagram.png";
import github from "../github.png";
import ParallaxMousemove from "react-parallax-mousemove";
import HamburgerMenu from 'react-hamburger-menu';
import { FaLinkedinIn,FaInstagram, FaGithub} from 'react-icons/fa';
import cursor from '../cursor'
const style = {
    layerStyle1: {
        position: "absolute",
    },
    layerStyle2: {
        position: "absolute",
    },
    layerStyle3: {
        position: "absolute",
    },
    layerStyle4: {
        position: "absolute",
    },
    layerStyle5: {
        position: "absolute",
    },
    layerStyle6: {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
    },
    ballContainer1: {
        position: "absolute",
        top: "44vh",
        left: "10vw",
    },
    ballContainer2: {
        position: "absolute",
        top: "52vh",
        left: "45vw",
    },
    ballContainer3: {
        position: "absolute",
        top: "96vh",
        left: "52vw",
    },
    ballContainer4: {
        position: "absolute",
        top: "33vh",
        left: "78vw",
    },
    ballContainer5: {
        position: "absolute",
        top: "80vh",
        left: "76vw",
    },
    ballContainer6: {
        position: "absolute",
        top: "61vh",
        left: "21vw",
    },
};

export default class Home extends React.Component {    
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
  this.state = { width: 0, height: 0, open:false, menuClassList:'menu', currentSocial:'', ContactContainerClassList:'ContactContainer', loading:'loading',website:'websiteContainer'};
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
const timer1 = setTimeout(() => {
  this.setState({loading: 'loading loadingDone1'})
  this.setState({website: 'websiteContainer websiteContainerActive'})
}, 1000);
const timer2 = setTimeout(() => {
    this.setState({loading: 'loading loadingDone1 loadingDone2'})
  }, 2000);
  return()=> clearTimeout(timer1, timer2);
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
          <span id="cursor"></span>
  <div className={this.state.loading}  data-aos='zoom-out' data-aos-easing="ease-out-cubic" data-aos-duration="500"><img src={Icon}/></div>
    <div className={this.state.website}>
          <div className="mobileMenu" data-aos-anchor="#name" data-aos='fade-left' data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="1000">
          <HamburgerMenu
    isOpen={this.state.open}
    menuClicked={this.handleClick.bind(this)}
    width={this.state.width <= 768?0.075 * this.state.width:this.state.width <= 991? 0.05 * this.state.width:this.state.width <= 1366? 0.05 * this.state.width:0}
    height={this.state.width <= 991? 0.04 * this.state.width:this.state.width <= 1366? 0.04 * this.state.width:0}
    strokeWidth={this.state.width <= 768?0.006 * this.state.width:this.state.width <= 991? 0.004 * this.state.width:this.state.width <= 1366? 0.005 * this.state.width:0}
    rotate={0}
    color='white'
    borderRadius={5}
    animationDuration={0.5}
/>
</div>
<div className={this.state.menuClassList}>
<ul>
<li>
<a href="#">ABOUT</a>
 </li>
<li>
<a onClick={()=>this.setState({ContactContainerClassList:'ContactContainer ContactContainerActive', menuClassList:'menu',open: !this.state.open})}>CONTACT</a>
 </li>
<li>
<a href="#">PORTFOLIO</a>
 </li>
 </ul>
</div>


<div className={this.state.ContactContainerClassList}>
    <div className="contactInner">
    <div className="contactMenu">
    <HamburgerMenu
    isOpen={true}
    menuClicked={()=>this.setState({ContactContainerClassList:'ContactContainer'})}
    width={this.state.width <= 768?0.075 * this.state.width:this.state.width <= 991? 0.05 * this.state.width:this.state.width <= 1366? 0.05 * this.state.width:0.02 * this.state.width}
    height={this.state.width <= 991? 0.04 * this.state.width:this.state.width <= 1366? 0.04 * this.state.width:0.02 * this.state.width}
    strokeWidth={this.state.width <= 768?0.006 * this.state.width:this.state.width <= 991? 0.004 * this.state.width:this.state.width <= 1366? 0.005 * this.state.width:0.0015 * this.state.width}
    rotate={0}
    color='black'
    borderRadius={5}
    animationDuration={0.5}
/>
    </div>
    <div className="diagonalBackground"></div>
    <h3>Contact me</h3>
    <h1><a href="mailto:eshchock1@gmail.com">eshchock<span className="noFont" style={{marginLeft:'-0.7vw', marginRight:'0.3vw'}}>1@</span>gmail<span className="noFont" style={{marginRight:'0.2vw'}}>.</span>com</a></h1>
    <div className="contactSocials">
    <h2 id="social1" onMouseEnter={()=>this.setState({currentSocial: "Linkedin"})}><a href="https://www.linkedin.com/in/eshwar-chockalingam-b07bb11b2/"><FaLinkedinIn/></a></h2>
    <h2 id="social2" onMouseEnter={()=>this.setState({currentSocial: "Github"})}> <a href="http://github.com/Eshchock1"><FaGithub/></a></h2>
                        <h2 id="social3" onMouseEnter={()=>this.setState({currentSocial: "Instagram"})}><a href="https://www.instagram.com/eshwar_chockalingam/"><FaInstagram/></a></h2>
                        <div className="break"></div>
  <h3 id="currentSocial">{this.state.currentSocial}</h3>

            </div>
</div>
</div>

            <div className="container" id="name" data-aos='zoom-out' data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="1000">
                <ParallaxMousemove>
                    <ParallaxMousemove.Layer
                        layerStyle={style.layerStyle6}
                        config={{
                            xFactor: -0.04,
                            yFactor: 0.03,
                            springSettings: {
                                stiffness: 75,
                                damping: 5,
                            },}}>
                        <div className="breh">
                            <h1>Eshwara</h1>
                            <h2>Chock</h2>
                        </div>
                    </ParallaxMousemove.Layer>
                </ParallaxMousemove>
            </div>
            <div class="socials" data-aos-anchor="#name" data-aos='fade-right' data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="1000">
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

            <div class="links" data-aos-anchor="#name" data-aos='fade-left' data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="1000">
                <a href="#">ABOUT</a>

                <a onClick={()=>this.setState({ContactContainerClassList:'ContactContainer ContactContainerActive'})}>CONTACT</a>

                <a href="#">PORTFOLIO</a>
            </div>

            <div className="container2" data-aos-anchor="#name" data-aos='zoom-out' data-aos-easing="ease-out-cubic" data-aos-duration="750" data-aos-delay="2000">
                <ParallaxMousemove>
                    <div style={style.ballContainer3} >
                        <ParallaxMousemove.Layer
                            layerStyle={style.layerStyle3}
                            config={{
                                xFactor: 0.06,
                                yFactor: -0.1,
                                springSettings: {
                                    stiffness: 100,
                                    damping: 5,
                                },}}>
                            <div className="ball3"></div>
                        </ParallaxMousemove.Layer>
                    </div>
                    <div style={style.ballContainer4}>
                        <ParallaxMousemove.Layer
                            layerStyle={style.layerStyle4}
                            config={{
                                xFactor: 0.1,
                                yFactor: -0.13,
                                springSettings: {
                                    stiffness: 75,
                                    damping: 5,
                                },}}>
                            <div className="ball4"></div>
                        </ParallaxMousemove.Layer>
                    </div>
                    <div style={style.ballContainer1}>
                        <ParallaxMousemove.Layer
                            layerStyle={style.layerStyle1}
                            config={{
                                xFactor: 0.1,
                                yFactor: -0.13,
                                springSettings: {
                                    stiffness: 75,
                                    damping: 5,
                                },}}>
                            <div className="ball1"></div>
                        </ParallaxMousemove.Layer>
                    </div>
                </ParallaxMousemove>
            </div>
            <div className="container3" data-aos-anchor="#name" data-aos='zoom-out' data-aos-easing="ease-out-cubic" data-aos-duration="750" data-aos-delay="2300">
                <ParallaxMousemove>
                    <div style={style.ballContainer6}>
                        <ParallaxMousemove.Layer
                            layerStyle={style.layerStyle5}
                            config={{
                                xFactor: -0.1,
                                yFactor: 0.1,
                                springSettings: {
                                    stiffness: 75,
                                    damping: 5,
                                },}}>
                            <div className="ball6"></div>
                        </ParallaxMousemove.Layer>
                    </div>

                    <div style={style.ballContainer2}>
                        <ParallaxMousemove.Layer
                            layerStyle={style.layerStyle2}
                            config={{
                                xFactor: -0.16,
                                yFactor: 0.2,
                                springSettings: {
                                    stiffness: 75,
                                    damping: 5,
                                },}}>
                            <div className="ball2"></div>
                        </ParallaxMousemove.Layer>
                    </div>
                    <div style={style.ballContainer5}>
                        <ParallaxMousemove.Layer
                            layerStyle={style.layerStyle5}
                            config={{
                                xFactor: -0.17,
                                yFactor: 0.17,
                                springSettings: {
                                    stiffness: 75,
                                    damping: 5,
                                },}}>
                            <div className="ball5"></div>
                        </ParallaxMousemove.Layer>
                    </div>
                </ParallaxMousemove>
            </div>
        </div>
        </div>
    );
  }
}

