import React from "react";
import "../styles/home.scss";
import ParallaxMousemove from "react-parallax-mousemove";
import {FaChevronDown} from 'react-icons/fa';

const style = {
    layerStyle1: {
        position: "absolute",
    },
    // layerStyle2: {
    //     position: "absolute",
    // },
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
    // ballContainer2: {
    //     position: "absolute",
    //     top: "52vh",
    //     left: "45vw",
    // },
    ballContainer3: {
        position: "absolute",
        top: "90vh",
        left: "47vw",
    },
    ballContainer4: {
        position: "absolute",
        top: "40vh",
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
    if (this.state.menuClassList === "menu") {
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
  this.state = { width: 0, height: 0, website:'websiteContainer'};
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
  this.setState({website: 'websiteContainer websiteContainerActive'})
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
    <div className={this.state.website}>
            <div className="container" id="name" data-aos='zoom-out' data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="0">
                <ParallaxMousemove>
                    <ParallaxMousemove.Layer
                        layerStyle={style.layerStyle6}
                        config={{
                            xFactor: -0.04 * 0.8,
                            yFactor: 0.03* 0.8,
                            springSettings: {
                                stiffness: 50,
                                damping: 8,
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
                                    stiffness: 50,
                                damping: 8,
                                },}}>
                            <img src={require('../assets/item3.png')} style={{width:'20vw'}}/>
                        </ParallaxMousemove.Layer>
                    </div>
                    <div style={style.ballContainer4}>
                        <ParallaxMousemove.Layer
                            layerStyle={style.layerStyle4}
                            config={{
                                xFactor: 0.1* 0.8,
                                yFactor: -0.13* 0.8,
                                springSettings: {
                                    stiffness: 50,
                                damping: 8,
                                },}}>
                            <img src={require('../assets/item4.png')} style={{width:'14vw'}}/>
                        </ParallaxMousemove.Layer>
                    </div>
                    <div style={style.ballContainer1}>
                        <ParallaxMousemove.Layer
                            layerStyle={style.layerStyle1}
                            config={{
                                xFactor: 0.1* 0.8,
                                yFactor: -0.13* 0.8,
                                springSettings: {
                                    stiffness: 50,
                                damping: 8,
                                },}}>
                            <img src={require('../assets/item5.png')} style={{width:'15.6vw'}}/>
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
                                    stiffness: 50,
                                damping: 8,
                                },}}>
                            <img src={require('../assets/item6.png')} style={{width:'9vw', transform: 'rotateZ(150deg)'}}/>
                        </ParallaxMousemove.Layer>
                    </div>

                    {/* <div style={style.ballContainer2}>
                        <ParallaxMousemove.Layer
                            layerStyle={style.layerStyle2}
                            config={{
                                xFactor: -0.16* 0.8,
                                yFactor: 0.2* 0.8,
                                springSettings: {
                                    stiffness: 50,
                                damping: 8,
                                },}}>
                            <img src={require('../assets/item2.png')} style={{width:'8vw'}}/>
                        </ParallaxMousemove.Layer>
                    </div> */}
                    <div style={style.ballContainer5}>
                        <ParallaxMousemove.Layer
                            layerStyle={style.layerStyle5}
                            config={{
                                xFactor: -0.17* 0.8,
                                yFactor: 0.17* 0.8,
                                springSettings: {
                                    stiffness: 50,
                                    damping: 8,
                                },}}>
                            <img src={require('../assets/item1.png')} style={{width:'15vw'}}/>
                        </ParallaxMousemove.Layer>
                    </div>
                </ParallaxMousemove>
            </div>
        </div>
        <div id="scrollDownContainer" data-aos-anchor="#name" data-aos='zoom-out' data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="1000">
            <FaChevronDown/>
        </div>
        </div>
    );
  }
}

