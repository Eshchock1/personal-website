import React, { Component } from 'react'
import '../home.scss';
import ParallaxMousemove from 'react-parallax-mousemove'

const style={
    outter: {
        background: '#e20025',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width:'100%',
        position: 'relative',
        overflow: 'hidden',
        display:'flex',
      },
    infoLayerStyle1: {
        position: 'absolute',
      },
      infoLayerStyle2: {
        position: 'absolute',
      },
      infoLayerStyle3: {
        position: 'absolute',
      },
      infoLayerStyle4: {
        position: 'absolute',
      },
      infoLayerStyle5: {
        position: 'absolute',
        
      },
      bruh1:{
          position:'absolute',
          top:'400px',
          left:'200px',
      },
      bruh2:{
        position:'absolute',
        top:'500px',
        left:'865px'
      },
      bruh3:{
        position:'absolute',
        top:'900px',
        left:'1000px'
      },
      bruh4:{
        position:'absolute',
        top:'400px',
        left:'1500px'
      },
      bruh5:{
        position:'absolute',
        top:'800px',
        left:'1468px'
      },
      bruh6:{
        position:'absolute',
        top:'600px',
        left:'400px'
      }
} 
 

function Home() {
  return (
      <div>
                    <div className="container">

                  <ParallaxMousemove>
                  <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle1} config={{
                  xFactor: -0.04,
                  yFactor: 0.03,
                  springSettings: {
                    stiffness: 75,
                    damping: 5
                  }
                }}>
                <div className="breh">
                <h1>Eshwara</h1> 

                </div>
</ParallaxMousemove.Layer>
</ParallaxMousemove>
</div>
<div className="container2">
<ParallaxMousemove>

<div style={style.bruh3}>

<ParallaxMousemove.Layer layerStyle={style.infoLayerStyle3} config={{
    xFactor: 0.06,
    yFactor: -0.1,
    springSettings: {
      stiffness: 100,
      damping: 5
    }
  }}>
<div className="ball3"></div>
</ParallaxMousemove.Layer>
</div>
<div style={style.bruh4}>

<ParallaxMousemove.Layer layerStyle={style.infoLayerStyle4} config={{
    xFactor: 0.1,
    yFactor: -0.13,
    springSettings: {
      stiffness: 75,
      damping: 5
    }
  }}>
<div className="ball4"></div>
</ParallaxMousemove.Layer></div>
<div style={style.bruh1}>
  <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle1} config={{
                  xFactor: 0.1,
                  yFactor: -0.13,
                  springSettings: {
                    stiffness: 75,
                    damping: 5
                  }
                }}>
              <div className="ball1"></div>
              </ParallaxMousemove.Layer></div>

</ParallaxMousemove>
</div>
<div className="container3">

        <ParallaxMousemove>
            


              <div style={style.bruh6}>

<ParallaxMousemove.Layer layerStyle={style.infoLayerStyle5} config={{
    xFactor: -0.1,
    yFactor: 0.1,
    springSettings: {
      stiffness: 75,
      damping: 5
    }
  }}>
<div className="ball6"></div>
</ParallaxMousemove.Layer>
</div>

            
<div style={style.bruh2}>

<ParallaxMousemove.Layer layerStyle={style.infoLayerStyle2} config={{
    xFactor: -0.16,
    yFactor: 0.2,
    springSettings: {
      stiffness: 75,
      damping: 5
    }
  }}>
<div className="ball2"></div>
</ParallaxMousemove.Layer>
</div>
<div style={style.bruh5}>

<ParallaxMousemove.Layer layerStyle={style.infoLayerStyle5} config={{
    xFactor: -0.17,
    yFactor: 0.17,
    springSettings: {
      stiffness: 75,
      damping: 5
    }
  }}>
<div className="ball5"></div>
</ParallaxMousemove.Layer>
</div>

</ParallaxMousemove>
</div>

</div>
  );
}

export default Home;
