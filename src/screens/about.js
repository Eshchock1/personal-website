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
        <p className="content">I’m currently working as a mobile engineer at SnapSmile and pursuing the IB Diploma Programme at Colonel By S.S in my senior year. Always exploring enriching opportunities with pioneering technology I can implement to change the world, I have a deep passion for STEM fields and computer science. In the past, I’ve worked with Digitera.Interactive, Ileap Club, 2381 Robotics, and Kilika Inc. In my spare time, you might find me playing badminton, coding, drawing, learning, and competing in hackathons. Feel free to take a look at some of my work on <a style={{color:'white', fontWeight:500, textDecoration:'none'}} href="http://github.com/Eshchock1">Github</a> or <a style={{color:'white', fontWeight:500, textDecoration:'none'}} href="mailto:eshchock1@gmail.com">shoot me a message</a>.</p>
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

