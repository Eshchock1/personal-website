import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './screens/home';
import About from './screens/about';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolio from './screens/portfolio';
import ScrollableContainer from "react-full-page-scroll";
import cursor from './cursor'
import "./home.scss";
import {Link} from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { FaLinkedinIn,FaInstagram, FaGithub, FaChevronLeft, FaArrowRight} from 'react-icons/fa';
import HamburgerMenu from 'react-hamburger-menu';

class App extends React.Component {
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

componentDidMount() {
  this.updateWindowDimensions();
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}
  constructor(props){
    super(props);
    this.myRef = React.createRef()  
    this.state = { width: 0, height: 0, open:false, menuClassList:'menu', currentSocial:'', ContactContainerClassList:'ContactContainer', loading:'loading',website:'websiteContainer'};
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render() {
  return (
<div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'100vw'}}>



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

<span id="cursor"></span>
<div class="links" data-aos-anchor="#name" data-aos='fade-down' data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="0">
        {/* <Link to="/">HOME</Link> */}
        {/* <Link to="/about">ABOUT</Link> */}
        <a onClick={()=> window.fullpage_api.moveTo(1)}>Intro</a>
        <a onClick={()=> window.fullpage_api.moveTo(2)}>Portfolio</a>
        <a onClick={() => this.setState({ ContactContainerClassList: "ContactContainer ContactContainerActive" })}>CONTACT</a>

    </div>
    <div className="mobileMenu" data-aos-anchor="#name" data-aos='fade-left' data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="0">
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
 <a onClick={()=> {window.fullpage_api.moveTo(1);this.setState({menuClassList: "menu",open: !this.state.open});}}>Intro</a>
 </li>

<li>
        <a onClick={()=> {window.fullpage_api.moveTo(2);this.setState({menuClassList: "menu",open: !this.state.open});}}>Portfolio</a> </li>
        <li>
<a href="mailto:eshchock1@gmail.com">CONTACT</a>
 </li>
 <li>
 <div class="mobileSocials">
 <h2><a href="https://www.linkedin.com/in/eshwar-chockalingam-b07bb11b2/"><FaLinkedinIn/></a></h2>
    <h2> <a href="http://github.com/Eshchock1"><FaGithub/></a></h2>
                        <h2><a href="https://www.instagram.com/eshwar_chockalingam/"><FaInstagram/></a></h2>
 </div>
 </li>
 </ul>
 
</div>
    <div class="socials" data-aos-anchor="#name" data-aos='fade-right' data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="0">
                <ul>
                <li>
                        <a href="https://www.linkedin.com/in/eshwar-chockalingam-b07bb11b2/"><FaLinkedinIn /></a>
                    </li>
                    <li>
                        <a href="http://github.com/Eshchock1"><FaGithub /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/eshwar_chockalingam/"><FaInstagram /></a>
                    </li>
                </ul>
            </div>

<ReactFullpage scrollingSpeed={1000}
dragAndMove={true}
loopBottom={true}
navigation={true}
navigationPosition= 'right'
render={({ state, fullpageApi }) => {
  return (
    <div>
    <ReactFullpage.Wrapper>
      <div className="section">
        
        <Home/>
        </div>
        {/* <div className="section">
          <About/>
          </div> */}
    <div className="section">
    <Portfolio/>
    </div>
      </ReactFullpage.Wrapper>
      </div>

  );
}} />
</div>

  );
  }
}

export default App;
