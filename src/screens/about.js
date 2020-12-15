import React from "react";
import "../home.scss";
import "../about.scss";


export default class About extends React.Component {    
constructor(props) {
  super(props);
  this.state = {};
}
  render() {
  
  return (
<div className="appContainer" id="work" style={{justifyContent:'flex-start'}}>
    <div style={{display:'flex',flexDirection:'row', width:'100%', height:'100%'}}>
      <div style={{display:'flex', flexDirection:'column', flex:0.5, height:'100%', alignItems:'flex-start', paddingLeft:"15%", justifyContent:'center', }}>
        <h1 style={{color:'white', fontSize:'4vw', fontFamily:'edition', margin:0}}>HEY THERE<span className="noFont">👋!</span><br/>I<span className="noFont">'</span>M ESHWARA<span className="noFont">.</span></h1>
        <h3 style={{color:'white', fontSize:'1.3vw', fontFamily:'Poppins', fontWeight:400, width:"80%", }}>A hands-on creative with more than 16 years design experience.</h3>
        <p style={{color:'white', fontSize:'1vw', fontFamily:'Poppins', fontWeight:300, width:"80%", marginTop:"-0.5vw", }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </div>
      <div style={{display:'flex', flexDirection:'column', flex:0.5, height:'100%', alignItems:'flex-start', justifyContent:'center', }}>
        <img style={{width:'40vw', height:'40vw', marginLeft:'-5vw'}} src={require('../emoji.png')}/>
      </div>
    </div>

</div>
    );
  }
}

