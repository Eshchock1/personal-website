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
import {Link} from 'react-router-dom';

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
  this.state = { width: 0, height: 0, loading:'loading',website:'websiteContainer'};
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
const timer1 = setTimeout(() => {
  this.setState({loading: 'loading loadingDone1'})
  this.setState({website: 'websiteContainer websiteContainerActive'})
}, 0);
const timer2 = setTimeout(() => {
    this.setState({loading: 'loading loadingDone1 loadingDone2'})
  }, 0);
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
          {/* <span id="cursor"></span> */}
  <div className={this.state.loading}  data-aos='zoom-out' data-aos-easing="ease-out-cubic" data-aos-duration="500"><img src={Icon}/></div>
    <div className={this.state.website}>

            <div className="container" id="name" data-aos='zoom-out' data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="0">
                <ParallaxMousemove>
                    <ParallaxMousemove.Layer
                        layerStyle={style.layerStyle6}
                        config={{
                            xFactor: -0.04 * 0.8,
                            yFactor: 0.03* 0.8,
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


            <div className="container2" data-aos-anchor="#name" data-aos='zoom-out' data-aos-easing="ease-out-cubic" data-aos-duration="750" data-aos-delay="1000">
                <ParallaxMousemove>
                    <div style={style.ballContainer3} >
                        <ParallaxMousemove.Layer
                            layerStyle={style.layerStyle3}
                            config={{
                                xFactor: 0.06* 0.8,
                                yFactor: -0.1* 0.8,
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
                                xFactor: 0.1* 0.8,
                                yFactor: -0.13* 0.8,
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
                                xFactor: 0.1* 0.8,
                                yFactor: -0.13* 0.8,
                                springSettings: {
                                    stiffness: 75,
                                    damping: 5,
                                },}}>
                            <div className="ball1"></div>
                        </ParallaxMousemove.Layer>
                    </div>
                </ParallaxMousemove>
            </div>
            <div className="container3" data-aos-anchor="#name" data-aos='zoom-out' data-aos-easing="ease-out-cubic" data-aos-duration="750" data-aos-delay="1300">
                <ParallaxMousemove>
                    <div style={style.ballContainer6}>
                        <ParallaxMousemove.Layer
                            layerStyle={style.layerStyle5}
                            config={{
                                xFactor: -0.1* 0.8,
                                yFactor: 0.1* 0.8,
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
                                xFactor: -0.16* 0.8,
                                yFactor: 0.2* 0.8,
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
                                xFactor: -0.17* 0.8,
                                yFactor: 0.17* 0.8,
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

