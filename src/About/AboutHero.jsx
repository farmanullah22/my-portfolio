import React from "react";
import "./AboutHero.css";


const Abouthero = () => {
  return (
    <div className="about-container">
        <div className="about-Hero">
            <div className="textHero">

             <h1 className="herotext">
                About Me__
             </h1>
             <p className="aboutpara">I am a passionate **Full Stack Developer** with expertise in **React.js, JavaScript, Node.js, and modern web technologies**. 
             I specialize in building scalable, high-performance applications with a focus on clean code and seamless user experience.</p>
            </div>
            <div className="aboutimagehero">
                <img src="/public/images/Abouthero.jpg" className="myaboutimg" alt="" />
            </div>
        </div>
      </div>
  );
};

export default Abouthero;
