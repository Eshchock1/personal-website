import React, { Component } from "react";
import "../home.scss";
import linkedin from "../linkedin.png";
import instagram from "../instagram.png";
import github from "../github.png";
import ParallaxMousemove from "react-parallax-mousemove";
import HamburgerMenu from 'react-hamburger-menu';
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
        top: "37vh",
        left: "10vw",
    },
    ballContainer2: {
        position: "absolute",
        top: "46vh",
        left: "45vw",
    },
    ballContainer3: {
        position: "absolute",
        top: "90vh",
        left: "52vw",
    },
    ballContainer4: {
        position: "absolute",
        top: "27vh",
        left: "78vw",
    },
    ballContainer5: {
        position: "absolute",
        top: "74vh",
        left: "76vw",
    },
    ballContainer6: {
        position: "absolute",
        top: "55vh",
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
  this.state = { width: 0, height: 0, open:false, menuClassList:'menu'};
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}
  render() {

    
  
  return (
        <div style={{width:"100vw", height:"100vh", overflow:"hidden", position:'relative'}}>
          <div className="mobileMenu">
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
<a href="#">CONTACT</a>
 </li>
<li>
<a href="#">PORTFOLIO</a>
 </li>
 </ul>
</div>
            <div className="container">
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

            <div class="socials">
                <ul>
                    <li>
                        <img src={linkedin} className="social" alt="logo" />
                    </li>
                    <li>
                        <img src={github} className="social" alt="logo" />
                    </li>
                    <li>
                        <img src={instagram} className="social" alt="logo" />
                    </li>
                </ul>
            </div>

            <div class="links">
                <a href="#">ABOUT</a>

                <a href="#">CONTACT</a>

                <a href="#">PORTFOLIO</a>
            </div>

            <div className="container2">
                <ParallaxMousemove>
                    <div style={style.ballContainer3}>
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
            <div className="container3">
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
    );
  }
}

