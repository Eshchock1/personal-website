import React from "react";
import "../styles/home.scss";
import "../styles/about.scss";
import ParallaxMousemove from "react-parallax-mousemove";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="appContainer"
        id="about"
        style={{ justifyContent: "flex-start" }}
      >
        <div className="outerContainer">
          <div className="textContainer">
            <h1 className="title">
              HEY THERE
              <span className="noFont">
                <div className="animatedWave">👋</div>!
              </span>
              <br />I<span className="noFont">'</span>M ESHWARA
              <span className="noFont">.</span>
            </h1>
            <h3 className="subtitle">
              An 18 year old developer from Ottawa, Canada.
            </h3>
            <p className="content">
              I’m currently building{" "}
              <a
                target="_blank"
                style={{ color: "white", fontWeight: 500 }}
                href="https://www.useunify.app/"
              >
                useunify.app
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                style={{ color: "white", fontWeight: 500 }}
                href="https://monument.app/"
              >
                Monument.app
              </a>{" "}
              while pursuing a degree in computer science at the University of
              Toronto. I am always exploring enriching opportunities with
              pioneering technology I can implement to change the world. In the
              past, I’ve worked with{" "}
              <a
                target="_blank"
                style={{ color: "white", fontWeight: 500 }}
                href="https://bitswap.network/"
              >
                Bitswap
              </a>
              ,{" "}
              <a
                target="_blank"
                style={{ color: "white", fontWeight: 500 }}
                href="https://www.snapsmile.ai/"
              >
                SnapSmile
              </a>
              , and{" "}
              <a
                target="_blank"
                style={{ color: "white", fontWeight: 500 }}
                href="https://digitera.agency/"
              >
                Digitera.Interactive
              </a>
              . In my spare time, you might catch me playing badminton, coding,
              drawing, learning, and competing in hackathons. Feel free to take
              a look at some of my work on{" "}
              <a
                target="_blank"
                style={{ color: "white", fontWeight: 500 }}
                href="http://github.com/Eshchock1"
              >
                Github
              </a>{" "}
              or{" "}
              <a
                target="_blank"
                style={{ color: "white", fontWeight: 500 }}
                href="mailto:eshchock1@gmail.com"
              >
                shoot me a message
              </a>
            </p>
          </div>
          <div className="emojiContainer">
            <ParallaxMousemove>
              <ParallaxMousemove.Layer
                layerStyle={{
                  height: "100%",
                  width: "100%",
                  position: "relative",
                }}
                config={{
                  xFactor: -0.04 * 0.7,
                  yFactor: 0.03 * 0.7,
                  springSettings: {
                    stiffness: 50,
                    damping: 6,
                  },
                }}
              >
                <img className="emoji" src={require("../assets/emoji.png")} />
              </ParallaxMousemove.Layer>
            </ParallaxMousemove>
          </div>
        </div>
      </div>
    );
  }
}
