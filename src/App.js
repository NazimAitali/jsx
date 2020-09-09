import React from 'react';
import imgsrc from './imageInSrc.png';
import video from './myVideo.mp4';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <div className="content">  
        <h1 className="title red">CheckPoint JSX</h1>        
        <p><img src={imgsrc} alt="first"/></p>       
        <p><img src={process.env.PUBLIC_URL + '/img.png'} alt="second"/></p>  
      </div>        
      <video className="video" controls>  
        <source src={video} type="video/mp4"/> 
      </video> 
    </div>
  );
}
export default App;
