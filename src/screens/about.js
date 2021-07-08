import React from "react";
import "../home.scss";
import "../about.scss";
import ParallaxMousemove from "react-parallax-mousemove";


export default class About extends React.Component {    
constructor(props) {
  super(props);
  this.state = {};
}
  render() {
  
  return (
<div className="appContainer" id="about" style={{justifyContent:'flex-start'}}>
    <div className="outerContainer">
      <div className="textContainer">
        <h1 className="title">HEY THERE<span className="noFont"><div className="animatedWave">👋</div>!</span><br/>I<span className="noFont">'</span>M ESHWARA<span className="noFont">.</span></h1>
        <h3 className="subtitle">A 17 year old developer from Ottawa, Canada.</h3>
        <p className="content">I’m currently working as a frontend engineer at BitSwap and entering my first year of computer science at the University of Toronto as an IB graduate. I am always exploring enriching opportunities with pioneering technology to change the world and have a deep passion for fields in STEM and computer science. In the past, I’ve worked with SnapSmile, Digitera.Interactive, Quento, Kilika Inc, and 2381 Robotics. In my spare time, you might catch me playing badminton, coding, drawing, learning, and competing in hackathons. Feel free to take a look at some of my work on <a style={{color:'white', fontWeight:500, textDecoration:'none'}} href="http://github.com/Eshchock1">Github</a> or <a style={{color:'white', fontWeight:500, textDecoration:'none'}} href="mailto:eshchock1@gmail.com">shoot me a message</a>.</p>
      </div>
      <div className="emojiContainer">
      <ParallaxMousemove>
                    <ParallaxMousemove.Layer
                        layerStyle={
                          { height:"100%",
                          width:'100%',
                            position:'relative', }
                        }
                        config={{
                            xFactor: -0.04 * 0.7,
                            yFactor: 0.03* 0.7,
                            springSettings: {
                                stiffness: 50,
                                damping: 6,
                            },}}>
                                <img className="emoji" src={require('../emoji.png')}/>

                    </ParallaxMousemove.Layer>
                </ParallaxMousemove>
      </div>
    </div>

</div>
    );
  }
}

