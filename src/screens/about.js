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
<div className="appContainer" id="work" style={{justifyContent:'flex-start'}}>
    <div className="outerContainer">
      <div className="textContainer">
        <h1 className="title">HEY THERE<span className="noFont"><div className="animatedWave">👋</div>!</span><br/>I<span className="noFont">'</span>M ESHWARA<span className="noFont">.</span></h1>
        <h3 className="subtitle">A hands-on creative with more than 16 years design experience.</h3>
        <p className="content">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
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

